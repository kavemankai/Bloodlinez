/* ================= ART ================= */
const DROP = '<svg class="drop" viewBox="0 0 20 26" aria-hidden="true"><path d="M10 1 C 6 9, 2 13, 2 17.5 A 8 8 0 0 0 18 17.5 C 18 13, 14 9, 10 1 Z" fill="currentColor"/><path d="M6.5 17 a3.5 3.5 0 0 0 3 3.6" stroke="#fff" stroke-opacity=".55" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';

const TONES = {
  sepia:{bg:'#d9c6a3',bg2:'#a88d62',skin:'#cdb088',skin2:'#b8976d',hair:'#3b2a1a',cloth:'#3a2e24',collar:'#efe5cf',ln:'#2a1d12',scar:'#efe0c2'},
  mono:{bg:'#d2d2d0',bg2:'#8e8e8a',skin:'#bdbcb8',skin2:'#a2a19c',hair:'#262624',cloth:'#353533',collar:'#efefec',ln:'#1d1d1b',scar:'#ececea'},
  seventies:{bg:'#a9bfc4',bg2:'#6f8c93',skin:'#e2b99a',skin2:'#c99b7c',hair:'#4a3020',cloth:'#7a5430',collar:'#e9d9b9',ln:'#3a2418',scar:'#f6e0cf'},
  modern:{bg:'#dfe3e6',bg2:'#b9c0c6',skin:'#e6c2a6',skin2:'#cfa588',hair:'#2b2420',cloth:'#2e3a46',collar:'#2e3a46',ln:'#2b1d17',scar:'#f8e6d8'}
};
const HAIR = {
  part:'M35 55 C 34 30, 50 24, 62 25 C 78 25, 88 34, 85 56 C 80 42, 70 37, 56 40 C 47 42, 40 46, 35 55 Z',
  long:'M31 74 C 26 30, 48 19, 62 21 C 83 21, 95 34, 89 76 C 87 58, 83 46, 75 41 C 63 46, 46 43, 38 52 C 35 59, 34 66, 31 74 Z',
  short:'M36 52 C 35 31, 50 25, 62 26 C 77 26, 87 35, 84 52 C 80 41, 70 38, 61 40 C 51 39, 42 43, 36 52 Z',
  flat:'M34 50 C 34 31, 50 27, 60 27 C 72 27, 86 31, 86 50 C 78 39, 44 37, 34 50 Z',
  wave:'M35 54 C 32 33, 46 26, 60 26 C 77 26, 88 35, 85 55 C 82 45, 75 40, 66 40 L 61 35 C 53 40, 43 43, 35 54 Z'
};
let gN = 0;
/* one face, drawn in a 120x150 cell, offset by dx */
function faceG(o, dx=0){
  const c = TONES[o.tone], jaw = o.jaw||24;
  const collar = o.era==='victorian'
    ? `<path d="M46 108 L60 122 L74 108 L70 104 L60 113 L50 104 Z" fill="${c.collar}"/><path d="M57 118 L60 135 L63 118 Z" fill="#1d1712"/>`
    : o.era==='seventies' ? `<path d="M42 106 L60 128 L50 150 L30 150 L34 112 Z M78 106 L60 128 L70 150 L90 150 L86 112 Z" fill="${c.collar}" opacity=".9"/>`
    : o.era==='suit' ? `<path d="M48 106 L60 120 L72 106 Z" fill="${c.collar}"/><path d="M58 114 L60 146 L62 114 Z" fill="${c.ln}"/>`
    : `<path d="M48 108 Q60 118 72 108" stroke="#1c252e" stroke-width="3" fill="none"/>`;
  return `<g transform="translate(${dx} 0)">
  <path d="M8 150 C 12 118, 36 106, 60 106 C 84 106, 108 118, 112 150 Z" fill="${c.cloth}"/>
  <rect x="52" y="86" width="16" height="24" fill="${c.skin2}"/>${collar}
  <ellipse cx="${60-jaw-0}" cy="64" rx="5" ry="9" fill="${c.skin2}"/><ellipse cx="${60+jaw}" cy="64" rx="5" ry="9" fill="${c.skin2}"/>
  <ellipse cx="60" cy="62" rx="${jaw}" ry="30" fill="${c.skin}"/>
  <path d="${HAIR[o.hair]}" fill="${c.hair}"/>
  <path d="${o.heavy?'M43 51 L55 50 M65 50 L77 51':'M44 52 L54 50.5 M66 50.5 L76 52'}" stroke="${c.ln}" stroke-width="${o.heavy?2.8:2}" stroke-linecap="round"/>
  <ellipse cx="49" cy="58" rx="3.2" ry="1.8" fill="${c.ln}"/><ellipse cx="71" cy="58" rx="3.2" ry="1.8" fill="${c.ln}"/>
  ${o.glasses?`<g stroke="${c.ln}" stroke-width="1.3" fill="none"><circle cx="49" cy="58" r="7"/><circle cx="71" cy="58" r="7"/><path d="M56 58 L64 58"/></g>`:''}
  <path d="${o.nose==='broad'?'M60 58 L56 71 L64 72':'M60 58 L57 71 L62.5 72'}" stroke="${c.ln}" stroke-width="1.3" fill="none" stroke-linecap="round" opacity=".7"/>
  ${o.mous?`<path d="M50 77 Q60 72 70 77 Q60 79 50 77 Z" fill="${c.hair}"/>`:''}
  <path d="M52 80 Q60 82.5 68 80" stroke="${c.ln}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  ${o.scar?`<path d="M71 43.5 L76.5 54" stroke="${c.scar}" stroke-width="1.6" stroke-linecap="round"/><path d="M72.5 47.5 L75.5 46.5 M74 50.5 L77 49.5" stroke="${c.scar}" stroke-width=".9" stroke-linecap="round"/>`:''}
  ${o.mole?`<circle cx="46.5" cy="74" r="1.2" fill="${c.ln}" opacity=".75"/>`:''}
  </g>`;
}
const VAMP = {scar:true,mole:true,hair:'part',era:'victorian'};
function photo(p, attrs=''){
  const w = 120*p.faces.length, c = TONES[p.faces[0].tone], id='g'+(gN++), hid='h'+(gN++);
  const halftone = p.news ? `<defs><pattern id="${hid}" width="3" height="3" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r=".7" fill="#000" opacity=".22"/></pattern></defs><rect width="${w}" height="150" fill="url(#${hid})"/>` : '';
  return `<svg viewBox="0 0 ${w} 150" role="img" aria-label="${p.alt}" ${attrs} class="${w>120?'wide':''}">
  <defs><radialGradient id="${id}" cx="50%" cy="40%" r="75%"><stop offset="0" stop-color="${c.bg}"/><stop offset="1" stop-color="${c.bg2}"/></radialGradient></defs>
  <rect width="${w}" height="150" fill="url(#${id})"/>${p.faces.map((f,i)=>faceG(f,i*120)).join('')}
  ${p.faces[0].tone==='sepia'?`<rect width="${w}" height="150" fill="#6b4a1f" opacity=".12"/>`:''}${halftone}</svg>`;
}
function sig(txt, flourish=true){
  return `<svg class="sig" viewBox="0 0 170 54" aria-label="Signature: ${txt}"><text x="10" y="34">${txt}</text>${flourish?'<path d="M14 42 C 48 50, 96 30, 150 40 M150 40 C 158 41, 160 34, 152 33 C 146 32, 140 44, 156 48"/>':''}</svg>`;
}
const MARKS_FACE = {scar:[74,49], mole:[46.5,74]};
const MARK_NAME = {scar:'Scar through the left eyebrow', mole:'Mole on the lower cheek'};

/* ================= PHOTOS ================= */
const PH = {
  photo1889:{alt:'Studio portrait of Ambrose Vane, 1889',faces:[{...VAMP,tone:'sepia'}],who:'Ambrose Vane (1889)',vamp:true},
  photo1912:{alt:'Wedding portrait, 1912: groom and bride\'s father',faces:[{tone:'sepia',hair:'flat',era:'victorian',mous:true,jaw:26,nose:'broad',heavy:true},{...VAMP,tone:'sepia'}],who:'Bride\'s father (1912)',vamp:true,offset:120},
  photo1950:{alt:'Thomas Holloway, 1950',faces:[{tone:'mono',hair:'wave',era:'suit',mole:true,glasses:true,jaw:25}],who:'Thomas Holloway (1950)'},
  photo1962:{alt:'Newspaper photograph of Cornelius Vane, 1962',faces:[{...VAMP,tone:'mono',era:'suit'}],who:'Cornelius Vane (1962)',vamp:true,news:true},
  licence1972:{alt:'Licence photo of Cornelius Vane, 1972',faces:[{...VAMP,tone:'seventies',hair:'long',era:'seventies'}],who:'Cornelius Vane (1972)',vamp:true},
  licence2019:{alt:'Licence photo of Julian Vane, 2019',faces:[{...VAMP,tone:'modern',hair:'short',era:'modern'}],who:'Julian Vane (2019)',vamp:true}
};
function marksOf(id){
  const p = PH[id], dx = p.offset||0, f = p.faces[dx?1:0], out = {};
  if(f.scar) out.scar = [MARKS_FACE.scar[0]+dx, MARKS_FACE.scar[1]];
  if(f.mole) out.mole = [MARKS_FACE.mole[0]+dx, MARKS_FACE.mole[1]];
  return out;
}

/* ================= PEOPLE ================= */
const PEOPLE = {
  ambrose:{name:'Ambrose Vane',life:'1857 – 1934',ini:'AV',facts:[['Born','c. 1857, Ashby'],['Married','Eliza Marsh, 1886'],['Occupation','Night clerk, shipping office (1891)'],['Residence','Vane House, 14 Hollow Lane'],['Died','1 Feb 1934, lost at sea, age 76']],recs:['photo1889','census1891','birth1888','photo1912','death1934','birth1934']},
  eliza:{name:'Eliza Vane (née Marsh)',life:'1861 – 1902',ini:'EV',facts:[['Born','1861, Ashby'],['Married','Ambrose Vane, 1886'],['Died','1902, Ashby']],recs:['census1891','birth1888']},
  harriet:{name:'Harriet Holloway (née Vane)',life:'1888 – 1960',ini:'HH',facts:[['Born','4 Jun 1888, Vane House'],['Parents','Ambrose Vane and Eliza Marsh'],['Married','Arthur Holloway, 1912'],['Died','1960, Ashby']],recs:['birth1888','census1891','photo1912']},
  cornelius:{name:'Cornelius Vane',life:'1934 – 2025',ini:'CV',tag:'Deceased',facts:[['Born','2 Mar 1934, Vane House'],['Father','Ambrose Vane'],['Mother','Not recorded'],['Residence','Vane House, 14 Hollow Lane (lifelong)'],['Died','2 Mar 2025, lost at sea, age 91']],recs:['birth1934','licence1972','rolls','will2024','death2025']},
  thomas:{name:'Thomas Holloway',life:'1920 – 1999',ini:'TH',facts:[['Born','1920, Ashby'],['Parents','Arthur Holloway and Harriet Vane'],['Died','1999, Ashby']],recs:['photo1950']},
  desmond:{name:'Desmond Vane',life:'1961 – 1994',ini:'DV',facts:[['Born','1961 (per family tree, no source)'],['Father','Cornelius Vane'],['Died','30 Oct 1994, Vane House, age 33']],recs:['death1994','birth1993']},
  daphne:{name:'Daphne Marsh-Pike',life:'1966 – Living',ini:'DM',tag:'Disputed',facts:[['Born','1966, Ashby'],['Mother','Lorna Marsh-Pike'],['Father','Not stated (claims Cornelius Vane)']],recs:['letterDaphne','birth1966','dnaDaphne']},
  margaret:{name:'Margaret Holloway',life:'1951 – Living',ini:'MH',tag:'Claimant',facts:[['Born','1951, Ashby'],['Father','Thomas Holloway'],['Relationship','Great-granddaughter of Ambrose Vane']],recs:['letterMargaret','dnaMargaret']},
  julian:{name:'Julian Ambrose Vane',life:'1993 – Living',ini:'JV',tag:'Claimant',facts:[['Born','14 Jan 1993, Vane House'],['Father','Desmond Vane'],['Mother','Not stated'],['Residence','Vane House, 14 Hollow Lane']],recs:['birth1993','licence2019','letterJulian','dnaJulian']}
};

/* ================= RECORDS ================= */
const dl = rows => `<dl>${rows.map(([a,b])=>`<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl>`;
const regDoc = (head, no, rows, sigTxt, note, sigLabel='Signature of informant:') => `<div class="doc"><h4>${head}</h4><div class="c">District of Ashby · No. ${no}</div>${dl(rows)}${sigTxt?`<div class="sigline"><span>${sigLabel}</span>${sigTxt}</div>`:''}${note?`<p class="rn">${note}</p>`:''}</div>`;
const clip = (paper, date, head, body, ph) => `<div class="clip"><div class="mast"><span>${paper}</span><span>${date}</span></div><h4>${head}</h4>${ph?photo(ph):''}${body.map(p=>`<p>${p}</p>`).join('')}</div>`;

const REC = {
  census1891:{kind:'Census',year:1891,title:'1891 Census, Vane House, 14 Hollow Lane',k:'Ambrose Eliza Harriet Vane Hollow Lane Vane House',
    render:()=>`<div class="doc"><h4>Census of 1891 · Householder's Schedule</h4><div class="c">District of Ashby · Enumeration Book 14 · Hollow Lane</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Name</th><th>Relation</th><th>Age</th><th>Occupation</th><th>Where born</th></tr>
    <tr><td>Ambrose Vane</td><td>Head</td><td>34</td><td>Night clerk, shipping office</td><td>Ashby</td></tr>
    <tr><td>Eliza Vane</td><td>Wife</td><td>30</td><td>—</td><td>Ashby</td></tr>
    <tr><td>Harriet Vane</td><td>Daughter</td><td>2</td><td>—</td><td>Vane House</td></tr></table></div>
    <div class="sigline"><span>Signature of head of household:</span>${sig('A. Vane')}</div>
    <p class="rn">Enumerator's note: Head of household not at home during the day. Returned after dusk to collect schedule. Curtains drawn throughout.</p></div>`},
  photo1889:{kind:'Photo',year:1889,title:'Studio portrait, Ambrose Vane',k:'Ambrose Vane portrait Halloran',
    render:()=>`<div class="photo">${photo(PH.photo1889)}<div class="doc" style="max-width:420px"><p><b>Halloran &amp; Sons, Photographic Studio, Ashby.</b></p><p>Pencilled on reverse: "A.V., aged 32. Taken by lamplight at the sitter's request. 1889."</p></div></div>`},
  photo1912:{kind:'Photo',year:1912,title:'Wedding portrait, Holloway–Vane, 1912',k:'Arthur Holloway Harriet Vane wedding Ambrose St Columba Ashgrove',
    render:()=>`<div class="photo">${photo(PH.photo1912)}<div class="doc" style="max-width:480px"><p><b>Marriage of Arthur Holloway and Harriet Vane, St Columba's, Ashby, 1912.</b></p><p>Evening portrait, taken after the reception at the request of the bride's father. Left: the groom. Right: the bride's father, Mr A. Vane.</p><p>Witness to the marriage: R. Ashgrove, solicitor.</p></div></div>`},
  photo1950:{kind:'Photo',year:1950,title:'Thomas Holloway, Ashby Rowing Club',k:'Thomas Holloway rowing club',
    render:()=>`<div class="photo">${photo(PH.photo1950)}<div class="doc" style="max-width:420px"><p>Thomas Holloway, aged 30, club secretary. Ashby Rowing Club annual, 1950.</p></div></div>`},
  photo1962:{kind:'Newspaper',year:1962,title:'"Lights burn till dawn at Vane House"',k:'Cornelius Vane ball Vane House Hollow Lane Courier',
    render:()=>clip('The Ashby Courier','Saturday, 17 March 1962','Lights burn till dawn at Vane House',
      ['Mr Cornelius Vane, 28, threw open the doors of Vane House on Friday for the first time in a generation. Guests danced until a quarter to six, when the host excused himself.','"He looks the image of his father," remarked one elderly guest, who asked not to be named. "The very image. It gave me quite a turn."'],PH.photo1962)},
  hospital1888:{kind:'Medical',year:1888,title:'Ashby Hospital admission, Ambrose Vane',k:'Ambrose Vane hospital wharf attack wound',
    render:()=>regDoc('Ashby Hospital · Casualty Register','1888/0219',[['Patient','Ambrose Vane, 31, clerk'],['Admitted','14 February 1888, 2:10 am'],['Injuries','Deep bite wounds to the neck. Laceration through the left eyebrow.'],['Condition','Severe loss of blood. No pulse found at 4 am.'],['Discharged','Self-discharged 14 February, 9:40 pm, against advice']],'',"House surgeon's note: Patient sat up at dusk and asked for the curtains to be closed. Pulse still absent. Wound above the eye closed overnight. I have no explanation and will not be writing one.")},
  news1888:{kind:'Newspaper',year:1888,title:'"Clerk survives savage attack on wharf"',k:'Ambrose Vane wharf attack clerk',
    render:()=>clip('The Ashby Courier','Thursday, 16 February 1888','Clerk survives savage attack on wharf',
      ['Mr Ambrose Vane, a night clerk with the shipping office, was set upon at the Ashby wharf in the early hours of Tuesday by an assailant he describes only as "a tall foreign gentleman."','Mr Vane, who lost a great deal of blood, left hospital the same evening. His wife, who is expecting their first child in the summer, said he was "quite himself, only very pale."'])},
  birth1888:{kind:'Birth',year:1888,title:'Birth registration, Harriet Vane',k:'Harriet Vane Ambrose Eliza Holloway',
    render:()=>regDoc('Registration of Birth','1888/0412',[['Child','Harriet Vane'],['Born','4 June 1888, Vane House, Hollow Lane'],['Father','Ambrose Vane, clerk'],['Mother','Eliza Vane, formerly Marsh'],['Informant','E. Vane, mother'],['Registered','11 June 1888']],`<svg class="sig" viewBox="0 0 170 54"><text x="10" y="36" style="font-size:28px">Eliza Vane</text></svg>`)},
  death1934:{kind:'Death',year:1934,title:'Death registration, Ambrose Vane',k:'Ambrose Vane Corrie drowned sea',
    render:()=>regDoc('Registration of Death','1934/0088',[['Deceased','Ambrose Vane'],['Age','76 years'],['Date of death','1 February 1934'],['Place','At sea off Ashby Point, from the steamer SS Corrie'],['Cause','Drowning (presumed)'],['Body','Not recovered'],['Informant',"Harbour Master's report"],['Registered','6 February 1934']],'',"Registrar's note: Deceased went overboard during a night crossing. No witnesses on deck.")},
  news1934:{kind:'Newspaper',year:1934,title:'"Man lost from the Corrie"',k:'Ambrose Vane Corrie overboard',
    render:()=>clip('The Ashby Courier','Saturday, 3 February 1934','Man lost from the Corrie',
      ['Mr Ambrose Vane of Hollow Lane, 76, is presumed drowned after going over the side of the SS Corrie during Thursday night\'s crossing. A steward saw Mr Vane on the rail "looking very well for his age." No cry was heard.','The Corrie\'s master notes that Mr Vane had booked a return passage.'])},
  trust1934:{kind:'Legal',year:1934,title:'Vane Family Trust deed',k:'Ambrose Cornelius Vane trust deed Ashgrove Pell',
    render:()=>`<div class="doc"><h4>Deed of Trust · The Vane Family Trust</h4>
    <p>Made 20 January 1934 by AMBROSE VANE of Vane House, Ashby (the Settlor).</p>
    <p>1. The Settlor gives Vane House and his investments to the Trustees, to hold for his son CORNELIUS VANE upon the Settlor's death.</p>
    <p>2. The Settlor declares that his son is not yet born but will be shortly.</p>
    <p>3. Should the Settlor be lost at sea, the Trustees shall not wait for a body.</p>
    <div class="sigline"><span>Signed by the Settlor:</span>${sig('A. Vane')}</div>
    <p class="rn">Prepared by Ashgrove &amp; Pell, Solicitors. Attesting solicitor: R. Ashgrove. Executed after hours. Amended 1993 to add "my grandson Julian" as a beneficiary, signed C. Vane.</p></div>`},
  birth1934:{kind:'Birth',year:1934,title:'Birth registration, Cornelius Vane',k:'Cornelius Vane Ambrose',
    render:()=>regDoc('Registration of Birth','1934/0151',[['Child','Cornelius Vane'],['Born','2 March 1934, Vane House, Hollow Lane'],['Father','Ambrose Vane, gentleman'],['Mother','(left blank)'],['Informant','A. Vane, father'],['Registered','9 March 1934']],sig('A. Vane'),"Registrar's note: Informant attended after hours by arrangement.")},
  rolls:{kind:'Roll',year:2023,title:'Electoral rolls, 14 Hollow Lane, 1903–2025',k:'Ambrose Cornelius Julian Desmond Vane electoral roll Hollow Lane',
    render:()=>`<div class="doc"><h4>Electoral Rolls · Subdivision of Ashby</h4><div class="c">All enrolled electors at 14 Hollow Lane (Vane House)</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Roll</th><th>Electors at address</th><th>Occupation</th></tr>
    <tr><td>1903</td><td>Ambrose Vane</td><td>Gentleman</td></tr><tr><td>1919</td><td>Ambrose Vane</td><td>Gentleman</td></tr>
    <tr><td>1937</td><td>(none: owner a minor)</td><td>—</td></tr><tr><td>1955</td><td>Cornelius Vane</td><td>Gentleman</td></tr>
    <tr><td>1972</td><td>Cornelius Vane</td><td>Gentleman</td></tr><tr><td>1983</td><td>Cornelius Vane</td><td>Gentleman</td></tr>
    <tr><td>1990</td><td>Cornelius Vane</td><td>Gentleman</td></tr><tr><td>2013</td><td>Cornelius Vane</td><td>Retired</td></tr>
    <tr><td>2023</td><td>Cornelius Vane</td><td>Retired</td></tr><tr><td>2025</td><td>Julian Ambrose Vane</td><td>Gentleman</td></tr></table></div>
    <p class="rn">Enrolment became compulsory for all adults in 1924. One elector at this address in every year on file.</p></div>`},
  licence1972:{kind:'ID',year:1972,title:'Driver licence, Cornelius Vane',k:'Cornelius Vane licence',
    render:()=>`<div class="licence"><div class="ph">${photo(PH.licence1972)}</div><div class="f"><div class="hd">MOTOR REGISTRY · DRIVER LICENCE · 1972</div>
    ${dl([['Name','VANE, Cornelius'],['Date of birth','02/03/1934 (age 38)'],['Address','14 Hollow Lane, Ashby'],['Class','C'],['Conditions','N: night driving only (medical, photosensitivity)']])}
    <div class="sigline">${sig('C. Vane')}</div></div></div>`},
  death1994:{kind:'Death',year:1994,title:'Death registration, Desmond Vane',k:'Desmond Vane Cornelius',
    render:()=>regDoc('Registration of Death','1994/0973',[['Deceased','Desmond Vane'],['Age','33 years'],['Date of death','30 October 1994'],['Place','Vane House, 14 Hollow Lane'],['Cause','Misadventure'],['Disposal','Private cremation on the property'],['Informant','C. Vane, father'],['Registered','2 November 1994']],sig('C. Vane'),"Registrar's note: No birth registration located for deceased. Informant advised he would supply one. Not received.")},
  news1994:{kind:'Newspaper',year:1994,title:'"Quiet death at Vane House"',k:'Desmond Vane death Hollow Lane',
    render:()=>clip('The Ashby Courier','Thursday, 3 November 1994','Quiet death at Vane House',
      ['The death of Mr Desmond Vane, 33, at the family home on Hollow Lane has been registered by his father. No service will be held.','Neighbours expressed surprise. "I didn\'t know he had a son," said Mrs P. Doyle, who has lived opposite Vane House since 1958. "Forty years and I never saw a child go in or out. Never saw a light on before sundown either."'])},
  birth1993:{kind:'Birth',year:1993,title:'Birth registration, Julian Ambrose Vane',k:'Julian Vane Desmond Cornelius',
    render:()=>regDoc('Registration of Birth','1993/0046',[['Child','Julian Ambrose Vane'],['Born','14 January 1993, Vane House, Hollow Lane'],['Father','Desmond Vane'],['Mother','Not stated'],['Informant','C. Vane, grandfather'],['Registered','20 January 1993']],sig('C. Vane'),"Registrar's note: Home birth, no midwife. Informant attended after hours by arrangement.")},
  birth1966:{kind:'Birth',year:1966,title:'Birth registration, Daphne Marsh-Pike',k:'Daphne Lorna Marsh-Pike',
    render:()=>regDoc('Registration of Birth','1966/0730',[['Child','Daphne Marsh-Pike'],['Born','9 August 1966, Ashby Hospital'],['Father','Not stated'],['Mother','Lorna Marsh-Pike, typist'],['Informant','L. Marsh-Pike, mother'],['Registered','15 August 1966']],`<svg class="sig" viewBox="0 0 170 54"><text x="10" y="36" style="font-size:26px">L. Marsh-Pike</text></svg>`)},
  licence2019:{kind:'ID',year:2019,title:'Driver licence, Julian Vane',k:'Julian Vane licence',
    render:()=>`<div class="licence"><div class="ph">${photo(PH.licence2019)}</div><div class="f"><div class="hd">MOTOR REGISTRY · DRIVER LICENCE · 2019</div>
    ${dl([['Name','VANE, Julian Ambrose'],['Date of birth','14/01/1993 (age 26)'],['Address','14 Hollow Lane, Ashby'],['Class','C'],['Conditions','N: night driving only (medical, photosensitivity)']])}
    <div class="sigline">${sig('J. Vane')}</div></div></div>`},
  will2024:{kind:'Legal',year:2024,title:'Last will and testament, Cornelius Vane',k:'Cornelius Julian Vane will',
    render:()=>`<div class="doc"><h4>Last Will and Testament</h4>
    <p>I, CORNELIUS VANE, of Vane House, 14 Hollow Lane, Ashby, revoke all former wills and declare this to be my last will.</p>
    <p>1. I give the whole of my estate, including Vane House and its contents (the cellar in particular), to my grandson JULIAN AMBROSE VANE absolutely.</p>
    <p>2. Should my grandson predecease me, I give the whole of my estate to whichever of my descendants next presents himself.</p>
    <p>3. I direct that no person enter the cellar of Vane House before nightfall.</p>
    <div class="sigline"><span>Signed by the testator:</span>${sig('C. Vane')}</div>
    <p class="rn">Witnessed: D. Mortlake, notary, and his clerk. Executed 14 November 2024 at 11:40 pm.</p></div>`},
  death2025:{kind:'Death',year:2025,title:'Death registration, Cornelius Vane',k:'Cornelius Julian Vane Marguerite drowned sea',
    render:()=>regDoc('Registration of Death','2025/0214',[['Deceased','Cornelius Vane'],['Age','91 years'],['Date of death','2 March 2025'],['Place','At sea off Ashby Point, from the private vessel Marguerite'],['Cause','Drowning (presumed)'],['Body','Not recovered'],['Informant','J. Vane, grandson'],['Registered','4 March 2025']],'',"Registrar's note: Deceased went overboard during a night crossing. Grandson the only other person aboard. Date of death is the deceased's 91st birthday.")},
  news2025:{kind:'Newspaper',year:2025,title:'"Hollow Lane recluse lost at sea"',k:'Cornelius Julian Vane Marguerite',
    render:()=>clip('The Ashby Courier','Tuesday, 4 March 2025','Hollow Lane recluse lost at sea',
      ['Cornelius Vane, 91, is presumed drowned after going overboard from his motor yacht Marguerite off Ashby Point on Sunday night. It was his birthday.','His grandson Julian, the only other person aboard, told the Courier: "Grandfather insisted on taking the helm himself. He always said he wanted to go the way his father did." Mr Vane\'s father Ambrose was lost in the same waters in 1934.'])},
  marine2025:{kind:'Marine',year:2025,title:'Harbour incident report, MY Marguerite',k:'Marguerite harbour Julian Cornelius Vane',
    render:()=>regDoc('Ashby Harbour Authority · Incident Report','HA-25-031',[['Vessel','MY Marguerite, private'],['Reported by','J. Vane (aboard)'],['Reported','3 March 2025, 5:51 am'],['Search','Water police, 3 to 5 March. Nothing recovered.']],'',"Harbourmaster's note: Marguerite was found on her own mooring at 6 am, lines made fast with a bowline and two half hitches. Mr J. Vane says he brought her in alone in the dark, single-handed, in a 25-knot southerly, having never helmed before. Log entry for the night written in a copperplate hand. Mr J. Vane declined to wait for the police and left before sunrise.")},
  funeral2025:{kind:'Invoice',year:2025,title:'Mortlake & Daughters, funeral invoice',k:'Cornelius Julian Vane funeral memorial Mortlake',
    render:()=>`<div class="doc"><h4>Mortlake &amp; Daughters · Funeral Directors</h4><div class="c">Tax invoice 25-0098 · Account: J. Vane, Vane House</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Item</th><th>Amount</th></tr>
    <tr><td>Memorial service, no body, 10:00 pm</td><td>$1,400</td></tr>
    <tr><td>Coffin, mahogany, lined, deep</td><td>$6,900</td></tr>
    <tr><td>Delivery of coffin (empty) to Vane House cellar</td><td>$380</td></tr>
    <tr><td>Blackout drapes for chapel, client supplied</td><td>$0</td></tr></table></div>
    <p class="rn">Note from Mrs Mortlake: Client asked that the coffin be fitted with an inside latch. We have done this before for the Vane family, in 1934.</p></div>`},
  letterJulian:{kind:'Letter',year:2025,title:'Claim letter, Julian Vane',k:'Julian Vane letter',
    render:()=>`<div class="letter"><p>Dear Sir or Madam,</p><p>I write regarding my grandfather's estate. The will is clear and I don't see why the matter needs an associate's attention at all.</p><p>Grandfather and I were very close. We had the same tastes, the same habits, the same hours. People often said we could have been the same man.</p><p>Neither of the women writing to you understands this family. I would ask that any meeting be arranged after 8 pm. I have a condition.</p><p>Yours,</p><div class="hand">J. Vane</div></div>`},
  letterMargaret:{kind:'Letter',year:2025,title:'Objection letter, Margaret Holloway',k:'Margaret Holloway letter',
    render:()=>`<div class="letter"><p>To whoever is handling the Vane business,</p><p>I'm the only real family Cornelius had left. My grandmother Harriet was Ambrose Vane's daughter, and I can prove it.</p><p>I've never once seen that boy in daylight. Not at the memorial, which was held at 10 pm. When I was a girl, Uncle Cornelius used to visit Gran at night and he looked about thirty. When Julian turned up last year he looked about thirty too. He has the same little scar through his eyebrow.</p><p>I took one of those DNA tests. You'll see I'm who I say I am. Ask him to take one.</p><p>Margaret Holloway</p></div>`},
  letterDaphne:{kind:'Letter',year:2025,title:'Claim letter, Daphne Marsh-Pike',k:'Daphne Marsh-Pike Lorna letter',
    render:()=>`<div class="letter"><p>Dear Ashgrove &amp; Pell,</p><p>My mother, Lorna Marsh-Pike, typed for Mr Cornelius Vane from 1964 to 1967. She always told me he was my father. She said he came to the flat at night and was "a gentleman, but cold."</p><p>I was left off his will, which is no surprise. But a child is a child. I claim my share as his daughter.</p><p>I have taken the Bloodlines DNA test as asked. I share DNA with Mrs Holloway, which I understand proves we are family.</p><p>Daphne Marsh-Pike</p></div>`},
  diary1888:{kind:'Diary',year:1888,title:'Diary page, Eliza Vane, 1888',k:'Eliza Vane diary',
    render:()=>`<div class="diary"><small>From the diary of Eliza Vane. Lent by Margaret Holloway.</small>
    <span>16th Feb. A. home at last, after dark. He will not eat. His hands are so cold. The wound over his eye has closed as if it were never there.</span>
    <span>I have not told him yet that I am four months gone with child. I think I shall wait until he is himself again.</span></div>`},
  dnaJulian:{kind:'DNA',year:2025,title:'DNA kit report, Julian Vane',k:'',hidden:true,
    render:()=>`<div class="alert"><b>Lab notice.</b> Sample returned no viable cellular activity. Kit re-run twice with the same result. Matches: 0 of 21,406,118 tested members. Ethnicity: could not be estimated.</div><p class="sub" style="margin-top:12px">Every living person who has tested with Bloodlines shares DNA with at least one other member.</p>`},
  dnaMargaret:{kind:'DNA',year:2025,title:'DNA kit report, Margaret Holloway',k:'',hidden:true,
    render:()=>`<p>Margaret's kit matches 312 members on both the Holloway side and the Marsh side, as expected for a granddaughter of Harriet Vane and great-granddaughter of Eliza Marsh. The pattern fits Harriet being a biological child of Ambrose and Eliza.</p>`},
  dnaDaphne:{kind:'DNA',year:2025,title:'DNA kit report, Daphne Marsh-Pike',k:'',hidden:true,
    render:()=>`<p>Daphne shares 96 cM with Margaret Holloway. Every shared match between them sits on the Marsh side of Margaret's tree (descendants of Eliza Marsh's brothers). None sit on the Vane or Holloway side.</p><p>Daphne and Margaret are related through the Marsh family, not through Ambrose or Cornelius Vane.</p>`},
  hintOfficial:{kind:'Hint',year:2025,title:'Member-tree hint: Julian is grandson of Cornelius',k:'',hidden:true,
    render:()=>`<p>Source: public member tree <b>VaneFamily_Official</b>, owner <b>nightowl_jv</b>. Tree created 3 March 2025, the day after Cornelius Vane's death. One attached record (the will). No birth record for Desmond Vane attached.</p>`},
  nilDesmond:{kind:'Certificate',year:2025,title:'Nil-return search certificate, Desmond Vane birth',k:'',hidden:true,
    render:()=>`<div class="doc"><h4>Certificate of Search · Nil Return</h4><p>A search of birth registrations for the districts of Ashby, Port Hollis, Calder and Wenmouth, 1940 to 1994, under the surname VANE and given name DESMOND, found no entry.</p><p>A search under the father's name, Cornelius Vane, found no child registered before 1993.</p><p class="rn">Issued through Bloodlines Professional on behalf of Ashgrove &amp; Pell.</p></div>`},
  lawSA:{kind:'Law',year:1919,title:'Succession Act 1919, ss 12 and 49',k:'',hidden:true,render:()=>lawHtml('lawSA')},
  lawA1:{kind:'Law',year:1888,title:'Nocturnal Accord, Art. 1 (continuity)',k:'',hidden:true,render:()=>lawHtml('lawA1')},
  lawA2:{kind:'Law',year:1888,title:'Nocturnal Accord, Art. 2 (identity)',k:'',hidden:true,render:()=>lawHtml('lawA2')},
  lawA3:{kind:'Law',year:1888,title:'Nocturnal Accord, Art. 3 (issue)',k:'',hidden:true,render:()=>lawHtml('lawA3')},
  lawA4:{kind:'Law',year:1888,title:'Nocturnal Accord, Art. 4 (staged death)',k:'',hidden:true,render:()=>lawHtml('lawA4')},
  lawA5:{kind:'Law',year:1888,title:'Nocturnal Accord, Art. 5 (referral)',k:'',hidden:true,render:()=>lawHtml('lawA5')}
};
for(const id in PH) REC[id].photo = true;

const LAW = [
  {id:'lawSA',cite:'Succession Act 1919 · ss 12, 49',title:'Presumption of death; intestacy',body:[
    's 12. Where a person is lost at sea and the body is not recovered, a death may be registered on the report of a reliable witness. A registration is evidence of death. It is not proof of it.',
    's 49. Where a person dies without a valid will, the estate passes to the spouse; if none, to the children; if none, to the grandchildren; if none, to the parents; if none, to the siblings and their issue, and so on outward.',
    's 51. No person takes under a will or on intestacy from a death they procured.']},
  {id:'lawA1',cite:'Nocturnal Accord 1888 · Art. 1',title:'Continuity of the person',body:[
    '1. A person who is turned remains the same legal person after turning. Their property remains theirs.',
    '2. No inheritance arises from a death that has not occurred. A turned person who is registered as dead is not dead for the purposes of succession.']},
  {id:'lawA2',cite:'Nocturnal Accord 1888 · Art. 2',title:'Proof of identity across names',body:[
    '1. Where it is alleged that two or more named persons are one turned person, the allegation is proved by three independent identifying documents showing the same person across more than one century.',
    '2. A photograph counts as an identifying document only where a permanent mark can be seen on it. A certified photo-lab comparison counts as one document.']},
  {id:'lawA3',cite:'Nocturnal Accord 1888 · Art. 3',title:'Issue',body:[
    '1. The turned do not beget children. No person born more than forty weeks after a man\'s turning may be his issue.',
    '2. A child born within forty weeks after the turning is deemed begotten before it, and is the issue of the blood.',
    '3. The date of turning may be proved by any medical, press or private record of the attack.']},
  {id:'lawA4',cite:'Nocturnal Accord 1888 · Art. 4',title:'Staged deaths',body:[
    '1. Where a turned person stages their own death to pass property to a new name of their own, the property so passed is forfeit.',
    '2. Forfeited property passes as if the turned person had died intestate on the date of the staged death, to their issue of the blood under Art. 3, in the order the local succession law sets.',
    '3. Failing issue of the blood, forfeited property passes to the Nocturnal Registry.',
    '4. No name invented by the turned person takes anything.']},
  {id:'lawA5',cite:'Nocturnal Accord 1888 · Art. 5',title:'Referral',body:[
    'A practitioner who finds a matter falls under this Accord must refer it to the Nocturnal Registry within seven nights. Rulings of human courts on such matters are void without referral.']}
];
function lawHtml(id){const l=LAW.find(x=>x.id===id);return `<div class="doc"><h4>${l.cite}</h4><p><b>${l.title}</b></p>${l.body.map(b=>`<p>${b}</p>`).join('')}</div>`;}

const HINTS = [
  {id:'hintOfficial',title:'Julian Vane may be the grandson of Cornelius Vane',conf:'98% confidence',src:'From member tree "VaneFamily_Official" · owner nightowl_jv · created 3 Mar 2025',rec:null},
  {id:'h2',title:'Ambrose Vane may appear in the 1891 Census',conf:'Record match',src:'From Bloodlines census collections',rec:'census1891'},
  {id:'h3',title:'A photograph of Ambrose Vane is available',conf:'Record match',src:'From Halloran & Sons studio archive',rec:'photo1889'},
  {id:'h4',title:'Harriet Vane may appear in a 1912 wedding photograph',conf:'Record match',src:'From St Columba\'s parish collection',rec:'photo1912'}
];

/* ================= FINDINGS ================= */
const FIND = [
  {id:'F1',q:'Who is Julian Ambrose Vane?',opts:[['grandson',"Cornelius Vane's grandson, as the will says"],['self','Ambrose and Cornelius Vane: one man under three names'],['impostor','An unrelated impostor after the money'],['desmond','Desmond Vane, who faked his own death in 1994']],ans:'self',
    nudge:'Identity across names needs three independent documents spanning more than a century (Accord Art. 2). Faces with permanent marks hold up best. The photo lab can certify a match.'},
  {id:'F2',q:'Did Cornelius Vane die on 2 March 2025?',opts:[['drowned','Yes. He went overboard off Ashby Point.'],['staged','No. The death was staged.'],['open','It cannot be determined. Leave it as an open finding.']],ans:'staged',
    nudge:'Look at what happened to the boat afterwards, and at what was ordered for the memorial. Then look at 1934.'},
  {id:'F3',q:'Was Desmond Vane a real person?',opts:[['real',"Yes. Cornelius's son, who died in 1994."],['fabricated','No. A paper identity, created to give Julian a father.'],['adopted','A real man, informally adopted, never registered']],ans:'fabricated',
    nudge:'Look for Desmond anywhere a living adult would leave a mark. Search the birth registers yourself.'},
  {id:'F4',q:"What is Daphne Marsh-Pike's claim worth?",opts:[['daughter',"She is Cornelius's daughter and takes a child's share"],['not','She cannot be his daughter and takes nothing'],['unproven','Her claim is unproven for now and should be held open']],ans:'not',
    nudge:'When did Ambrose stop being able to father children? Read Article 3, then check her DNA against Margaret\'s.'},
  {id:'F5',q:'Who receives the estate?',opts:[['julian','Julian Vane, under the 2024 will'],['margaretSA','Margaret Holloway, as next of kin under the Succession Act'],['margaretA4','Margaret Holloway, as issue of the blood, under Accord Art. 4'],['owner','No one. The estate stays with its living owner.'],['registry','The Nocturnal Registry, as forfeit property'],['split','Margaret and Daphne, in equal shares']],ans:'margaretA4',
    nudge:'A staged death does not leave the estate where it was. Read Article 4, then prove the heir\'s line was begotten before the turning.'}
];
const SUP = {
  F1:['photo1889','photo1912','photo1962','licence1972','licence2019','birth1934','trust1934','dnaJulian','hospital1888'],
  F2:['death2025','marine2025','funeral2025','news2025','death1934','news1934','trust1934'],
  F3:['death1994','nilDesmond','rolls','news1994','birth1993'],
  F4:['dnaDaphne','birth1966','lawA3','hospital1888','news1888','diary1888'],
  F5:['lawA4','birth1888','dnaMargaret','hospital1888','news1888','diary1888','lawA3']
};
const NEED = {F1:3,F2:2,F3:2,F4:2,F5:2};
function supports(id,F){
  if(id.startsWith('cmp:')){ const r=S.reports[id]; return F==='F1' && r && r.ok; }
  return SUP[F].includes(id);
}

/* ================= MAIL ================= */
const MAIL = {
  m1:{from:'R. Ashgrove, Senior Partner',time:'10:52 pm',subj:'Vane estate: your first file',body:()=>`
    <p>Welcome to nights. Your first file is the estate of <b>Cornelius Vane</b>, 91, lost overboard off Ashby Point in March. Body not recovered.</p>
    <p>The will leaves everything to his grandson, <b>Julian Ambrose Vane</b>. His great-niece <b>Margaret Holloway</b> objects. As of this afternoon a third party, <b>Daphne Marsh-Pike</b>, says she is Cornelius's daughter. All three claimants have taken Bloodlines DNA tests.</p>
    <table class="assets"><tr><td>Vane House, 14 Hollow Lane (heritage listed)</td><td>$2,140,000</td></tr><tr><td>Vane Family Trust investments</td><td>$3,880,000</td></tr><tr><td>Cellar contents</td><td>Undisclosed</td></tr><tr><td>Family crypt, Ashby cemetery</td><td>Not valued</td></tr></table>
    <p>The partners want five findings, each backed by evidence. The ruling form is in the case file. Pin records as you go, then attach them to the findings they prove. You get three filings. After that, Pell takes the file and you take the blame.</p>
    <p>The Nocturnal Accord is in the law library. Read it. If any party turns out not to be strictly human, it decides the matter and the Succession Act doesn't.</p>
    <p>R.A.</p>`},
  m2:{from:'Firm IT',time:'9:30 pm',subj:'Bloodlines: search tips and hints',body:()=>`
    <p>Two reminders for all staff.</p>
    <p>Most records aren't attached to any tree. Search covers names, places and keywords, so try "Hollow Lane", "Marguerite" or "hospital", not just surnames. If a search comes up empty, a nil return can be certified and saved.</p>
    <p>Hints marked with the red drop come from public member trees. Anyone can make one, including the people you're investigating. Check who owns the tree. Pin the record, not the hint.</p>`},
  m3:{from:'People & Culture',time:'9:02 pm',subj:'Your complimentary Bloodlines DNA kit',body:()=>`
    <p>As part of onboarding, the firm has registered a Bloodlines DNA kit in your name. It's under DNA once results come back.</p>
    <p>Mr Ashgrove asks that all associates test. He says it helps with conflicts of interest.</p>`},
  m10:{from:'Pryor Legal',time:'8:15 pm',subj:'New claimant: Daphne Marsh-Pike',body:()=>`
    <p>We act for Ms Daphne Marsh-Pike, who claims as the natural daughter of the late Cornelius Vane. Her letter is attached. She has added herself to your Bloodlines tree as a disputed relative.</p>
    <p>We note that Ms Marsh-Pike shares DNA with your other claimant, Mrs Holloway. We trust that settles the matter.</p>`,attach:'letterDaphne'},
  m4:{from:'R. Ashgrove',time:'—',subj:'FW: Ashgrove estate (1740), file 0001',locked:true,body:()=>`<p><b>You don't have permission to open this message.</b></p><p>This item is restricted to partners.</p>`},
  m11:{from:'Margaret Holloway',time:'just now',subj:'Found something in Gran\'s things',body:()=>`
    <p>Your office rang about the attack on the wharf. It reminded me. Gran kept her mother's diary in a tin. I've scanned the page from February 1888.</p>
    <p>I don't know what it means. Gran never wanted to talk about her father. She'd only say he "came back different" and that she was "the last of the warm ones."</p>
    <p>Margaret</p>`,attach:'diary1888'},
  m5:{from:'R. Ashgrove, Senior Partner',time:'just now',subj:'RE: Vane estate',body:()=>`
    <p>Five from five. The Nocturnal Registry collected him at 1 am. He came quietly. They usually do, once they've been photographed enough times.</p>
    <p>Under Article 4 the whole estate goes to Margaret. Daphne has been told. She took it better than Pryor did.</p>
    <p>Your DNA results should be back. Don't read anything into them.</p>
    <p>And don't open file 0001.</p><p>R.A.</p>`},
  m9:{from:'Margaret Holloway',time:'just now',subj:'The cellar',body:()=>`
    <p>Thank you. I mean it. I've never owned anything in my life and now I own a house I'm frightened of.</p>
    <p>I went down to the cellar with a torch at noon, the way the will said not to. There were four coffins. Three had brass plates: AMBROSE, CORNELIUS, JULIAN. All empty, all with latches on the inside.</p>
    <p>The fourth was older than the others. Its plate said ASHGROVE.</p>
    <p>I'm having the cellar bricked up. Should I tell your boss?</p>
    <p>Margaret</p>`},
  m6:{from:'Bloodlines',time:'just now',subj:'Your DNA results are ready',body:()=>`<p>Good news! Your DNA results are in. Open DNA, then Your kit, to see your matches and ethnicity estimate.</p>`},
  m7:{from:'nightowl_jv via Bloodlines',time:'just now',subj:'Cousin',body:()=>`
    <p>Nine centimorgans. It isn't much. It's more than I share with anyone else alive, or otherwise.</p>
    <p>You did your job well. I bear no grudge. The Registry has given me a room with no windows and a very slow form to fill in.</p>
    <p>We should talk. Ask your Mr Ashgrove why he wanted you on my file. Ask him who witnessed my daughter's wedding in 1912.</p>
    <p>— J.</p>`},
  m12:{from:'R. Ashgrove, Senior Partner',time:'just now',subj:'Vane estate: reassigned',body:()=>`
    <p>Three filings, and the partners still won't sign. I've given the file to Pell.</p>
    <p>Don't take it personally. The first one is always the hardest. Most of them are.</p><p>R.A.</p>`}
};
function mailIds(){
  const ids = ['m1','m10','m2','m3','m4'];
  if(S.flags.diary) ids.unshift('m11');
  if(S.won) ids.unshift('m7','m9','m6','m5');
  if(S.failed) ids.unshift('m12');
  return ids;
}

