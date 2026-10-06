const {chromium}=require('playwright-core'); const path=require('path'); const ROOT=path.resolve(__dirname,'..'); const GAME='file://'+ROOT+'/index.html';
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 const errs=[]; let fails=0;
 const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++;};
 async function fresh(){ const p=await b.newPage(); p.on('pageerror',e=>errs.push(e.message)); await p.goto(GAME); await p.evaluate(()=>{localStorage.clear();Object.assign(S,FRESH());render()}); return p;}
 const visitPin=(p,ids)=>p.evaluate(ids=>{ids.forEach(id=>{ if(REC[id].hidden){ if(!pinned(id)) togglePin(id);} else { go('record/'+id,'bl'); if(!pinned(id)) togglePin(id);} }); render();},ids);
 async function lab(p,a,bb,marksA,marksB){ await p.evaluate(([a,bb,ma,mb])=>{go('matter/lab','net');S.lab={a,b:bb,ma,mb,miss:0};render()},[a,bb,marksA,marksB]); await p.click('[data-a=certify]'); await p.click('[data-a=close]'); }
 async function hand(p,a,bb){ await p.evaluate(([a,bb])=>{go('matter/hand','net'); const A=document.querySelector('#hw-a'); A.value=a; A.dispatchEvent(new Event('change',{bubbles:true}));},[a,bb]); await p.selectOption('#hw-b',bb); await p.click('[data-a=sigcert]'); await p.click('[data-a=close]'); }
 async function file(p,ans,ev){ await p.evaluate(([ans,ev])=>{S.ans=ans;S.ev=ev;go('matter/ruling','net');render()},[ans,ev]); await p.click('form[data-form=rule] button.nbtn'); }
 const ANS={F1:'ambrose',F2:'staged',F3:'desmond',F4:'realcornelius',F5:'margaretA4'};

 // A. shortcuts: the right answers on the obvious records are all rejected, and nudges wait
 let p=await fresh();
 await visitPin(p,['photo1962','licence1979','licence2025','death2025','news2025','death1934','burial1934','letterDaphne','birth1966','lawA4','birth1888']);
 await file(p,ANS,{F1:['photo1962','licence1979','licence2025'],F2:['death2025','news2025'],F3:['death1934','burial1934'],F4:['letterDaphne','birth1966'],F5:['lawA4','birth1888']});
 ok(await p.evaluate(()=>Object.values(S.res).every(v=>v===false)),'A: shortcuts all rejected');
 ok(await p.locator('.nudge').count()===0,'A: research hints are opt-in');
 await p.click('form[data-form=rule] button.nbtn');
 ok(await p.locator('.nudge').count()===0,'A: a second filing does not reveal the solution');
 await p.locator('[data-a=finding-hint]').first().click();
 ok(await p.locator('.nudge').count()===1,'A: a requested hint appears only for that finding');

 // B. full win with the lab, the right records and the built tree
 p=await fresh();
 await visitPin(p,['photo1889','licence2025','trust1934','inquest1934','marine2025','birth1903','dnaDaphne','birth1941','inquest1976','hospital1888','lawA4','news1888','birth1888']);
 await lab(p,'photo1889','licence2025',['scar','mole'],['scar','mole']);
 const labId='cmp:licence2025-photo1889';
 ok(await p.evaluate(id=>S.reports[id]&&S.reports[id].ok,labId),'B: lab positive on 1889 vs 2025');
 await p.evaluate(()=>revealAllTree());
 await file(p,ANS,{F1:[labId,'trust1934','inquest1934'],F2:['marine2025','inquest1934'],F3:['inquest1934','birth1903'],F4:['dnaDaphne','birth1941','inquest1976'],F5:['lawA4','news1888','birth1888']});
 ok(await p.evaluate(()=>S.won),'B: full win on first filing');

 // C. signatures: one hand across four names, and the real Julian's hand differs
 p=await fresh();
 await visitPin(p,['photo1889','licence2025','census1891','will2024','marr1946','licence2019','trust1934','birth1888']);
 await lab(p,'photo1889','licence2025',['scar','mole'],['scar','mole']);
 await hand(p,'census1891','will2024');
 ok(await p.evaluate(()=>S.reports['sig:census1891-will2024'].ok),'C: A. Vane 1891 vs C. Vane 2024 positive');
 ok(await p.evaluate(()=>evidenceOk('F1',['cmp:licence2025-photo1889','sig:census1891-will2024','trust1934'])),'C: lab + signature + trust deed passes F1');
 ok(!(await p.evaluate(()=>evidenceOk('F1',['cmp:licence2025-photo1889','sig:census1891-will2024']))),'C: lab + signature alone (2 docs) fails F1');
 await hand(p,'census1891','marr1946');
 ok(await p.evaluate(()=>S.reports['sig:census1891-marr1946'].ok),'C: A. Vane 1891 vs D. Vane 1946 positive');
 await hand(p,'census1891','licence2019');
 ok(await p.evaluate(()=>S.reports['sig:census1891-licence2019'].ok===false),'C: the real Julian\'s 2019 signature is a different hand');
 await hand(p,'birth1888','census1891');
 ok(await p.evaluate(()=>S.reports['sig:birth1888-census1891'].ok===false),'C: Eliza vs Ambrose signature negative');

 // D. decoys and nil returns
 p=await fresh();
 await p.evaluate(()=>{S.q={name:'desmond',kw:'',kind:'All'};S.searched=true;go('search','bl')});
 ok(await p.locator('text=Marrow Bay').count()>0,'D: the Marrow Bay Desmond appears in search');
 for(const [nm,id] of [['Desmond Vane','nilDesmond'],['Cornelius Vane','nilCornelius'],['Julian Vane','nilJulian']]){
   await p.fill('#sname',nm); await p.click('[data-a=nilreq]');
   ok(await p.locator('.pv').count()===1&&(await p.locator('.pv').textContent()).includes('Nil Return'),'D: nil return for '+nm+' opens a certificate');
   await p.click('[data-a=close]');
 }
 await p.fill('#sname','Margaret Holloway'); await p.click('[data-a=nilreq]');
 ok((await p.locator('#toast').textContent()).includes('exists'),'D: nil refused when a birth record exists');
 await visitPin(p,['photo1889','photo1921']);
 await lab(p,'photo1889','photo1921',['scar','mole'],['scar']);
 ok(await p.evaluate(()=>S.reports['cmp:photo1889-photo1921'].ok===false),'D: scarred decoy gives inconclusive lab');
 await p.evaluate(()=>{S.q={name:'',kw:'wharf',kind:'All'};S.searched=true;go('search','bl')});
 ok(await p.locator('text=Wharf Workers').count()>0,'D: wharf search shows decoy photo');

 // E. wrong answers fail even with good evidence and a full tree
 p=await fresh(); await p.evaluate(()=>revealAllTree());
 await visitPin(p,['inquest1934','birth1903','dnaDaphne','birth1941','inquest1976']);
 await file(p,{...ANS,F3:'ambrose',F4:'daughter'},{F1:['inquest1934'],F2:['inquest1934'],F3:['inquest1934','birth1903'],F4:['dnaDaphne','birth1941','inquest1976'],F5:['birth1903']});
 ok(await p.evaluate(()=>S.res.F3===false&&S.res.F4===false),'E: "Ambrose died in the fire" and "Daphne takes a share" are rejected');

 console.log('page errors:',errs.length?errs:'none'); process.exitCode=fails?1:0; console.log(fails?'FAILURES: '+fails:'ALL PASS');
 await b.close();
})();
