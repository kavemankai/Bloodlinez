/* ================= EXTRA DATA ================= */
PEOPLE.arthur = {name:'Arthur Holloway',life:'1884 – 1951',ini:'AH',facts:[['Born','1884, Ashby'],['Married','Harriet Vane, 1912'],['Occupation',"Ship's chandler"],['Died','1951, Ashby']],recs:['photo1912']};
const SEX = {ambrose:'m',eliza:'f',harriet:'f',arthur:'m',cornelius:'m',thomas:'m',desmond:'m',daphne:'f',margaret:'f',julian:'m'};
const REL = {
  ambrose:[['Spouse','eliza'],['Child','harriet'],['Child','cornelius']],
  eliza:[['Spouse','ambrose'],['Child','harriet']],
  harriet:[['Father','ambrose'],['Mother','eliza'],['Spouse','arthur'],['Child','thomas']],
  arthur:[['Spouse','harriet'],['Child','thomas']],
  thomas:[['Mother','harriet'],['Father','arthur'],['Child','margaret']],
  margaret:[['Father','thomas']],
  cornelius:[['Father','ambrose'],['Child','desmond']],
  desmond:[['Father','cornelius'],['Child','julian']],
  julian:[['Father','desmond']],
  daphne:[['Claimed father','cornelius']]
};
const PHOTO_OF = {ambrose:'photo1889',cornelius:'licence1972',julian:'licence2019',thomas:'photo1950'};
const HINT_OF = {julian:['hintOfficial'],ambrose:['h2','h3'],harriet:['h4']};
const COLL = {Census:'Ashby Census Returns, 1841–1921',Birth:'Ashby District Birth Registrations, 1850–2025',Death:'Ashby District Death Registrations, 1850–2025',
  Photo:'Ashby Studio & Parish Photographs, 1860–1990',Newspaper:'The Ashby Courier Archive, 1871–2025',Roll:'Electoral Rolls, 1903–2025',ID:'Motor Registry Licence Records, 1925–2024',
  Legal:'Probate & Trust Instruments (Professional)',Medical:'Ashby Hospital Registers, 1880–1950',Marine:'Harbour Authority Incident Reports, 1900–2025',Invoice:'Professional Uploads: Funeral & Estate Accounts'};
const PAGE_KINDS = new Set(Object.keys(COLL));
const IDX = {
  census1891:[['Name','Ambrose Vane'],['Age','34'],['Estimated birth year','abt 1857'],['Relation to head','Head'],['Spouse','Eliza Vane'],['Child','Harriet Vane'],['Residence','14 Hollow Lane, Ashby'],['Occupation','Night clerk']],
  photo1889:[['Name','Ambrose Vane'],['Photo date','1889'],['Place','Ashby'],['Studio','Halloran & Sons']],
  photo1912:[['Names','Arthur Holloway; A. Vane'],['Event','Marriage'],['Event date','1912'],['Place',"St Columba's, Ashby"],['Witness','R. Ashgrove']],
  photo1950:[['Name','Thomas Holloway'],['Photo date','1950'],['Source','Ashby Rowing Club annual']],
  photo1962:[['Name','Cornelius Vane'],['Publication','The Ashby Courier'],['Date','17 Mar 1962'],['Page','3']],
  hospital1888:[['Name','Ambrose Vane'],['Age','31'],['Admission date','14 Feb 1888'],['Discharge date','14 Feb 1888 (self)'],['Hospital','Ashby Hospital']],
  news1888:[['Name','Ambrose Vane'],['Publication','The Ashby Courier'],['Date','16 Feb 1888'],['Page','2']],
  birth1888:[['Name','Harriet Vane'],['Birth date','4 Jun 1888'],['Birth place','Vane House, Ashby'],['Father','Ambrose Vane'],['Mother','Eliza Marsh'],['Registration no.','1888/0412']],
  death1934:[['Name','Ambrose Vane'],['Death date','1 Feb 1934'],['Death place','At sea, off Ashby Point'],['Age at death','76'],['Registration no.','1934/0088']],
  news1934:[['Name','Ambrose Vane'],['Publication','The Ashby Courier'],['Date','3 Feb 1934'],['Page','1']],
  trust1934:[['Settlor','Ambrose Vane'],['Beneficiary','Cornelius Vane'],['Date','20 Jan 1934'],['Prepared by','Ashgrove & Pell']],
  birth1934:[['Name','Cornelius Vane'],['Birth date','2 Mar 1934'],['Birth place','Vane House, Ashby'],['Father','Ambrose Vane'],['Mother','—'],['Registration no.','1934/0151']],
  rolls:[['Address','14 Hollow Lane, Ashby'],['Roll years','1903–2025'],['Names on roll','Ambrose Vane; Cornelius Vane; Julian Ambrose Vane']],
  licence1972:[['Name','Cornelius Vane'],['Birth date','2 Mar 1934'],['Issue year','1972'],['Residence','14 Hollow Lane, Ashby']],
  death1994:[['Name','Desmond Vane'],['Death date','30 Oct 1994'],['Death place','Vane House, Ashby'],['Age at death','33'],['Father','Cornelius Vane'],['Registration no.','1994/0973']],
  news1994:[['Name','Desmond Vane'],['Publication','The Ashby Courier'],['Date','3 Nov 1994'],['Page','5']],
  birth1993:[['Name','Julian Ambrose Vane'],['Birth date','14 Jan 1993'],['Birth place','Vane House, Ashby'],['Father','Desmond Vane'],['Mother','—'],['Registration no.','1993/0046']],
  birth1966:[['Name','Daphne Marsh-Pike'],['Birth date','9 Aug 1966'],['Birth place','Ashby Hospital'],['Father','—'],['Mother','Lorna Marsh-Pike'],['Registration no.','1966/0730']],
  licence2019:[['Name','Julian Ambrose Vane'],['Birth date','14 Jan 1993'],['Issue year','2019'],['Residence','14 Hollow Lane, Ashby']],
  will2024:[['Testator','Cornelius Vane'],['Date','14 Nov 2024'],['Beneficiary','Julian Ambrose Vane'],['Witness','D. Mortlake']],
  death2025:[['Name','Cornelius Vane'],['Death date','2 Mar 2025'],['Death place','At sea, off Ashby Point'],['Age at death','91'],['Informant','J. Vane'],['Registration no.','2025/0214']],
  news2025:[['Name','Cornelius Vane'],['Publication','The Ashby Courier'],['Date','4 Mar 2025'],['Page','1']],
  marine2025:[['Vessel','MY Marguerite'],['Report date','3 Mar 2025'],['Reported by','J. Vane'],['Reference','HA-25-031']],
  funeral2025:[['Account','J. Vane, Vane House'],['Service','Memorial, no body'],['Date','March 2025'],['Director','Mortlake & Daughters']]
};
const MAIL_DATE = {m1:'Sun 22:52',m2:'Sun 21:30',m3:'Sun 21:02',m10:'Sun 20:15',m4:'Fri 23:58',m11:'Now',m5:'Now',m6:'Now',m7:'Now',m9:'Now',m12:'Now'};
const FILES = {letterJulian:'Letter_JVane_claim.pdf',letterMargaret:'Letter_MHolloway_objection.pdf',letterDaphne:'Letter_DMarshPike_claim.pdf',diary1888:'EVane_diary_Feb1888.jpg'};

/* ================= ICONS ================= */
const I = {
  back:'<path d="M19 12H5M12 19l-7-7 7-7"/>',fwd:'<path d="M5 12h14M12 5l7 7-7 7"/>',reload:'<path d="M21 12a9 9 0 1 1-2.6-6.4L21 8M21 3v5h-5"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',star:'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a2 2 0 0 0 3.4 0"/>',
  menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',x:'<path d="M18 6L6 18M6 6l12 12"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',chev:'<path d="M6 9l6 6 6-6"/>',
  inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.1L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z"/>',
  send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  archive:'<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
  reply:'<path d="M9 17l-5-5 5-5M4 12h11a5 5 0 0 1 5 5v2"/>',fwdm:'<path d="M15 17l5-5-5-5M20 12H9a5 5 0 0 0-5 5v2"/>',
  clip:'<path d="M21.4 11l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
  fit:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  help:'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',check:'<path d="M20 6L9 17l-5-5"/>',
  bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',draft:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',tree:'<circle cx="12" cy="5" r="2.5"/><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M12 7.5V12M6 16.5V12h12v4.5"/>'
};
const ic = (n, cls='i') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${I[n]}</svg>`;
const LEAF = '<svg class="leaf" viewBox="0 0 20 26" aria-hidden="true"><path d="M10 1 C 6 9, 2 13, 2 17.5 A 8 8 0 0 0 18 17.5 C 18 13, 14 9, 10 1 Z" fill="currentColor"/></svg>';

/* ================= STATE ================= */
const FRESH = () => ({tab:'mail',hist:{bl:{s:['home'],i:0},mail:{s:['inbox/m1'],i:0},net:{s:['matter/overview'],i:0}},
  navOpen:false,sel:null,zoom:1,tz:1,kit:'julian',cookie:false,mlRead:false,recent:[],
  pins:[],read:['m4'],seen:[],ans:{},ev:{F1:[],F2:[],F3:[],F4:[],F5:[]},res:{},attempts:0,won:false,failed:false,
  flags:{},reports:{},lab:{a:'',b:'',ma:[],mb:[],miss:0},notes:'',log:[],q:{name:'',kw:'',kind:'All'},searched:false});
const S = FRESH();
const KEEP = ['tab','hist','kit','cookie','recent','pins','read','seen','ans','ev','res','attempts','won','failed','flags','reports','lab','notes','log','q','searched'];
try{const s=JSON.parse(localStorage.getItem('bloodlines-v3')||'null'); if(s) KEEP.forEach(k=>{ if(s[k]!==undefined) S[k]=s[k]; });}catch(e){}
function save(){try{const o={};KEEP.forEach(k=>o[k]=S[k]);localStorage.setItem('bloodlines-v3',JSON.stringify(o))}catch(e){}}
for(const id in S.reports) REC[id] = cmpRec(id);

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pinned = id => S.pins.includes(id);
const unread = () => mailIds().filter(m=>!S.read.includes(m)).length;
const cur = t => { const h=S.hist[t||S.tab]; return h.s[h.i]; };
const now = () => new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
function log(msg){ S.log.unshift({t:now(),msg}); S.log = S.log.slice(0,40); }
let toastT;
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.hidden=false; clearTimeout(toastT); toastT=setTimeout(()=>t.hidden=true,2600); }

function go(r, t){
  t = t||S.tab; S.tab = t; const h = S.hist[t];
  if(h.s[h.i]!==r){ h.s = h.s.slice(0,h.i+1); h.s.push(r); h.i = h.s.length-1; }
  S.navOpen=false; S.zoom=1; visit(t,r); save(); render(); $('#vp').scrollTop = 0;
}
function visit(t,r){
  if(t==='bl' && r.startsWith('record/')){
    const id = r.slice(7);
    if(PH[id] && !S.seen.includes(id)) S.seen.push(id);
    S.recent = [id, ...S.recent.filter(x=>x!==id)].slice(0,4);
    if((id==='hospital1888'||id==='news1888') && !S.flags.diary){ S.flags.diary = true; setTimeout(()=>toast('New mail from Margaret Holloway'),600); }
  }
  if(t==='mail' && r.startsWith('inbox/')){ const id=r.slice(6); if(!S.read.includes(id)) S.read.push(id); }
}
function togglePin(id){
  const was = pinned(id);
  S.pins = was ? S.pins.filter(x=>x!==id) : [...S.pins, id];
  log(`${was?'Removed':'Added'} evidence: ${REC[id].title}`);
  toast(was ? 'Removed from matter 2025-0417' : 'Saved to matter 2025-0417');
  save();
}
function openDoc(id){
  const r = REC[id];
  if(PAGE_KINDS.has(r.kind)) { go('record/'+id,'bl'); return; }
  showPreview(id);
}

/* ================= URLS & TITLES ================= */
function urlOf(t,r){
  if(t==='bl'){
    const [a,b,c] = r.split('/');
    const path = {home:'',tree:'family-tree/tree/4471902/vane-estate',person:`family-tree/person/tree/4471902/person/${b}/${c||'facts'}`,
      record:`discoveryui-content/view/${b?b.length*7919+1093:0}:${(REC[b]?.kind||'x').length*1013}`,search:'search/?'+new URLSearchParams({name:S.q.name,keyword:S.q.kw,type:S.q.kind}).toString(),
      dna:`dna/matches/${b}`,hints:'hints/tree/4471902'}[a];
    return ['https://','www.bloodlines.com','/'+path];
  }
  if(t==='mail') return ['https://','mail.ashgrovepell.law','/owa/#'+r];
  return ['https://','intranet.ashgrovepell.law', r==='law'?'/library/nocturnal-accord-1888':'/matters/2025-0417/'+r.split('/')[1]];
}
function titleOf(t,r){
  if(t==='mail'){ const u=unread(); return `Inbox${u?` (${u})`:''} – A&P Mail`; }
  if(t==='net') return r==='law' ? 'Nocturnal Accord 1888 – Law Library' : 'Matter 2025-0417 – A&P Intranet';
  const [a,b] = r.split('/');
  if(a==='record') return `${REC[b].title} | Bloodlines`;
  if(a==='person') return `${PEOPLE[b].name} | Bloodlines`;
  return ({home:'Home | Bloodlines',tree:'Vane estate – Family Tree | Bloodlines',search:'Search | Bloodlines',dna:'DNA Matches | Bloodlines',hints:'Hints | Bloodlines'})[a];
}
const FAV = {bl:['var(--bl-brand)','B'],mail:['var(--ml-brand)','M'],net:['var(--nt-brand)','A']};

/* ================= CHROME ================= */
function chrome(){
  $('#strip').innerHTML = ['bl','mail','net'].map(t=>`<button class="ctab ${S.tab===t?'on':''}" role="tab" aria-selected="${S.tab===t}" data-a="tab" data-v="${t}">
    <span class="fav" style="background:${FAV[t][0]}">${FAV[t][1]}</span><span class="tt">${esc(titleOf(t,cur(t)))}</span>${t==='mail'&&S.tab!=='mail'&&unread()?'<span class="dot"></span>':''}${ic('x','i x')}</button>`).join('')
    + `<span class="newtab">${ic('plus')}</span>`;
  const h = S.hist[S.tab];
  $('#back').innerHTML = ic('back'); $('#back').disabled = h.i<=0;
  $('#fwd').innerHTML = ic('fwd'); $('#fwd').disabled = h.i>=h.s.length-1;
  document.querySelector('[data-a="reload"]').innerHTML = ic('reload');
  const [p,host,path] = urlOf(S.tab,cur());
  $('#lock').innerHTML = ic('lock','i lock'); $('#url').innerHTML = `<b>${host}</b><span>${esc(path)}</span>`;
  $('#star').innerHTML = `<span style="color:var(--cr-muted);display:flex">${ic('star')}</span>`;
  $('#bookmarks').innerHTML = [['bl','home','Bloodlines'],['bl','tree','Vane estate tree'],['mail','inbox/m1','A&P Mail'],['net','matter/overview','Matter 2025-0417'],['net','law','Law Library']]
    .map(([t,r,l])=>`<button class="bm" data-a="go" data-t="${t}" data-v="${r}"><span class="fav" style="background:${FAV[t][0]}">${FAV[t][1]}</span>${l}</button>`).join('');
  document.title = titleOf(S.tab,cur()).replace(/ [|–] .*/,'') + ' · Bloodlines game';
}
function render(){
  chrome();
  const r = cur();
  $('#vp').innerHTML = S.tab==='bl' ? blPage(r) : S.tab==='mail' ? mailApp(r) : netApp(r);
}

/* ================= BLOODLINES ================= */
function avatar(id, crop=true){
  const ph = PHOTO_OF[id];
  if(ph) return photo(PH[ph]).replace('viewBox="0 0 120 150"','viewBox="24 22 72 72"');
  return PEOPLE[id]?.ini || '?';
}
function blShell(section, inner){
  const hintN = HINTS.length + (S.won?1:0);
  const nav = [['home','Home'],['tree','Trees'],['search','Search'],['dna','DNA'],['hints',`Hints <span class="cnt">${hintN}</span>`]];
  return `<div class="bl">
  <div class="promo">Ancestors' Week: save 25% on Bloodlines DNA kits. <u data-a="toastonly" data-msg="Offer not available on Professional accounts">Shop now</u></div>
  <header class="blbar">
    <button class="icobtn burger" data-a="burger" aria-label="Menu">${ic('menu')}</button>
    <button class="bl-logo" data-a="go" data-t="bl" data-v="home"><svg viewBox="0 0 20 26"><path d="M10 1 C 6 9, 2 13, 2 17.5 A 8 8 0 0 0 18 17.5 C 18 13, 14 9, 10 1 Z" fill="currentColor"/><path d="M6.5 17 a3.5 3.5 0 0 0 3 3.6" stroke="#fff" stroke-opacity=".6" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>bloodlines</button>
    <nav class="blnav ${S.navOpen?'open':''}">${nav.map(([k,l])=>`<button class="${section===k?'on':''}" data-a="go" data-t="bl" data-v="${k==='dna'?'dna/'+S.kit:k}">${l}</button>`).join('')}</nav>
    <div class="blright">
      <button class="icobtn" data-a="go" data-t="bl" data-v="search" aria-label="Search">${ic('search')}</button>
      <button class="icobtn" data-a="go" data-t="bl" data-v="hints" aria-label="Notifications">${ic('bell')}<span class="pip"></span></button>
      <button class="icobtn" data-a="toastonly" data-msg="Help centre opens in a new window" aria-label="Help">${ic('help')}</button>
      <span class="acct"><span class="av">A&amp;P</span><span>Ashgrove &amp; Pell</span></span>
    </div>
  </header>
  <main class="blmain">${inner}</main>
  <footer class="blfoot"><div class="wrap"><div class="cols">
    <div><h4>Bloodlines</h4><ul><li>About us</li><li>Careers</li><li>Press</li><li>Bloodlines Professional</li></ul></div>
    <div><h4>Discover</h4><ul><li>Family trees</li><li>Record collections</li><li>Newspapers</li><li>DNA</li></ul></div>
    <div><h4>Help</h4><ul><li>Support centre</li><li>Contact us</li><li>Accessibility</li><li>Request a nil-return certificate</li></ul></div>
    <div><h4>Legal</h4><ul><li>Privacy</li><li>Terms and conditions</li><li>Cookie preferences</li><li>Guidance for nocturnal members</li></ul></div>
  </div><div class="legal"><span>© 1997–2026 Bloodlines Ltd. All rights reserved.</span><span>Records in professional collections are supplied under licence.</span></div></div></footer>
  ${S.cookie?'':`<div class="cookie" role="dialog" aria-label="Cookies"><p><b>We use cookies.</b> They help us personalise your experience, measure site performance and match you with relatives. Some of them are essential. None of them are edible.</p><button class="bbtn sec sm" data-a="cookie">Manage</button><button class="bbtn sm" data-a="cookie">Accept all</button></div>`}
  </div>`;
}
function blPage(r){
  const [a,b,c] = r.split('/');
  if(a==='home') return blShell('home', blHome());
  if(a==='tree') return blShell('tree', blTree());
  if(a==='person') return blShell('tree', blPerson(b, c||'facts'));
  if(a==='record') return blShell('search', blRecord(b));
  if(a==='search') return blShell('search', blSearch());
  if(a==='dna') return blShell('dna', blDna(b||S.kit));
  if(a==='hints') return blShell('hints', blHints());
  return blShell('home', blHome());
}
function blHome(){
  const hr = new Date().getHours(), greet = hr<5||hr>=18 ? 'Good evening' : hr<12 ? 'Good morning' : 'Good afternoon';
  const recent = S.recent.filter(id=>REC[id]);
  return `<section class="hero"><div class="wrap"><div class="greet"><h1>${greet}, Ashgrove &amp; Pell</h1><p class="muted" style="margin:6px 0 0">Professional account · 1 active tree · 4 DNA kits</p></div>
    <form class="qsearch" data-form="qsearch"><input id="hq" placeholder="Search names, places or keywords" aria-label="Search records"><button class="bbtn sm">${ic('search')}Search</button></form></div></section>
  <div class="wrap"><div class="tiles">
    <div class="panel tile pb" style="padding:18px"><span class="tiny">Your trees</span><h2>Vane estate</h2><p class="muted" style="margin:0">10 people · ${HINTS.length} hints · last edited by R. Ashgrove</p>
      <div style="display:flex;gap:6px">${['ambrose','cornelius','julian','margaret'].map(p=>`<span class="fam" style="width:auto;padding:0"><span class="ava">${avatar(p)}</span></span>`).join('')}</div>
      <div><button class="bbtn sm" data-a="go" data-t="bl" data-v="tree">${ic('tree')}View tree</button></div></div>
    <div class="panel tile" style="padding:18px"><span class="tiny">DNA</span><h2>${S.won?'Your results are in':'Your kit is processing'}</h2><p class="muted" style="margin:0">${S.won?'You have 1 new DNA match.':`Lab stage ${kitStage()} of 4. Claimant kits for Vane estate are ready to review.`}</p><div><button class="bbtn sec sm" data-a="go" data-t="bl" data-v="dna/${S.won?'you':'julian'}">See DNA matches</button></div></div>
    <div class="panel tile" style="padding:18px"><span class="tiny">Hints</span><h2>${HINTS.length+(S.won?1:0)} new hints</h2><p class="muted" style="margin:0">Hints are possible matches from records and other members' trees. Review each one before you accept it.</p><div><button class="bbtn sec sm" data-a="go" data-t="bl" data-v="hints">Review hints</button></div></div>
  </div>
  <div class="two" style="padding-top:0">
    <div class="panel"><div class="ph"><h2>Recently viewed</h2></div><div class="pb">${recent.length?`<ul class="srclist">${recent.map(srcRow).join('')}</ul>`:'<p class="muted" style="margin:0">Records you open will show here.</p>'}</div></div>
    <div class="panel"><div class="ph"><h2>From the archive</h2></div><div class="pb feed">
      <div class="row"><span style="color:var(--bl-leaf)">${ic('file')}</span><div><b>New: The Ashby Courier, 1871–2025</b><div class="muted" style="font-size:13.5px">154 years of local news, fully searchable.</div></div></div>
      <div class="row"><span style="color:var(--bl-leaf)">${ic('file')}</span><div><b>Updated: Harbour Authority incident reports</b><div class="muted" style="font-size:13.5px">Now includes reports up to March 2025.</div></div></div>
      <div class="row"><span style="color:var(--bl-leaf)">${ic('help')}</span><div><b>Why do some kits return no matches?</b><div class="muted" style="font-size:13.5px">A short guide to degraded and unusual samples.</div></div></div>
    </div></div>
  </div></div>`;
}
function kitStage(){ return Math.min(4, 2 + Math.floor(S.pins.length/7)); }

/* ---- tree ---- */
const POS = {ambrose:[250,24],eliza:[500,24],cornelius:[40,170],harriet:[470,170],arthur:[720,170],desmond:[40,316],daphne:[250,316],thomas:[595,316],julian:[40,462],margaret:[595,462]};
function blTree(){
  const nodes = Object.entries(POS).map(([id,[x,y]])=>{
    const p = PEOPLE[id];
    return `<button class="tnode ${SEX[id]} ${id==='daphne'?'dis':''} ${S.sel===id?'sel':''}" style="left:${x}px;top:${y}px" data-a="sel" data-v="${id}">
      <span class="ava">${avatar(id)}</span><span style="min-width:0"><b>${p.name}</b><small>${p.life}</small></span>${HINT_OF[id]?LEAF:''}${p.tag?`<span class="flag">${p.tag}</span>`:''}</button>`;}).join('');
  const lines = `<svg class="lines" viewBox="0 0 940 560" preserveAspectRatio="xMinYMin meet" aria-hidden="true">
    <path d="M220 61 H250"/><path d="M450 61 H500"/><path d="M670 207 H720"/>
    <path d="M235 61 V135 H140 V170"/><path d="M475 61 V135 H570 V170"/><path d="M695 207 V316"/>
    <path d="M140 244 V316"/><path d="M140 390 V462"/><path d="M695 390 V462"/>
    <path class="dash" d="M240 207 H350 V316"/></svg>`;
  const unknown = `<div class="tnode u" style="left:20px;top:24px;width:200px;opacity:.75;cursor:default"><span class="ava">?</span><span><b>Unknown</b><small>Mother of Cornelius</small></span></div>`;
  return `<div class="treebar"><div class="wrap">
    <span class="treename">Vane estate ${ic('chev')}</span>
    <div class="seg"><button class="on">Tree</button><button data-a="toastonly" data-msg="Family view isn't available for Professional trees">Family</button><button data-a="toastonly" data-msg="List view is coming soon">List</button></div>
    <div class="tree-tools"><select class="tsearch" data-find="1" aria-label="Find a person"><option value="">Find a person…</option>${Object.keys(POS).map(id=>`<option value="${id}">${PEOPLE[id].name}</option>`).join('')}</select>
    <button class="bbtn sec sm" data-a="toastonly" data-msg="Only the tree owner (R. Ashgrove) can invite people">${ic('share')}Share</button></div></div></div>
  <div class="canvas-wrap" id="cw"><div class="canvas" style="transform:scale(${S.tz});transform-origin:0 0">${lines}${unknown}${nodes}
    <span class="claimlbl" style="left:262px;top:198px">claimed, no source</span></div>
    ${S.sel?drawer(S.sel):''}
    <div class="zoomctl"><button data-a="tz" data-v="1.1" aria-label="Zoom in">${ic('plus')}</button><button data-a="tz" data-v="0.9" aria-label="Zoom out">${ic('minus')}</button><button data-a="tz" data-v="0" aria-label="Reset zoom">${ic('fit')}</button></div>
  </div>`;
}
function drawer(id){
  const p = PEOPLE[id];
  return `<aside class="drawer"><div class="dh"><span class="ava">${avatar(id)}</span><div style="flex:1;min-width:0"><h2 style="font-family:var(--f-bl-d);font-weight:400;font-size:20px">${p.name}</h2><span class="muted">${p.life}</span></div><button class="icobtn" data-a="unsel" aria-label="Close">${ic('x')}</button></div>
  <div class="db"><dl class="kv">${p.facts.slice(0,4).map(([a,b])=>`<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl>
  ${HINT_OF[id]?`<button class="lnk" style="text-align:left;display:flex;gap:6px;align-items:center;color:var(--bl-leaf)" data-a="go" data-t="bl" data-v="hints"><span style="width:12px;display:inline-flex">${LEAF}</span>${HINT_OF[id].length} hint${HINT_OF[id].length>1?'s':''} for ${p.name.split(' ')[0]}</button>`:''}
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="bbtn sm" data-a="go" data-t="bl" data-v="person/${id}/facts">Profile</button><button class="bbtn sec sm" data-a="searchname" data-v="${p.name.split(' (')[0]}">Search records</button></div>
  <div><h3 style="margin-bottom:6px">Sources (${p.recs.length})</h3>${p.recs.length?`<ul class="srclist">${p.recs.slice(0,5).map(srcRow).join('')}</ul>`:'<p class="muted" style="margin:0">No sources attached.</p>'}</div></div></aside>`;
}

/* ---- person ---- */
function srcRow(id){
  const r = REC[id];
  const th = r.photo ? photo(PH[id]) : r.kind==='Letter' ? 'PDF' : r.kind==='DNA' ? 'DNA' : r.kind.slice(0,4).toUpperCase();
  const sub = PAGE_KINDS.has(r.kind) ? COLL[r.kind] : r.kind==='Letter' ? 'Private document · case correspondence' : r.kind==='DNA' ? 'Bloodlines DNA report' : 'Private upload';
  return `<li><button class="srcrow" data-a="open" data-v="${id}"><span class="ic">${th}</span><span class="t"><b>${r.title}</b><small>${sub} · ${r.year}</small></span>${pinned(id)?'<span class="saved">In matter</span>':''}</button></li>`;
}
function blPerson(id, tab){
  const p = PEOPLE[id];
  const tabs = [['facts','Facts'],['sources',`Sources (${p.recs.length})`],['gallery','Gallery']];
  let body;
  if(tab==='sources') body = `<div class="panel"><div class="pb">${p.recs.length?`<ul class="srclist">${p.recs.map(srcRow).join('')}</ul>`:'<p class="muted">No sources attached.</p>'}</div></div>`;
  else if(tab==='gallery'){ const ph = p.recs.filter(x=>REC[x].photo); body = `<div class="panel"><div class="pb">${ph.length?`<div class="lab">${ph.map(x=>`<button data-a="open" data-v="${x}" style="display:flex;flex-direction:column;gap:6px;text-align:left">${photo(PH[x])}<span class="lnk">${REC[x].title}</span></button>`).join('')}</div>`:'<p class="muted" style="margin:0">No photos for this person yet.</p>'}</div></div>`; }
  else body = `<div class="panel"><div class="ph"><h2>Life events</h2></div><div class="pb"><ul class="timeline">${p.facts.map(([k,v])=>{const y=(v.match(/\b(1[89]\d\d|20\d\d)\b/)||['—'])[0];return `<li><span class="yr">${y}</span><span><span class="ev">${k}</span><br><span class="muted">${v}</span></span></li>`}).join('')}</ul></div></div>`;
  const fam = (REL[id]||[]).map(([rel,pid])=>`<button class="fam" data-a="go" data-t="bl" data-v="person/${pid}/facts"><span class="ava">${avatar(pid)}</span><span><b>${PEOPLE[pid].name}</b><small>${rel} · ${PEOPLE[pid].life}</small></span></button>`).join('');
  return `<section class="phead"><div class="wrap"><div class="crumbs" style="width:100%;padding:0"><button class="lnk" data-a="go" data-t="bl" data-v="tree">Vane estate</button><span>›</span><span>${p.name}</span></div>
    <span class="big">${avatar(id)}</span><div style="flex:1;min-width:220px"><h1>${p.name}</h1><span class="muted">${p.life}${p.tag?` · <b style="color:var(--warn)">${p.tag}</b>`:''}</span></div>
    <button class="bbtn sec sm" data-a="searchname" data-v="${p.name.split(' (')[0]}">${ic('search')}Search records</button>
    <div class="ptabs">${tabs.map(([k,l])=>`<button class="${tab===k?'on':''}" data-a="go" data-t="bl" data-v="person/${id}/${k}">${l}</button>`).join('')}</div></div></section>
  <div class="wrap"><div class="two">${body}<div class="side">
    <div class="panel"><div class="ph"><h2>Family members</h2></div><div class="pb famlist">${fam||'<p class="muted" style="margin:0">None recorded.</p>'}</div></div>
    ${HINT_OF[id]?`<div class="panel"><div class="ph"><span style="width:14px;color:var(--bl-leaf);display:inline-flex">${LEAF}</span><h2>Hints</h2></div><div class="pb">${HINT_OF[id].map(h=>{const x=HINTS.find(z=>z.id===h);return `<p style="margin:0 0 8px"><button class="lnk" style="text-align:left" data-a="go" data-t="bl" data-v="hints">${x.title}</button></p>`}).join('')}</div></div>`:''}
  </div></div></div>`;
}

/* ---- record ---- */
function blRecord(id){
  const r = REC[id], idx = IDX[id] || [['Title',r.title],['Year',r.year]];
  const inTree = Object.values(PEOPLE).some(p=>p.recs.includes(id));
  const words = new Set((r.k.match(/[A-Z][a-z]{3,}/g)||[]).filter(w=>!['Vane','House','Hollow','Lane','Ashby'].includes(w)));
  const sugg = Object.keys(REC).filter(x=>x!==id && !REC[x].hidden && PAGE_KINDS.has(REC[x].kind) && (REC[x].k.match(/[A-Z][a-z]{3,}/g)||[]).some(w=>words.has(w))).slice(0,5);
  return `<div class="wrap"><div class="crumbs"><button class="lnk" data-a="go" data-t="bl" data-v="search">Search</button><span>›</span><span>${COLL[r.kind]}</span></div>
  <div class="rechead"><div><h1>${r.title}</h1><p class="muted" style="margin:4px 0 0">${COLL[r.kind]}</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="bbtn ${pinned(id)?'done':''}" data-a="pin" data-v="${id}">${pinned(id)?ic('check')+'Saved to matter':ic('bookmark')+'Save to matter 2025-0417'}</button>
      <button class="bbtn sec" disabled>${inTree?'In your tree':'Save to tree'}</button></div></div>
  <div class="recgrid">
    <div class="viewer"><div class="vtool"><button data-a="zoom" data-v="-0.15" aria-label="Zoom out">${ic('minus')}</button><button data-a="zoom" data-v="0.15" aria-label="Zoom in">${ic('plus')}</button><button data-a="zoom" data-v="0" aria-label="Fit">${ic('fit')}</button><span style="padding-left:8px;font-variant-numeric:tabular-nums">${Math.round(S.zoom*100)}%</span><span class="sp"></span><button data-a="toastonly" data-msg="Downloads are disabled for licensed collections" aria-label="Download">${ic('dl')}</button></div>
      <div class="vstage"><div class="vinner" style="transform:scale(${S.zoom})">${r.render()}</div></div></div>
    <div class="side">
      <div class="panel"><div class="ph"><h2>Record details</h2></div><div class="pb"><table class="idx">${idx.map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</table></div></div>
      <div class="panel"><div class="ph"><h2>Source citation</h2></div><div class="pb"><div class="cite">Bloodlines. <i>${COLL[r.kind]}</i> [database online]. Ashby: Bloodlines Ltd, 2026. Original record: ${r.title}, ${r.year}.</div></div></div>
      ${sugg.length?`<div class="panel"><div class="ph"><h2>Suggested records</h2></div><div class="pb"><ul class="srclist">${sugg.map(srcRow).join('')}</ul></div></div>`:''}
      <p class="muted" style="font-size:13px;margin:0">See a mistake in this index? <button class="lnk" data-a="toastonly" data-msg="Thanks. Our team reviews reports within 10 working days.">Report a problem</button></p>
    </div></div></div>`;
}

/* ---- search ---- */
function results(){
  const words = (S.q.name+' '+S.q.kw).toLowerCase().split(/\s+/).filter(Boolean);
  return Object.keys(REC).filter(id=>{const r=REC[id]; return !r.hidden && PAGE_KINDS.has(r.kind) && words.every(w=>(r.k+' '+r.title+' '+r.year).toLowerCase().includes(w));}).sort((a,b)=>REC[a].year-REC[b].year);
}
function blSearch(){
  const kinds = ['All',...Object.keys(COLL)];
  const all = S.searched ? results() : [];
  const shown = all.filter(id=>S.q.kind==='All'||REC[id].kind===S.q.kind);
  const counts = {}; all.forEach(id=>counts[REC[id].kind]=(counts[REC[id].kind]||0)+1);
  const qtext = (S.q.name+' '+S.q.kw).toLowerCase();
  const nil = S.searched && qtext.includes('desmond') && (S.q.kind==='All'||S.q.kind==='Birth');
  const left = `<div class="panel"><div class="ph"><h2>Search all records</h2></div><div class="pb"><form class="sform" data-form="search">
    <label>Name<input id="sname" value="${esc(S.q.name)}" placeholder="First and last name"></label>
    <label>Keyword or place<input id="skw" value="${esc(S.q.kw)}" placeholder="e.g. Hollow Lane, Marguerite"></label>
    <label>Record type<select id="skind">${kinds.map(k=>`<option value="${k}" ${S.q.kind===k?'selected':''}>${k==='All'?'All record types':COLL[k].split(',')[0]}</option>`).join('')}</select></label>
    <div style="display:flex;gap:8px"><button class="bbtn">${ic('search')}Search</button><button type="button" class="bbtn sec" data-a="clearsearch">Clear</button></div></form></div></div>
    ${S.searched&&all.length?`<div class="panel"><div class="ph"><h2>Filter by collection</h2></div><div class="pb facets"><button class="${S.q.kind==='All'?'on':''}" data-a="facet" data-v="All">All results<span>${all.length}</span></button>${Object.entries(counts).map(([k,n])=>`<button class="${S.q.kind===k?'on':''}" data-a="facet" data-v="${k}">${COLL[k].split(',')[0]}<span>${n}</span></button>`).join('')}</div></div>`:''}`;
  let right;
  if(!S.searched){
    const ck = {}; Object.values(REC).forEach(r=>{ if(!r.hidden&&PAGE_KINDS.has(r.kind)) ck[r.kind]=(ck[r.kind]||0)+1; });
    right = `<div class="panel"><div class="ph"><h2>Featured collections for Ashby</h2></div><div class="pb"><div class="rtable-wrap"><table class="rtable"><tr><th>Collection</th><th>Indexed for your tree</th></tr>${Object.keys(COLL).map(k=>`<tr><td><button class="nm lnk" data-a="facetall" data-v="${k}">${COLL[k]}</button></td><td>${ck[k]||0} records</td></tr>`).join('')}</table></div></div></div>
    <p class="muted" style="font-size:13.5px">Tip: most records aren't attached to any tree. Search by place or keyword as well as by name.</p>`;
  } else {
    right = `${nil?`<div class="callout"><p><b>No birth registration found for Desmond Vane.</b> We searched Ashby and three neighbouring districts, 1940–1994. Professional accounts can request a certified nil return.</p><button class="bbtn sm" data-a="open" data-v="nilDesmond">Get nil-return certificate</button></div>`:''}
    <div class="panel"><div class="ph" style="flex-wrap:wrap"><h2 style="flex:1">${shown.length?`Results 1–${shown.length} of ${shown.length}`:'No results'}</h2><span class="muted" style="font-size:13.5px">Sorted by: Event year</span></div>
    ${shown.length?`<div class="rtable-wrap"><table class="rtable"><tr><th>Record</th><th>Details</th><th>Year</th><th></th></tr>${shown.map(id=>{const r=REC[id],ix=IDX[id]||[];return `<tr><td><button class="nm lnk" data-a="open" data-v="${id}">${r.title}</button><small>${COLL[r.kind]}</small></td><td>${ix.slice(1,3).map(([k,v])=>`<small><b style="color:var(--bl-ink);font-weight:500">${k}:</b> ${v}</small>`).join('')}</td><td>${r.year}</td><td>${pinned(id)?'<span class="saved">In matter</span>':''}</td></tr>`;}).join('')}</table></div>`:`<div class="pb"><p class="muted" style="margin:0">Nothing matches every word. Try fewer words, or a place or keyword instead of a name.</p></div>`}</div>`;
  }
  return `<div class="wrap"><div class="crumbs"><button class="lnk" data-a="go" data-t="bl" data-v="home">Home</button><span>›</span><span>Search</span></div><h1>Search</h1>
    <div class="sgrid"><div class="side">${left}</div><div class="side">${right}</div></div></div>`;
}

/* ---- dna ---- */
const AVC = ['#7a5c9e','#3c7a8c','#b0603a','#4f7a3c','#8c3c5c','#5c6c8c'];
const avColor = s => AVC[[...s].reduce((a,c)=>a+c.charCodeAt(0),0)%AVC.length];
function mrow(name, rel, cm, side, extra=''){
  const ini = name.split(' ').map(w=>w[0]).join('').slice(0,2);
  return `<div class="mrow"><span class="ava" style="background:${avColor(name)}">${ini}</span><div class="who"><b>${name}</b><small>${rel}</small></div>${side?`<span class="side-tag ${side==='Marsh'?'marsh':''}">${side} side</span>`:''}<div class="cm"><b>${cm}</b><small>shared DNA</small></div>${extra}</div>`;
}
function ethPanel(rows, note=''){
  return `<div class="panel"><div class="ph"><h2>Ethnicity estimate</h2></div><div class="pb" style="display:flex;flex-direction:column;gap:10px">${rows.map(([n,p,odd])=>`<div class="ethrow"><span>${n}</span><span style="text-align:right;font-variant-numeric:tabular-nums">${p}%</span><div class="bar"><i class="${odd?'odd':''}" style="width:${p}%"></i></div></div>`).join('')}${note}</div></div>`;
}
function saveBtn(id){ return `<button class="bbtn ${pinned(id)?'done':'sec'} sm" data-a="pin" data-v="${id}">${pinned(id)?ic('check')+'Saved to matter':ic('bookmark')+'Save report to matter'}</button>`; }
function blDna(kit){
  S.kit = kit;
  const kits = [['julian','Julian Ambrose Vane'],['margaret','Margaret Holloway'],['daphne','Daphne Marsh-Pike'],['you','Your kit (Associate)']];
  let body;
  if(kit==='julian') body = `<div class="two"><div class="side">
    <div class="labnote"><b>Lab notice.</b> This sample returned no viable cellular activity. We re-ran it twice and got the same result. Matches: 0 of 21,406,118 tested members. Ethnicity could not be estimated.</div>
    <div class="panel"><div class="ph"><h2>Matches</h2></div><div class="pb"><p class="muted" style="margin:0">No DNA matches. Every living person who has tested with Bloodlines shares DNA with at least one other member.</p></div></div>
    <div class="panel"><div class="ph"><h2>Expected matches if the tree is correct</h2></div><div class="pb rtable-wrap"><table class="cmtable"><tr><th>Relative on tree</th><th>Relationship</th><th class="n">Typical cM</th><th class="n">Observed</th></tr>
    <tr><td>Cornelius Vane (no kit)</td><td>Grandfather</td><td class="n">1,156–2,311</td><td class="n">—</td></tr><tr><td>Margaret Holloway</td><td>Half 1st cousin 2x removed</td><td class="n">0–270</td><td class="n">0</td></tr><tr><td>Any member</td><td>Anyone at all</td><td class="n">≥ 1 match</td><td class="n">0</td></tr></table></div></div></div>
    <div class="side"><div class="panel"><div class="ph"><h2>Kit details</h2></div><div class="pb"><dl class="kv"><dt>Kit ID</dt><dd>BL-77-0302</dd><dt>Tested</dt><dd>April 2025</dd><dt>Sample</dt><dd>Saliva (collected after dark)</dd><dt>Status</dt><dd style="color:var(--bad);font-weight:700">Anomalous</dd></dl></div></div>${saveBtn('dnaJulian')}</div></div>`;
  else if(kit==='margaret') body = `<div class="two"><div class="panel"><div class="ph"><h2>Matches</h2><span class="muted" style="margin-left:auto;font-size:13.5px">312 matches · showing closest</span></div><div class="pb">
    ${mrow('R. Holloway','1st cousin','874 cM','Holloway / Vane')}${mrow('G. Holloway-Teague','2nd cousin','231 cM','Holloway / Vane')}${mrow('Daphne Marsh-Pike','3rd cousin','96 cM','Marsh')}${mrow('Ivor Marsh','3rd cousin','88 cM','Marsh')}${mrow('Julian Vane','No match','0 cM','')}</div></div>
    <div class="side">${ethPanel([['England & Wales',61],['Ireland',22],['Scotland',14],['Germanic Europe',3]])}${saveBtn('dnaMargaret')}</div></div>`;
  else if(kit==='daphne') body = `<div class="two"><div class="side"><div class="panel"><div class="ph"><h2>Matches</h2><span class="muted" style="margin-left:auto;font-size:13.5px">188 matches · showing closest</span></div><div class="pb">
    ${mrow('Daniel Pike','1st cousin','811 cM','')}${mrow('Ivor Marsh','2nd cousin','212 cM','Marsh')}${mrow('Margaret Holloway','3rd cousin','96 cM','Marsh')}</div></div>
    <div class="panel"><div class="ph"><h2>Shared matches with Margaret Holloway</h2></div><div class="pb"><p style="margin:0 0 8px">Ivor Marsh, Ada Marsh-Clery and T. Marsh. All three sit on Margaret's Marsh side. None sit on her Holloway or Vane side.</p>
    <div class="rtable-wrap"><table class="cmtable"><tr><th>If Cornelius were her father</th><th>Expected relationship</th><th class="n">Typical cM</th><th class="n">Observed</th></tr><tr><td>Margaret Holloway</td><td>Half 1st cousin 1x removed</td><td class="n">57–530</td><td class="n">96</td></tr></table></div>
    <p class="muted" style="font-size:13.5px;margin:8px 0 0">The amount alone fits either story. Which side the shared matches sit on doesn't.</p></div></div></div>
    <div class="side">${ethPanel([['England & Wales',72],['Ireland',18],['Scotland',10]])}${saveBtn('dnaDaphne')}</div></div>`;
  else body = S.won ? `<div class="two"><div class="panel"><div class="ph"><h2>Matches</h2><span class="muted" style="margin-left:auto;font-size:13.5px">1 match</span></div><div class="pb">
    ${mrow('Julian Vane','Distant cousin · match flagged: unusual','9 cM','')}<p class="muted" style="font-size:13.5px;margin:10px 0 0">Most members have hundreds of matches. Further matches for this kit are withheld at the account owner's request. Account owner: Ashgrove &amp; Pell.</p></div></div>
    <div class="side">${ethPanel([['England & Wales',58],['Ireland',21],['Scandinavia',13],['Unassigned region',4,true],['Not recognised',4,true]],'<p class="muted" style="font-size:13px;margin:0">"Unassigned region" means part of your DNA matches no reference population on Earth. We\'re looking into it.</p>')}</div></div>`
    : `<div class="panel" style="margin-block:22px"><div class="ph"><h2>Your kit is processing</h2></div><div class="pb"><div style="display:flex;gap:6px">${[1,2,3,4].map(i=>`<div style="flex:1;height:8px;border-radius:4px;background:${i<=kitStage()?'var(--bl-brand)':'#ece6e3'}"></div>`).join('')}</div>
    <p style="margin:12px 0 0">Stage ${kitStage()} of 4: ${['','Received','Extraction','Amplification','Analysis'][kitStage()]}. Results usually take 6 to 8 weeks.</p></div></div>`;
  return `<section class="dnahero"><div class="wrap"><div style="flex:1;min-width:240px"><h1>DNA Matches</h1><p style="margin:4px 0 0;opacity:.85">Shared DNA is measured in centimorgans (cM). More cM, closer relationship.</p></div>
    <label style="display:flex;flex-direction:column;gap:4px;font-size:12.5px;opacity:.95">Viewing kit<select data-kit="1">${kits.map(([k,n])=>`<option value="${k}" ${k===kit?'selected':''}>${n}</option>`).join('')}</select></label></div></section>
  <div class="wrap">${body}</div>`;
}

/* ---- hints ---- */
function blHints(){
  const forP = {hintOfficial:'Julian Ambrose Vane',h2:'Ambrose Vane',h3:'Ambrose Vane',h4:'Harriet Vane'};
  const yours = S.won ? `<div class="hrow"><svg class="leafbig" viewBox="0 0 20 26" style="color:#c48a1a"><path d="M10 1 C 6 9, 2 13, 2 17.5 A 8 8 0 0 0 18 17.5 C 18 13, 14 9, 10 1 Z" fill="currentColor"/></svg><div class="hb"><span class="muted" style="font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase">For you</span><h3>You may be related to R. Ashgrove (b. 1702?)</h3><span class="muted" style="font-size:13.5px">From a private member tree · owner hidden</span></div><button class="bbtn sm" data-a="toastonly" data-msg="This tree is private. You need the owner's permission to view it.">Review hint</button></div>` : '';
  return `<div class="wrap"><div class="crumbs"><button class="lnk" data-a="go" data-t="bl" data-v="tree">Vane estate</button><span>›</span><span>Hints</span></div><h1>Hints</h1>
  <p class="muted" style="margin:6px 0 16px">Hints come from record collections and from other members' trees. Member trees can be wrong, or worse.</p>
  <div class="panel"><div class="pb">${yours}${HINTS.map(h=>`<div class="hrow"><svg class="leafbig" viewBox="0 0 20 26"><path d="M10 1 C 6 9, 2 13, 2 17.5 A 8 8 0 0 0 18 17.5 C 18 13, 14 9, 10 1 Z" fill="currentColor"/></svg>
    <div class="hb"><span class="muted" style="font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase">${forP[h.id]}</span><h3>${h.title}</h3><span class="muted" style="font-size:13.5px">${h.conf} · ${h.src}</span></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">${h.rec?`<button class="bbtn sm" data-a="open" data-v="${h.rec}">Review hint</button>`:`<button class="bbtn sm" data-a="open" data-v="${h.id}">Review hint</button><button class="bbtn sec sm" data-a="pin" data-v="${h.id}">${pinned(h.id)?'Unsave':'Accept'}</button>`}</div></div>`).join('')}</div></div></div>`;
}

/* ================= DOC PREVIEW ================= */
function showPreview(id){
  const r = REC[id], m = $('#modal');
  const fname = FILES[id] || (r.kind==='DNA' ? r.title.replace(/[^A-Za-z]+/g,'_')+'.html' : r.kind==='Law' ? r.title.replace(/[^A-Za-z0-9]+/g,'_')+'.pdf' : r.kind==='Lab' ? 'PhotoLab_'+id.slice(4)+'.pdf' : r.title.replace(/[^A-Za-z0-9]+/g,'_').slice(0,40)+'.pdf');
  const ext = fname.split('.').pop().toUpperCase();
  const light = ['DNA','Hint'].includes(r.kind);
  m.innerHTML = `<div class="pv" role="dialog" aria-modal="true" aria-label="${esc(r.title)}"><div class="pvh"><span class="fi" style="background:${ext==='JPG'?'#2d7d46':ext==='HTML'?'#3c5a78':'#c0392b'}">${ext}</span><div class="t"><b>${fname}</b><small>${r.title}</small></div>
    <button class="nbtn ${pinned(id)?'sec':''} sm" data-a="pin" data-v="${id}" data-m="1">${pinned(id)?'Remove from matter':'Save to matter'}</button><button class="nbtn sec sm" data-a="close">Close</button></div>
    <div class="pvb ${light?'light':''}"><div ${light?'style="font-family:var(--f-bl);display:flex;flex-direction:column;gap:10px"':''}>${r.render()}</div></div></div>`;
  m.hidden = false; m.querySelector('[data-a="close"]').focus();
}
function closePreview(){ $('#modal').hidden = true; $('#modal').innerHTML=''; render(); }

/* ================= MAIL ================= */
function plain(html){ const d=document.createElement('div'); d.innerHTML=html; return d.textContent.replace(/\s+/g,' ').trim(); }
function mailApp(r){
  const ids = mailIds(), sel = r.split('/')[1], id = ids.includes(sel)?sel:ids[0], m = MAIL[id];
  const u = unread();
  const list = ids.map(x=>{const y=MAIL[x]; const nm=y.from.split(',')[0].replace(' via Bloodlines','');
    return `<button class="mrowm ${S.read.includes(x)?'':'unread'} ${x===id?'on':''} ${y.locked?'lock':''}" data-a="mailopen" data-v="${x}"><span class="av" style="background:${avColor(nm)}">${nm.replace(/[^A-Za-z ]/g,'').split(' ').map(w=>w[0]).join('').slice(0,2)}</span><span class="fr">${nm}</span><span class="tm">${MAIL_DATE[x]}</span><span class="sj">${y.locked?'🔒 ':''}${y.subj}</span><span class="sn">${esc(plain(y.body()).slice(0,110))}</span></button>`;}).join('');
  const nm = m.from.split(',')[0];
  const reading = `<div class="in"><button class="mlbtn ghost mlback" style="margin-bottom:14px" data-a="mailback">${ic('back')} Inbox</button>
    <h1>${m.subj}</h1><div class="rmeta"><span class="av" style="background:${avColor(nm.replace(' via Bloodlines',''))}">${nm.replace(/[^A-Za-z ]/g,'').split(' ').map(w=>w[0]).join('').slice(0,2)}</span><div class="who"><b>${m.from}</b><small>To: Associate &lt;associate3@ashgrovepell.law&gt; · ${MAIL_DATE[id]}</small></div>
    <div class="racts"><button disabled>${ic('reply')}Reply</button><button disabled>${ic('fwdm')}Forward</button></div></div>
    <div class="rtext">${m.body()}</div>
    ${m.attach?`<button class="attach" data-a="open" data-v="${m.attach}"><span class="fi">${(FILES[m.attach]||'x.pdf').split('.').pop().toUpperCase()}</span><span><b>${FILES[m.attach]}</b><small>${m.attach==='diary1888'?'1.2 MB':'214 KB'} · Click to preview</small></span></button>`:''}
    ${id==='m1'?`<div style="margin-top:22px;display:flex;gap:10px;flex-wrap:wrap"><button class="mlbtn" data-a="go" data-t="bl" data-v="tree">Open the Vane tree on Bloodlines</button><button class="mlbtn ghost" data-a="go" data-t="net" data-v="matter/overview">Open matter 2025-0417</button></div>`:''}
    ${id==='m7'||id==='m12'?endCard():''}</div>`;
  return `<div class="ml ${S.mlRead?'reading':''}"><div class="mltop"><span class="brand"><i>A&amp;P</i>Mail</span><div class="mlsearch">${ic('search')}Search mail and people</div><span class="me">AS</span></div>
  <div class="mlbody"><nav class="folders"><span class="compose">${ic('draft')}New message</span>
    <span class="fold on">${ic('inbox')}Inbox${u?`<span class="n">${u}</span>`:''}</span><span class="fold">${ic('draft')}Drafts</span><span class="fold">${ic('send')}Sent items</span><span class="fold">${ic('archive')}Archive</span><span class="fold">${ic('trash')}Deleted items</span><span class="fold">${ic('folder')}Matters</span><span class="fold">${ic('folder')}Partners only</span></nav>
    <div class="mlist"><div class="lh"><span>Inbox</span><span style="font-weight:400;color:var(--ml-muted);font-size:13px">${ids.length} items</span></div>${list}</div>
    <div class="rpane">${reading}</div></div></div>`;
}
function endCard(){
  if(S.failed) return `<div class="endcard"><b>Case lost</b><p>Three filings without five accepted findings.</p><div><button class="mlbtn" style="background:#fff;color:#1d1a1c" data-a="reset">Replay case</button></div></div>`;
  const g = ['','A','B','C'][S.attempts] + (S.flags.usedHint?'−':'');
  return `<div class="endcard"><small style="opacity:.7;letter-spacing:.06em;text-transform:uppercase">Case 1 complete · filings used: ${S.attempts} of 3</small><div class="g">${g}</div><p>Your tree has one branch now. It's going to get worse.</p><div><button class="mlbtn" style="background:#fff;color:#1d1a1c" data-a="reset">Replay case</button></div></div>`;
}

/* ================= INTRANET ================= */
function netApp(r){
  const sec = r==='law'?'law':'matters';
  const top = `<div class="nttop"><span class="crest"><i>A·P</i><span>Ashgrove &amp; Pell</span></span>
    <nav class="ntnav"><button disabled>Home</button><button class="${sec==='matters'?'on':''}" data-a="go" data-t="net" data-v="matter/overview">Matters</button><button class="${sec==='law'?'on':''}" data-a="go" data-t="net" data-v="law">Law library</button><button disabled>People</button></nav>
    <span class="user">Associate · Night roster</span></div>`;
  return `<div class="nt">${top}<main class="ntmain">${r==='law'?lawPage():matterPage(r.split('/')[1]||'overview')}</main></div>`;
}
function lawPage(){
  return `<div class="crumbs" style="color:var(--nt-muted);padding:0"><span>Law library</span><span>›</span><span>Succession</span></div>
  <div><h1>Succession law and the Nocturnal Accord</h1><p style="color:var(--nt-muted);margin:6px 0 0">Human law applies unless a party is turned. Then the Accord governs. Add any provision you rely on to the matter.</p></div>
  <div class="lawlayout"><nav class="toc"><span class="h">Contents</span>${LAW.map(l=>`<button data-a="toc" data-v="${l.id}">${l.cite.split(' · ')[1]} ${l.title}</button>`).join('')}</nav>
  <div style="display:flex;flex-direction:column;gap:14px">${LAW.map(l=>`<article class="article" id="art-${l.id}"><div class="ahd"><div><div class="cite">${l.cite}</div><h3>${l.title}</h3></div><button class="nbtn ${pinned(l.id)?'sec':''} sm" data-a="pin" data-v="${l.id}">${pinned(l.id)?ic('check')+'Cited in matter':'Cite in matter'}</button></div>${l.body.map(b=>`<p>${b}</p>`).join('')}</article>`).join('')}</div></div>`;
}
function matterPage(sub){
  const status = S.won ? '<span class="pill green">Closed · ruling accepted</span>' : S.failed ? '<span class="pill red">Reassigned to D. Pell</span>' : '<span class="pill amber">Open · associate review</span>';
  const tabs = [['overview','Overview'],['evidence',`Evidence (${S.pins.length})`],['lab','Photo lab'],['ruling','Ruling'],['notes','Notes']];
  const body = {overview:mOverview,evidence:mEvidence,lab:labView,ruling:ruleView,notes:()=>`<div class="box"><div class="bh"><h2>Working notes</h2><span style="color:var(--nt-muted);font-size:13px">Saved automatically</span></div><div class="bb"><textarea id="notes" placeholder="Private to you.">${esc(S.notes)}</textarea></div></div>`}[sub]();
  return `<div class="crumbs" style="color:var(--nt-muted);padding:0;display:flex;gap:6px"><button class="lnk" data-a="go" data-t="net" data-v="matter/overview">Matters</button><span>›</span><span>Probate</span><span>›</span><span>2025-0417</span></div>
  <div class="mhd"><div><h1>Estate of Cornelius Vane</h1><div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">${status}<span class="pill">Probate · contested</span></div></div></div>
  <div class="meta"><div><small>Matter</small><b>2025-0417</b></div><div><small>Responsible partner</small><b>R. Ashgrove</b></div><div><small>Assigned</small><b>Associate (nights)</b></div><div><small>Registry</small><b>Ashby Probate Registry</b></div><div><small>Filings used</small><b>${S.attempts} of 3</b></div></div>
  <div class="mtabs">${tabs.map(([k,l])=>`<button class="${sub===k?'on':''}" data-a="go" data-t="net" data-v="matter/${k}">${l}</button>`).join('')}</div>${body}`;
}
function mOverview(){
  return `<div class="cols2"><div style="display:flex;flex-direction:column;gap:18px">
    <div class="box"><div class="bh"><h2>Parties</h2></div><div class="ttable-wrap"><table class="ttable"><tr><th>Name</th><th>Role</th><th>Represented by</th><th>DNA kit</th></tr>
      <tr><td><button class="lnk" data-a="go" data-t="bl" data-v="person/cornelius/facts">Cornelius Vane</button></td><td>Deceased (registered)</td><td>—</td><td>None</td></tr>
      <tr><td><button class="lnk" data-a="go" data-t="bl" data-v="person/julian/facts">Julian Ambrose Vane</button></td><td>Named heir</td><td>Self</td><td><button class="lnk" data-a="go" data-t="bl" data-v="dna/julian">BL-77-0302</button></td></tr>
      <tr><td><button class="lnk" data-a="go" data-t="bl" data-v="person/margaret/facts">Margaret Holloway</button></td><td>Objector</td><td>Self</td><td><button class="lnk" data-a="go" data-t="bl" data-v="dna/margaret">BL-51-1188</button></td></tr>
      <tr><td><button class="lnk" data-a="go" data-t="bl" data-v="person/daphne/facts">Daphne Marsh-Pike</button></td><td>Claimant (disputed)</td><td>Pryor Legal</td><td><button class="lnk" data-a="go" data-t="bl" data-v="dna/daphne">BL-66-0809</button></td></tr></table></div></div>
    <div class="box"><div class="bh"><h2>Estate assets</h2></div><div class="ttable-wrap"><table class="ttable"><tr><th>Asset</th><th>Notes</th><th style="text-align:right">Value</th></tr>
      <tr><td>Vane House, 14 Hollow Lane</td><td>Heritage listed</td><td class="num">$2,140,000</td></tr><tr><td>Vane Family Trust investments</td><td>Held since 1934</td><td class="num">$3,880,000</td></tr>
      <tr><td>Cellar contents</td><td>Do not enter before nightfall (will, cl. 3)</td><td class="num">Undisclosed</td></tr><tr><td>Family crypt, Ashby cemetery</td><td>—</td><td class="num">Not valued</td></tr></table></div></div>
  </div><div style="display:flex;flex-direction:column;gap:18px">
    <div class="box"><div class="bh"><h2>Tasks</h2></div><div class="bb" style="display:flex;flex-direction:column;gap:8px;font-size:14px">
      <span>${S.pins.length>=8?'☑':'☐'} Gather evidence (8+ items)</span><span>${Object.keys(S.reports).some(k=>S.reports[k].ok)?'☑':'☐'} Certify a photo comparison</span><span>${S.pins.some(p=>p.startsWith('law'))?'☑':'☐'} Cite applicable law</span><span>${S.won?'☑':'☐'} File a ruling the partners accept</span></div></div>
    <div class="box"><div class="bh"><h2>Activity</h2></div><div class="bb">${S.log.length?`<ul class="log">${S.log.slice(0,10).map(l=>`<li><time>${l.t}</time><span>${esc(l.msg)}</span></li>`).join('')}</ul>`:'<p style="margin:0;color:var(--nt-muted)">No activity yet.</p>'}</div></div>
  </div></div>`;
}
function srcLabel(id){
  const r = REC[id];
  if(PAGE_KINDS.has(r.kind)) return 'Bloodlines · '+COLL[r.kind].split(',')[0];
  return {Law:'Law library',DNA:'Bloodlines DNA',Lab:'Photo lab',Letter:'Email attachment',Diary:'Email attachment',Hint:'Bloodlines member tree',Certificate:'Bloodlines Professional'}[r.kind]||'—';
}
function mEvidence(){
  if(!S.pins.length) return `<div class="empty">No evidence yet. Use "Save to matter" on Bloodlines records, DNA reports, email attachments and law library provisions.</div>`;
  return `<div class="box"><div class="bh"><h2>Evidence register</h2><span style="color:var(--nt-muted);font-size:13px">${S.pins.length} items</span></div><div class="ttable-wrap"><table class="ttable"><tr><th></th><th>Item</th><th>Source</th><th>Year</th><th></th></tr>
  ${S.pins.map(id=>{const r=REC[id];return `<tr><td><span class="th">${r.photo?photo(PH[id]):r.kind.slice(0,4).toUpperCase()}</span></td><td><button class="lnk" data-a="open" data-v="${id}">${r.title}</button></td><td style="color:var(--nt-muted)">${srcLabel(id)}</td><td>${r.year}</td><td style="text-align:right"><button class="nbtn sec sm" data-a="pin" data-v="${id}">Remove</button></td></tr>`;}).join('')}</table></div></div>`;
}

/* ---- photo lab ---- */
function labView(){
  const avail = Object.keys(PH).filter(id=>S.seen.includes(id)||pinned(id));
  const L = S.lab;
  const pane = side => { const id = L[side], marks = side==='a'?L.ma:L.mb;
    return `<div class="labpane"><label for="lab-${side}" style="font-size:12px;font-weight:600;color:var(--nt-muted);text-transform:uppercase;letter-spacing:.05em">Photo ${side.toUpperCase()}</label>
      <select id="lab-${side}" data-lab-select="${side}"><option value="">Choose a photo…</option>${avail.map(p=>`<option value="${p}" ${id===p?'selected':''}>${PH[p].who}</option>`).join('')}</select>
      ${id?labSvg(id,marks):'<div class="empty">No photo selected.</div>'}
      ${id?`<ul class="marklist">${marks.length?marks.map(m=>`<li>${MARK_NAME[m]}</li>`).join(''):'<li>No marks found yet. Click a mark on the face.</li>'}</ul>`:''}</div>`; };
  const both = L.a && L.b && L.a!==L.b, shared = both ? L.ma.filter(m=>L.mb.includes(m)) : [];
  return `<div class="box"><div class="bh"><h2>Photo lab</h2></div><div class="bb" style="display:flex;flex-direction:column;gap:14px"><p style="margin:0;color:var(--nt-muted)">Choose two photographs you've viewed on Bloodlines. Click each permanent mark you can see on the face, such as a scar or a mole. Two or more marks found on both photos certifies a positive match.</p>
    ${avail.length<2?'<div class="note">View at least two photographs on Bloodlines first. Licence and newspaper photos count.</div>':''}
    <div class="lab">${pane('a')}${pane('b')}</div>
    ${both?`<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span style="flex:1;min-width:200px;color:var(--nt-muted)">Marks found on both: ${shared.length}. Missed clicks: ${L.miss}.</span><button class="nbtn" data-a="certify">Certify comparison</button></div>`:''}</div></div>`;
}
function labSvg(id,marks){
  const m = marksOf(id);
  return photo(PH[id], `data-lab="1" data-id="${id}"`).replace('</svg>', marks.map(k=>`<circle class="markc" cx="${m[k][0]}" cy="${m[k][1]}" r="6"/>`).join('')+'</svg>');
}
function cmpRec(id){
  const r = S.reports[id];
  return {kind:'Lab',year:2025,title:`Photo lab: ${PH[r.a].who} vs ${PH[r.b].who}`,k:'',hidden:true,
    render:()=>`<div class="doc"><h4>Certified Photo Comparison</h4><div class="c">Ashgrove &amp; Pell photo lab · Ref ${id.slice(4).toUpperCase()}</div>
    <div class="lab" style="gap:12px">${photo(PH[r.a])}${photo(PH[r.b])}</div>
    ${dl([['Photo A',PH[r.a].who],['Photo B',PH[r.b].who],['Marks on both',r.shared.length?r.shared.map(s=>MARK_NAME[s]).join('; '):'None'],['Result',r.ok?'POSITIVE: same person':'INCONCLUSIVE']])}
    <p class="rn">${r.ok?'Two independent permanent marks match. Counts as one identifying document under Accord Art. 2.':'Fewer than two shared permanent marks. A single mark, like a mole, can run in families. Not admissible as identification.'}</p></div>`};
}

/* ---- ruling ---- */
function ruleView(){
  const done = S.won||S.failed;
  return `<div style="display:flex;flex-direction:column;gap:14px">
    <div class="box"><div class="bb" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2>File a ruling</h2><p id="rulemsg" style="margin:4px 0 0;color:var(--nt-muted)">Answer each finding and attach the evidence that proves it. Accepted findings stay locked in.</p></div>
    <div class="attempts" aria-label="Filings used">${[0,1,2].map(i=>`<i class="${i<S.attempts?'used':''}"></i>`).join('')}<span>${3-S.attempts} filing${3-S.attempts===1?'':'s'} left</span></div></div></div>
    <form data-form="rule" style="display:flex;flex-direction:column;gap:12px">
    ${FIND.map((f,i)=>{ const r = S.res[f.id], locked = r===true||done;
      return `<fieldset class="finding ${r===true?'ok':r===false?'no':''}"><div class="fhead"><span class="n">FINDING ${i+1}</span><legend>${f.q}</legend>${r===true?'<span class="pill green">Accepted</span>':r===false?'<span class="pill red">Not accepted</span>':''}</div>
      ${r===false?`<p class="nudge">${f.nudge}${S.flags['hint_'+f.id]?' Also: you attached a hint from a member tree. The claimant built that tree.':''}</p>`:''}
      ${f.opts.map(([v,l])=>`<label class="opt"><input type="radio" name="${f.id}" id="${f.id}-${v}" value="${v}" ${S.ans[f.id]===v?'checked':''} ${locked?'disabled':''}><span>${l}</span></label>`).join('')}
      <div style="font-size:12px;font-weight:600;color:var(--nt-muted);text-transform:uppercase;letter-spacing:.05em;margin-top:4px">Supporting evidence · ${(S.ev[f.id]||[]).filter(pinned).length} attached · 4 at most${f.id==='F1'?' · needs 3 documents':''}</div>
      ${S.pins.length?`<div class="chips">${S.pins.map(p=>`<button type="button" class="chip" data-a="ev" data-f="${f.id}" data-v="${p}" aria-pressed="${(S.ev[f.id]||[]).includes(p)}" ${locked?'disabled':''}>${REC[p].title}</button>`).join('')}</div>`:'<p style="font-size:13px;margin:0;color:var(--nt-muted)">Add evidence to the matter first. It will appear here.</p>'}
      </fieldset>`;}).join('')}
    <div><button class="nbtn" ${done?'disabled':''}>${S.won?'Ruling accepted':S.failed?'Matter reassigned':'File ruling with partners'}</button></div></form>
    ${S.won?`<div class="verdict ok"><b>All five findings accepted</b><p>Ambrose, Cornelius and Julian Vane are one man. He registered his own birth twice and his own death twice, and inherited from himself in 1934. Under Article 4 the estate goes to Margaret Holloway. Check your mail.</p></div>`:''}
    ${S.failed?`<div class="verdict no"><b>Matter reassigned</b><p>Three filings used. Check your mail.</p></div>`:''}</div>`;
}
function judge(){
  let all = true;
  FIND.forEach(f=>{
    if(S.res[f.id]===true) return;
    const ev = (S.ev[f.id]||[]).filter(pinned), hint = ev.includes('hintOfficial');
    if(hint){ S.flags['hint_'+f.id]=true; S.flags.usedHint=true; }
    const ok = S.ans[f.id]===f.ans && evidenceOk(f.id, ev) && !hint;
    S.res[f.id] = ok; if(!ok) all = false;
  });
  S.attempts++;
  log(`Ruling filed (${S.attempts} of 3): ${Object.values(S.res).filter(Boolean).length} of 5 findings accepted`);
  if(all){ S.won = true; }
  else if(S.attempts>=3){ S.failed = true; }
}

/* ================= EVENTS ================= */
document.addEventListener('click', e=>{
  if(e.target.id==='modal'){ closePreview(); return; }
  const svg = e.target.closest('svg[data-lab]');
  if(svg){
    const side = svg.closest('.labpane').querySelector('select').dataset.labSelect, id = svg.dataset.id, pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY; const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    const m = marksOf(id), list = side==='a'?S.lab.ma:S.lab.mb;
    const hit = Object.keys(m).find(k=>Math.hypot(m[k][0]-p.x, m[k][1]-p.y) < 8);
    if(hit){ if(!list.includes(hit)) list.push(hit); } else S.lab.miss++;
    save(); render(); return;
  }
  const b = e.target.closest('[data-a]'); if(!b || b.disabled) return;
  const a = b.dataset.a, v = b.dataset.v;
  switch(a){
    case 'tab': S.tab=v; save(); render(); $('#vp').scrollTop=0; return;
    case 'go': go(v, b.dataset.t); return;
    case 'back': case 'fwd': { const h=S.hist[S.tab]; h.i = Math.max(0,Math.min(h.s.length-1,h.i+(a==='back'?-1:1))); S.mlRead = S.tab==='mail' && cur().split('/')[1] ? S.mlRead : false; save(); render(); return; }
    case 'reload': render(); toast('Reloaded'); return;
    case 'burger': S.navOpen=!S.navOpen; render(); return;
    case 'cookie': S.cookie=true; save(); render(); return;
    case 'toastonly': toast(b.dataset.msg); return;
    case 'sel': S.sel=v; render(); return;
    case 'unsel': S.sel=null; render(); return;
    case 'tz': S.tz = +v===0 ? 1 : Math.max(.6,Math.min(1.4,S.tz*+v)); render(); return;
    case 'zoom': S.zoom = +v===0 ? 1 : Math.max(.6,Math.min(2,S.zoom+ +v)); render(); return;
    case 'open': if(!$('#modal').hidden) closePreview(); openDoc(v); return;
    case 'close': closePreview(); return;
    case 'pin': togglePin(v); if(b.dataset.m){ showPreview(v); render(); } else render(); return;
    case 'ev': { const f=b.dataset.f, l=S.ev[f]||(S.ev[f]=[]);
      if(!l.includes(v) && l.filter(pinned).length>=MAX_EV){ toast('Four items at most per finding'); return; }
      S.ev[f] = l.includes(v)?l.filter(x=>x!==v):[...l,v]; save(); render(); return; }
    case 'searchname': S.q={name:v,kw:'',kind:'All'}; S.searched=true; go('search','bl'); return;
    case 'clearsearch': S.q={name:'',kw:'',kind:'All'}; S.searched=false; save(); render(); return;
    case 'facet': S.q.kind=v; save(); render(); return;
    case 'facetall': S.q={name:'',kw:'',kind:v}; S.searched=true; save(); render(); return;
    case 'mailopen': S.mlRead=true; go('inbox/'+v,'mail'); return;
    case 'mailback': S.mlRead=false; render(); return;
    case 'toc': { const el=document.getElementById('art-'+v); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); return; }
    case 'certify': {
      const L=S.lab, shared=L.ma.filter(m=>L.mb.includes(m)), id='cmp:'+[L.a,L.b].sort().join('-'), ok=shared.length>=2;
      S.reports[id]={a:L.a,b:L.b,shared,ok}; REC[id]=cmpRec(id);
      if(!pinned(id)){ S.pins.push(id); log('Photo lab certified: '+REC[id].title+(ok?' (positive)':' (inconclusive)')); }
      save(); render(); showPreview(id); return; }
    case 'reset': try{localStorage.removeItem('bloodlines-v3')}catch(e){} for(const id in S.reports) delete REC[id]; Object.assign(S, FRESH()); render(); return;
  }
});
document.addEventListener('change', e=>{
  const t = e.target;
  if(t.dataset.labSelect){ const s=t.dataset.labSelect; S.lab[s]=t.value; if(s==='a') S.lab.ma=[]; else S.lab.mb=[]; S.lab.miss=0; save(); render(); }
  else if(t.dataset.kit){ go('dna/'+t.value,'bl'); }
  else if(t.dataset.find){ if(t.value){ S.sel=t.value; render(); } }
  else if(t.type==='radio' && /^F\d$/.test(t.name)){ S.ans[t.name]=t.value; save(); }
});
document.addEventListener('input', e=>{ if(e.target.id==='notes'){ S.notes=e.target.value; save(); }});
document.addEventListener('submit', e=>{
  e.preventDefault(); const f = e.target;
  if(f.dataset.form==='qsearch'){ S.q={name:'',kw:$('#hq').value,kind:'All'}; S.searched=true; go('search','bl'); }
  if(f.dataset.form==='search'){ S.q={name:$('#sname').value,kw:$('#skw').value,kind:$('#skind').value}; S.searched=true; log(`Searched Bloodlines: "${(S.q.name+' '+S.q.kw).trim()||S.q.kind}"`); save(); render(); }
  if(f.dataset.form==='rule'){
    const missing = FIND.filter(x=>S.res[x.id]!==true && !S.ans[x.id]);
    if(missing.length){ $('#rulemsg').textContent = `Answer every finding before filing. Missing: ${missing.map(x=>'Finding '+x.id.slice(1)).join(', ')}.`; $('#rulemsg').style.color='var(--bad)'; return; }
    judge(); save(); render(); $('#vp').scrollTop=0;
    toast(S.won?'Ruling accepted. You have new mail.':S.failed?'Matter reassigned. You have new mail.':'Ruling returned by the partners');
  }
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && !$('#modal').hidden) closePreview(); });
render();
