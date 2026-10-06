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
 // index error on the 1979 licence
 ok(!(await search('Cornelius Vane','')).includes('licence1979'),'searching "Cornelius Vane" does not find the 1979 licence (index typo)');
 ok((await search('Cornelius Vain','')).includes('licence1979'),'searching the misspelling finds it');
 ok((await search('','licence')).includes('licence1979')&&(await search('','Hollow Lane')).includes('licence1979'),'a keyword or the address finds it');
 ok((await text('licence1979')).includes('02/03/1941'),'the card itself shows the true birth date');
 ok(await ev(()=>IDX.licence1979.some(([k,v])=>v==='2 Mar 1914')),'the index transcription has the wrong year');
 // the new canon: names change, faces don't, and each handover hides a body
 const d=await text('deedpoll1907'); ok(/DESMOND DUNMORE/.test(d)&&/DESMOND VANE/.test(d),'the 1907 deed poll turns Desmond Dunmore into Desmond Vane');
 ok(!(await search('Desmond Vane','')).includes('birth1903')&&(await search('Desmond Dunmore','')).includes('birth1903'),'Desmond\'s birth is only found under Dunmore');
 ok(!(await search('Cornelius Vane','')).includes('birth1941')&&(await search('Cornelius Askew','')).includes('birth1941'),'Cornelius\'s birth is only found under Askew');
 ok(!(await search('Julian Vane','')).includes('birth1993')&&(await search('Julian Tate','')).includes('birth1993'),'Julian\'s birth is only found under Tate');
 const i34=await text('inquest1934'), i76=await text('inquest1976');
 ok(/about thirty, not of seventy-six/.test(i34)&&/signet ring/.test(i34),'the 1934 inquest: remains of a man of about thirty, identified by a ring');
 ok(/twenty-five and forty/.test(i76)&&/wristwatch/.test(i76),'the 1976 inquest: a driver of twenty-five to forty, identified by a watch');
 ok(!/murder|killed him|killed them|deliberate/i.test(i34+i76+(await text('news2025'))),'the records never say he caused the deaths');
 const l19=await text('licence2019'), l25=await text('licence2025');
 ok(/Conditions\s*None/.test(l19)&&/night driving only/.test(l25),'the real Julian could drive by day; the 2025 replacement cannot');
 const m=await text('letterMargaret'); ok(/That boy had no scar/.test(m),'Margaret remembers the boy had no scar');
 ok(/Askew/.test(await text('dnaDaphne'))&&!/Askew/.test(await text('dnaMargaret')),'Daphne has Askew matches that Margaret does not share');
 // ages agree across records (canon check)
 const ages=await ev(()=>{const t=id=>{const d=document.createElement('div');d.innerHTML=REC[id].render();return d.textContent;};
   return {c1911:/Desmond Vane\s*Stepson\s*7/.test(t('census1911')), c1921:/Desmond Vane\s*Stepson\s*17/.test(t('census1921')), m1946:/Desmond Vane, 43/.test(t('marr1946'))&&/Irene Askew, 34/.test(t('marr1946')),
     n1962:/Desmond Vane, 58/.test(t('photo1962'))&&/Cornelius, 21/.test(t('photo1962')), d1976:/73 years/.test(t('death1976')), m1995:/Cornelius Vane, 54/.test(t('marr1995')), d2025:/84 years/.test(t('death2025'))};});
 ok(Object.values(ages).every(Boolean),'ages agree with the canon in every record: '+JSON.stringify(ages));
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
 // The trust predates the fire; Desmond was already an adult in this canon.
 const t=await text('trust1934');
 ok(!/not yet born/.test(t)&&t.includes('20 January 1934'),'the trust deed gives its date without supplying the conclusion');
 console.log('page errors:',errs.length?errs:'none'); process.exitCode=fails?1:0; console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
