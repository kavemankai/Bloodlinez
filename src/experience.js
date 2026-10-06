/* First-hour investigation, fair arguments and durable progress. */
const BUILD_VERSION = 'first-hour-1';
const SAVE_VERSION = 4;
const SAVE_KEY = 'bloodlines-v3'; // retain the storage key so existing investigations migrate
const ownId=(o,id)=>typeof id==='string'&&Object.hasOwn(o,id);
const knownRecord = id => ownId(REC,id);
const opened = id => S.viewed.includes(id) || S.seen.includes(id);
const textValue = (v, limit=20000) => typeof v==='string' ? v.slice(0,limit) : '';
const objectValue = v => v && typeof v==='object' && !Array.isArray(v) ? v : {};
const arrayValue = v => Array.isArray(v) ? v : [];
function progressPayload(){
 const out={schemaVersion:SAVE_VERSION,build:BUILD_VERSION,case:1};
 KEEP.forEach(k=>out[k]=S[k]);return out;
}
function normaliseProgress(raw){
 const input=objectValue(raw), out=FRESH();
 if(input.schemaVersion>SAVE_VERSION) throw new Error('This save was made by a newer build. Keep it and open it in that build.');
 const aliases={licence1972:'licence1979'};
 const rec=id=>ownId(aliases,id)?aliases[id]:id;
 const reports=objectValue(input.reports);
 for(const [id,r0] of Object.entries(reports)){
  const r=objectValue(r0),a=rec(r.a),b=rec(r.b),photo=id.startsWith('cmp:');
  if(a===b || (photo?!(ownId(PH,a)&&ownId(PH,b)):!(id.startsWith('sig:')&&ownId(SIGNED,a)&&ownId(SIGNED,b)))) continue;
  const newid=(photo?'cmp:':'sig:')+[a,b].sort().join('-');
  out.reports[newid]={a,b,ok:r.ok===true,...(photo?{shared:arrayValue(r.shared).filter(x=>Object.hasOwn(MARK_NAME,x))}:{})};
 }
 const remap=id=>{
  if(typeof id!=='string')return '';
  if(reports[id]){const r=reports[id];return id.slice(0,4)+[rec(r.a),rec(r.b)].sort().join('-');}
  return rec(id);
 };
 const exists=id=>knownRecord(id)||ownId(out.reports,id);
 const records=v=>[...new Set(arrayValue(v).map(remap).filter(exists))];
 for(const k of ['pins','seen','viewed','recent'])out[k]=records(input[k]);
 out.notes=textValue(input.notes);out.cookie=input.cookie===true;
 out.read=arrayValue(input.read).filter(id=>ownId(MAIL,id));
 out.mode=input.mode==='challenge'?'challenge':input.mode==='investigation'?'investigation':input.attempts>0?'challenge':'investigation';
 out.attempts=Number.isSafeInteger(input.attempts)?Math.max(0,input.attempts):0;
 out.won=input.won===true;out.failed=input.failed===true;
 out.flags=Object.fromEntries(Object.entries(objectValue(input.flags)).filter(([k,v])=>/^[a-zA-Z0-9_]+$/.test(k)&&['string','number','boolean'].includes(typeof v)));
 for(const f of FIND){
  const ans=textValue(objectValue(input.ans)[f.id],100);if(ans)out.ans[f.id]=ans;
  out.ev[f.id]=records(objectValue(input.ev)[f.id]).slice(0,MAX_EV);
  if(typeof objectValue(input.res)[f.id]==='boolean')out.res[f.id]=input.res[f.id];
  out.claims[f.id]=Object.fromEntries(Object.entries(objectValue(objectValue(input.claims)[f.id])).filter(([k,v])=>['person','parent','share','heir','law'].includes(k)&&typeof v==='string').map(([k,v])=>[k,v.slice(0,100)]));
 }
 const tree=objectValue(input.tree),types=Object.keys(REL_LABEL);
 out.tree.people=[...new Set([...out.tree.people,...arrayValue(tree.people).filter(id=>ownId(PEOPLE,id))])];
 out.tree.links=arrayValue(tree.links).filter(l=>l&&ownId(PEOPLE,l.a)&&ownId(PEOPLE,l.b)&&l.a!==l.b&&types.includes(l.t)).map((l,i)=>({id:i+1,a:l.a,b:l.b,t:l.t,recs:records(l.recs)}));
 out.tree.nid=out.tree.links.length;
 out.tree.events=arrayValue(tree.events).filter(e=>e&&ownId(PEOPLE,e.p)&&ownId(EVENT_DEFS,rec(e.rec))&&EVENT_DEFS[rec(e.rec)]?.some(d=>d.k===e.k)).map(e=>{
  const def=EVENT_DEFS[rec(e.rec)].find(d=>d.k===e.k);
  return {p:e.p,k:e.k,rec:rec(e.rec),date:def.date||null,say:def.say,st:def.infer?'reading':def.p===e.p?'proven':'unproven'};
 });
 out.tree.people=[...new Set([...out.tree.people,...out.tree.links.flatMap(l=>[l.a,l.b]),...out.tree.events.map(e=>e.p)])];
 const q=objectValue(input.q);out.q={name:textValue(q.name,300),kw:textValue(q.kw,300),kind:q.kind==='All'||ownId(COLL,q.kind)?q.kind:'All'};
 out.searched=input.searched===true;
 const lab=objectValue(input.lab);out.lab={a:ownId(PH,rec(lab.a))?rec(lab.a):'',b:ownId(PH,rec(lab.b))?rec(lab.b):'',ma:[],mb:[],miss:Math.max(0,Number(lab.miss)||0)};
 for(const side of ['a','b'])out.lab['m'+side]=out.lab[side]?arrayValue(lab['m'+side]).filter(m=>Object.hasOwn(marksOf(out.lab[side]),m)):[];
 for(const side of ['a','b']){const hw=rec(objectValue(input.hw)[side]);out.hw[side]=ownId(SIGNED,hw)?hw:'';const d=remap(objectValue(input.desk)[side]);out.desk[side]=exists(d)?d:'';}
 const prelim=objectValue(input.prelim);out.prelim={answer:['review','confirmed','unrelated'].includes(prelim.answer)?prelim.answer:'',ev:records(prelim.ev).slice(0,4),sent:prelim.sent===true};
 out.log=arrayValue(input.log).filter(x=>x&&typeof x.msg==='string').slice(0,40).map(x=>({t:textValue(x.t,40),msg:textValue(x.msg,1000)}));
 out.plog=arrayValue(input.plog).filter(x=>x&&Number.isFinite(x.t)&&typeof x.type==='string').slice(-20000);
 out.kit=['julian','margaret','daphne','you'].includes(input.kit)?input.kit:'julian';
 const validRoute=(t,r)=>typeof r==='string'&&(t==='bl'?/^(home|tree|search|hints)$/.test(r)||(/^record\//.test(r)&&exists(r.slice(7)))||(/^person\//.test(r)&&ownId(PEOPLE,r.split('/')[1])&&['facts','sources','hints'].includes(r.split('/')[2]))||/^dna\/(julian|margaret|daphne|you)$/.test(r):t==='mail'?r==='inbox'||(/^inbox\//.test(r)&&ownId(MAIL,r.slice(6))):/^(law|matter\/(overview|desk|preliminary|evidence|lab|hand|ruling|notes))$/.test(r));
 for(const t of ['bl','mail','net']){
  const h=objectValue(objectValue(input.hist)[t]);const current=arrayValue(h.s)[h.i];
  if(validRoute(t,current))out.hist[t]={s:[current],i:0};
 }
 if(['bl','mail','net'].includes(input.tab))out.tab=input.tab;
 return out;
}
function restoreProgress(){
 let raw;
 try{
  raw=localStorage.getItem(SAVE_KEY);
  if(raw){
   const parsed=JSON.parse(raw);if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))throw new Error('Invalid save');
   const clean=normaliseProgress(parsed);Object.assign(S,clean);
   const lost=arrayValue(parsed.pins).length>S.pins.length;
   if(parsed.schemaVersion!==SAVE_VERSION||lost){
    try{localStorage.setItem('bloodlines-recovery-backup',raw);}catch(e){}
    saveNotice=lost?'Recovered your investigation. Unavailable evidence was removed; the original save is available in the case desk.':'Your previous investigation has been upgraded. An original backup is available in the case desk.';
   }
  }
 }catch(e){
  if(raw){try{localStorage.setItem('bloodlines-recovery-backup',raw);}catch(ignore){}}
  saveNotice='Could not open the saved investigation. Its original data has been kept where possible; use the case desk to export it. '+(e.message.includes('newer build')?e.message:'A fresh investigation is available.');
 }
 for(const [id,r] of Object.entries(S.reports))REC[id]=id.startsWith('sig:')?sigRec(id):cmpRec(id);
 if(/[?&]playtest=1\b/.test(location.search)&&!S.flags.plog){S.flags.plog=true;S.plog.push({type:'start',t:Date.now()});}
}
function downloadProgress(raw,name){
 const blob=new Blob([raw],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}

/* Every edge joins actual compared documents. A name alone never joins two faces. */
function identityPath(from,to){
 const adj={};
 S.tree.links.filter(l=>['took','same'].includes(l.t)&&linkStatus(l)==='proven').forEach(l=>l.recs.forEach(id=>{
  if(!supportedBy(l,id))return;const r=S.reports[id];if(!r?.ok)return;
  (adj[r.a] ||= new Set()).add(r.b);(adj[r.b] ||= new Set()).add(r.a);
 }));
 const stack=Object.keys(adj).filter(id=>docOwner(id)===from),seen=new Set(stack);
 while(stack.length){const id=stack.pop();if(docOwner(id)===to)return true;for(const next of adj[id]||[]){if(!seen.has(next)){seen.add(next);stack.push(next);}}}
 return false;
}
function discoveredPeople(){return [...new Set([...S.tree.people,...S.viewed.flatMap(id=>peopleIn(id))])].filter(id=>ownId(PEOPLE,id));}
function leadState(){
 const adopted=S.tree.links.some(l=>l.t==='adopt'&&l.b==='julian'&&linkStatus(l)==='proven');
 const pair=opened('licence2019')&&opened('licence2025');
 const older=Object.values(S.reports).some(r=>r.ok&&PH[r.a]&&PH[r.b]&&Math.abs(PH[r.a].year-PH[r.b].year)>100);
 const steps=[
  {id:'relationship',title:"The claimant's place in the family",done:adopted,body:'Look into how the claimant came to be named in the will. Add what the records support to your tree.',action:['searchname','Julian Vane','Search the claimant'],hints:['Look for a record of a change in household, not just the will.','Try the adoption collection in the archive.','Search Julian Vane and open the 1996 adoption order.']},
  {id:'objection',title:'The objection',done:opened('letterMargaret'),body:'Margaret objects to the claimant. Read her own account before deciding what to check.',action:['open','letterMargaret',"Read Margaret's letter"],hints:['An objection is a lead, not proof.','Separate what Margaret remembers from what she concludes.','Look for the feature she remembers about the boy.']},
  {id:'documents',title:"The claimant's papers",done:pair,body:'Look at what the archive holds on the claimant himself. Open the original records, then bring them to your case desk.',action:['searchname','Julian Vane','Search the claimant'],hints:['A replacement document is easier to assess beside an earlier one.','Search Julian licence. Both records are in the archive.','Open the 2019 and 2025 licences and compare the faces and conditions.']},
  {id:'history',title:'The family records',done:older,body:'Older records name earlier members of the family. Follow those names and compare what you find. The archive is open to you.',action:['go','tree','Open your tree','bl'],hints:['Keep track of names, dates and identifying features.','Family records can lead to portraits and photographs as well as registrations.','The older studio portraits can be compared in the photo lab. A resemblance still needs certification.']},
  {id:'standard',title:'The standard of proof',done:pinned('lawA2'),body:'The law library explains how identity evidence is assessed. Read the provision and cite it before relying on a comparison.',action:['go','law','Open the law library','net'],hints:['Look for the article about identification.','Read what counts as an identifying document.','Article 2 describes the required documents and time span.']},
  {id:'report',title:'Your concern on the record',done:S.prelim.sent,body:'You can send a limited identity concern while the wider investigation continues. Explain it with selected evidence; this does not use a final filing.',action:['go','matter/preliminary','Prepare a preliminary report','net'],hints:['This report does not decide who inherits.','Use documents that show why identification needs another look.','Two dated licences and the witness account can support a request for review.']}
 ];
 return {steps,current:steps.find(s=>!s.done)||null};
}
function actionButton(a,cls='nbtn'){return `<button class="${cls}" data-a="${a[0]}" data-v="${a[1]}" ${a[3]?`data-t="${a[3]}"`:''}>${a[2]}</button>`;}
function investigationView(){
 const {steps,current}=leadState(),hint=current?Math.min(3,Number(S.flags['lead_'+current.id])||0):0;
 return `<section class="investigation box" aria-label="Current investigation"><div class="bb"><div class="eyebrow">Your first night · work at your own pace</div><h2>${current?current.title:'Preliminary concern recorded'}</h2><p>${current?current.body:'The firm has your concern. Continue the investigation and assemble the final findings when your argument is ready.'}</p>
 <div class="opening-actions">${current?actionButton(current.action):actionButton(['go','inbox/mPre','Read the partner reply','mail'])}${current?`<button class="lnk" data-a="lead-hint" data-v="${current.id}">${hint?'Another hint':'Need a lead?'}</button>`:''}</div>
 ${hint?`<p class="hint-note" role="status">${current.hints[hint-1]}</p>`:''}
 <details class="milestones"><summary>${steps.filter(s=>s.done).length} of ${steps.length} milestones · optional guidance</summary><ol>${steps.map(s=>`<li>${s.done?'✓':'○'} ${s.title}</li>`).join('')}</ol><p>You can investigate in any order. These prompts never lock the archive.</p></details>
 </div></section>`;
}
function preliminaryCheck(){
 const ev=S.prelim.ev.filter(pinned);
 if(S.prelim.answer!=='review')return {ok:false,msg:'The attached material does not settle identity. State the limited concern you can support, rather than a final conclusion.'};
 if(!ev.includes('licence2019')||!ev.includes('licence2025'))return {ok:false,msg:'Attach the documents your concern rests on, and something that explains why they need another look.'};
 const witness=ev.includes('letterMargaret');
 const comparison=ev.some(id=>S.reports[id]?.ok&&[S.reports[id].a,S.reports[id].b].includes('licence2025'));
 if(!witness&&!comparison)return {ok:false,msg:'Attach the documents your concern rests on, and something that explains why they need another look.'};
 return {ok:true,msg:'Concern recorded. The partners have paused distribution pending your full findings. This is not a determination of identity or inheritance.'};
}
function preliminaryView(){
 return `<section class="box"><div class="bh"><h2>Preliminary identity report</h2><span class="pill">No final filing used</span></div><div class="bb"><p>Flag a documented concern while you continue the investigation. A preliminary report does not name the person behind the claim or decide the estate.</p>
 ${S.prelim.sent?`<div class="verdict ok"><b>Concern recorded</b><p>Distribution is paused pending your full findings. Your working evidence and tree remain available.</p>${actionButton(['go','inbox/mPre','Read the partner reply','mail'])}</div>`:`<form data-form="preliminary"><label class="claim-field">Your assessment<select id="prelim-answer"><option value="">Choose an assessment</option>${[['review','Identification needs further examination'],['confirmed','Identity is conclusively established'],['unrelated','No identification issue affects this matter']].map(([v,t])=>`<option value="${v}" ${S.prelim.answer===v?'selected':''}>${t}</option>`).join('')}</select></label><p>Select up to four saved sources supporting this limited assessment.</p><div class="chips">${S.pins.map(id=>`<button type="button" class="chip" data-a="prelim-evidence" data-v="${id}" aria-pressed="${S.prelim.ev.includes(id)}">${esc(REC[id].title)}</button>`).join('')||'<p>No saved sources yet. Use Save to matter on a record.</p>'}</div><p id="prelim-feedback" role="status"></p><button class="nbtn">Send preliminary report</button></form>`}
 </div></section>`;
}
MAIL.mPre={from:'R. Ashgrove, Senior Partner',time:'just now',subj:'RE: Identification requires review',body:()=>`<p>Your concern is on the file. Distribution is paused.</p><p>You have shown why the identification needs examination. You have not yet established who the claimant is or who should receive the estate.</p><p>Follow the documentary trail. Test a theory against original records, and distinguish a recorded name from a demonstrated identity. Apply the Accord where its requirements are met.</p><p>Keep your working hypotheses. Only supported claims belong in the final argument.</p><p>R.A.</p><button class="mlbtn" data-a="go" data-t="net" data-v="matter/overview">Continue the investigation</button>`};
const originalMailIds=mailIds;
mailIds=function(){const ids=originalMailIds();if(S.prelim.sent)ids.unshift('mPre');return ids;};

function deskView(){
 const avail=[...new Set([...S.viewed,...S.pins])].filter(knownRecord);
 const pane=side=>{const id=S.desk[side];return `<section class="desk-pane"><label class="claim-field">Source ${side.toUpperCase()}<select data-desk="${side}"><option value="">Choose an opened source</option>${avail.map(k=>`<option value="${k}" ${id===k?'selected':''}>${esc(REC[k].title)}</option>`).join('')}</select></label>${id&&REC[id]?`<div class="desk-source">${paperHtml(id,REC[id].render())}</div><div class="opening-actions">${actionButton(['open',id,'Open original'],'nbtn sec')}<button class="nbtn sec" data-a="pin" data-v="${id}">${pinned(id)?'Saved · remove':'Save to matter'}</button></div>`:'<div class="empty">Open records in the archive or mail. They will be available here for comparison.</div>'}</section>`};
 return `<div class="box"><div class="bh"><h2>Case desk</h2><button class="lnk" data-a="notebook">Open notebook</button></div><div class="bb"><p>Compare original sources. A resemblance is an observation; the photo lab certifies identifying marks.</p><div class="desk-grid">${pane('a')}${pane('b')}</div></div></div>
 <div class="box"><div class="bh"><h2>Progress and backups</h2></div><div class="bb"><p>Progress saves on this device. Export a copy before moving browsers or replacing an investigation.</p><div class="opening-actions"><button class="nbtn sec" data-a="save-export">Export progress</button><label class="nbtn sec">Import progress<input id="save-import" type="file" accept="application/json,.json" class="file-control"></label><button class="lnk" data-a="save-original">Export recovery backup</button></div><p id="import-feedback" role="status"></p>
 <label class="claim-field">Filing policy<select id="filing-mode" ${S.attempts||S.won||S.failed?'disabled':''}><option value="investigation" ${S.mode==='investigation'?'selected':''}>Investigation · revise and resubmit</option><option value="challenge" ${S.mode==='challenge'?'selected':''}>Associate challenge · three final filings</option></select></label><p>The policy is fixed after the first final filing. Preliminary reports are separate in both modes.</p></div></div>`;
}
function renderExperience(){
 const el=document.getElementById('experience-tools');if(!el)return;
 el.innerHTML=`<div class="desk-dock"><button data-a="go" data-t="net" data-v="matter/overview">Investigation</button><button data-a="go" data-t="net" data-v="matter/desk">Case desk</button><button data-a="notebook" aria-expanded="${!!S.flags.notebook}">Notebook</button></div>${S.flags.notebook?`<aside class="quick-notebook" aria-label="Working notebook"><div class="bh"><h2>Working notebook</h2><button data-a="notebook" aria-label="Close notebook">Close</button></div><p>Private theories. These notes are never graded.</p><textarea id="quicknotes" aria-label="Working notes" placeholder="What did you notice? Which source supports it?">${esc(S.notes)}</textarea></aside>`:''}`;
 const notice=document.getElementById('save-status');notice.textContent=saveNotice;notice.hidden=!saveNotice;
}

/* Neutral components instead of sentences containing the solution. */
function claimValues(F){
 const c=S.claims[F]||{};if(Object.keys(c).length)return c;
 const a=S.ans[F];
 if(F==='F1')return {person:a==='grandson'?'julian':a||''};
 if(F==='F3')return {person:a||''};
 if(F==='F4')return a==='realcornelius'?{parent:'cornelius',share:'none'}:a==='daughter'?{parent:'cornelius',share:'child'}:a==='notvane'?{parent:'unknown',share:'none'}:a==='unproven'?{parent:'unknown',share:'hold'}:{};
 if(F==='F5')return a==='margaretA4'?{heir:'margaret',law:'lawA4'}:a==='margaretSA'?{heir:'margaret',law:'lawSA'}:a==='julian'?{heir:'julian',law:'will2024'}:{};
 return {};
}
function syncClaimAnswer(F){
 const c=S.claims[F]||{};let answer='';
 if(F==='F1')answer=c.person==='julian'?'grandson':c.person||'';
 if(F==='F3')answer=c.person||'';
 if(F==='F4'&&c.parent&&c.share)answer=c.parent==='cornelius'&&c.share==='none'?'realcornelius':c.share==='hold'?'unproven':c.share==='child'?'daughter':'notvane';
 if(F==='F5'&&c.heir&&c.law)answer=c.heir==='margaret'&&c.law==='lawA4'?'margaretA4':c.heir==='margaret'&&c.law==='lawSA'?'margaretSA':c.heir==='julian'&&c.law==='will2024'?'julian':`claim:${c.heir}:${c.law}`;
 if(answer)S.ans[F]=answer;else delete S.ans[F];
}
function claimFields(f,locked){
 const c=claimValues(f.id),people=discoveredPeople().map(id=>[id,NAMEOF(id)]);
 const sel=(key,label,options)=>`<label class="claim-field">${label}<select data-claim="${f.id}" data-field="${key}" ${locked?'disabled':''}><option value="">Choose…</option>${options.map(([v,t])=>`<option value="${v}" ${c[key]===v?'selected':''}>${esc(t)}</option>`).join('')}</select></label>`;
 if(f.id==='F1')return sel('person','Identity of the present claimant',[...people,['impostor','Someone not yet identified']]);
 if(f.id==='F2')return `<label class="claim-field">Your finding<select data-answer="F2" ${locked?'disabled':''}><option value="">Choose…</option>${[['drowned','Death occurred as registered'],['staged','Death was staged'],['open','Leave the death unresolved']].map(([v,t])=>`<option value="${v}" ${S.ans.F2===v?'selected':''}>${t}</option>`).join('')}</select></label>`;
 if(f.id==='F3')return sel('person','Identity of the male remains',[...people,['stranger','Someone not yet identified'],['nobody','No male remains']]);
 if(f.id==='F4')return sel('parent',"Daphne's father",[...people,['unknown','Not established']])+sel('share','Entitlement in this estate',[['none','No share'],['child',"A child's share"],['hold','Hold the claim open']]);
 return sel('heir','Recipient',[...people,['registry','Nocturnal Registry'],['owner','Current owner'],['split','Joint distribution']])+lawField(f,locked);
}
function lawField(f,locked){
 const laws=S.pins.filter(id=>REC[id]?.kind==='Law'||id==='will2024');
 if(!laws.length)return `<label class="claim-field">Provision relied on<span style="display:block;font-weight:400;color:var(--bl-muted)">Save provisions from the law library to cite them here.</span></label>`;
 const c=claimValues(f.id);
 return `<label class="claim-field">Provision relied on<select data-claim="${f.id}" data-field="law" ${locked?'disabled':''}><option value="">Choose…</option>${laws.map(id=>`<option value="${id}" ${c.law===id?'selected':''}>${esc(REC[id].title)}</option>`).join('')}</select></label>`;
}
/* challenge mode locks and marks each finding; investigation mode reports only how many passed, so answers can't be found by trial */
const challenge = () => S.mode==='challenge';
const lockedIn = f => challenge() && S.res[f.id]===true;
const acceptedCount = () => FIND.filter(f=>S.res[f.id]===true).length;
function preflight(){
 const missing=FIND.filter(f=>!lockedIn(f)&&!S.ans[f.id]);
 if(missing.length)return ['Complete each final finding before filing.'];
 const empty=FIND.filter(f=>!lockedIn(f)&&!S.ev[f.id].some(pinned));
 if(empty.length)return [`Attach supporting evidence to finding${empty.length>1?'s':''} ${empty.map(f=>f.id.slice(1)).join(', ')}. No filing has been used.`];
 return [];
}
function showProcedureFeedback(message){const el=document.getElementById('rulemsg');el.textContent=message;el.focus();}
function argumentView(){
 const done=S.won||S.failed,fire=['inquest1934','death1934','news1934'].some(opened);
 const hintBtn=f=>`<button type="button" class="lnk" data-a="finding-hint" data-v="${f.id}">Request a research hint</button>${S.flags['research_'+f.id]?`<p class="nudge">${f.nudge}</p>`:''}`;
 const feedback=f=>challenge() ? (S.res[f.id]===false?`<p class="review-feedback">${S.ev[f.id].includes('hintOfficial')?'A member-tree hint is a lead, not original evidence.':'The submitted argument does not yet establish this finding. Recheck your conclusion, its sources and the supported claims in your tree.'}</p>${hintBtn(f)}`:'') : (S.attempts&&!done?hintBtn(f):'');
 const tally = !challenge()&&S.attempts&&!S.won ? `<p class="review-feedback" role="status">Filing ${S.attempts}: the partners accepted ${acceptedCount()} of 5 findings. They don't say which.${FIND.some(f=>S.ev[f.id].includes('hintOfficial'))?' A member-tree hint is a lead, not original evidence.':''}</p>` : '';
 return `<div class="box"><div class="bb"><div class="eyebrow">Final argument</div><h2>File a ruling</h2><p id="rulemsg" role="status" tabindex="-1">Build your findings from people and sources you have discovered. Working hypotheses stay in your tree; only the supported proof is assessed.</p>${treeSummary()}<p>${challenge()?`${Math.max(0,3-S.attempts)} final filings remaining. Accepted findings stay locked in.`:`${S.attempts} final filing${S.attempts===1?'':'s'} · revisions allowed. All five must be accepted in the same filing.`}</p>${tally}<button class="lnk" data-a="go" data-t="net" data-v="matter/preliminary">Only ready to flag an identity concern? Send a preliminary report.</button></div></div>
 <form data-form="rule" class="argument-form">${FIND.map((f,i)=>{const locked=done||lockedIn(f);
 return `<fieldset class="finding ${challenge()?(S.res[f.id]===true?'ok':S.res[f.id]===false?'no':''):''}"><legend>Finding ${i+1} · ${f.id==='F3'&&!fire?'Earlier records':f.q}</legend>${challenge()&&S.res[f.id]===true?'<span class="pill green">Accepted</span>':''}${feedback(f)}
 ${f.id==='F3'&&!fire&&!done?'<p>Follow the earlier family records before making this finding. The archive remains open.</p>':`<div class="claim-fields">${claimFields(f,locked)}</div>`}
 <p>Supporting evidence · ${S.ev[f.id].filter(pinned).length} attached · four at most${f.id==='F1'?' · three identifying documents required':''}</p>
 <details class="evidence-picker" data-evidence-panel="${f.id}" ${(S.flags['ev_'+f.id]??S.pins.length<8)?'open':''}><summary>Choose from ${S.pins.length} saved sources</summary><div class="chips">${S.pins.map(id=>`<button type="button" class="chip" data-a="ev" data-f="${f.id}" data-v="${id}" aria-pressed="${S.ev[f.id].includes(id)}" ${locked?'disabled':''}>${esc(REC[id].title)}</button>`).join('')||'<p>Save sources to the matter as you investigate.</p>'}</div></details></fieldset>`;
 }).join('')}<div class="opening-actions"><button class="nbtn" ${done?'disabled':''}>${S.won?'Ruling accepted':S.failed?'Matter reassigned':'File final ruling'}</button><button type="button" class="lnk" data-a="preflight">Check paperwork</button></div></form>
 ${S.won?`<div class="verdict ok"><b>All five findings accepted</b><p>Ambrose Vane used the identities of Desmond, Cornelius and Julian after the handovers of 1934, 1976 and 2025. The registered deaths concealed those changes. Under Article 4, Margaret inherits through the bloodline begun before his turning. Your findings establish the identity and succession; they do not by themselves prove who caused the disasters.</p>${actionButton(['go','inbox/m5','Read the resolution','mail'])}</div>`:''}${S.failed?'<div class="verdict no"><b>Matter reassigned</b><p>Three final filings used in challenge mode. Read your mail.</p></div>':''}`;
}

/* Keep help consistent with the new filing policy, without Case 1 answers. */
GUIDE.find(g=>g.id==='job').h='<p>You are a night-shift associate at Ashgrove &amp; Pell. Verify the claimant before distributing the estate. Begin with the claimant and the objection to him.</p><p>A preliminary report records a limited concern. The final argument settles five findings with supported evidence and tree claims.</p>';
GUIDE.find(g=>g.id==='ruling').h='<p>Choose discovered people and saved legal provisions, then attach the sources that establish each finding. Use Check paperwork to catch missing fields or attachments without using a filing. It does not tell you whether your theory is right.</p><p>Investigation mode allows revisions: the partners tell you how many findings they accept, not which, and all five must pass in the same filing. Associate challenge allows three final filings and marks each finding; accepted findings lock in. Choose a policy in the case desk before your first final filing. Research hints are optional and recorded separately.</p>';
GUIDE.find(g=>g.id==='tree').h=GUIDE.find(g=>g.id==='tree').h.replace('with no unproven links among the people involved. They will not tell you what is missing until your second filing.','using supported claims. Tentative links remain private working hypotheses and do not invalidate your proof.');
GUIDE.find(g=>g.id==='lab').h+='<p>Keyboard: focus a photo, move the inspection cursor with arrow keys, hold Shift for smaller movements, then press Enter or Space to mark that point. Home returns the cursor to the centre. The same mark tolerance applies to mouse and keyboard.</p>';

GUIDE.find(g=>g.id==='gloss').h=GUIDE.find(g=>g.id==='gloss').h.replace('You get three.','Revisions are allowed in investigation mode; challenge mode allows three.');

/* Event additions. Existing archive controls keep their original handlers. */
document.addEventListener('click',e=>{
 const summary=e.target.closest('[data-evidence-panel] > summary');
 if(summary){e.preventDefault();const panel=summary.parentElement;panel.open=!panel.open;S.flags['ev_'+panel.dataset.evidencePanel]=panel.open;save();return;}
 const b=e.target.closest('[data-a]');if(!b||b.disabled)return;const v=b.dataset.v;
 if(b.dataset.a==='notebook'){S.flags.notebook=!S.flags.notebook;save();renderExperience();if(S.flags.notebook)document.getElementById('quicknotes').focus();}
 if(b.dataset.a==='lead-hint'){S.flags['lead_'+v]=Math.min(3,(Number(S.flags['lead_'+v])||0)+1);plog('lead_hint',{lead:v,level:S.flags['lead_'+v]});save();render();}
 if(b.dataset.a==='finding-hint'){S.flags['research_'+v]=true;plog('research_hint',{finding:v});save();render();}
 if(b.dataset.a==='preflight'){const issues=preflight();showProcedureFeedback(issues.join(' ')||'Fields and attachments are present. This checks procedure only, not whether the argument is correct.');}
 if(b.dataset.a==='prelim-evidence'){
  if(S.prelim.sent)return;const ids=S.prelim.ev;
  if(!ids.includes(v)&&ids.length>=4){toast('Four sources at most');return;}
  S.prelim.ev=ids.includes(v)?ids.filter(id=>id!==v):[...ids,v];save();render();
 }
 if(b.dataset.a==='save-export')downloadProgress(JSON.stringify(progressPayload(),null,2),'bloodlinez-progress.json');
 if(b.dataset.a==='save-original'){
  let raw;try{raw=localStorage.getItem('bloodlines-recovery-backup');}catch(ignore){}
  if(raw)downloadProgress(raw,'bloodlinez-recovery-backup.json');else toast('No recovery backup is stored on this device.');
 }
});
document.addEventListener('input',e=>{if(e.target.id==='quicknotes'){S.notes=e.target.value;const full=document.getElementById('notes');if(full)full.value=S.notes;save();}if(e.target.id==='notes'){const quick=document.getElementById('quicknotes');if(quick)quick.value=S.notes;}});
document.addEventListener('change',async e=>{
 const t=e.target;
 if(t.dataset.desk){S.desk[t.dataset.desk]=t.value;save();render();document.querySelector(`[data-desk="${t.dataset.desk}"]`).focus();}
 if(t.id==='prelim-answer'){S.prelim.answer=t.value;save();}
 if(t.dataset.claim){S.claims[t.dataset.claim]={...claimValues(t.dataset.claim),[t.dataset.field]:t.value};syncClaimAnswer(t.dataset.claim);save();}
 if(t.dataset.answer){if(t.value)S.ans[t.dataset.answer]=t.value;else delete S.ans[t.dataset.answer];save();}
 if(t.id==='filing-mode'&&!S.attempts&&!S.won&&!S.failed){S.mode=t.value;save();render();}
 if(t.id==='save-import'){
  const file=t.files[0];if(!file)return;
  try{
   if(file.size>8000000)throw new Error('Save file is too large.');
   const parsed=JSON.parse(await file.text());if(!parsed||typeof parsed!=='object'||!parsed.tree||!parsed.hist||parsed.case&&parsed.case!==1)throw new Error('This is not a Bloodlinez progress file.');
   const clean=normaliseProgress(parsed);
   if(!confirm('Replace this investigation with the imported progress? Your current progress will be kept as a recovery backup.'))return;
   // Complete the storage write before changing the live investigation.
   localStorage.setItem('bloodlines-recovery-backup',JSON.stringify(progressPayload()));
   localStorage.setItem(SAVE_KEY,JSON.stringify({...clean,schemaVersion:SAVE_VERSION,build:BUILD_VERSION,case:1}));
   location.reload();
  }catch(err){const msg=document.getElementById('import-feedback');if(msg)msg.textContent='Import not completed: '+err.message;}
 }
});
document.addEventListener('submit',e=>{
 if(e.target.dataset.form!=='preliminary')return;e.preventDefault();if(S.prelim.sent)return;
 const result=preliminaryCheck();
 if(!result.ok){document.getElementById('prelim-feedback').textContent=result.msg;plog('preliminary_rejected',{evidence:S.prelim.ev});return;}
 S.prelim.sent=true;plog('preliminary_accepted',{evidence:[...S.prelim.ev]});log('Preliminary identity concern recorded; distribution paused');save();render();toast('Preliminary report accepted. You have new mail.');
});

const inspectionCursors={};
const photoSize=id=>({w:PH[id].w||120*PH[id].faces.length,h:PH[id].h||150});
function inspectionCursor(side,id){
 if(!inspectionCursors[side]||inspectionCursors[side].id!==id)inspectionCursors[side]={id,x:photoSize(id).w/2,y:photoSize(id).h/2};
 return inspectionCursors[side];
}
document.addEventListener('keydown',e=>{
 const svg=e.target.closest('svg[data-lab]');if(!svg||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Enter',' ','Home'].includes(e.key))return;
 e.preventDefault();const id=svg.dataset.id,side=svg.dataset.side,c=inspectionCursor(side,id),size=photoSize(id),step=size.w*(e.shiftKey?.005:.035);
 if(e.key==='Home'){c.x=size.w/2;c.y=size.h/2;}
 if(e.key==='ArrowLeft')c.x-=step;if(e.key==='ArrowRight')c.x+=step;if(e.key==='ArrowUp')c.y-=step;if(e.key==='ArrowDown')c.y+=step;
 c.x=Math.max(0,Math.min(size.w,c.x));c.y=Math.max(0,Math.min(size.h,c.y));
 if(e.key==='Enter'||e.key===' '){const m=marksOf(id),hit=Object.keys(m).find(k=>Math.hypot(m[k][0]-c.x,m[k][1]-c.y)<(PH[id].hit||8));
  if(hit){if(!S.lab['m'+side].includes(hit))S.lab['m'+side].push(hit);toast('Marked: '+MARK_NAME[hit]);}else{S.lab.miss++;toast('No identifying mark at that point.');}save();
 }
 render();document.querySelector(`svg[data-side="${side}"]`).focus({preventScroll:true});
});
