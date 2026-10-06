// The player builds the tree from records: start state, link validation, discovery, and record/claim consistency.
const {chromium}=require('playwright-core'); const path=require('path');
const GAME='file://'+path.resolve(__dirname,'..')+'/index.html';
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 const p=await b.newPage({viewport:{width:1300,height:1100}}); const errs=[]; let fails=0;
 p.on('pageerror',e=>errs.push(e.message)); const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++};
 await p.goto(GAME); const fresh=()=>p.evaluate(()=>{localStorage.clear();Object.assign(S,FRESH());S.cookie=true;render()}); await fresh();
 const ev=f=>p.evaluate(f);
 // 1. start state
 await ev(()=>go('tree','bl')); await p.waitForTimeout(200);
 ok(await ev(()=>S.tree.people.length===4&&S.tree.links.length===0),'tree starts with the four names and no links');
 ok(await ev(()=>document.querySelectorAll('.tnode').length===4&&document.querySelector('.treehint')!==null),'tree page shows four loose cards and a prompt');
 // 2. any link is accepted; the record decides solid or unproven
 let r=await ev(()=>tryLink('ambrose','spouse','cornelius','birth1888')); ok(r.ok&&r.status==='unproven','a link the record does not show is accepted but unproven');
 r=await ev(()=>tryLink('ambrose','parent','harriet','birth1857')); ok(r.ok&&r.status==='unproven','a link backed by the wrong record is unproven');
 await fresh();
 r=await ev(()=>tryLink('ambrose','parent','harriet','birth1888')); ok(r.ok&&r.status==='proven','Ambrose parent of Harriet from her 1888 birth is proven');
 ok(await ev(()=>{refreshLayout();return S.tree.people.includes('ambrose')&&S.tree.people.includes('harriet')&&!!LAY.pos.harriet;}),'Ambrose and Harriet join the tree');
 r=await ev(()=>tryLink('ambrose','adopt','desmond','deedpoll1907')); ok(r.ok&&r.status==='proven','Ambrose adopting his stepson Desmond is proven by the 1907 deed poll');
 r=await ev(()=>tryLink('ambrose','parent','desmond','deedpoll1907')); ok(r.ok&&r.status==='unproven','the deed poll does not prove Ambrose is Desmond\'s father');
 r=await ev(()=>tryLink('ambrose','parent','harriet','birth1888')); ok(!r.ok,'adding the same link again is refused');
 r=await ev(()=>tryLink('ambrose','parent','ambrose','birth1888')); ok(!r.ok,'linking a person to themselves is refused');
 // 2b. flags
 await fresh(); await ev(()=>{tryLink('desmond','parent','ambrose','birth1888');tryLink('ambrose','took','desmond','trust1934');refreshLayout()});
 ok(await ev(()=>FLAGS.some(f=>f.sev==='impossible')),'saying Desmond (born 1903) is Ambrose\'s parent flags an impossible date');
 ok(await ev(()=>LSTAT[S.tree.links.find(l=>l.t==='took').id].status==='unproven'),'a took-the-identity link without a certified report is unproven');
 await fresh(); await ev(()=>{tryLink('daphne','parent','cornelius','letterDaphne');refreshLayout()});
 ok(await ev(()=>FLAGS.some(f=>/older|born|age|before/i.test(f.text))||FLAGS.length>0),'an odd parent link raises a flag');
 await fresh(); await ev(()=>{tryLink('cornelius','parent','ambrose','birth1888');tryLink('ambrose','parent','cornelius','birth1888');refreshLayout()});
 ok(await ev(()=>FLAGS.some(f=>/own ancestor/.test(f.text))),'two people as each other\'s parent is a loop');
 await ev(()=>{const l=S.tree.links[0];removeLink(l.id);refreshLayout()}); ok(await ev(()=>S.tree.links.length===1),'a link can be removed');
 // 2c. findings need the tree
 await fresh(); ok(await ev(()=>!treeOk('F1')&&!treeOk('F5')),'with an empty tree no finding passes the tree check');
 await ev(()=>revealAllTree()); ok(await ev(()=>['F1','F2','F3','F4','F5'].every(treeOk)),'the fully built tree passes every tree check');
 await ev(()=>{const l=S.tree.links.find(l=>l.t==='took');removeLink(l.id);refreshLayout()}); ok(await ev(()=>!treeOk('F1')),'removing an identity link fails Finding 1');
 // 2d. the ruling form does not give the answers away
 await fresh(); await ev(()=>{go('matter/ruling','net');render()});
 const leaks=await ev(()=>{ const T=document.body.innerText; return ['F1','F2','F3','F4','F5'].flatMap(f=>treeChecks(f).map(x=>x.text)).filter(t=>T.includes(t)); });
 ok(leaks.length===0,'before filing, the ruling form names no tree requirement'+(leaks.length?': '+leaks[0]:''));
 ok(await ev(()=>document.body.textContent.includes('Your tree:')),'the ruling form shows a neutral tree summary');
 // 2e. F2, F3 and F4 no longer lean on the identity links
 await ev(()=>{revealAllTree(); S.tree.links=S.tree.links.filter(l=>l.t!=='took'); refreshLayout()});
 ok(await ev(()=>treeOk('F2')&&treeOk('F4')&&treeOk('F5')&&!treeOk('F1')&&!treeOk('F3')),'without the identity links, F2, F4 and F5 still pass their tree checks; F1 and F3 do not');
 r=await ev(()=>tryEvent('cornelius','nobody','birth1888')); ok(!r.ok,'a statement the record does not make is refused');
 // events: each record offers only its own plain statements, never a menu of conclusions
 ok(await ev(()=>{go('record/birth1888','bl');render();return !document.querySelector('form[data-form=event]')}),'a record that states no event shows no event form');
 const evOpts=await ev(()=>{go('record/hospital1888','bl');render();return [...document.querySelectorAll('form[data-form=event] [data-ev=k] option')].map(o=>o.textContent);});
 ok(evOpts.length===1&&/attacked on the wharf/.test(evOpts[0]),'the hospital register offers only its own statement: "'+evOpts[0]+'"');
 const allSays=await ev(()=>Object.values(EVENT_DEFS).flat().map(d=>d.say).join(' | '));
 ok(!/turned|another man|buried under|vampire|staged|took the identity/i.test(allSays),'no event wording states a conclusion');
 await fresh(); r=await ev(()=>tryEvent('ambrose','turned','hospital1888')); ok(r.st==='proven','the attack recorded against Ambrose, whom the register names, is proven');
 r=await ev(()=>tryEvent('cornelius','turned','news1888')); ok(r.ok&&r.st==='unproven','the attack recorded against someone else is kept but unproven');
 r=await ev(()=>tryEvent('ambrose','misid','inquest1934')); ok(r.ok&&r.st==='reading'&&!/not|wrong|unproven/i.test(r.msg),'naming whose remains were in the fire gets no verdict, even when wrong');
 r=await ev(()=>tryEvent('desmond','misid','inquest1934')); ok(r.ok&&r.st==='reading','the right answer gets the same neutral reply');
 ok(await ev(()=>hasEvent('desmond','misid')&&!hasEvent('cornelius','turned')),'only proven statements and readings count toward findings');
 await fresh(); await ev(()=>{S.pins=['birth1888']; FIND.forEach(f=>{S.ans[f.id]=f.opts.find(o=>o[0]!==f.ans)[0];S.ev[f.id]=['birth1888']});go('matter/ruling','net');render()}); await p.click('form[data-form=rule] button.nbtn'); await p.waitForTimeout(150);
 ok(await p.locator('ul.tchk li').count()===0,'after one failed filing, the tree requirements stay hidden');
 await p.click('form[data-form=rule] button.nbtn'); await p.waitForTimeout(150);
 ok(await p.locator('ul.tchk li').count()===0,'the second filing does not expose the required solution graph');
 // 2f. joint proof: the Harriet line needs records joined
 await fresh();
 r=await ev(()=>tryLink('harriet','parent','thomas','birth1920')); ok(r.ok&&r.status==='unproven'&&/does not prove it alone/.test(r.msg),'Thomas\'s birth alone only partly proves Harriet is his mother');
 ok(await ev(()=>linkPartial(S.tree.links[0])),'the link is marked partly proven');
 r=await ev(()=>tryLink('harriet','parent','thomas','photo1912')); ok(r.ok&&r.status==='proven','adding the 1912 wedding completes the proof');
 r=await ev(()=>tryLink('thomas','parent','margaret','birth1951')); ok(r.status==='unproven','Margaret\'s birth alone does not prove which Thomas is her father');
 r=await ev(()=>tryLink('thomas','parent','margaret','marr1948')); ok(r.status==='proven','the 1948 marriage (clerk, son of Arthur, bride Joan Ames) completes it');
 r=await ev(()=>tryLink('thomas','parent','margaret','birth1921d')); ok(await ev(()=>LSTAT[S.tree.links.find(l=>l.a==='thomas'&&l.b==='margaret').id].status==='proven'),'attaching the decoy record does not break a proven link');
 await fresh(); r=await ev(()=>tryLink('harriet','parent','thomas','birth1921d')); ok(r.status==='unproven'&&!(await ev(()=>linkPartial(S.tree.links[0]))),'the Fish Street Thomas does not even partly prove it');
 ok(await ev(()=>{S.q={name:'Thomas Holloway',kw:'',kind:'All'};const R=results();return R.includes('birth1920')&&R.includes('birth1921d');}),'searching Thomas Holloway finds two of them');
 ok(await ev(()=>!peopleIn('marr1948').includes('margaret')&&!peopleIn('birth1920').includes('ambrose')),'a record only offers the people it names');
 ok(await ev(()=>{const d=document.createElement('div');d.innerHTML=REC.birth1920.render();return !/Vane/.test(d.textContent)}),'Thomas\'s birth no longer gives his mother\'s maiden name');
 // 3. discovery is gated
 await fresh(); await ev(()=>tryLink('ambrose','parent','harriet','birth1888'));
 ok(await ev(()=>knownRecs('ambrose').length===0),'Ambrose has no sources until a record naming him is opened');
 await ev(()=>go('record/birth1888','bl')); ok(await ev(()=>knownRecs('ambrose').includes('birth1888')),'opening the record adds it as his source');
 ok(await ev(()=>visibleHints().length===4),'hints appear only for people in the tree (Julian\'s, then Ambrose\'s two and Harriet\'s)');
 await fresh(); ok(await ev(()=>visibleHints().length===1),'only Julian\'s hint at the start');
 await ev(()=>go('person/ambrose/facts','bl')); ok((await p.textContent('#vp')).includes('Not in your tree'),'a person not yet in the tree shows "Not in your tree"');
 // 4. the real form
 await fresh(); await ev(()=>go('record/birth1888','bl'));
 const sel=async(k,v)=>p.selectOption('form[data-form=link] [data-lk='+k+']',v);
 await sel('a','ambrose'); await sel('t','parent'); await sel('b','harriet');
 await p.click('form[data-form=link] button'); await p.waitForTimeout(200);
 ok(await ev(()=>S.tree.links.length===1&&S.tree.links[0].a==='ambrose'),'the Build your tree form adds the link');
 await sel('a','harriet'); await sel('t','spouse'); await sel('b','ambrose');
 await p.click('form[data-form=link] button'); await p.waitForTimeout(200);
 ok(await ev(()=>S.tree.links.length===2&&LSTAT[S.tree.links[1].id].status==='unproven'),'a wrong choice in the form is added as unproven');
 // 4b. Daphne's letter opens in a pop-up and still takes a claimed link
 await fresh(); await ev(()=>{go('home','bl');showPreview('letterDaphne')});
 ok(await p.locator('#modal form[data-form=link]').count()===1,'a letter opened from the mail shows the Build your tree form');
 const ms=(k,v)=>p.selectOption('#modal form[data-form=link] [data-lk='+k+']',v); await ms('a','cornelius'); await ms('t','claimed'); await ms('b','daphne');
 await p.click('#modal form[data-form=link] button'); await p.waitForTimeout(200);
 ok(await ev(()=>S.tree.links.some(l=>l.t==='claimed'&&l.a==='cornelius'&&l.b==='daphne')),'Daphne\'s claim goes in as a dashed, claimed link');
 // 5. claim table matches the world
 const audit=await ev(()=>{
   const truth=new Set(), claimed=new Set();
   Object.keys(REL).forEach(i=>REL[i].forEach(([r,o])=>{ if(r==='Father'||r==='Mother') truth.add('parent:'+o+'>'+i); else if(r==='Child') truth.add('parent:'+i+'>'+o); else if(r==='Spouse') truth.add('spouse:'+[i,o].sort().join('+')); else if(r==='Claimed father') truth.add('claimed:'+o+'>'+i); else if(r==='Adoptive father'||r==='Adoptive mother') truth.add('adopt:'+o+'>'+i); else if(r==='Adopted child') truth.add('adopt:'+i+'>'+o); }));
   CLAIMS.forEach(c=>claimed.add(c.t==='spouse'?'spouse:'+[c.a,c.b].sort().join('+'):c.t+':'+c.a+'>'+c.b));
   const missing=[...truth].filter(x=>!claimed.has(x)), extra=[...claimed].filter(x=>!truth.has(x));
   // does each record's text name both people?
   const bad=[]; const txt=id=>{const d=document.createElement('div');d.innerHTML=REC[id].render();return d.textContent.replace(/\s+/g,' ')};
   const named=(id,pid)=>{const n=PEOPLE[pid].name.replace(/\s*\(.*\)/,''); const first=n.split(' ')[0]; const T=txt(id).toLowerCase(); return T.includes(first.toLowerCase())||T.includes((first[0]+'. '+n.split(' ').slice(-1)[0]).toLowerCase()); };
   CLAIMS.forEach(c=>c.proofs.forEach(set=>{ set.forEach(r=>{ if(!REC[r]) bad.push('no record '+r); else if(!named(r,c.a)&&!named(r,c.b)) bad.push(r+' names neither '+c.a+' nor '+c.b); });
     if(set.every(r=>REC[r])) [c.a,c.b].forEach(x=>{ if(!set.some(r=>named(r,x))) bad.push(set.join('+')+' does not name '+x); }); }));
   return {missing,extra,bad,n:CLAIMS.length};});
 ok(audit.missing.length===0,'every relationship in the data has a record that proves it'+(audit.missing.length?': '+audit.missing:''));
 ok(audit.extra.length===0,'no record claims a relationship that is not in the data'+(audit.extra.length?': '+audit.extra:''));
 ok(audit.bad.length===0,'every record behind a link actually names both people ('+audit.n+' links checked)'+(audit.bad.length?': '+audit.bad.slice(0,6):''));
 // 6. a player can walk the whole tree
 await fresh(); const walk=await ev(()=>{ let added=0; CLAIMS.forEach(c=>{ c.proofs[0].forEach(r=>{ if(tryLink(c.a,c.t,c.b,r).ok) added++; }); }); return {added,people:S.tree.people.length,links:S.tree.links.length,n:CLAIMS.length}; });
 const NP=await ev(()=>Object.keys(PEOPLE).length);
 ok(walk.people===NP&&walk.links===walk.n&&(await ev(()=>{refreshLayout();return S.tree.links.every(l=>LSTAT[l.id].status==='proven')})),'following the records links all '+NP+' people ('+walk.links+' links)');
 await ev(()=>{refreshLayout()}); ok(await ev(()=>{const L=LAY,NW=TREE.w;const ids=Object.keys(L.pos);for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++){const a=L.pos[ids[i]],c=L.pos[ids[j]];if(Math.abs(a[0]-c[0])<NW+20&&Math.abs(a[1]-c[1])<TREE.h+10)return false;}return true;}),'the player-built tree lays out with no overlaps');
 // 6b. only the search box: can the whole tree be reached starting from the four names?
 await fresh(); const crawl=await ev(()=>{ let rounds=0, changed=true; while(changed&&rounds<60){ changed=false; rounds++; [...S.tree.people].forEach(id=>{ const nm=PEOPLE[id].name.replace(/\s*\(.*\)/,'').split(' ').filter(w=>w.length>2); S.q={name:nm.join(' '),kw:'',kind:'All'}; results().forEach(rid=>{ CLAIMS.forEach(c=>{ if(c.recs.includes(rid)&&(S.tree.people.includes(c.a)||S.tree.people.includes(c.b))){ if(tryLink(c.a,c.t,c.b,rid).ok) changed=true; } }); }); }); } return {people:S.tree.people.length,rounds,missing:Object.keys(PEOPLE).filter(i=>!S.tree.people.includes(i))}; });
 ok(crawl.people===NP,'searching names alone, the whole tree can be reached from the four starting names ('+crawl.rounds+' rounds)'+(crawl.missing.length?'; unreachable: '+crawl.missing:''));
 // 7. the planted hint
 await fresh(); await ev(()=>{go('hints','bl');togglePin('hintOfficial')});
 ok(await ev(()=>S.tree.links.some(l=>l.t==='claimed'&&l.recs.includes('hintOfficial'))),'accepting the member-tree hint adds an unproven dashed link');
 await ev(()=>togglePin('hintOfficial')); ok(await ev(()=>!S.tree.links.some(l=>l.recs.includes('hintOfficial'))),'removing the hint removes the link');
 // 8. saves
 await fresh(); await ev(()=>{tryLink('ambrose','parent','harriet','birth1888');save()}); await p.reload(); await p.waitForTimeout(200);
 ok(await ev(()=>S.tree.links.length===1&&S.tree.people.includes('ambrose')),'the tree you built survives a reload');
 console.log('page errors:',errs.length?errs:'none'); process.exitCode=fails?1:0; console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
