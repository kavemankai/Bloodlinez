// Two simulated testers play, their logs are exported, and scripts/analyse_playtests.py must report what they did.
const {chromium}=require('playwright-core'); const path=require('path'); const fs=require('fs'); const {execFileSync}=require('child_process');
const ROOT=path.resolve(__dirname,'..'), GAME='file://'+ROOT+'/index.html', OUT=path.join(ROOT,'tests','shots','playtests');
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 let fails=0; const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++};
 fs.rmSync(OUT,{recursive:true,force:true}); fs.mkdirSync(OUT,{recursive:true});
 async function tester(name,play){
  const p=await b.newPage(); await p.goto(GAME+'?playtest=1'); await p.evaluate(()=>{S.cookie=true;});
  await play(p); const log=await p.evaluate(()=>plogExport()); await p.close();
  fs.writeFileSync(path.join(OUT,`bloodlinez-playtest-${name}.json`),JSON.stringify(log)); return log;
 }
 const search=(p,name,kw)=>p.evaluate(([name,kw])=>{S.q={name,kw,kind:'All'};S.searched=true;plog('search',{name,kw,kind:'All',results:results().length});go('search','bl');},[name,kw]);
 const link=(p,a,t,b2,rec)=>p.evaluate(([a,t,b2,rec])=>{const r=tryLink(a,t,b2,rec);plog('link',{a,rel:t,b:b2,rec,ok:r.ok,status:r.status||null,partial:r.link?linkPartial(r.link):false});},[a,t,b2,rec]);
 const warp=(p,min)=>p.evaluate(min=>{ if(!window.__real){ window.__real=Date.now; window.__off=0; Date.now=()=>window.__real()+window.__off; } window.__off+=min*60000; },min);
 const file=(p)=>p.evaluate(()=>{FIND.forEach(f=>S.ans[f.id]=S.ans[f.id]||f.opts[0][0]);judge();});
 // tester A: joint proof done right, a long stall, two filings
 await tester('alice',async p=>{
  await search(p,'Thomas Holloway',''); await p.evaluate(()=>go('record/birth1920','bl'));
  await link(p,'harriet','parent','thomas','birth1920');
  await warp(p,12);
  await p.evaluate(()=>go('record/photo1912','bl')); await link(p,'harriet','parent','thomas','photo1912');
  await search(p,'Zebedee Quux',''); await file(p); await warp(p,1); await file(p);
 });
 // tester B: finds the licence by keyword, makes a wrong link, uses the planted hint
 await tester('bob',async p=>{
  await search(p,'Cornelius Vane',''); await search(p,'','licence'); await p.evaluate(()=>go('record/licence1972','bl'));
  await link(p,'ambrose','spouse','cornelius','birth1934');
  await p.evaluate(()=>togglePin('hintOfficial')); await file(p);
 });
 const rep=execFileSync('python3',[path.join(ROOT,'scripts','analyse_playtests.py'),OUT]).toString();
 fs.writeFileSync(path.join(OUT,'report.md'),rep);
 const sec=h=>{ const i=rep.indexOf('## '+h); const j=rep.indexOf('\n## ',i+3); return i<0?'':rep.slice(i,j<0?undefined:j); };
 ok(/2 logs/.test(rep),'the report reads both logs');
 ok(/\| alice \|/.test(sec('Testers'))&&/\| bob \|/.test(sec('Testers')),'each tester gets a row');
 ok(/\| alice \| [\d.]+ \| 12\.0 \|/.test(sec('Stalls')),'alice\'s 12-minute stall is reported');
 ok(/linked harriet parent thomas \(partly proven\) \| reading Wedding portrait/.test(sec('Stalls')),'the stall says what she did before and after');
 ok(!/\| alice \| [\d.]+ \| 1\.0 \|/.test(sec('Stalls')),'a one-minute gap is not a stall');
 ok(/1 of 2 opened it/.test(sec('The 1972 licence'))&&/\| bob \|.*licence/.test(sec('The 1972 licence')),'bob found the licence via the "licence" search');
 ok(/\| alice \| 1 \| 1 \| - \|/.test(sec('Joint proof')),'alice completed her joint proof');
 ok(/ambrose spouse cornelius/.test(sec('Wrong links')),'bob\'s wrong link is listed');
 ok(/zebedee quux/.test(sec('Searches that found nothing')),'an empty search is listed');
 ok(/\| bob \|.*\| yes \|/.test(sec('Testers')),'bob used the planted hint');
 ok(/Never opened by anyone \(\d+\)/.test(sec('Records'))&&/Inquest|inquest/.test(sec('Records')),'records nobody opened are listed by title');
 ok(!/hidden|DNA kit report/.test(sec('Records').split('Never opened')[1]||''),'hidden records are left out of "never opened"');
 console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
