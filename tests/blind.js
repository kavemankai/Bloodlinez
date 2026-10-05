// The blind harness shows only what a player sees: visible text with numbered controls, never source or stored data.
const {execFileSync}=require('child_process'); const path=require('path'); const fs=require('fs');
const ROOT=path.resolve(__dirname,'..'), P=path.join(ROOT,'scripts','blind','play.js'), DIR=path.join(ROOT,'tests','shots','blind');
const env={...process.env,BLIND_DIR:DIR}; const run=(...a)=>execFileSync(process.execPath,[P,...a],{env}).toString();
let fails=0; const ok=(c,m)=>{console.log(c?'ok  ':'FAIL',m); if(!c)fails++};
try{
 fs.rmSync(DIR,{recursive:true,force:true});
 ok(/Game open/.test(run('start',path.join(ROOT,'index.html'))),'start opens the game');
 let L=run('look');
 ok(/\[1\] /.test(L)&&/Vane estate: your first file/.test(L),'look shows numbered controls and the inbox');
 ok(!/function\s*\(|=>|REC\[|localStorage|<script|treeChecks|CLAIMS/.test(L),'look never shows source code or data');
 const n=(L.match(/\[(\d+)\] B Bloodlines/)||[])[1]; run('click',n); L=run('look');
 const f=(L.match(/\[(\d+): text field "Search names, places or keywords"\]/)||[])[1]; ok(!!f,'the search field is numbered');
 run('type',f,'Ambrose','Vane'); run('enter',f); L=run('look');
 ok(/Birth registration, Ambrose Vane/.test(L),'typing and Enter run a search');
 ok(!/ambrose|cornelius|julian/.test(L.replace(/[A-Z][a-z]+/g,'')),'no internal ids leak into the text');
 ok(/Saved/.test(run('shot',path.join(DIR,'s.png')))&&fs.existsSync(path.join(DIR,'s.png')),'shot saves a screenshot');
 run('savelog',path.join(DIR,'log.json')); const J=JSON.parse(fs.readFileSync(path.join(DIR,'log.json'),'utf8'));
 ok(J.events.some(e=>e.type==='search'),'savelog writes the playtest log with the search in it');
}catch(e){ ok(false,'harness error: '+e.message.split('\n')[0]); }
finally{ try{run('stop')}catch(e){} }
console.log(fails?'FAILURES: '+fails:'ALL PASS');
