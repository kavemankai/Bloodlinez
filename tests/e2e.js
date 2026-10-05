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
 const ANS={F1:'self',F2:'staged',F3:'fabricated',F4:'not',F5:'margaretA4'};

 // A. old shortcut + nudge timing
 let p=await fresh();
 await visitPin(p,['photo1962','licence1972','licence2019','death2025','news2025','death1994','birth1993','dnaDaphne','birth1966','lawA4','birth1888'].filter(x=>true).map(x=>x));
 await p.evaluate(()=>{['lawA4','lawA3'].forEach(i=>{if(!pinned(i))togglePin(i)})});
 await file(p,ANS,{F1:['photo1962','licence1972','licence2019'],F2:['death2025','news2025'],F3:['death1994','birth1993'],F4:['dnaDaphne','birth1966'],F5:['lawA4','birth1888']});
 ok(await p.evaluate(()=>Object.values(S.res).every(v=>v===false)),'A: old shortcuts all rejected');
 ok(await p.locator('.nudge').count()===0,'A: no nudge after 1st failed filing');
 await p.click('form[data-form=rule] button.nbtn');
 ok(await p.locator('.nudge').count()===5,'A: nudges after 2nd filing');

 // B. full win with lab
 p=await fresh();
 await visitPin(p,['photo1889','licence2019','birth1934','trust1934','marine2025','death1934','nilDesmond','death1994','hospital1888','birth1966','lawA3','lawA4','news1888','birth1888']);
 await lab(p,'photo1889','licence2019',['scar','mole'],['scar','mole']);
 const labId='cmp:licence2019-photo1889';
 ok(await p.evaluate(id=>S.reports[id]&&S.reports[id].ok,labId),'B: lab positive on 1889 vs 2019');
 await file(p,ANS,{F1:[labId,'birth1934','trust1934'],F2:['marine2025','death1934'],F3:['nilDesmond','death1994'],F4:['hospital1888','birth1966','lawA3'],F5:['lawA4','news1888','birth1888']});
 ok(await p.evaluate(()=>S.won),'B: full win on first filing');

 // C. sig substitution: lab + sig + one doc
 p=await fresh();
 await visitPin(p,['photo1889','licence2019','census1891','will2024','birth1934','birth1888']);
 await lab(p,'photo1889','licence2019',['scar','mole'],['scar','mole']);
 await hand(p,'census1891','will2024');
 const sigId='sig:census1891-will2024';
 ok(await p.evaluate(id=>S.reports[id]&&S.reports[id].ok,sigId),'C: signature A. Vane 1891 vs C. Vane 2024 positive');
 ok(await p.evaluate(()=>{const f=evidenceOk('F1',['cmp:licence2019-photo1889','sig:census1891-will2024','birth1934']);return f}),'C: lab+sig+birth passes F1');
 ok(!(await p.evaluate(()=>evidenceOk('F1',['cmp:licence2019-photo1889','sig:census1891-will2024']))),'C: lab+sig alone (2 docs) fails F1');
 await hand(p,'birth1888','census1891');
 ok(await p.evaluate(()=>S.reports['sig:birth1888-census1891'].ok===false),'C: Eliza vs Ambrose signature negative');

 // D. decoys
 p=await fresh();
 await p.evaluate(()=>{S.q={name:'desmond',kw:'',kind:'All'};S.searched=true;go('search','bl')});
 ok(await p.locator('text=Marrow Bay').count()>0,'D: second Desmond appears in search');
 ok(await p.locator('text=No birth registration found for Desmond').count()===0,'D: desmond callout gone');
 await p.fill('#sname','Desmond Vane'); await p.click('[data-a=nilreq]');
 ok(await p.locator('.pv').count()===1,'D: nil return for Desmond opens certificate');
 await p.click('[data-a=close]');
 await p.fill('#sname','Julian Vane'); await p.click('[data-a=nilreq]');
 ok((await p.locator('#toast').textContent()).includes('exists'),'D: nil refused when record exists');
 await visitPin(p,['photo1889','photo1921']);
 await lab(p,'photo1889','photo1921',['scar','mole'],['scar']);
 ok(await p.evaluate(()=>S.reports['cmp:photo1889-photo1921'].ok===false),'D: scarred decoy gives inconclusive lab');
 await p.evaluate(()=>{S.q={name:'',kw:'wharf',kind:'All'};S.searched=true;go('search','bl')});
 ok(await p.locator('text=Wharf Workers').count()>0,'D: wharf search shows decoy photo');

 console.log('page errors:',errs.length?errs:'none'); console.log(fails?'FAILURES: '+fails:'ALL PASS');
 await b.close();
})();
