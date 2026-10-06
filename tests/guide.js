// The field guide, the welcome mail and the self-ticking training list.
const {chromium}=require('playwright-core'); const path=require('path');
const GAME='file://'+path.resolve(__dirname,'..')+'/index.html';
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 const p=await b.newPage({viewport:{width:1300,height:1000}}); const errs=[]; let fails=0;
 p.on('pageerror',e=>errs.push(e.message)); const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++};
 await p.goto(GAME); const ev=f=>p.evaluate(f); const fresh=()=>ev(()=>{localStorage.clear();Object.assign(S,FRESH());S.cookie=true;render()}); await fresh();
 // field guide
 ok(await p.locator('.bm.guidebtn').count()===1,'the bookmarks bar has a Field guide button');
 await p.click('.bm.guidebtn'); await p.waitForTimeout(150);
 const n=await ev(()=>GUIDE.length); ok(await p.locator('.gnav button').count()===n&&n>=12,'the guide lists '+n+' sections');
 ok((await p.textContent('.gbody')).includes('night-shift associate'),'it opens on "Your job"');
 let allOk=true; for(let i=0;i<n;i++){ await p.locator('.gnav button').nth(i).click(); const h=await p.textContent('.gbody h2'); const t=await p.evaluate(k=>GUIDE[k].t,i); if(h!==t||(await p.textContent('.gbody')).length<60) allOk=false; }
 ok(allOk,'every section opens with its own title and text');
 await p.keyboard.press('Escape'); ok(await ev(()=>$('#modal').hidden),'Escape closes the guide');
 // no spoilers
 const spoil=await ev(()=>{const bad=['Ambrose','Desmond','Harriet','Eliza','Josiah','Hannah','Roland','Ashgrove estate','staged','fabricated','vampire','knots','latch','Marguerite','1740','cellar'];const txt=GUIDE.map(g=>g.t+' '+g.h).join(' ');return bad.filter(w=>txt.includes(w));});
 ok(spoil.length===0,'the guide contains no Case 1 spoilers'+(spoil.length?': '+spoil:''));
 // welcome mail
 ok(await ev(()=>mailIds().includes('m0')&&MAIL.m0.subj.includes('first night')),'the welcome email is in the inbox');
 await ev(()=>go('inbox/m0','mail')); ok(await p.locator('.rtext button[data-a=guide]').count()===1,'the welcome email links to the field guide');
 // training list
 await fresh(); await ev(()=>go('matter/overview','net')); await p.waitForTimeout(150);
 const count=()=>p.textContent('.bh:has(h2:text("Training")) span');
 ok((await count()).trim()==='0 of 8','training starts at 0 of 8');
 await ev(()=>go('inbox/m1','mail')); await ev(()=>go('matter/overview','net')); ok((await count()).trim()==='1 of 8','reading the brief ticks step 1');
 await ev(()=>{S.q={name:'Cornelius Vane',kw:'',kind:'All'};S.searched=true;});
 await ev(()=>go('search','bl')); await p.fill('#sname','Cornelius Vane'); await p.click('form[data-form=search] button.bbtn:not(.sec)'); await p.waitForTimeout(100);
 ok(await ev(()=>S.flags.t_search===true),'searching ticks step 2');
 await ev(()=>go('record/birth1888','bl')); ok(await ev(()=>TRAIN[2].done()),'opening a record ticks step 3');
 await ev(()=>tryLink('ambrose','parent','harriet','birth1888')); ok(await ev(()=>TRAIN[3].done()),'adding a link ticks step 4');
 await ev(()=>togglePin('birth1888')); ok(await ev(()=>TRAIN[4].done()),'saving a record ticks step 5');
 await ev(()=>{S.seen=Object.keys(PH);S.lab={a:'photo1889',b:'licence2025',ma:['scar','mole'],mb:['scar','mole'],miss:0};go('matter/lab','net')}); await p.click('[data-a=certify]'); await p.click('[data-a=close]');
 ok(await ev(()=>TRAIN[5].done()),'certifying a comparison ticks step 6');
 await ev(()=>togglePin('lawA4')); ok(await ev(()=>TRAIN[6].done()),'citing a provision ticks step 7');
 await ev(()=>{S.attempts=1;go('matter/overview','net')}); ok((await count()).trim()==='8 of 8','filing a ruling completes the list: '+(await count()).trim());
 // go button and hide
 await fresh(); await ev(()=>go('matter/overview','net')); await p.locator('.train li button').first().click(); await p.waitForTimeout(100);
 ok(await ev(()=>S.tab==='mail'),'a Go button takes you to the right place');
 await ev(()=>go('matter/overview','net')); await p.click('[data-a=training][data-v=hide]'); ok(await p.locator('.train').count()===0,'Hide this list collapses the training list');
 await p.click('[data-a=training][data-v=show]'); ok(await p.locator('.train').count()===1,'Show the training list brings it back');
 console.log('page errors:',errs.length?errs:'none'); process.exitCode=fails?1:0; console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
