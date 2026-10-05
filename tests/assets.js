const {chromium}=require('playwright-core'); const path=require('path'); const ROOT=path.resolve(__dirname,'..'); const GAME='file://'+ROOT+'/index.html'; const fs=require('fs');
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 const p=await b.newPage({viewport:{width:1200,height:1400}}); const errs=[],bad=[]; let fails=0;
 p.on('pageerror',e=>errs.push(e.message)); p.on('requestfailed',r=>bad.push(r.url())); p.on('response',r=>{if(r.status()>=400)bad.push(r.url())});
 const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++};
 await p.goto(GAME); await p.evaluate(()=>{localStorage.clear();Object.assign(S,FRESH());revealAllTree();render()});
 // 1. all referenced assets exist
 const html=fs.readFileSync(ROOT+'/index.html','utf8');
 const refs=[...new Set([...html.matchAll(/assets\/([\w.\-]+\.(?:jpg|webp|png|svg))/g)].map(m=>m[1]))];
 const missing=refs.filter(f=>!fs.existsSync(ROOT+'/assets/'+f)); ok(missing.length===0,'all '+refs.length+' static asset refs exist'+(missing.length?': '+missing:''));
 const dyn=await p.evaluate(()=>[...new Set([...Object.keys(PH).map(k=>PH[k].img),...[...AVATARS].map(i=>'assets/av_'+i+'.jpg'),...Object.values(PAPER).map(x=>'assets/'+x[0]+'.webp'),...Object.keys(PROPS).map(k=>'assets/'+k+'.webp')])]);
 const dm=dyn.filter(f=>!fs.existsSync(ROOT+'/'+f)); ok(dm.length===0,'all '+dyn.length+' dynamic asset refs exist'+(dm.length?': '+dm:''));
 // 2. visit every record + tree, check broken images
 await p.evaluate(()=>{S.cookie=true; Object.keys(REC).filter(id=>!REC[id].hidden&&PAGE_KINDS.has(REC[id].kind)).forEach(id=>{go('record/'+id,'bl')}); go('tree','bl'); S.sel='ambrose'; render()});
 await p.waitForTimeout(600);
 const broken=await p.evaluate(()=>[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src));
 ok(broken.length===0,'no broken <img> on the tree page'+(broken.length?': '+broken:''));
 // 3. real lab clicks
 async function clickMark(sideIdx,id,mark,dx=0,dy=0){
   const box=await p.evaluate(i=>{const r=document.querySelectorAll('.labpane svg[data-lab]')[i].getBoundingClientRect();return {l:r.left,t:r.top,w:r.width,h:r.height}},sideIdx);
   const [px,py]=await p.evaluate(([id,m])=>marksOf(id)[m],[id,mark]); const W=await p.evaluate(id=>PH[id].w,id),H=await p.evaluate(id=>PH[id].h,id);
   await p.mouse.click(box.l+(px+dx)/W*box.w, box.t+(py+dy)/H*box.h);
 }
 async function lab(a,bm,marksA,marksB){
   await p.evaluate(([a,b])=>{S.seen=Object.keys(PH);S.lab={a,b,ma:[],mb:[],miss:0};go('matter/lab','net')},[a,bm]);
   for(const m of marksA) await clickMark(0,a,m); for(const m of marksB) await clickMark(1,bm,m);
   await p.click("[data-a=certify]"); await p.click("[data-a=close]");
   return p.evaluate(([a,b])=>S.reports['cmp:'+[a,b].sort().join('-')],[a,bm]);
 }
 let r=await lab('photo1889','licence2019',['scar','mole'],['scar','mole']); ok(r&&r.ok,'lab: 1889 vs 2019, clicking real scar+mole in both -> POSITIVE');
 r=await lab('photo1912','photo1962',['scar','mole'],['scar','mole']); ok(r&&r.ok,'lab: wedding right-face vs 1962 -> POSITIVE');
 r=await lab('photo1889','photo1950',['mole'],['mole']); ok(r&&!r.ok,'lab: vampire vs Thomas (mole only) -> inconclusive');
 r=await lab('photo1889','photo1921',['scar'],['scar']); ok(r&&!r.ok,'lab: vampire vs Tully (scar only) -> inconclusive');
 await p.evaluate(()=>{S.seen=Object.keys(PH);S.lab={a:'photo1889',b:'licence1972',ma:[],mb:[],miss:0};go('matter/lab','net')});
 await clickMark(0,'photo1889','scar',70,0); await clickMark(0,'photo1889','mole',0,70);
 ok(await p.evaluate(()=>S.lab.miss===2&&S.lab.ma.length===0),'lab: clicks 70px off the marks are misses');
 await clickMark(0,'photo1889','scar',20,-15); ok(await p.evaluate(()=>S.lab.ma.includes('scar')),'lab: click 25px off the scar still counts');
 // 4. screenshots
 const shot=async(name,fn)=>{await p.evaluate(fn); await p.waitForTimeout(350); await p.screenshot({path:path.join(ROOT,'tests','shots',name+'.png')})};
 await shot('tree',()=>{S.cookie=true;go('tree','bl');S.sel='josiah';render();document.getElementById('cw').scrollTop=POS.ambrose[1]-120});
 await shot('mount',()=>{go('record/photo1889','bl')});
 await shot('licence',()=>{go('record/licence1972','bl')});
 await shot('civil',()=>{go('record/birth1857','bl')});
 await shot('home',()=>{go('home','bl')});
 await shot('search',()=>{S.q={name:'',kw:'',kind:'All'};S.searched=false;go('search','bl')});
 await shot('lab',()=>{S.lab={a:'photo1889',b:'licence2019',ma:['scar','mole'],mb:['scar'],miss:1};go('matter/lab','net')});
 await shot('court',()=>{go('record/court1436','bl')});
 console.log('failed/404 requests:',bad.length?[...new Set(bad)]:'none','| page errors:',errs.length?errs:'none');
 console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
