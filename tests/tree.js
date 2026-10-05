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
 // 2. wrong and right links
 let r=await ev(()=>tryLink('ambrose','spouse','cornelius','birth1934')); ok(!r.ok,'a link the record does not show is refused: "'+r.msg+'"');
 r=await ev(()=>tryLink('ambrose','parent','cornelius','birth1857')); ok(!r.ok,'a link backed by the wrong record is refused');
 r=await ev(()=>tryLink('ambrose','parent','cornelius','birth1934')); ok(r.ok,'Ambrose parent of Cornelius from the 1934 birth is accepted');
 ok(await ev(()=>{refreshLayout();return S.tree.people.includes('ambrose')&&Object.keys(GH).includes('unknown');}),'Ambrose joins the tree, with the unnamed mother as a placeholder');
 r=await ev(()=>tryLink('ambrose','parent','cornelius','birth1934')); ok(!r.ok,'adding the same link again is refused');
 // 3. discovery is gated
 await fresh(); await ev(()=>tryLink('ambrose','parent','cornelius','birth1934'));
 ok(await ev(()=>knownRecs('ambrose').length===0),'Ambrose has no sources until a record naming him is opened');
 await ev(()=>go('record/birth1934','bl')); ok(await ev(()=>knownRecs('ambrose').includes('birth1934')),'opening the record adds it as his source');
 ok(await ev(()=>visibleHints().length===3),'hints appear only for people in the tree (Julian\'s, then Ambrose\'s two)');
 await fresh(); ok(await ev(()=>visibleHints().length===1),'only Julian\'s hint at the start');
 await ev(()=>go('person/ambrose/facts','bl')); ok((await p.textContent('#vp')).includes('Not in your tree'),'a person not yet in the tree shows "Not in your tree"');
 // 4. the real form
 await fresh(); await ev(()=>go('record/birth1934','bl'));
 await p.selectOption('#lk-a-birth1934','ambrose'); await p.selectOption('#lk-t-birth1934','parent'); await p.selectOption('#lk-b-birth1934','cornelius');
 await p.click('form[data-form=link] button'); await p.waitForTimeout(200);
 ok(await ev(()=>S.tree.links.length===1&&S.tree.links[0].a==='ambrose'),'the Build your tree form adds the link');
 await p.selectOption('#lk-a-birth1934','cornelius'); await p.selectOption('#lk-t-birth1934','spouse'); await p.selectOption('#lk-b-birth1934','ambrose');
 await p.click('form[data-form=link] button'); await p.waitForTimeout(200);
 ok(await ev(()=>S.tree.links.length===1),'a wrong choice in the form adds nothing');
 // 4b. Daphne's letter opens in a pop-up and still takes a claimed link
 await fresh(); await ev(()=>{go('home','bl');showPreview('letterDaphne')});
 ok(await p.locator('#modal form[data-form=link]').count()===1,'a letter opened from the mail shows the Build your tree form');
 await p.selectOption('#lk-a-letterDaphne','cornelius'); await p.selectOption('#lk-t-letterDaphne','claimed'); await p.selectOption('#lk-b-letterDaphne','daphne');
 await p.click('#modal form[data-form=link] button'); await p.waitForTimeout(200);
 ok(await ev(()=>S.tree.links.some(l=>l.t==='claimed'&&l.a==='cornelius'&&l.b==='daphne')),'Daphne\'s claim goes in as a dashed, claimed link');
 // 5. claim table matches the world
 const audit=await ev(()=>{
   const truth=new Set(), claimed=new Set();
   Object.keys(REL).forEach(i=>REL[i].forEach(([r,o])=>{ if(r==='Father'||r==='Mother') truth.add('parent:'+o+'>'+i); else if(r==='Child') truth.add('parent:'+i+'>'+o); else if(r==='Spouse') truth.add('spouse:'+[i,o].sort().join('+')); else if(r==='Claimed father') truth.add('claimed:'+o+'>'+i); }));
   CLAIMS.forEach(c=>claimed.add(c.t==='spouse'?'spouse:'+[c.a,c.b].sort().join('+'):c.t+':'+c.a+'>'+c.b));
   const missing=[...truth].filter(x=>!claimed.has(x)), extra=[...claimed].filter(x=>!truth.has(x));
   // does each record's text name both people?
   const bad=[]; const txt=id=>{const d=document.createElement('div');d.innerHTML=REC[id].render();return d.textContent.replace(/\s+/g,' ')};
   const named=(id,pid)=>{const n=PEOPLE[pid].name.replace(/\s*\(.*\)/,''); const first=n.split(' ')[0]; const T=txt(id); return T.includes(first)||T.includes(first[0]+'. '+n.split(' ').slice(-1)[0]); };
   CLAIMS.forEach(c=>c.recs.forEach(r=>{ if(!REC[r]) bad.push('no record '+r); else [c.a,c.b].forEach(x=>{ if(!named(r,x)) bad.push(r+' does not name '+x); }); }));
   return {missing,extra,bad,n:CLAIMS.length};});
 ok(audit.missing.length===0,'every relationship in the data has a record that proves it'+(audit.missing.length?': '+audit.missing:''));
 ok(audit.extra.length===0,'no record claims a relationship that is not in the data'+(audit.extra.length?': '+audit.extra:''));
 ok(audit.bad.length===0,'every record behind a link actually names both people ('+audit.n+' links checked)'+(audit.bad.length?': '+audit.bad.slice(0,6):''));
 // 6. a player can walk the whole tree
 await fresh(); const walk=await ev(()=>{ let added=0; CLAIMS.forEach(c=>{ if(tryLink(c.a,c.t,c.b,c.recs[0]).ok) added++; }); return {added,people:S.tree.people.length,links:S.tree.links.length,n:CLAIMS.length}; });
 ok(walk.people===26&&walk.links===walk.n,'following the records links all 26 people ('+walk.links+' links)');
 await ev(()=>{refreshLayout()}); ok(await ev(()=>{const L=LAY,NW=TREE.w;const ids=Object.keys(L.pos);for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++){const a=L.pos[ids[i]],c=L.pos[ids[j]];if(Math.abs(a[0]-c[0])<NW+20&&Math.abs(a[1]-c[1])<TREE.h+10)return false;}return true;}),'the player-built tree lays out with no overlaps');
 // 6b. only the search box: can the whole tree be reached starting from the four names?
 await fresh(); const crawl=await ev(()=>{ let rounds=0, changed=true; while(changed&&rounds<60){ changed=false; rounds++; [...S.tree.people].forEach(id=>{ const nm=PEOPLE[id].name.replace(/\s*\(.*\)/,'').split(' ').filter(w=>w.length>2); S.q={name:nm.join(' '),kw:'',kind:'All'}; results().forEach(rid=>{ CLAIMS.forEach(c=>{ if(c.recs.includes(rid)&&(S.tree.people.includes(c.a)||S.tree.people.includes(c.b))){ if(tryLink(c.a,c.t,c.b,rid).ok) changed=true; } }); }); }); } return {people:S.tree.people.length,rounds,missing:Object.keys(PEOPLE).filter(i=>!S.tree.people.includes(i))}; });
 ok(crawl.people===26,'searching names alone, the whole tree can be reached from the four starting names ('+crawl.rounds+' rounds)'+(crawl.missing.length?'; unreachable: '+crawl.missing:''));
 // 7. the planted hint
 await fresh(); await ev(()=>{go('hints','bl');togglePin('hintOfficial')});
 ok(await ev(()=>S.tree.links.some(l=>l.t==='claimed'&&l.recs.includes('hintOfficial'))),'accepting the member-tree hint adds an unproven dashed link');
 await ev(()=>togglePin('hintOfficial')); ok(await ev(()=>!S.tree.links.some(l=>l.recs.includes('hintOfficial'))),'removing the hint removes the link');
 // 8. saves
 await fresh(); await ev(()=>{tryLink('ambrose','parent','cornelius','birth1934');save()}); await p.reload(); await p.waitForTimeout(200);
 ok(await ev(()=>S.tree.links.length===1&&S.tree.people.includes('ambrose')),'the tree you built survives a reload');
 console.log('page errors:',errs.length?errs:'none'); console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
