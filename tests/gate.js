// The published page is encrypted: wrong password refused, right one opens the game, reloads stay open, ?playtest=1 still works.
const {chromium}=require('playwright-core'); const path=require('path'); const fs=require('fs'); const {execFileSync}=require('child_process');
const ROOT=path.resolve(__dirname,'..'), OUT=path.join(ROOT,'tests','shots','site');
(async()=>{
 let fails=0; const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++};
 fs.rmSync(OUT,{recursive:true,force:true}); fs.mkdirSync(path.join(OUT,'assets'),{recursive:true});
 for(const f of fs.readdirSync(path.join(ROOT,'assets'))) if(/\.(webp|jpg|png|svg)$/.test(f)) fs.copyFileSync(path.join(ROOT,'assets',f),path.join(OUT,'assets',f));
 let refused=false; try{ execFileSync('python3',[path.join(ROOT,'scripts','encrypt_page.py'),path.join(ROOT,'index.html'),path.join(OUT,'index.html')],{env:{...process.env,PLAYTEST_PASSWORD:''},stdio:'pipe'}); }catch(e){ refused=true; }
 ok(refused&&!fs.existsSync(path.join(OUT,'index.html')),'with no password set, nothing is written');
 execFileSync('python3',[path.join(ROOT,'scripts','encrypt_page.py'),path.join(ROOT,'index.html'),path.join(OUT,'index.html')],{env:{...process.env,PLAYTEST_PASSWORD:'test-pass-123'}});
 const html=fs.readFileSync(path.join(OUT,'index.html'),'utf8');
 ok(!/Ambrose|Cornelius|Vane House|Nocturnal|treeChecks/.test(html),'the published file contains none of the game text');
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 const p=await b.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
 const URL='file://'+path.join(OUT,'index.html');
 await p.goto(URL+'?playtest=1');
 ok(await p.locator('#pw').count()===1,'the page asks for a password');
 await p.fill('#pw','wrong'); await p.click('#go'); await p.waitForFunction(()=>/not right/.test(document.getElementById('msg').textContent),null,{timeout:15000});
 ok(await p.evaluate(()=>typeof S==='undefined'),'a wrong password is refused');
 await p.fill('#pw','test-pass-123'); await p.click('#go');
 await p.waitForFunction(()=>typeof S!=='undefined'&&document.querySelector('#vp'),null,{timeout:15000});
 ok(true,'the right password opens the game');
 ok(await p.evaluate(()=>S.flags.plog===true),'?playtest=1 still turns the log on after unlocking');
 await p.evaluate(()=>{S.cookie=true;go('home','bl')}); await p.waitForTimeout(800);
 ok(await p.evaluate(()=>[...document.images].filter(i=>i.complete&&i.naturalWidth>0).length>0),'images load beside the encrypted page');
 await p.reload(); await p.waitForFunction(()=>typeof S!=='undefined',null,{timeout:15000});
 ok(await p.locator('#pw').count()===0,'a reload opens straight into the game');
 console.log('page errors:',errs.length?errs:'none'); console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
