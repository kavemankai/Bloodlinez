// Law flags ask rather than answer, and the opt-in playtest log records a session and exports it.
const {chromium}=require('playwright-core'); const path=require('path');
const GAME='file://'+path.resolve(__dirname,'..')+'/index.html';
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 const ctx=await b.newContext({acceptDownloads:true,viewport:{width:1300,height:1000}}); const p=await ctx.newPage(); const errs=[]; let fails=0;
 p.on('pageerror',e=>errs.push(e.message)); const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++};
 const ev=(f,a)=>p.evaluate(f,a); const fresh=()=>ev(()=>{localStorage.clear();Object.assign(S,FRESH());S.cookie=true;render()});
 await p.goto(GAME); await fresh();
 // 1. flags ask, they do not answer
 const turningFlags=()=>ev(()=>{refreshLayout();return FLAGS.filter(f=>/attack on/.test(f.text)).map(f=>({sev:f.sev,text:f.text}));});
 await ev(()=>{ revealAllTree(); S.pins=S.pins.filter(x=>x!=='lawA3'); });
 let F=await turningFlags();
 ok(F.length>0,'the turning raises flags once it is in the tree ('+F.length+')');
 ok(F.every(f=>f.sev==='note'&&/Does that matter\?$/.test(f.text)),'before Article 3 is cited, each flag is a question: "'+(F.find(f=>/Daphne/.test(f.text))||F[0]).text+'"');
 const banned=/Art(icle|\.) ?3|cannot be his issue|issue of the blood|begotten|forty weeks/;
 ok(F.every(f=>!banned.test(f.text)),'before citing, no flag names the article or its rule');
 await ev(()=>{ if(!pinned('lawA3')) S.pins.push('lawA3'); });
 F=await turningFlags();
 ok(F.every(f=>f.sev==='law'&&/Article 3 of the Accord bears on this\.$/.test(f.text)),'after citing, the flag points at Article 3');
 ok(F.every(f=>!/cannot be his issue|issue of the blood|begotten/.test(f.text)),'even after citing, no flag states the conclusion');
 ok(await ev(()=>{ const l=linkOf('parent','ambrose','harriet'); return LSTAT[l.id].worst==='law' && !edgeStyle('parent',['ambrose'],'harriet').includes('bad'); }),'a law flag does not paint the line as wrong');
 // 2. the playtest log is off unless asked for
 await fresh(); await ev(()=>{ go('search','bl'); tryLink('ambrose','parent','cornelius','birth1934'); });
 ok(await ev(()=>!S.flags.plog&&S.plog.length===0),'with the log off, nothing is recorded');
 await p.goto(GAME+'?playtest=1'); await p.waitForTimeout(150);
 ok(await ev(()=>S.flags.plog&&S.plog.length===1&&S.plog[0].type==='start'),'?playtest=1 turns the log on');
 await ev(()=>{S.cookie=true;go('search','bl')}); await p.fill('#sname','Thomas Holloway'); await p.click('form[data-form=search] button.bbtn');
 await ev(()=>go('record/birth1920','bl'));
 await p.selectOption('form[data-form=link] [data-lk=a]','harriet'); await p.selectOption('form[data-form=link] [data-lk=t]','parent'); await p.selectOption('form[data-form=link] [data-lk=b]','thomas');
 await p.click('form[data-form=link] button'); await p.waitForTimeout(150);
 await ev(()=>{ togglePin('birth1920'); S.tree.events.push({p:'ambrose',k:'turned',date:'1888-02-14',rec:'hospital1888'}); tryLink('ambrose','parent','harriet','birth1888'); refreshLayout(); FIND.forEach(f=>S.ans[f.id]=f.opts[0][0]); go('matter/ruling','net'); });
 await p.click('form[data-form=rule] button.nbtn'); await p.waitForTimeout(150);
 const L=await ev(()=>S.plog);
 const has=(type,pred)=>L.some(e=>e.type===type&&(!pred||pred(e)));
 ok(has('search',e=>e.name==='Thomas Holloway'&&e.results>=2),'a search is logged with its result count');
 ok(has('view',e=>e.route==='record/birth1920'),'opening a record is logged');
 ok(has('link',e=>e.a==='harriet'&&e.rel==='parent'&&e.b==='thomas'&&e.partial===true&&e.status==='unproven'),'a link is logged with its relation and status (partly proven)');
 ok(L.every(e=>typeof e.t==='number'),'every event keeps a numeric timestamp (no field overwrites it)');
 ok(has('pin',e=>e.id==='birth1920'),'saving evidence is logged');
 ok(has('flag'),'flags shown are logged');
 ok(has('filing',e=>e.attempt===1&&typeof e.accepted==='number'),'a filing is logged with what was accepted');
 const bad=L.findIndex((e,i)=>i>0&&e.t<L[i-1].t); if(bad>0) console.log(JSON.stringify(L.slice(bad-2,bad+1)));
 ok(bad<0,'events are in time order');
 // export
 await ev(()=>go('matter/overview','net'));
 ok(await p.locator('text=Playtest log').count()>0,'the matter overview shows the playtest log box');
 const [dl]=await Promise.all([p.waitForEvent('download'),p.click('[data-a=plog][data-v=export]')]);
 const fs=require('fs'); const file=await dl.path(); const J=JSON.parse(fs.readFileSync(file,'utf8'));
 ok(/^bloodlinez-playtest-.*\.json$/.test(dl.suggestedFilename()),'the log saves as a JSON file: '+dl.suggestedFilename());
 ok(J.summary&&J.summary.searches>=1&&J.summary.linksTried>=1&&J.summary.filings.length===1&&Array.isArray(J.events)&&J.tree.links.length>=1,'the file holds a summary, the tree and every event');
 // survives reload and replay
 await p.reload(); await p.waitForTimeout(150); const n=await ev(()=>S.plog.length);
 ok(n>=L.length,'the log survives a reload');
 await ev(()=>{ document.querySelector('#vp').insertAdjacentHTML('beforeend','<button id="rs" data-a="reset"></button>'); }); await ev(()=>document.getElementById('rs').click());
 ok(await ev(n=>S.flags.plog&&S.plog.length>n&&S.plog[S.plog.length-1].type==='replay',n),'replaying the case keeps the log and marks the replay');
 await p.click('[data-a=plog][data-v=off]').catch(async()=>{ await ev(()=>go('matter/overview','net')); await p.click('[data-a=plog][data-v=off]'); });
 const m=await ev(()=>S.plog.length); await ev(()=>go('search','bl')); ok(await ev(m=>!S.flags.plog&&S.plog.length===m,m),'stopping the log stops recording');
 console.log('page errors:',errs.length?errs:'none'); console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
