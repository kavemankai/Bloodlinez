// Checks the automatic family-tree layout: placement, overlaps, couples, generations, and adding people with data only.
const {chromium}=require('playwright-core'); const path=require('path');
const GAME='file://'+path.resolve(__dirname,'..')+'/index.html';
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
 const p=await b.newPage({viewport:{width:1300,height:900}}); const errs=[]; let fails=0;
 p.on('pageerror',e=>errs.push(e.message)); const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++};
 await p.goto(GAME); await p.evaluate(()=>{localStorage.clear();Object.assign(S,FRESH());S.cookie=true;render()});
 const check=(label,args)=>p.evaluate(({args})=>{
   const L = args ? layoutTree(...args) : layoutTree(), NW=TREE.w, NH=TREE.h, out={};
   const people = args?args[0]:PEOPLE, rel=args?args[1]:REL, ghosts=args?args[2]:GHOSTS;
   const ids=Object.keys(L.pos);
   out.unplaced=[...Object.keys(people),...Object.keys(ghosts)].filter(i=>!L.pos[i]);
   out.overlaps=[]; for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++){const a=L.pos[ids[i]],c=L.pos[ids[j]]; if(Math.abs(a[0]-c[0])<NW+20&&Math.abs(a[1]-c[1])<NH+10) out.overlaps.push(ids[i]+'/'+ids[j]);}
   out.badParent=[]; out.badSpouse=[];
   Object.keys(people).forEach(i=>(rel[i]||[]).forEach(([r,o])=>{ if(!L.pos[o]) return;
     if((r==='Father'||r==='Mother'||r==='Adoptive father'||r==='Adoptive mother')&&!(L.pos[o][1]<L.pos[i][1])) out.badParent.push(o+'>'+i);
     if(r==='Spouse'&&!(L.pos[o][1]===L.pos[i][1]&&Math.abs(L.pos[o][0]-L.pos[i][0])===NW+TREE.couple)) out.badSpouse.push(i+'+'+o); }));
   out.rowsAligned = ids.every(i=>(L.pos[i][1]-TREE.pad)%TREE.pitch===0);
   out.size=[L.w,L.h]; out.edges=L.edges.length;
   return out;},{args});
 const PEOPLE_N=await p.evaluate(()=>PEOPLE);
 let r=await check('game');
 ok(r.unplaced.length===0,'all '+Object.keys(PEOPLE_N).length+' people are placed'+(r.unplaced.length?': '+r.unplaced:''));
 ok(r.overlaps.length===0,'no overlapping cards'+(r.overlaps.length?': '+r.overlaps:''));
 ok(r.badParent.length===0,'every parent is above their child'+(r.badParent.length?': '+r.badParent:''));
 ok(r.badSpouse.length===0,'every couple sits side by side on one row'+(r.badSpouse.length?': '+r.badSpouse:''));
 ok(r.rowsAligned,'rows are on the generation grid'); console.log('  canvas',r.size.join('x'),'| connector paths',r.edges);
 // a different, small tree built from data only
 const small=[{a:{x:{name:'A Root',life:'1900 – 1970'},y:{name:'B Wife',life:'1902 – 1980'},z:{name:'C Child',life:'1930 – 2000'},w:{name:'D Child',life:'1933 – 2001'},v:{name:'E Spouse',life:'1931 – 2005'},u:{name:'F Grandchild',life:'1960 – '},t:{name:'G Grandchild',life:'1963 – '}},
   rel:{x:[['Spouse','y'],['Child','z'],['Child','w']],y:[['Spouse','x']],z:[['Father','x'],['Spouse','v'],['Child','u'],['Child','t']],w:[['Father','x']],v:[['Spouse','z']],u:[['Father','z']],t:[['Father','z']]}}];
 r=await check('small',[small[0].a,small[0].rel,{}]);
 ok(r.unplaced.length===0&&r.overlaps.length===0&&r.badParent.length===0&&r.badSpouse.length===0,'a new 7-person tree lays out correctly from relations alone');
 // add three people to the real data without touching coordinates
 r=await p.evaluate(()=>{
   const P={...PEOPLE,newkid:{name:'New Kid',life:'2000 – ',ini:'NK',facts:[],recs:[]},newmum:{name:'New Mum',life:'1975 – ',ini:'NM',facts:[],recs:[]},newkid2:{name:'New Kid Two',life:'2003 – ',ini:'N2',facts:[],recs:[]}};
   const R={...REL,margaret:[...REL.margaret,['Spouse','newmum'],['Child','newkid'],['Child','newkid2']],newmum:[['Spouse','margaret']],newkid:[['Mother','margaret']],newkid2:[['Father','newmum']]};
   const L=layoutTree(P,R,GHOSTS); const NW=TREE.w;
   const ids=Object.keys(L.pos); let ov=0; for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++){const a=L.pos[ids[i]],c=L.pos[ids[j]]; if(Math.abs(a[0]-c[0])<NW+20&&Math.abs(a[1]-c[1])<TREE.h+10) ov++;}
   return {placed:!!L.pos.newkid&&!!L.pos.newmum&&!!L.pos.newkid2, below:L.pos.newkid[1]>L.pos.margaret[1], ov};});
 ok(r.placed&&r.below&&r.ov===0,'adding a spouse and two children to Margaret in the data places them automatically below her');
 // rendering
 await p.evaluate(()=>{revealAllTree();go('tree','bl');S.tz=0.55;render()}); await p.waitForTimeout(300);
 const info=await p.evaluate(()=>({nodes:document.querySelectorAll('.tnode').length,paths:document.querySelectorAll('svg.lines path').length,labels:document.querySelectorAll('.claimlbl').length,find:document.querySelectorAll('.tsearch option').length}));
 const n=await p.evaluate(()=>Object.keys(PEOPLE).length);
 ok(info.nodes===n,'tree renders all '+n+' people'); ok(info.labels===3,'the three adoptions are labelled (a proven father replaces the claimed line)'); ok(info.find===n+1,'find-a-person lists everyone');
 ok(await p.evaluate(()=>{const A=LAY.pos; return A.harriet[0]<A.desmond[0]===(A.eliza[0]<A.clara[0]);}),'Harriet sits on her mother Eliza\'s side, Desmond on his mother Clara\'s side');
 await p.evaluate(()=>{S.sel='daphne';render()}); ok(await p.evaluate(()=>document.querySelector('.tnode.dis')!==null),'Daphne is drawn as disputed from her tag');
 console.log('page errors:',errs.length?errs:'none'); console.log(fails?'FAILURES: '+fails:'ALL PASS'); await b.close();
})();
