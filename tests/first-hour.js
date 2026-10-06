// First-hour UI, evidence fairness, save recovery and keyboard access.
const {chromium}=require('playwright-core'),path=require('path'),fs=require('fs');
const GAME='file://'+path.resolve(__dirname,'..')+'/index.html';
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 let fails=0;const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m);if(!c)fails++;};
 const p=await b.newPage({viewport:{width:1366,height:900},acceptDownloads:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.route('https://fonts.googleapis.com/**',r=>r.abort());
 const ev=f=>p.evaluate(f),fresh=async()=>{await ev(()=>{localStorage.clear();Object.assign(S,FRESH());render()});};
 await p.goto(GAME+'?playtest=1',{waitUntil:'domcontentloaded',timeout:15000});
 fs.mkdirSync(path.join(__dirname,'shots','first-hour'),{recursive:true});
 const shot=name=>p.screenshot({timeout:15000,path:path.join(__dirname,'shots','first-hour',name+'.png')});
 await shot('opening');
 // Player-visible opening, no state seeding or solutions injected for this flow.
 await p.locator('.rtext [data-a=searchname]').click();
 await p.locator('[data-a=open][data-v=adopt1996]').first().click();
 const form=p.locator('form[data-form=link]').first();
 await form.locator('[data-lk=a]').selectOption('cornelius');await form.locator('[data-lk=t]').selectOption('adopt');await form.locator('[data-lk=b]').selectOption('julian');await form.locator('button').click();
 ok(await ev(()=>leadState().steps[0].done),'UI: reading and linking the adoption completes the first milestone');
 await p.locator('.desk-dock [data-v="matter/overview"]').click();
 await p.locator('.investigation [data-a=open]').click();
 await p.locator('#modal [data-a=pin]').click();await p.locator('#modal [data-a=close]').click();
 ok(await ev(()=>leadState().current.id==='documents'),"UI: the objection leads to the claimant's papers without a supplied solution");
 await p.locator('.investigation [data-a=searchname]').click();
 for(const id of ['licence2019','licence2025']){
  if(id==='licence2025'){await p.locator('#back').click();}
  await p.locator(`[data-a=open][data-v=${id}]`).first().click();
  await p.locator(`[data-a=pin][data-v=${id}]`).first().click();
 }
 await p.locator('.desk-dock [data-v="matter/desk"]').click();
 await p.selectOption('[data-desk=a]','licence2019');await p.selectOption('[data-desk=b]','licence2025');
 ok(await p.locator('.desk-source').count()===2,'UI: two original sources can be compared at the case desk');
 await p.locator('.desk-dock [data-a=notebook]').click();await p.fill('#quicknotes','The photographs differ. Margaret remembers no scar.');
 await shot('comparison');
 await p.reload({waitUntil:'domcontentloaded',timeout:15000});ok(await p.inputValue('#quicknotes')==='The photographs differ. Margaret remembers no scar.','UI: notebook and comparison selection survive reload');
 await p.locator('.desk-dock [data-a=notebook]').click();
 await p.locator('.mtabs [data-v="matter/preliminary"]').click();await p.selectOption('#prelim-answer','review');
 await p.locator('[data-a=prelim-evidence][data-v=licence2025]').click();await p.locator('form[data-form=preliminary] button.nbtn').click();
 ok(await ev(()=>!S.prelim.sent&&S.attempts===0)&&!!(await p.textContent('#prelim-feedback')),'UI: thin preliminary evidence is returned without consuming a filing');
 for(const id of ['licence2019','letterMargaret'])await p.locator(`[data-a=prelim-evidence][data-v=${id}]`).click();
 await p.locator('form[data-form=preliminary] button.nbtn').click();
 ok(await ev(()=>S.prelim.sent&&S.attempts===0&&mailIds().filter(x=>x==='mPre').length===1),'UI: a supported limited concern produces one partner response, no final filing');
 await p.reload({waitUntil:'domcontentloaded',timeout:15000});ok(await p.locator('.verdict.ok').count()===1,'UI: preliminary acceptance survives reload');await shot('preliminary');
 await fresh();await ev(()=>go('matter/ruling','net'));
 let text=await p.locator('#vp').innerText();ok(!/(?<!Julian )Ambrose Vane|Desmond|1934|real Cornelius|1976/.test(text),'fresh ruling does not leak the identity chain, earlier fire or death');
 await p.locator('[data-a=preflight]').click();ok(await ev(()=>S.attempts===0),'procedural check never spends a filing');await shot('ruling');
 // Exhaustive permutation regression for the observed evidence ordering bug.
 const order=await ev(()=>{
  const mk=(a,b)=>{const id='cmp:'+[a,b].sort().join('-');S.reports[id]={a,b,ok:true,shared:['scar','mole']};REC[id]=cmpRec(id);return id;};
  const x=mk('licence1979','licence2025'),y=mk('photo1889','licence2025'),items=[x,y,'trust1934','inquest1934'];
  const perm=a=>a.length?a.flatMap((v,i)=>perm(a.filter((_,j)=>i!==j)).map(z=>[v,...z])):[[]];
  return {all:perm(items).every(e=>evidenceOk('F1',e)),n:perm(items).length,duplicates:evidenceOk('F1',[y,'trust1934','trust1934']),thin:evidenceOk('F1',[y,'trust1934'])};
 });
 ok(order.all&&order.n===24,'all 24 permutations of the same valid evidence pass');ok(!order.duplicates&&!order.thin,'duplicate and insufficient evidence remain rejected');
 await fresh();let result=await ev(()=>{revealAllTree();const before=treeOk('F5');tryLink('margaret','spouse','julian',null);return before&&treeOk('F5')});ok(result,'tentative unrelated links no longer contaminate a supported finding');
 result=await ev(()=>{
  S.tree.links=S.tree.links.filter(l=>!['took','same'].includes(l.t));
  for(const [a,b,pa,pb] of [['ambrose','desmond','photo1889','photo1962'],['desmond','cornelius','photo1962','licence1979'],['cornelius','julian','licence1979','licence2025']]){const id='cmp:'+[pa,pb].sort().join('-');S.reports[id]={a:pa,b:pb,ok:true,shared:['scar','mole']};REC[id]=cmpRec(id);tryLink(a,'took',b,id);}
  return treeOk('F1');
 });ok(result,'a continuous certified document chain proves successive identities');
 result=await ev(()=>{
  const link=S.tree.links.find(l=>l.t==='took'&&l.a==='desmond');
  const id='sig:marr1946-will2024';S.reports[id]={a:'marr1946',b:'will2024',ok:true};REC[id]=sigRec(id);link.recs=[id];return !treeOk('F1');
 });ok(result,'a shared paper name alone cannot bridge disconnected documentary chains');
 // Filing policies use the same evidence evaluator.
 await fresh();result=await ev(()=>{FIND.forEach(f=>{S.ans[f.id]='wrong';S.ev[f.id]=[]});for(let i=0;i<4;i++)judge();return S.attempts===4&&!S.failed&&!S.won});ok(result,'investigation mode permits revisions after three unsuccessful filings');
 await fresh();result=await ev(()=>{S.mode='challenge';for(let i=0;i<4;i++)judge();return S.failed&&S.attempts===3});ok(result,'challenge mode stops after three unsuccessful final filings');
 // The opening points at sources; it never names what to look for.
 result=await ev(()=>{const banned=/household|identification|adoption|licence|scar/i,el=document.createElement('div');el.innerHTML=MAIL.m1.body();const brief=el.innerText||el.textContent;return {brief:!banned.test(brief),leads:leadState().steps.every(s=>!banned.test(s.title+' '+s.body+' '+s.action[2]))}});
 ok(result.brief,'the briefing names no record type or conclusion');ok(result.leads,'visible lead cards name sources, not conclusions (hints exempt)');
 // Investigation mode: one count, no per-finding verdicts, five in the same filing.
 const solve=()=>{revealAllTree();S.viewed=Object.keys(REC);
  const c=(a,b)=>{const id='cmp:'+[a,b].sort().join('-');S.reports[id]={a,b,ok:true,shared:['scar','mole']};REC[id]=cmpRec(id);return id;};
  const lab=c('licence2025','photo1889');S.pins=[lab,'trust1934','inquest1934','marine2025','birth1903','dnaDaphne','birth1941','inquest1976','lawA4','news1888','birth1888'];
  S.claims={F1:{person:'ambrose'},F3:{person:'desmond'},F4:{parent:'cornelius',share:'none'},F5:{heir:'margaret',law:'lawA4'}};FIND.forEach(f=>syncClaimAnswer(f.id));S.ans.F2='staged';
  S.ev={F1:[lab,'trust1934','inquest1934'],F2:['marine2025','inquest1934'],F3:['inquest1934','birth1903'],F4:['dnaDaphne','birth1941','inquest1976'],F5:['lawA4','news1888','birth1888']};};
 await fresh();await ev(`(${solve})()`);
 result=await ev(()=>{S.claims.F3={person:'nobody'};syncClaimAnswer('F3');judge();go('matter/ruling','net');render();
  const t=document.querySelector('#vp').innerText;return {won:S.won,count:/accepted 4 of 5 findings\. They don't say which/.test(t),pill:document.querySelectorAll('#vp .pill.green').length,marked:document.querySelectorAll('#vp fieldset.finding.ok,#vp fieldset.finding.no').length,locked:document.querySelectorAll('#vp form[data-form=rule] select:disabled').length,hints:document.querySelectorAll('#vp [data-a=finding-hint]').length};});
 ok(!result.won&&result.count,'investigation mode reports only how many findings were accepted');
 ok(result.pill===0&&result.marked===0&&result.locked===0,'investigation mode never marks or locks an individual finding');
 ok(result.hints===5,'research hints are offered on every finding after a filing');
 result=await ev(()=>{S.claims.F3={person:'desmond'};syncClaimAnswer('F3');S.claims.F1={person:'julian'};syncClaimAnswer('F1');judge();const a=S.won;S.claims.F1={person:'ambrose'};syncClaimAnswer('F1');judge();return !a&&S.won;});
 ok(result,'a win needs all five findings accepted in the same filing');
 await fresh();await ev(`(${solve})()`);
 result=await ev(()=>{S.mode='challenge';S.claims.F3={person:'nobody'};syncClaimAnswer('F3');judge();go('matter/ruling','net');render();
  return {won:S.won,pill:document.querySelectorAll('#vp .pill.green').length,ok:document.querySelectorAll('#vp fieldset.finding.ok').length,no:document.querySelectorAll('#vp fieldset.finding.no').length};});
 ok(!result.won&&result.pill===4&&result.ok===4&&result.no===1,'challenge mode still marks and locks each finding');
 await fresh();await ev(()=>go('matter/ruling','net'));ok((await p.locator('#vp').innerText()).includes('Save provisions from the law library to cite them here.'),'Finding 5 explains an empty provision list');
 // Real selectors can express a complete, supported solution.
 await fresh();await ev(()=>{revealAllTree();S.viewed=Object.keys(REC);S.pins=['cmp:licence2025-photo1889','trust1934','inquest1934','marine2025','birth1903','dnaDaphne','birth1941','inquest1976','lawA4','news1888','birth1888'];go('matter/ruling','net')});
 for(const [f,k,v] of [['F1','person','ambrose'],['F3','person','desmond'],['F4','parent','cornelius'],['F4','share','none'],['F5','heir','margaret'],['F5','law','lawA4']])await p.selectOption(`[data-claim=${f}][data-field=${k}]`,v);
 await p.selectOption('[data-answer=F2]','staged');
 const evidence={F1:['cmp:licence2025-photo1889','trust1934','inquest1934'],F2:['marine2025','inquest1934'],F3:['inquest1934','birth1903'],F4:['dnaDaphne','birth1941','inquest1976'],F5:['lawA4','news1888','birth1888']};
 for(const [f,ids] of Object.entries(evidence)){
  const field=p.locator(`fieldset:has([data-${f==='F2'?'answer':'claim'}=${f}])`);await field.locator('summary').click();
  for(const id of ids)await p.locator(`[data-a=ev][data-f=${f}][data-v="${id}"]`).click();
 }
 await p.locator('form[data-form=rule] button.nbtn').click();ok(await ev(()=>S.won),'UI claim controls and attachments can complete the whole case');
 text=await p.locator('.verdict.ok').innerText();ok(/Desmond/.test(text)&&/1934, 1976 and 2025/.test(text)&&!/birth twice/.test(text),'resolution matches the current four-identity canon');
 // Old and malformed saves recover without broken screens.
 await ev(()=>localStorage.setItem(SAVE_KEY,JSON.stringify({tree:{people:['julian','missing'],links:[],events:[]},pins:['birth1934','licence1972'],hist:{net:{s:['matter/evidence'],i:0}},tab:'net',reports:{'cmp:bad':{a:'missing',b:'no'}},notes:'Retain my note'})));
 await p.reload({waitUntil:'domcontentloaded',timeout:15000});ok(await ev(()=>S.pins.length===1&&S.pins[0]==='licence1979'&&S.notes==='Retain my note'&&!!localStorage.getItem('bloodlines-recovery-backup')),'legacy missing IDs recover, renamed records migrate and original progress is backed up');
 ok(await p.locator('#save-status').isVisible(),'migration displays a recovery notice');
 await ev(()=>localStorage.setItem(SAVE_KEY,'{broken'));await p.reload({waitUntil:'domcontentloaded',timeout:15000});ok(await ev(()=>S.tree.people.length===4)&&await p.locator('#save-status').isVisible(),'malformed JSON opens a recoverable fresh investigation');
 await fresh();await ev(()=>{Storage.prototype.setItem=function(){throw new Error('quota')};save()});ok(await p.locator('#save-status').isVisible(),'storage failures are visible');await p.reload({waitUntil:'domcontentloaded',timeout:15000});
 // Backups travel through actual download/import controls, including invalid input.
 await fresh();await ev(()=>{S.notes='Exported observation';S.claims.F4={parent:'cornelius',share:''};save();go('matter/desk','net')});
 const download=p.waitForEvent('download');await p.locator('[data-a=save-export]').click();
 const file=path.join(__dirname,'shots','first-hour','progress.json');await (await download).saveAs(file);
 const backup=JSON.parse(fs.readFileSync(file,'utf8'));ok(backup.schemaVersion===4&&backup.notes==='Exported observation','UI: exported progress contains versioned state');
 await p.locator('#save-import').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{}')});
 await p.waitForFunction(()=>document.getElementById('import-feedback').textContent.includes('not completed'));
 ok((await p.locator('#import-feedback').innerText()).includes('not completed')&&await ev(()=>S.notes==='Exported observation'),'UI: invalid import preserves the live investigation');
 await ev(()=>{S.notes='Changed after export';save()});p.once('dialog',d=>d.accept());
 await Promise.all([p.waitForNavigation({waitUntil:'domcontentloaded'}),p.locator('#save-import').setInputFiles(file)]);
 ok(await ev(()=>S.notes==='Exported observation'&&S.claims.F4.parent==='cornelius'&&S.claims.F4.share===''&&JSON.parse(localStorage.getItem('bloodlines-recovery-backup')).notes==='Changed after export'),'UI: import restores partial findings and preserves the replaced save');
 // Keyboard marking executes the same hit test as pointer marking.
 await fresh();await ev(()=>{S.seen=['photo1889','licence2025'];S.lab={a:'photo1889',b:'licence2025',ma:[],mb:[],miss:0};go('matter/lab','net')});
 for(const side of ['a','b']){
  const svg=p.locator(`svg[data-side=${side}]`);await svg.focus();
  for(const mark of ['scar','mole']){
   // Derive a key sequence to the visible mark; interact using keys, never inject mark state.
   const keys=await p.evaluate(({side,mark})=>{const id=S.lab[side],c=inspectionCursor(side,id),m=marksOf(id)[mark],step=photoSize(id).w*.005;return {x:Math.round((m[0]-c.x)/step),y:Math.round((m[1]-c.y)/step)}},{side,mark});
   for(let i=0;i<Math.abs(keys.x);i++)await p.keyboard.press(keys.x<0?'Shift+ArrowLeft':'Shift+ArrowRight');
   for(let i=0;i<Math.abs(keys.y);i++)await p.keyboard.press(keys.y<0?'Shift+ArrowUp':'Shift+ArrowDown');
   await p.keyboard.press('Enter');
  }
 }
 await p.locator('[data-a=certify]').click();ok(await ev(()=>Object.values(S.reports).some(r=>r.ok)),'keyboard-only cursor marking can certify a valid photo comparison');await p.locator('#modal [data-a=close]').click();
 // Phone-width layouts and synthetic-photo cursors remain finite.
 await ev(()=>{S.seen.push('licence2019');S.lab.b='licence2019';S.lab.mb=[];render()});ok(await ev(()=>Number.isFinite(inspectionCursor('b','licence2019').x)),'drawn placeholder photos have a valid inspection cursor');
 await p.setViewportSize({width:390,height:844});await ev(()=>go('matter/overview','net'));await shot('mobile');
 ok(await ev(()=>document.documentElement.scrollWidth<=innerWidth),'first-hour overview does not overflow a narrow screen');
 ok(errors.length===0,'no browser exceptions: '+errors.join('; '));
 process.exitCode=fails?1:0;console.log(fails?'FAILURES: '+fails:'ALL PASS');await b.close();
})().catch(e=>{console.error(e);process.exit(1);});
