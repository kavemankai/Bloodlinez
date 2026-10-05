// The reveal path is hardened: records must be joined, not read off. These checks keep it that way.
const {chromium}=require('playwright-core'); const path=require('path');
const GAME='file://'+path.resolve(__dirname,'..')+'/index.html';
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 const p=await b.newPage(); const errs=[]; let fails=0;
 p.on('pageerror',e=>errs.push(e.message)); const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++};
 await p.goto(GAME); const ev=(f,a)=>p.evaluate(f,a);
 await ev(()=>{localStorage.clear();Object.assign(S,FRESH());S.cookie=true;render()});
 const search=(name,kw)=>ev(([name,kw])=>{S.q={name,kw,kind:'All'};return results();},[name,kw]);
 const text=id=>ev(id=>{const d=document.createElement('div');d.innerHTML=REC[id].render();return d.textContent.replace(/\s+/g,' ');},id);
 // index error on the 1972 licence
 ok(!(await search('Cornelius Vane','')).includes('licence1972'),'searching "Cornelius Vane" does not find the 1972 licence (index typo)');
 ok((await search('Cornelius Vain','')).includes('licence1972'),'searching the misspelling finds it');
 ok((await search('','licence')).includes('licence1972')&&(await search('','Hollow Lane')).includes('licence1972'),'a keyword or the address finds it');
 ok((await text('licence1972')).includes('02/03/1934'),'the card itself shows the true birth date');
 ok(await ev(()=>IDX.licence1972.some(([k,v])=>v==='2 Mar 1943')),'the index transcription has the wrong year');
 // the 1912 wedding photo does not name the bride's father
 const w=await text('photo1912');
 ok(!/Ambrose|A\. Vane/.test(w)&&w.includes("bride's father"),'the 1912 wedding caption names only "the bride\'s father"');
 ok(!(await search('Ambrose Vane','')).includes('photo1912'),'searching Ambrose does not find the wedding photo');
 ok(await ev(()=>!PEOPLE.ambrose.recs.includes('photo1912')&&!peopleIn('photo1912').includes('ambrose')),'the wedding photo is not listed as one of Ambrose\'s sources');
 ok(await ev(()=>PHOTO_OWNER.photo1912==='ambrose'),'a certified comparison on the wedding photo still identifies Ambrose');
 // 1911 census: age drift, no stated conclusion
 const c=await text('census1911');
 ok(/Ambrose Vane\s*Head\s*41/.test(c),'in 1911 Ambrose gives his age as 41 (should be 54)');
 ok(!/thirty-five|not past/.test(c),'the enumerator no longer says what he thinks');
 // trust deed: the player must notice the son is named before his birth
 const t=await text('trust1934');
 ok(!/not yet born/.test(t)&&t.includes('20 January 1934'),'the trust deed no longer says the son is unborn; its date does');
 console.log('page errors:',errs.length?errs:'none'); console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
