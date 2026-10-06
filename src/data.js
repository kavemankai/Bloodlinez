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
  if(p.img) return `<svg viewBox="0 0 ${p.w} ${p.h}" role="img" aria-label="${p.alt}" ${attrs} class="${p.w>p.h?'wide':''}"><image href="${p.img}" width="${p.w}" height="${p.h}" preserveAspectRatio="xMidYMid slice"/></svg>`;
  const w = 120*p.faces.length, c = TONES[p.faces[0].tone], id='g'+(gN++), hid='h'+(gN++);
  const halftone = p.news ? `<defs><pattern id="${hid}" width="3" height="3" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r=".7" fill="#000" opacity=".22"/></pattern></defs><rect width="${w}" height="150" fill="url(#${hid})"/>` : '';
  return `<svg viewBox="0 0 ${w} 150" role="img" aria-label="${p.alt}" ${attrs} class="${w>120?'wide':''}">
  <defs><radialGradient id="${id}" cx="50%" cy="40%" r="75%"><stop offset="0" stop-color="${c.bg}"/><stop offset="1" stop-color="${c.bg2}"/></radialGradient></defs>
  <rect width="${w}" height="150" fill="url(#${id})"/>${p.faces.map((f,i)=>faceG(f,i*120)).join('')}
  ${p.faces[0].tone==='sepia'?`<rect width="${w}" height="150" fill="#6b4a1f" opacity=".12"/>`:''}${halftone}</svg>`;
}
const HANDS = {
  v:'<path d="M14 42 C 48 50, 96 30, 150 40 M150 40 C 158 41, 160 34, 152 33 C 146 32, 140 44, 156 48"/>',
  e:'<path d="M12 44 C 40 40, 70 46, 100 42"/>',
  m:'<path d="M10 40 L 60 46 M 60 46 L 62 36"/>',
  r:'<path d="M12 40 C 30 30, 60 52, 90 38 L 120 44"/>',
  c:'<path d="M12 46 C 34 36, 52 50, 74 40 C 90 34, 104 46, 118 40"/>',
  j:'<path d="M12 38 L 128 42 M 128 42 L 134 50"/>',
  s:'<path d="M10 44 C 30 46, 46 36, 70 44"/>'
};
function sig(txt, hand='v'){
  return `<svg class="sig" viewBox="0 0 170 54" aria-label="Signature: ${txt}"><text x="10" y="34">${txt}</text>${HANDS[hand]}</svg>`;
}
/* documents carrying a signature: [name as signed, hand]. The handwriting tool compares hands. */
const SIGNED = {
  census1891:['A. Vane','v'], trust1934:['A. Vane','v'], marr1905:['A. Vane','v'],
  marr1946:['D. Vane','v'], licence1979:['C. Vane','v'], marr1995:['C. Vane','v'], will2024:['C. Vane','v'], licence2025:['J. Vane','v'],
  licence2019:['J. Vane','j'], deedpoll1907:['Clara Vane','c'], birth1993:['S. Tate','s'],
  birth1888:['E. Vane','e'], birth1966:['L. Marsh-Pike','m'],
  marr1886:['A. Vane','v'], deed1740:['R. Ashgrove','r'], census1911:['A. Vane','v'], census1921:['R. Ashgrove','r']
};
const MARKS_FACE = {scar:[74,49], mole:[46.5,74]};
const MARK_NAME = {scar:'Scar through the left eyebrow', mole:'Mole on the lower cheek'};

/* ================= PHOTOS ================= */
const PH = {
  photo1875:{year:1875,alt:'Studio portrait of Ambrose Vane aged 18, 1875',faces:[{tone:'sepia',hair:'part',era:'victorian',mole:true,jaw:23}],who:'Ambrose Vane (1875)'},
  photo1889:{year:1889,alt:'Studio portrait of Ambrose Vane, 1889',faces:[{...VAMP,tone:'sepia'}],who:'Ambrose Vane (1889)',vamp:true},
  photo1912:{year:1912,alt:'Wedding portrait, 1912: groom and bride\'s father',faces:[{tone:'sepia',hair:'flat',era:'victorian',mous:true,jaw:26,nose:'broad',heavy:true},{...VAMP,tone:'sepia'}],who:'Bride\'s father (1912)',vamp:true,offset:120},
  photo1921:{year:1921,alt:'Frank Tully, wharf workers\' union committee, 1921',faces:[{tone:'sepia',hair:'short',era:'victorian',mous:true,jaw:27,nose:'broad',heavy:true,scar:true}],who:'Frank Tully (1921)'},
  photo1950:{year:1950,alt:'Thomas Holloway, 1950',faces:[{tone:'mono',hair:'wave',era:'suit',mole:true,glasses:true,jaw:25}],who:'Thomas Holloway (1950)'},
  photo1925:{year:1925,alt:'Desmond Vane, 21, Ashby Rowing Club, 1925',faces:[{tone:'sepia',hair:'flat',era:'suit',jaw:27,nose:'broad'}],who:'Desmond Vane (1925)'},
  photo1962:{year:1962,alt:'Newspaper photograph of Desmond Vane, 1962',faces:[{...VAMP,tone:'mono',era:'suit'}],who:'Desmond Vane (1962)',vamp:true,news:true},
  licence1979:{year:1979,alt:'Licence photo of Cornelius Vane, 1979',faces:[{...VAMP,tone:'seventies',hair:'long',era:'seventies'}],who:'Cornelius Vane (1979)',vamp:true,file:'licence1972'},
  licence2019:{year:2019,alt:'Licence photo of Julian Vane, 2019',faces:[{tone:'modern',hair:'wave',era:'modern',jaw:22}],who:'Julian Vane (2019)'},
  licence2025:{year:2025,alt:'Replacement licence photo of Julian Vane, 2025',faces:[{...VAMP,tone:'modern',hair:'short',era:'modern'}],who:'Julian Vane (2025)',vamp:true,file:'licence2019'}
};
const IMGS = {
  photo1875:{w:600,h:750,marks:{mole:[240,377]}},
  photo1889:{w:600,h:750,marks:{scar:[391,226],mole:[243,375]}},
  photo1912:{w:1200,h:750,marks:{scar:[893,193],mole:[784,323]}},
  photo1921:{w:600,h:750,marks:{scar:[363,216]}},
  photo1950:{w:600,h:750,marks:{mole:[233,374]}},
  photo1962:{w:600,h:750,marks:{scar:[407,266],mole:[227,429]}},
  licence1979:{w:600,h:750,marks:{scar:[408,281],mole:[251,428]}},
  licence2025:{w:600,h:750,marks:{scar:[383,277],mole:[219,452]}}
};
for(const k in IMGS) Object.assign(PH[k],{img:'assets/'+(PH[k].file||k)+'.jpg',hit:40},IMGS[k]);
const PROPS = {
  mount_cabinet:{w:600,h:750,hole:[97,82,406,501]},
  licence_card_1972:{w:1200,h:800,hole:[130,182,329,430]},
  licence_card_2019:{w:1200,h:800,hole:[105,195,353,438]}
};
function framed(photoHtml, prop){
  const P=PROPS[prop], [x,y,w,h]=P.hole, pc=(v,m)=>(100*v/m).toFixed(2)+'%';
  return `<div class="framed" style="aspect-ratio:${P.w}/${P.h}"><div class="fwin" style="left:${pc(x,P.w)};top:${pc(y,P.h)};width:${pc(w,P.w)};height:${pc(h,P.h)}">${photoHtml}</div><img class="fprop" src="assets/${prop}.webp" alt=""></div>`;
}
const mounted = p => framed(photo(p,'preserveAspectRatio="xMidYMid slice"'),'mount_cabinet');
const licard = (p,prop) => `<div class="licard">${framed(photo(p,'preserveAspectRatio="xMidYMid slice"'),prop)}</div>`;
function marksOf(id){
  const pp = PH[id]; if(pp.marks) return {...pp.marks};
  const p = PH[id], dx = p.offset||0, f = p.faces[dx?1:0], out = {};
  if(f.scar) out.scar = [MARKS_FACE.scar[0]+dx, MARKS_FACE.scar[1]];
  if(f.mole) out.mole = [MARKS_FACE.mole[0]+dx, MARKS_FACE.mole[1]];
  return out;
}

/* ================= PEOPLE ================= */
const PEOPLE = {
  ambrose:{name:'Ambrose Vane',life:'1857 – 1934',ini:'AV',facts:[['Born','9 Feb 1857, Vane House'],['Parents','Josiah Vane and Hannah Crewe'],['Married','Eliza Marsh, 1886; Clara Dunmore, 1905'],['Occupation','Night clerk, shipping office (1891)'],['Residence','Vane House, 14 Hollow Lane'],['Died','1 Feb 1934, fire at Vane House, age 76']],recs:['birth1857','census1861','photo1875','census1881','marr1886','photo1889','census1891','birth1888','marr1905','census1911','census1921','trust1934','death1934','burial1934']},
  eliza:{name:'Eliza Vane (née Marsh)',life:'1861 – 1902',ini:'EV',facts:[['Born','1861, Ashby'],['Married','Ambrose Vane, 1886'],['Died','1902, Ashby']],recs:['birth1861','marr1886','census1891','birth1888']},
  clara:{name:'Clara Vane (formerly Dunmore)',life:'1875 – 1934',ini:'CV',facts:[['Born','1875, Ashby'],['Married','Edgar Dunmore; Ambrose Vane, 1905'],['Died','1 Feb 1934, fire at Vane House, age 58']],recs:['birth1903','marr1905','deedpoll1907','census1911','census1921','burial1934']},
  harriet:{name:'Harriet Holloway (née Vane)',life:'1888 – 1960',ini:'HH',facts:[['Born','4 Jun 1888, Vane House'],['Parents','Ambrose Vane and Eliza Marsh'],['Married','Arthur Holloway, 1912'],['Died','1960, Ashby']],recs:['birth1888','census1891','census1911','photo1912']},
  desmond:{name:'Desmond Vane',life:'1903 – 1976',ini:'DV',facts:[['Born','11 Oct 1903, Ashby'],['Residence','Vane House, 14 Hollow Lane'],['Married','Irene Askew, 1946'],['Died','14 Nov 1976, Gull Rock, age 73']],recs:['census1911','census1921','photo1925','trust1934','marr1946','adopt1948','photo1962','death1976']},
  irene:{name:'Irene Vane (formerly Askew)',life:'1912 – 1976',ini:'IV',facts:[['Born','1912, Ashby'],['Married','Frank Askew; Desmond Vane, 1946'],['Died','14 Nov 1976, Gull Rock, age 64']],recs:['birth1941','marr1946','adopt1948','inquest1976']},
  cornelius:{name:'Cornelius Vane',life:'1941 – 2025',ini:'CV',tag:'Deceased',facts:[['Born','2 Mar 1941, Ashby'],['Residence','Vane House, 14 Hollow Lane'],['Married','Helen Tate, 1995'],['Died','2 Mar 2025, lost at sea, age 84']],recs:['adopt1948','licence1979','marr1995','adopt1996','rolls','will2024','death2025']},
  helen:{name:'Helen Vane (formerly Tate)',life:'1950 – 2025',ini:'HV',facts:[['Born','12 Aug 1950, Ashby'],['Married','Mr Tate; Cornelius Vane, 1995'],['Died','2 Mar 2025, lost at sea, age 74']],recs:['marr1995','adopt1996','death2025h']},
  thomas:{name:'Thomas Holloway',life:'1920 – 1999',ini:'TH',facts:[['Born','1920, Ashby'],['Parents','Arthur Holloway and Harriet Vane'],['Died','1999, Ashby']],recs:['birth1920','photo1950']},
  daphne:{name:'Daphne Marsh-Pike',life:'1966 – Living',ini:'DM',tag:'Disputed',facts:[['Born','1966, Ashby'],['Mother','Lorna Marsh-Pike'],['Father','Not stated (claims Cornelius Vane)']],recs:['letterDaphne','birth1966','dnaDaphne']},
  margaret:{name:'Margaret Holloway',life:'1951 – Living',ini:'MH',tag:'Claimant',facts:[['Born','1951, Ashby'],['Father','Thomas Holloway'],['Relationship','Great-granddaughter of Ambrose Vane']],recs:['birth1951','letterMargaret','dnaMargaret']},
  julian:{name:'Julian Ambrose Vane',life:'1993 – Living',ini:'JV',tag:'Claimant',facts:[['Born','14 Jan 1993, Ashby'],['Residence','Vane House, 14 Hollow Lane']],recs:['adopt1996','licence2019','licence2025','letterJulian','dnaJulian']}
};

/* ================= RECORDS ================= */
const dl = rows => `<dl>${rows.map(([a,b])=>`<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl>`;
const regDoc = (head, no, rows, sigTxt, note, sigLabel='Signature of informant:', dist='Ashby', pre='District of') => `<div class="doc">${pre==='District of'?'<img class="stamp" src="assets/stamp_registrar.webp" alt="">':''}<h4>${head}</h4><div class="c">${pre} ${dist} · No. ${no}</div>${dl(rows)}${sigTxt?`<div class="sigline"><span>${sigLabel}</span>${sigTxt}</div>`:''}${note?`<p class="rn">${note}</p>`:''}</div>`;
const clip = (paper, date, head, body, ph) => `<div class="clip"><div class="mast"><span>${paper}</span><span>${date}</span></div><h4>${head}</h4>${ph?photo(ph):''}${body.map(p=>`<p>${p}</p>`).join('')}</div>`;

const PAPER = {};
[['paper_parchment','lo',['court1436','will1509','will1577','deed1740']],
 ['paper_parish_1751','lo',['burial1544','bapt1550','marr1612','bapt1620','tax1674','marr1682','bapt1688','bapt1720','bapt1751','bapt1789']],
 ['paper_parish_form','hi',['marr1818','burial1889','burial1934']],['paper_census_1841','hi',['census1841']],
 ['paper_census','hi',['census1861','census1881','census1891','census1911','census1921']],
 ['paper_civil_1850','hi',['marr1850','birth1857','birth1861','marr1886','birth1888','marr1905']],
 ['paper_hospital','hi',['hospital1888']],['paper_diary','lo',['diary1888']],
 ['paper_news_victorian','hi',['news1888','news1889']],['paper_news_1930s','hi',['news1934']],['paper_news_postwar','hi',['photo1962','news1976']],
 ['paper_deed_1934','lo',['trust1934','deedpoll1907']],
 ['paper_register','hi',['death1934','inquest1934','birth1958d','birth1966','birth1993','death2025','death2025h','birth1920','birth1951','birth1903','birth1941','marr1946','adopt1948','death1976','inquest1976','marr1995','adopt1996']],
 ['paper_will_modern','lo',['will2024']],['paper_letter','lo',['letterJulian']],['paper_letter_margaret','lo',['letterMargaret']],['paper_letter_daphne','lo',['letterDaphne']],
 ['paper_invoice','hi',['funeral2025']],['paper_harbour','hi',['marine2025']]
].forEach(([f,w,ids])=>ids.forEach(i=>PAPER[i]=[f,w]));
function paperHtml(id, html){
  const p = PAPER[id]; if(!p) return html;
  return html.replace(/class="(doc|clip|letter)">/, (m,c)=>`class="${c} paper wash-${p[1]}" style="--paper:url(assets/${p[0]}.webp)">`);
}

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
    render:()=>`<div class="photo">${mounted(PH.photo1889)}<div class="doc" style="max-width:420px"><p><b>Halloran &amp; Sons, Photographic Studio, Ashby.</b></p><p>Pencilled on reverse: "A.V., aged 32. Taken by lamplight at the sitter's request. 1889."</p></div></div>`},
  cellarPhoto:{kind:'Attachment',year:2025,title:'Photos from the cellar of Vane House',k:'',hidden:true,
    render:()=>`<div class="photo"><img class="pic" src="assets/cellar_coffins.webp" alt="Four coffins in a brick cellar, lit by a torch"><img class="pic" src="assets/ashgrove_plate.webp" alt="Brass coffin plate engraved Ashgrove"><p class="rn">Sent by Margaret Holloway from her phone. The plate on the fourth coffin.</p></div>`},
  court1436:{kind:'Court',year:1436,title:'Court roll, Manor of Ashby, 1436',k:'Hugh atte Vane Hollow Lane messuage court roll manor Asgrove Ashgrove clerk',
    render:()=>regDoc('Manor of Ashby · Court Roll','15 Henry VI',[['Court held','Feast of St Michael, 15 Henry VI (29 September 1436)'],['Tenant','Hugh atte Vane, boatman'],['Holding','One messuage and garden in Hollow Lane'],['Rent','Fourpence a year'],['Pledges','Roland Asgrove, clerk; John Tyler'],['Fine','Twelvepence']],'',"Translated from the Latin. Index note: the clerk's name as written, Asgrove, is indexed as Ashgrove.",'','Ashby','Manor of')},
  will1509:{kind:'Will',year:1509,title:'Will of John atte Vane, boatman, 1509',k:'John atte Vane will Hollow Lane Askgrove Ashgrove scrivener Agnes Richard',
    render:()=>regDoc('Will and Testament','1509/17',[['Testator','John atte Vane, boatman, of Ashby'],['Recites','The messuage in Hollow Lane that his father, Hugh atte Vane, took of the lord in 1436'],['Proved','14 March 1509'],['Bequests','To the church of St Columba, a bushel of barley. To his son Richard, the messuage in Hollow Lane. To his wife Agnes, the residue.'],['Written by','Roland Askgrove, scrivener'],['Witnesses','Sir William, parish priest; R. Askgrove']],'',"Index note: the scrivener's name as written, Askgrove, is indexed as Ashgrove.",'','Ashby','Peculiar of')},
  burial1544:{kind:'Parish',year:1544,title:'Burial, Richard Vane, 1544',k:'Richard Vane burial St Columba boatman',
    render:()=>regDoc('Burial Register','14',[['Name','Richard Vane, boatman'],['Buried','9 November 1544'],['Parish','St Columba, Ashby']],'',"Entry in the curate's hand. Register kept from 1538 by order of the Vicar General.",'','St Columba, Ashby','Parish of')},
  will1577:{kind:'Will',year:1577,title:'Will of Thomas Vane, cooper, 1577',k:'Thomas Vane will cooper Hollow Lane Ashgrove notary',
    render:()=>regDoc('Will and Testament','1577/42',[['Testator','Thomas Vane, cooper, of Ashby'],['Recites','The messuage he had from his father, Richard Vane, in 1544'],['Proved','3 May 1577'],['Bequests',"To his son John, his cooper's tools and the messuage in Hollow Lane. To his daughters, ten shillings each."],['Written by','Roland Ashgrove, notary public'],['Witnesses','J. Pryor; R. Ashgrove']],'','','','Ashby','Peculiar of')},
  bapt1550:{kind:'Parish',year:1550,title:'Baptism, John Vane, 1550',k:'John Vane baptism St Columba Thomas',
    render:()=>regDoc('Baptism Register','61',[['Child','John, son of Thomas Vane'],['Baptised','12 September 1550'],['Parish','St Columba, Ashby']],'','','','St Columba, Ashby','Parish of')},
  marr1612:{kind:'Parish',year:1612,title:'Marriage, William Vane and Margaret Dole, 1612',k:'William Vane Margaret Dole marriage St Columba cooper',
    render:()=>regDoc('Marriage Register','27',[['Groom','William Vane, cooper'],['Father of groom','John Vane, cooper'],['Bride','Margaret Dole'],['Married','8 October 1612'],['Parish','St Columba, Ashby']],'','Groom signed. Bride made her mark.','','St Columba, Ashby','Parish of')},
  bapt1620:{kind:'Parish',year:1620,title:'Baptism, Richard Vane, 1620',k:'Richard Vane baptism St Columba William cooper',
    render:()=>regDoc('Baptism Register','88',[['Child','Richard, son of William Vane, cooper'],['Baptised','21 June 1620'],['Parish','St Columba, Ashby']],'','','','St Columba, Ashby','Parish of')},
  tax1674:{kind:'Tax',year:1674,title:'Hearth tax return, Hollow Lane, 1674',k:'Richard Vane hearth tax Hollow Lane cooper',
    render:()=>regDoc('Hearth Tax Return','1674/9',[['Street','Hollow Lane'],['Householder','Richard Vane, cooper'],['Hearths','2'],['Paid','Two shillings at Lady Day and Michaelmas']],'','','','Ashby','Hundred of')},
  marr1682:{kind:'Parish',year:1682,title:'Marriage, Henry Vane and Susan Penn, 1682',k:'Henry Vane Susan Penn marriage St Columba cooper',
    render:()=>regDoc('Marriage Register','31',[['Groom','Henry Vane, cooper'],['Father of groom','Richard Vane, cooper'],['Bride','Susan Penn'],['Married','19 May 1682'],['Parish','St Columba, Ashby']],'','','','St Columba, Ashby','Parish of')},
  bapt1688:{kind:'Parish',year:1688,title:'Baptism, William Vane, 1688',k:'William Vane baptism St Columba Henry cooper',
    render:()=>regDoc('Baptism Register','104',[['Child','William, son of Henry Vane, cooper, and Susan his wife'],['Baptised','4 March 1688'],['Parish','St Columba, Ashby']],'','','','St Columba, Ashby','Parish of')},
  bapt1720:{kind:'Parish',year:1720,title:'Baptism, John Vane, 1720',k:'John Vane baptism St Columba William Anne cooper',
    render:()=>regDoc('Baptism Register','17',[['Child','John, son of William Vane, cooper, and Anne his wife'],['Baptised','10 April 1720'],['Parish','St Columba, Ashby']],'','','','St Columba, Ashby','Parish of')},
  portrait1620:{kind:'Art',year:1620,title:'Portrait of Roland Ashgrove, Recorder of Ashby, 1620',k:'Roland Ashgrove portrait Recorder Ashby Guildhall oil painting',
    render:()=>`${photo({alt:'Oil portrait of Roland Ashgrove, 1620',img:'assets/portrait1620.jpg',w:600,h:750})}<p class="rn">Oil on panel, Ashby Guildhall collection. Inscribed on the reverse: "R. ASHGROVE, RECORDER, AETAT. 33, 1620."</p>`},
  deed1740:{kind:'Legal',year:1740,title:'Lease of a tenement in Hollow Lane, 1740',k:'William Vane cooper lease Hollow Lane Ashgrove House Ashgrove estate',
    render:()=>`<div class="doc"><h4>Lease · Hollow Lane</h4>${dl([['Lessor','R. Ashgrove, gentleman, of Ashgrove House'],['Lessee','William Vane, cooper'],['Holding','One tenement and yard in Hollow Lane'],['Term','Ninety-nine years'],['Rent','One peppercorn, if demanded']])}
    <div class="sigline"><span>Signed by the lessor:</span>${sig('R. Ashgrove','r')}</div>
    <p class="rn">Cross-reference: Ashgrove estate (1740), file 0001. Restricted to partners.</p></div>`},
  birth1920:{kind:'Birth',year:1920,title:'Birth registration, Thomas Holloway',k:'Thomas Holloway Arthur Harriet Vane',
    render:()=>regDoc('Registration of Birth','1920/0108',[['Child','Thomas Holloway'],['Born','7 March 1920, 3 Wharf Row'],['Father',"Arthur Holloway, ship's chandler"],['Mother','Harriet Holloway'],['Informant','H. Holloway, mother'],['Registered','15 March 1920']],'')},
  birth1921d:{kind:'Birth',year:1921,title:'Birth registration, Thomas Holloway (Fish Street)',k:'Thomas Holloway Edwin Harriet Doyle Fish Street',
    render:()=>regDoc('Registration of Birth','1921/0233',[['Child','Thomas Holloway'],['Born','19 May 1921, 11 Fish Street'],['Father','Edwin Holloway, fisherman'],['Mother','Harriet Holloway, formerly Doyle'],['Informant','E. Holloway, father'],['Registered','26 May 1921']],'')},
  marr1948:{kind:'Marriage',year:1948,title:'Marriage registration, Thomas Holloway and Joan Ames',k:'Thomas Holloway Joan Ames marriage Arthur Walter register office',
    render:()=>regDoc('Registration of Marriage','1948/0517',[['Groom','Thomas Holloway, 28, clerk, 3 Wharf Row'],['Bride','Joan Ames, 24, typist, Mill Lane'],['Married','2 October 1948, Ashby Register Office'],['Father of groom',"Arthur Holloway, ship's chandler"],['Father of bride','Walter Ames, printer'],['Witnesses','A. Holloway; M. Ames']],sig('T. Holloway'),'','Signature of groom:','Ashby','District of')},
  birth1951:{kind:'Birth',year:1951,title:'Birth registration, Margaret Holloway',k:'Margaret Holloway Thomas Joan Ames',
    render:()=>regDoc('Registration of Birth','1951/0562',[['Child','Margaret Holloway'],['Born','22 July 1951, Ashby Hospital'],['Father','Thomas Holloway, clerk'],['Mother','Joan Holloway, formerly Ames'],['Informant','J. Holloway, mother'],['Registered','30 July 1951']],'')},
  bapt1751:{kind:'Parish',year:1751,title:'Baptism, Samuel Vane, 1751',k:'Samuel Vane baptism St Columba cooper John Martha',
    render:()=>regDoc('Baptism Register','41',[['Child','Samuel, son of John Vane, cooper, and Martha his wife'],['Born','27 February 1751'],['Baptised','3 March 1751'],['Parish','St Columba, Ashby']],'',"Entered in the hand of the Rev. T. Orme.",'','St Columba, Ashby','Parish of')},
  bapt1789:{kind:'Parish',year:1789,title:'Baptism, Thomas Vane, 1789',k:'Thomas Vane baptism St Columba cooper Samuel Sarah',
    render:()=>regDoc('Baptism Register','208',[['Child','Thomas, son of Samuel Vane, cooper, and Sarah his wife'],['Born','4 April 1789'],['Baptised','12 April 1789'],['Parish','St Columba, Ashby']],'',"Sponsors: John Vane, grandfather; Mary Teale.",'','St Columba, Ashby','Parish of')},
  marr1818:{kind:'Parish',year:1818,title:'Marriage, Thomas Vane and Mary Cutler, 1818',k:'Thomas Vane Mary Cutler marriage St Columba cooper',
    render:()=>regDoc('Marriage Register','112',[['Groom','Thomas Vane, cooper, 29, bachelor'],['Bride','Mary Cutler, 24, spinster'],['Married','21 September 1818'],['Witnesses','Samuel Vane; Jane Cutler'],['Parish','St Columba, Ashby']],'',"Groom signed. Bride made her mark.",'','St Columba, Ashby','Parish of')},
  census1841:{kind:'Census',year:1841,title:'1841 Census, Vane House, Hollow Lane',k:'Thomas Mary Josiah Vane Hollow Lane Vane House cooper',
    render:()=>`<div class="doc"><h4>Census of 1841 · Householder's Schedule</h4><div class="c">District of Ashby · Hollow Lane · 6 June 1841</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Name</th><th>Age</th><th>Occupation</th><th>Born in county</th></tr>
    <tr><td>Thomas Vane</td><td>50</td><td>Cooper</td><td>Y</td></tr><tr><td>Mary Vane</td><td>45</td><td>—</td><td>Y</td></tr><tr><td>Josiah Vane</td><td>15</td><td>Shipwright's apprentice</td><td>Y</td></tr></table></div>
    <p class="rn">Printed note: ages of persons over 15 are rounded down to the nearest five years.</p></div>`},
  marr1850:{kind:'Marriage',year:1850,title:'Marriage registration, Josiah Vane and Hannah Crewe',k:'Josiah Vane Hannah Crewe marriage shipwright',
    render:()=>regDoc('Registration of Marriage','1850/0214',[['Groom','Josiah Vane, 26, shipwright, Vane House'],['Bride','Hannah Crewe, 22, spinster, Quay Row'],['Married','4 November 1850, St Columba\'s'],['Father of groom','Thomas Vane, cooper'],['Father of bride','Daniel Crewe, rigger'],['Witnesses','T. Vane; M. Crewe']],'','')},
  birth1857:{kind:'Birth',year:1857,title:'Birth registration, Ambrose Vane',k:'Ambrose Vane Josiah Hannah Crewe Vane House',
    render:()=>regDoc('Registration of Birth','1857/0066',[['Child','Ambrose Vane'],['Born','9 February 1857, Vane House, Hollow Lane'],['Father','Josiah Vane, shipwright'],['Mother','Hannah Vane, formerly Crewe'],['Informant','H. Vane, mother'],['Registered','18 February 1857']],'')},
  census1861:{kind:'Census',year:1861,title:'1861 Census, Vane House, Hollow Lane',k:'Josiah Hannah Ambrose Mary Vane Hollow Lane Vane House shipwright',
    render:()=>`<div class="doc"><h4>Census of 1861 · Householder's Schedule</h4><div class="c">District of Ashby · Hollow Lane · 7 April 1861</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Name</th><th>Relation</th><th>Age</th><th>Occupation</th></tr>
    <tr><td>Josiah Vane</td><td>Head</td><td>37</td><td>Shipwright</td></tr><tr><td>Hannah Vane</td><td>Wife</td><td>33</td><td>—</td></tr>
    <tr><td>Mary Vane</td><td>Mother, widow</td><td>67</td><td>Annuitant</td></tr><tr><td>Ambrose Vane</td><td>Son</td><td>4</td><td>—</td></tr></table></div></div>`},
  photo1875:{kind:'Photo',year:1875,title:'Studio portrait, Ambrose Vane, aged 18',k:'Ambrose Vane portrait Halloran youth',
    render:()=>`<div class="photo">${mounted(PH.photo1875)}</div><p class="rn">Halloran &amp; Sons, Photographic Studio, Ashby. Pencilled on reverse: "Ambrose, 18, for Mother. Taken at noon. 1875."</p>`},
  census1881:{kind:'Census',year:1881,title:'1881 Census, Vane House, Hollow Lane',k:'Josiah Hannah Ambrose Vane Hollow Lane Vane House clerk',
    render:()=>`<div class="doc"><h4>Census of 1881 · Householder's Schedule</h4><div class="c">District of Ashby · Hollow Lane · 3 April 1881</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Name</th><th>Relation</th><th>Age</th><th>Occupation</th></tr>
    <tr><td>Josiah Vane</td><td>Head</td><td>57</td><td>Shipwright</td></tr><tr><td>Hannah Vane</td><td>Wife</td><td>53</td><td>—</td></tr>
    <tr><td>Ambrose Vane</td><td>Son</td><td>24</td><td>Clerk, shipping office</td></tr></table></div></div>`},
  marr1886:{kind:'Marriage',year:1886,title:'Marriage registration, Ambrose Vane and Eliza Marsh',k:'Ambrose Vane Eliza Marsh marriage St Columba Ashgrove',
    render:()=>regDoc('Registration of Marriage','1886/0301',[['Groom','Ambrose Vane, 29, clerk, Vane House'],['Bride','Eliza Marsh, 25, spinster, Fish Street'],['Married','12 June 1886, St Columba\'s'],['Father of groom','Josiah Vane, shipwright'],['Father of bride','William Marsh, chandler'],['Witnesses','W. Marsh; R. Ashgrove']],sig('A. Vane'),'','Signature of groom:','Ashby','District of')},
  burial1889:{kind:'Parish',year:1889,title:'Burial, Josiah Vane, 1889',k:'Josiah Vane burial St Columba shipwright Ambrose',
    render:()=>regDoc('Burial Register','73',[['Name','Josiah Vane, shipwright'],['Age','65'],['Died','8 March 1889, Vane House'],['Buried','12 March 1889, St Columba\'s']],'',"Vicar's note: Burial at dusk at the family's request. The widow attended. The son stood apart from the other mourners and left before the committal. He looked unwell.",'','St Columba, Ashby','Parish of')},
  news1889:{kind:'Newspaper',year:1889,title:'"Death of a worthy shipwright"',k:'Josiah Vane shipwright obituary Ashby Courier Ambrose',
    render:()=>clip('The Ashby Courier','Saturday, 9 March 1889','Death of a worthy shipwright',['Mr Josiah Vane, 65, of Vane House, Hollow Lane, died on Friday after a short illness. He was thirty years at the Quay yard and built the Ashby lifeboat.','He leaves a widow and one son, Mr Ambrose Vane, who has been unwell this past year and was not able to attend the yard\'s tribute.'])},
  birth1861:{kind:'Birth',year:1861,title:'Birth registration, Eliza Marsh',k:'Eliza Marsh William Ann Teale Fish Street',
    render:()=>regDoc('Registration of Birth','1861/0049',[['Child','Eliza Marsh'],['Born','20 January 1861, Fish Street'],['Father','William Marsh, chandler'],['Mother','Ann Marsh, formerly Teale'],['Informant','W. Marsh, father'],['Registered','2 February 1861']],'')},
  census1911:{kind:'Census',year:1911,title:'1911 Census, Vane House, 14 Hollow Lane',k:'Ambrose Clara Harriet Desmond Vane Hollow Lane Vane House Kemp stepson',
    render:()=>`<div class="doc"><h4>Census of 1911 · Householder's Schedule</h4><div class="c">District of Ashby · Hollow Lane · 2 April 1911</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Name</th><th>Relation</th><th>Age</th><th>Occupation</th></tr>
    <tr><td>Ambrose Vane</td><td>Head</td><td>41</td><td>Private means</td></tr><tr><td>Clara Vane</td><td>Wife</td><td>36</td><td>—</td></tr><tr><td>Harriet Vane</td><td>Daughter</td><td>22</td><td>—</td></tr><tr><td>Desmond Vane</td><td>Stepson</td><td>7</td><td>Scholar</td></tr><tr><td>Ada Kemp</td><td>Servant</td><td>19</td><td>Housemaid</td></tr></table></div>
    <div class="sigline"><span>Signature of head of household:</span>${sig('A. Vane')}</div>
    <p class="rn">Enumerator's note: Schedule collected after dark by arrangement.</p></div>`},
  census1921:{kind:'Census',year:1921,title:'1921 Census, Vane House, 14 Hollow Lane',k:'Ambrose Clara Desmond Vane Hollow Lane Vane House Kemp Ashgrove',
    render:()=>`<div class="doc"><h4>Census of 1921 · Householder's Schedule</h4><div class="c">District of Ashby · Hollow Lane · 19 June 1921</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Name</th><th>Relation</th><th>Age</th><th>Occupation</th></tr>
    <tr><td>Ambrose Vane</td><td>Head</td><td>64</td><td>Private means</td></tr><tr><td>Clara Vane</td><td>Wife</td><td>46</td><td>—</td></tr><tr><td>Desmond Vane</td><td>Stepson</td><td>17</td><td>Articled clerk, Ashgrove &amp; Pell</td></tr><tr><td>Ada Kemp</td><td>Servant</td><td>29</td><td>Housekeeper</td></tr></table></div>
    <div class="sigline"><span>Completed on behalf of the occupier by:</span>${sig('R. Ashgrove','r')}</div>
    <p class="rn">Enumerator's note: The occupier is indisposed by day. Schedule completed by his solicitor, who gave the occupier's age as 64 on his own authority. The occupier was not seen.</p></div>`},
  birth1903:{kind:'Birth',year:1903,title:'Birth registration, Desmond Dunmore',k:'Desmond Dunmore Edgar Clara Royle Quay Terrace',
    render:()=>regDoc('Registration of Birth','1903/0781',[['Child','Desmond Dunmore'],['Born','11 October 1903, 6 Quay Terrace, Ashby'],['Father','Edgar Dunmore, second mate, SS Larkspur'],['Mother','Clara Dunmore, formerly Royle'],['Informant','C. Dunmore, mother'],['Registered','19 October 1903']],'')},
  marr1905:{kind:'Marriage',year:1905,title:'Marriage registration, Ambrose Vane and Clara Dunmore',k:'Ambrose Vane Clara Dunmore Royle widow marriage St Columba Ashgrove',
    render:()=>regDoc('Registration of Marriage','1905/0233',[['Groom','Ambrose Vane, 48, widower, gentleman, Vane House'],['Bride','Clara Dunmore, 30, widow, 6 Quay Terrace'],['Married','6 May 1905, St Columba\'s, by licence, 8 pm'],['Father of groom','Josiah Vane, shipwright (deceased)'],['Father of bride','Henry Royle, sailmaker'],['Witnesses','R. Ashgrove; H. Vane']],sig('A. Vane'),"Bride's note: the bride's former husband, Edgar Dunmore, was lost with the SS Larkspur, 14 September 1904. One child of that marriage, Desmond, aged one year.",'Signature of groom:','Ashby','District of')},
  deedpoll1907:{kind:'Deed',year:1907,title:'Deed poll, change of name, Desmond Dunmore',k:'Desmond Dunmore Vane deed poll change of name Clara Ambrose Ashgrove',
    render:()=>`<div class="doc"><h4>Deed Poll · Change of Name</h4>
    <p>I, CLARA VANE, formerly Dunmore, of Vane House, 14 Hollow Lane, Ashby, on behalf of my son DESMOND DUNMORE, born 11 October 1903, an infant, renounce the surname Dunmore. He shall be known from this day as DESMOND VANE.</p>
    <p>Consented to by the infant's stepfather, Ambrose Vane.</p>
    <div class="sigline"><span>Signed:</span>${sig('Clara Vane','e')}</div>
    <p class="rn">Enrolled 3 April 1907. Prepared and attested by R. Ashgrove, Ashgrove &amp; Pell.</p></div>`},
  photo1925:{kind:'Photo',year:1925,title:'Ashby Rowing Club, Desmond Vane, 1925',k:'Desmond Vane rowing club sculls 1925',
    render:()=>`<div class="photo">${photo(PH.photo1925)}<div class="doc" style="max-width:420px"><p><b>Ashby Rowing Club annual, 1925.</b></p><p>D. Vane, 21, winner of the Coronation Sculls. Photographed on the slipway at noon.</p></div></div>`},
  burial1934:{kind:'Parish',year:1934,title:'Burials, Vane House fire, 1934',k:'Ambrose Clara Vane Ada Kemp burial St Columba crypt fire',
    render:()=>regDoc('Burial Register','612–614',[['612','Clara Vane, 58, of Vane House. Buried 6 February 1934'],['613','Ada Kemp, 42, of Vane House. Buried 6 February 1934'],['614','Ambrose Vane, 76, of Vane House. Remains placed in the family crypt, 6 February 1934, at night, at the family\'s request']],'',"Entered in the hand of the Rev. P. Gowan.",'','St Columba, Ashby','Parish of')},
  birth1941:{kind:'Birth',year:1941,title:'Birth registration, Cornelius Askew',k:'Cornelius Askew Frank Irene Lowe Rope Walk',
    render:()=>regDoc('Registration of Birth','1941/0302',[['Child','Cornelius Askew'],['Born','2 March 1941, 9 Rope Walk, Ashby'],['Father','Frank Askew, docker'],['Mother','Irene Askew, formerly Lowe'],['Informant','I. Askew, mother'],['Registered','10 March 1941']],'')},
  marr1946:{kind:'Marriage',year:1946,title:'Marriage registration, Desmond Vane and Irene Askew',k:'Desmond Vane Irene Askew Lowe widow marriage St Columba Ashgrove',
    render:()=>regDoc('Registration of Marriage','1946/0688',[['Groom','Desmond Vane, 43, bachelor, gentleman, Vane House'],['Bride','Irene Askew, 34, widow, 9 Rope Walk'],['Married','9 November 1946, St Columba\'s, 7:30 pm'],['Father of groom','Ambrose Vane, gentleman (deceased)'],['Father of bride','Albert Lowe, carter'],['Witnesses','R. Ashgrove; M. Lowe']],sig('D. Vane'),'','Signature of groom:','Ashby','District of')},
  adopt1948:{kind:'Deed',year:1948,title:'Adoption order, Cornelius Askew',k:'Cornelius Askew Vane adoption Desmond Irene Ashgrove',
    render:()=>regDoc('Adoption Order','48/112',[['Infant','Cornelius Askew, born 2 March 1941'],['Adopters','Desmond Vane and Irene Vane, of Vane House, 14 Hollow Lane'],['Name after adoption','Cornelius Vane'],['Order made','14 June 1948, Ashby County Court']],'',"Court's note: The infant's natural father, Frank Askew, was killed on active service in 1943. The infant's mother is one of the adopters. Solicitor for the adopters: R. Ashgrove.",'','Ashby','County Court,')},
  photo1912:{kind:'Photo',year:1912,title:'Wedding portrait, Holloway–Vane, 1912',k:'Arthur Holloway Harriet Vane wedding St Columba Ashgrove',
    render:()=>`<div class="photo">${photo(PH.photo1912)}<div class="doc" style="max-width:480px"><p><b>Marriage of Arthur Holloway and Harriet Vane, St Columba's, Ashby, 1912.</b></p><p>Evening portrait, taken after the reception at the request of the bride's father. Left: the groom. Right: the bride's father.</p><p>Witness to the marriage: R. Ashgrove, solicitor.</p></div></div>`},
  photo1950:{kind:'Photo',year:1950,title:'Thomas Holloway, Ashby Rowing Club',k:'Thomas Holloway rowing club',
    render:()=>`<div class="photo">${photo(PH.photo1950)}<div class="doc" style="max-width:420px"><p>Thomas Holloway, aged 30, club secretary. Ashby Rowing Club annual, 1950.</p></div></div>`},
  photo1962:{kind:'Newspaper',year:1962,title:'"Lights burn till dawn at Vane House"',k:'Desmond Irene Cornelius Vane ball Vane House Hollow Lane Courier',
    render:()=>clip('The Ashby Courier','Saturday, 17 March 1962','Lights burn till dawn at Vane House',
      ['Mr Desmond Vane, 58, threw open the doors of Vane House on Friday for the first time in a generation, with his wife Irene and their son Cornelius, 21. Guests danced until a quarter to six, when the host excused himself.','"He is the image of old Mr Ambrose," remarked one elderly guest, who asked not to be named. "The very image. And him no blood relation at all. It gave me quite a turn."'],PH.photo1962)},
  death1976:{kind:'Death',year:1976,title:'Death registration, Desmond Vane',k:'Desmond Vane Gull Rock car accident coast road',
    render:()=>regDoc('Registration of Death','1976/0861',[['Deceased','Desmond Vane'],['Age','73 years'],['Date of death','14 November 1976'],['Place','Coast Road, Gull Rock'],['Cause','Injuries and burns, road accident'],['Identified','By C. Vane, son, from a wristwatch'],['Informant',"Coroner's certificate"],['Registered','22 November 1976']],'',"Registrar's note: One of two deaths in the same accident. See also Irene Vane.")},
  inquest1976:{kind:'Inquest',year:1976,title:"Coroner's inquest, Gull Rock road accident",k:'Desmond Irene Cornelius Vane Gull Rock inquest coroner car wristwatch pathologist',
    render:()=>regDoc("Coroner's Inquest",'1976/C-41',[['Deceased','Irene Vane, 64; Desmond Vane, 73'],['Held','19 November 1976, Ashby Courthouse'],['Evidence','The car left the Coast Road at Gull Rock at about 11 pm on 14 November, fell to the rocks and burned. The driver could not be identified by sight.'],['Witness','C. Vane, son. Thrown clear. Walked a mile to the Gull Rock Inn, arriving after midnight.'],['Verdict','Accidental death']],'',"Coroner's note: The pathologist puts the driver's age at between twenty-five and forty. The deceased's son identified a wristwatch as his father's, and the court accepts that identification. Estate represented by Ashgrove &amp; Pell.")},
  news1976:{kind:'Newspaper',year:1976,title:'"Couple die as car leaves Gull Rock road"',k:'Desmond Irene Cornelius Vane Gull Rock car accident inn',
    render:()=>clip('The Ashby Courier','Tuesday, 16 November 1976','Couple die as car leaves Gull Rock road',
      ['Mr Desmond Vane, 73, and his wife Irene, 64, of Vane House, died on Sunday night when their car left the Coast Road at Gull Rock and caught fire on the rocks below.','Their son Cornelius, 35, was thrown clear and walked a mile to the Gull Rock Inn. "He hadn\'t a mark on him," said the landlord, Mr T. Pascoe. "He asked me to turn the lights down. Then he sat by the window till it got light, and left before anyone else was up."'])},
  photo1921:{kind:'Photo',year:1921,title:"Ashby Wharf Workers' Union, committee, 1921",k:'wharf union committee Frank Tully Ashby',
 render:()=>`${photo(PH.photo1921)}<p class="rn">Ashby Wharf Workers' Union, committee portrait, 1921. F. Tully, secretary. Scar from a winch accident, 1917 (union accident book).</p>`},
 birth1958d:{kind:'Birth',year:1958,title:'Birth registration, Desmond Vane (Marrow Bay)',k:'Desmond Vane Harold Ruth Gale Marrow Bay',
 render:()=>regDoc('Registration of Birth','1958/0388',[['Child','Desmond Vane'],['Born','3 September 1958, Marrow Bay Cottage Hospital'],['Father','Harold Vane, carter'],['Mother','Ruth Vane, formerly Gale'],['Informant','R. Vane, mother'],['Registered','12 September 1958']],'','','Signature of informant:','Marrow Bay')},
 inquest1934:{kind:'Inquest',year:1934,title:"Coroner's inquest, Vane House fire",k:'Ambrose Clara Desmond Vane Ada Kemp fire inquest coroner ring pathologist',
 render:()=>regDoc("Coroner's Inquest",'1934/C-12',[['Deceased','Clara Vane, 58; Ada Kemp, 42; Ambrose Vane, 76'],['Held','8 February 1934, Ashby Courthouse'],['Evidence','Fire began in the east wing at about 2 am. An oil lamp was found overturned. The doors of the east wing were locked; the keys were found with the housekeeper.'],['Witness','D. Vane, son. Was staying at Calder; returned after dark on 1 February to find the wing burned out.'],['Verdict','Accidental death']],'',"Coroner's note: The pathologist reports that the male remains are those of a man of about thirty, not of seventy-six. The deceased's son identified the signet ring as his father's, and the court accepts that identification. Estate represented by Ashgrove &amp; Pell.")},
 hospital1888:{kind:'Medical',year:1888,title:'Ashby Hospital admission, Ambrose Vane',k:'Ambrose Vane hospital wharf attack wound',
    render:()=>regDoc('Ashby Hospital · Casualty Register','1888/0219',[['Patient','Ambrose Vane, 31, clerk'],['Admitted','14 February 1888, 2:10 am'],['Injuries','Deep bite wounds to the neck. Laceration through the left eyebrow.'],['Condition','Severe loss of blood. No pulse found at 4 am.'],['Discharged','Self-discharged 14 February, 9:40 pm, against advice']],'',"House surgeon's note: Patient sat up at dusk and asked for the curtains to be closed. Pulse still absent. Wound above the eye closed overnight. I have no explanation and will not be writing one.")},
  news1888:{kind:'Newspaper',year:1888,title:'"Clerk survives savage attack on wharf"',k:'Ambrose Vane wharf attack clerk',
    render:()=>clip('The Ashby Courier','Thursday, 16 February 1888','Clerk survives savage attack on wharf',
      ['Mr Ambrose Vane, a night clerk with the shipping office, was set upon at the Ashby wharf in the early hours of Tuesday by an assailant he describes only as "a tall foreign gentleman."','Mr Vane, who lost a great deal of blood, left hospital the same evening. His wife, who is expecting their first child in the summer, said he was "quite himself, only very pale."'])},
  birth1888:{kind:'Birth',year:1888,title:'Birth registration, Harriet Vane',k:'Harriet Vane Ambrose Eliza Holloway',
    render:()=>regDoc('Registration of Birth','1888/0412',[['Child','Harriet Vane'],['Born','4 June 1888, Vane House, Hollow Lane'],['Father','Ambrose Vane, clerk'],['Mother','Eliza Vane, formerly Marsh'],['Informant','E. Vane, mother'],['Registered','11 June 1888']],sig('E. Vane','e'))},
  death1934:{kind:'Death',year:1934,title:'Death registration, Ambrose Vane',k:'Ambrose Vane fire Vane House Hollow Lane ring',
    render:()=>regDoc('Registration of Death','1934/0088',[['Deceased','Ambrose Vane'],['Age','76 years'],['Date of death','1 February 1934'],['Place','Vane House, 14 Hollow Lane (fire)'],['Cause','Burns and smoke, accidental'],['Identified','By D. Vane, son, from a signet ring'],['Informant',"Coroner's certificate"],['Registered','9 February 1934']],'',"Registrar's note: One of three deaths in the same fire. See also Clara Vane and Ada Kemp.")},
  news1934:{kind:'Newspaper',year:1934,title:'"Three die in Hollow Lane fire"',k:'Ambrose Clara Desmond Vane Ada Kemp fire Hollow Lane',
    render:()=>clip('The Ashby Courier','Saturday, 3 February 1934','Three die in Hollow Lane fire',
      ['Fire swept the east wing of Vane House in the early hours of Thursday. Mr Ambrose Vane, 76, his wife Clara, 58, and their housekeeper, Miss Ada Kemp, 42, lost their lives.','Mr Desmond Vane, 30, Mrs Vane\'s son by her first marriage, was staying at Calder and learned the news on his return. Neighbours say the household kept late hours. "You never saw the old gentleman by day," said one. "But he looked very well for seventy-six."'])},
  trust1934:{kind:'Legal',year:1934,title:'Vane Family Trust deed',k:'Ambrose Desmond Cornelius Vane trust deed Ashgrove Pell',
    render:()=>`<div class="doc"><h4>Deed of Trust · The Vane Family Trust</h4>
    <p>Made 20 January 1934 by AMBROSE VANE of Vane House, Ashby (the Settlor).</p>
    <p>1. The Settlor gives Vane House and his investments to the Trustees, to hold for his son DESMOND VANE upon the Settlor's death.</p>
    <p>2. Should the Settlor die suddenly, by fire, at sea or otherwise, the Trustees shall act upon the coroner's finding alone and shall require no further proof of identity.</p>
    <div class="sigline"><span>Signed by the Settlor:</span>${sig('A. Vane')}</div>
    <p class="rn">Prepared by Ashgrove &amp; Pell, Solicitors. Attesting solicitor: R. Ashgrove. Executed after hours. Varied 14 December 1976: upon the death of Desmond Vane the trust is held for his son Cornelius Vane, on the same terms.</p></div>`},
  rolls:{kind:'Roll',year:2025,title:'Electoral rolls, 14 Hollow Lane, 1903–2025',k:'Ambrose Clara Desmond Irene Cornelius Helen Julian Vane electoral roll Hollow Lane',
    render:()=>`<div class="doc"><h4>Electoral Rolls · Subdivision of Ashby</h4><div class="c">All enrolled electors at 14 Hollow Lane (Vane House)</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Roll</th><th>Electors at address</th></tr>
    <tr><td>1903</td><td>Ambrose Vane, gentleman</td></tr><tr><td>1919</td><td>Ambrose Vane; Clara Vane</td></tr><tr><td>1925</td><td>Ambrose Vane; Clara Vane; Desmond Vane</td></tr>
    <tr><td>1937</td><td>Desmond Vane, gentleman</td></tr><tr><td>1955</td><td>Desmond Vane; Irene Vane</td></tr><tr><td>1962</td><td>Desmond Vane; Irene Vane; Cornelius Vane</td></tr>
    <tr><td>1972</td><td>Desmond Vane; Irene Vane; Cornelius Vane</td></tr><tr><td>1983</td><td>Cornelius Vane, gentleman</td></tr><tr><td>1997</td><td>Cornelius Vane; Helen Vane</td></tr>
    <tr><td>2013</td><td>Cornelius Vane, retired; Helen Vane; Julian Ambrose Vane</td></tr><tr><td>2023</td><td>Cornelius Vane, retired; Helen Vane; Julian Ambrose Vane</td></tr><tr><td>2025</td><td>Julian Ambrose Vane, gentleman</td></tr></table></div>
    <p class="rn">Enrolment became compulsory for all adults in 1924.</p></div>`},
  licence1979:{kind:'ID',year:1979,title:'Driver licence, Cornelius Vane',ix:'Driver licence, Cornelius Vain',k:'Cornelius Vain licence Hollow Lane',
    render:()=>`<div class="licence">${licard(PH.licence1979,'licence_card_1972')}<div class="f"><div class="hd">MOTOR REGISTRY · DRIVER LICENCE · 1979</div>
    ${dl([['Name','VANE, Cornelius'],['Date of birth','02/03/1941 (age 38)'],['Address','14 Hollow Lane, Ashby'],['Class','C'],['Conditions','N: night driving only (medical, photosensitivity)']])}
    <div class="sigline">${sig('C. Vane')}</div></div></div>`},
  birth1993:{kind:'Birth',year:1993,title:'Birth registration, Julian Tate',k:'Julian Tate Susan Ashby Hospital',
    render:()=>regDoc('Registration of Birth','1993/0046',[['Child','Julian Tate'],['Born','14 January 1993, Ashby Hospital'],['Father','Not stated'],['Mother','Susan Tate, shop assistant'],['Informant','S. Tate, mother'],['Registered','20 January 1993']],sig('S. Tate','m'))},
  marr1995:{kind:'Marriage',year:1995,title:'Marriage registration, Cornelius Vane and Helen Tate',k:'Cornelius Vane Helen Tate Penrose widow marriage register office Ashgrove',
    render:()=>regDoc('Registration of Marriage','1995/0412',[['Groom','Cornelius Vane, 54, bachelor, retired, Vane House'],['Bride','Helen Tate, 44, widow, 21 Marine Parade'],['Married','3 June 1995, Ashby Register Office, 6 pm'],['Father of groom','Desmond Vane, gentleman (deceased)'],['Father of bride','George Penrose, schoolmaster'],['Witnesses','R. Ashgrove; D. Mortlake']],sig('C. Vane'),'','Signature of groom:','Ashby','District of')},
  adopt1996:{kind:'Deed',year:1996,title:'Adoption order, Julian Tate',k:'Julian Tate Ambrose Vane adoption Cornelius Helen Ashgrove',
    render:()=>regDoc('Adoption Order','96/031',[['Infant','Julian Tate, born 14 January 1993'],['Adopters','Cornelius Vane and Helen Vane, of Vane House, 14 Hollow Lane'],['Name after adoption','Julian Ambrose Vane'],['Order made','12 April 1996, Ashby County Court']],'',"Court's note: The infant's mother, Susan Tate, died in 1994. The adopter Helen Vane is the infant's grandmother. The middle name was chosen by the adopting father. Solicitor for the adopters: R. Ashgrove.",'','Ashby','County Court,')},
  birth1966:{kind:'Birth',year:1966,title:'Birth registration, Daphne Marsh-Pike',k:'Daphne Lorna Marsh-Pike',
    render:()=>regDoc('Registration of Birth','1966/0730',[['Child','Daphne Marsh-Pike'],['Born','9 August 1966, Ashby Hospital'],['Father','Not stated'],['Mother','Lorna Marsh-Pike, typist'],['Informant','L. Marsh-Pike, mother'],['Registered','15 August 1966']],sig('L. Marsh-Pike','m'))},
  licence2019:{kind:'ID',year:2019,title:'Driver licence, Julian Vane',k:'Julian Vane licence Hollow Lane',
    render:()=>`<div class="licence">${licard(PH.licence2019,'licence_card_2019')}<div class="f"><div class="hd">MOTOR REGISTRY · DRIVER LICENCE · 2019</div>
    ${dl([['Name','VANE, Julian Ambrose'],['Date of birth','14/01/1993 (age 26)'],['Address','14 Hollow Lane, Ashby'],['Class','C'],['Conditions','None']])}
    <div class="sigline">${sig('J. Vane','j')}</div></div></div>`},
  licence2025:{kind:'ID',year:2025,title:'Replacement driver licence, Julian Vane',k:'Julian Vane licence replacement Hollow Lane',
    render:()=>`<div class="licence">${licard(PH.licence2025,'licence_card_2019')}<div class="f"><div class="hd">MOTOR REGISTRY · REPLACEMENT LICENCE · 2025</div>
    ${dl([['Name','VANE, Julian Ambrose'],['Date of birth','14/01/1993 (age 32)'],['Address','14 Hollow Lane, Ashby'],['Class','C'],['Conditions','N: night driving only (medical, photosensitivity)'],['Issued','10 March 2025. Previous licence reported lost at sea.']])}
    <div class="sigline">${sig('J. Vane')}</div></div></div>`},
  will2024:{kind:'Legal',year:2024,title:'Last will and testament, Cornelius Vane',k:'Cornelius Helen Julian Vane will',
    render:()=>`<div class="doc"><h4>Last Will and Testament</h4>
    <p>I, CORNELIUS VANE, of Vane House, 14 Hollow Lane, Ashby, revoke all former wills and declare this to be my last will.</p>
    <p>1. I give the whole of my estate, including Vane House and its contents (the cellar in particular), to my wife HELEN VANE for her life, and after her death to my grandson JULIAN AMBROSE VANE absolutely.</p>
    <p>2. Should both predecease me, I give the whole of my estate to whichever of my descendants next presents himself.</p>
    <p>3. I direct that no person enter the cellar of Vane House before nightfall.</p>
    <div class="sigline"><span>Signed by the testator:</span>${sig('C. Vane')}</div>
    <p class="rn">Witnessed: D. Mortlake, notary, and his clerk. Executed 14 November 2024 at 11:40 pm.</p></div>`},
  death2025:{kind:'Death',year:2025,title:'Death registration, Cornelius Vane',k:'Cornelius Julian Vane Marguerite drowned sea',
    render:()=>regDoc('Registration of Death','2025/0214',[['Deceased','Cornelius Vane'],['Age','84 years'],['Date of death','2 March 2025'],['Place','At sea off Ashby Point, from the private vessel Marguerite'],['Cause','Drowning (presumed)'],['Body','Not recovered'],['Informant','J. Vane, grandson'],['Registered','4 March 2025']],'',"Registrar's note: One of two persons lost from the vessel; see also Helen Vane. Grandson the only other person aboard. Date of death is the deceased's 84th birthday.")},
  death2025h:{kind:'Death',year:2025,title:'Death registration, Helen Vane',k:'Helen Cornelius Julian Vane Marguerite drowned sea',
    render:()=>regDoc('Registration of Death','2025/0215',[['Deceased','Helen Vane'],['Age','74 years'],['Date of death','2 March 2025'],['Place','At sea off Ashby Point, from the private vessel Marguerite'],['Cause','Drowning (presumed)'],['Body','Not recovered'],['Informant','J. Vane, grandson'],['Registered','4 March 2025']],'',"Registrar's note: One of two persons lost from the vessel; see also Cornelius Vane.")},
  news2025:{kind:'Newspaper',year:2025,title:'"Hollow Lane couple lost at sea"',k:'Cornelius Helen Julian Vane Marguerite',
    render:()=>clip('The Ashby Courier','Tuesday, 4 March 2025','Hollow Lane couple lost at sea',
      ['Cornelius Vane, 84, and his wife Helen, 74, are presumed drowned after going overboard from their motor yacht Marguerite off Ashby Point on Sunday night. It was Mr Vane\'s birthday.','Their grandson Julian, the only other person aboard, brought the boat in alone. "Grandfather insisted on taking the helm himself," he told the Courier. "Gran went to help him."','It is the third tragedy at Vane House in living memory. A fire there killed three in 1934, and Mr Vane\'s parents died when their car left the road at Gull Rock in 1976.'])},
  marine2025:{kind:'Marine',year:2025,title:'Harbour incident report, MY Marguerite',k:'Marguerite harbour Julian Cornelius Vane',
    render:()=>regDoc('Ashby Harbour Authority · Incident Report','HA-25-031',[['Vessel','MY Marguerite, private'],['Reported by','J. Vane (aboard)'],['Reported','3 March 2025, 5:51 am'],['Search','Water police, 3 to 5 March. Nothing recovered.']],'',"Harbourmaster's note: Marguerite was found on her own mooring at 6 am, lines made fast with a bowline and two half hitches. Mr J. Vane says he brought her in alone in the dark, single-handed, in a 25-knot southerly, having never helmed before. Log entry for the night written in a copperplate hand. Mr J. Vane declined to wait for the police and left before sunrise.")},
  funeral2025:{kind:'Invoice',year:2025,title:'Mortlake & Daughters, funeral invoice',k:'Cornelius Helen Julian Vane funeral memorial Mortlake',
    render:()=>`<div class="doc"><h4>Mortlake &amp; Daughters · Funeral Directors</h4><div class="c">Tax invoice 25-0098 · Account: J. Vane, Vane House</div>
    <div class="doctable-wrap"><table class="doctable"><tr><th>Item</th><th>Amount</th></tr>
    <tr><td>Memorial service for Mr and Mrs C. Vane, no bodies, 10:00 pm</td><td>$1,400</td></tr>
    <tr><td>Coffin, mahogany, lined, deep</td><td>$6,900</td></tr>
    <tr><td>Delivery of coffin (empty) to Vane House cellar</td><td>$380</td></tr>
    <tr><td>Blackout drapes for chapel, client supplied</td><td>$0</td></tr></table></div>
    <p class="rn">Note from Mrs Mortlake: Client asked that the coffin be fitted with an inside latch. We have done this before for the Vane family, in 1934 and in 1976. One coffin only, as before.</p></div>`},
  letterJulian:{kind:'Letter',year:2025,title:'Claim letter, Julian Vane',k:'Julian Vane letter',
    render:()=>`<div class="letter"><p>Dear Sir or Madam,</p><p>I write regarding my grandfather's estate. The will is clear and I don't see why the matter needs an associate's attention at all.</p><p>Grandfather and I were very close. We had the same tastes, the same habits, the same hours. People often said we could have been the same man.</p><p>Neither of the women writing to you understands this family. I would ask that any meeting be arranged after 8 pm. I have a condition.</p><p>Yours,</p><div class="hand">J. Vane</div></div>`},
  letterMargaret:{kind:'Letter',year:2025,title:'Objection letter, Margaret Holloway',k:'Margaret Holloway letter',
    render:()=>`<div class="letter"><p>To whoever is handling the Vane business,</p><p>I'm the only real family that house has left. My grandmother Harriet was Ambrose Vane's daughter, and I can prove it. Everyone else who lived there married in or was taken in.</p><p>When I was a girl, Uncle Desmond used to visit Gran at night. He looked about thirty. Gran never called him Desmond. She never called him anything.</p><p>I met Helen's grandson twice when he was small, and once at sixteen. A nice, ordinary lad. The man who came to the memorial calling himself Julian has a little scar through his eyebrow. That boy had no scar.</p><p>I took one of those DNA tests. You'll see I'm who I say I am. Ask him to take one.</p><p>Margaret Holloway</p></div>`},
  letterDaphne:{kind:'Letter',year:2025,title:'Claim letter, Daphne Marsh-Pike',k:'Daphne Marsh-Pike Lorna letter',
    render:()=>`<div class="letter"><p>Dear Ashgrove &amp; Pell,</p><p>My mother, Lorna Marsh-Pike, typed for young Mr Cornelius Vane at Vane House from 1964 to 1967. She always told me he was my father. She said he was kind, and frightened of his father.</p><p>I was left off his will, which is no surprise. But a child is a child. I claim my share as his daughter.</p><p>I have taken the Bloodlines DNA test as asked. I share DNA with Mrs Holloway, which I understand proves we are family.</p><p>Daphne Marsh-Pike</p></div>`},
  diary1888:{kind:'Diary',year:1888,title:'Diary page, Eliza Vane, 1888',k:'Eliza Vane diary',
    render:()=>`<div class="diary"><small>From the diary of Eliza Vane. Lent by Margaret Holloway.</small>
    <span>14th Feb, near midnight. A. home at last, after dark. He will not eat. His hands are so cold. The wound over his eye has closed as if it were never there.</span>
    <span>I have not told him yet that I am five months gone with child. I think I shall wait until he is himself again.</span></div>`},
  dnaJulian:{kind:'DNA',year:2025,title:'DNA kit report, Julian Vane',k:'',hidden:true,
    render:()=>`<div class="alert"><b>Lab notice.</b> Sample returned no viable cellular activity. Kit re-run twice with the same result. Matches: 0 of 21,406,118 tested members. Ethnicity: could not be estimated.</div><p class="sub" style="margin-top:12px">Every living person who has tested with Bloodlines shares DNA with at least one other member.</p>`},
  dnaMargaret:{kind:'DNA',year:2025,title:'DNA kit report, Margaret Holloway',k:'',hidden:true,
    render:()=>`<p>Margaret's kit matches 312 members. Closest: R. Holloway (874 cM), G. Holloway-Teague (231 cM), Daphne Marsh-Pike (96 cM), Ivor Marsh (88 cM).</p>`},
  dnaDaphne:{kind:'DNA',year:2025,title:'DNA kit report, Daphne Marsh-Pike',k:'',hidden:true,
    render:()=>`<p>Daphne shares 96 cM with Margaret Holloway. Matches they have in common: Ivor Marsh, Ada Marsh-Clery, T. Marsh.</p><p>Daphne's closest matches not shared with Margaret: P. Askew-Rhee (412 cM), D. Askew (398 cM), member rope_walk_41 (205 cM).</p>`},
  hintOfficial:{kind:'Hint',year:2025,title:'Member-tree hint: Julian is grandson of Cornelius',k:'',hidden:true,
    render:()=>`<p>Source: public member tree <b>VaneFamily_Official</b>, owner <b>nightowl_jv</b>. Tree created 3 March 2025. One attached record (the will). No birth or adoption record for Julian attached.</p>`},
  nilDesmond:{kind:'Certificate',year:2025,title:'Nil-return search certificate, Desmond Vane birth',k:'',hidden:true,
    render:()=>`<div class="doc"><img class="stamp nil" src="assets/stamp_nil.webp" alt=""><h4>Certificate of Search · Nil Return</h4><p>A search of birth registrations for the districts of Ashby, Port Hollis, Calder and Wenmouth, 1895 to 1915, under the surname VANE and given name DESMOND, found no entry.</p><p>A search for children registered to Ambrose Vane after 1890 found none.</p><p class="rn">Issued through Bloodlines Professional on behalf of Ashgrove &amp; Pell.</p></div>`},
  nilCornelius:{kind:'Certificate',year:2025,title:'Nil-return search certificate, Cornelius Vane birth',k:'',hidden:true,
    render:()=>`<div class="doc"><img class="stamp nil" src="assets/stamp_nil.webp" alt=""><h4>Certificate of Search · Nil Return</h4><p>A search of birth registrations for the districts of Ashby, Port Hollis, Calder and Wenmouth, 1925 to 1960, under the surname VANE and given name CORNELIUS, found no entry.</p><p>A search for children registered to Desmond Vane found none.</p><p class="rn">Issued through Bloodlines Professional on behalf of Ashgrove &amp; Pell.</p></div>`},
  nilJulian:{kind:'Certificate',year:2025,title:'Nil-return search certificate, Julian Vane birth',k:'',hidden:true,
    render:()=>`<div class="doc"><img class="stamp nil" src="assets/stamp_nil.webp" alt=""><h4>Certificate of Search · Nil Return</h4><p>A search of birth registrations for the districts of Ashby, Port Hollis, Calder and Wenmouth, 1985 to 2000, under the surname VANE and given name JULIAN, found no entry.</p><p>A search for children registered to Cornelius Vane found none.</p><p class="rn">Issued through Bloodlines Professional on behalf of Ashgrove &amp; Pell.</p></div>`},
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
    '2. A photograph counts as an identifying document only where a permanent mark can be seen on it. A certified photo-lab comparison counts as one document.',
 '3. A certified handwriting comparison of two signed documents counts as one document.']},
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
  {id:'F1',q:'Who is the man now calling himself Julian Ambrose Vane?',opts:[['grandson',"Cornelius Vane's adopted grandson, as the will says"],['cornelius','Cornelius Vane, who faked his own death this March'],['ambrose','Ambrose Vane, who has also lived as Desmond and Cornelius Vane'],['impostor','An unrelated impostor after the money']],ans:'ambrose',
    nudge:'Identity across names needs three independent documents spanning more than a century (Accord Art. 2). A photograph only counts once the photo lab has certified it. Compare faces from before and after each death in the family, not only after. Signatures can be compared too.'},
  {id:'F2',q:'Did Cornelius Vane die on 2 March 2025?',opts:[['drowned','Yes. He went overboard off Ashby Point.'],['staged','No. The death was staged.'],['open','It cannot be determined. Leave it as an open finding.']],ans:'staged',
    nudge:'Look at what happened to the boat afterwards, and at what was ordered for the memorial. Then look at how this family has died before.'},
  {id:'F3',q:'Who died in the Vane House fire of 1 February 1934?',opts:[['ambrose','Ambrose Vane, as registered, with his wife and housekeeper'],['desmond','Desmond Vane, with his mother Clara and the housekeeper Ada Kemp'],['stranger','An unknown man, placed there to be found'],['nobody','No man died. The male remains were never his.']],ans:'desmond',
    nudge:'Read what the pathologist said about the remains. Then work out who in that house was the right age.'},
  {id:'F4',q:"What is Daphne Marsh-Pike's claim worth?",opts:[['daughter',"She is the deceased's daughter and takes a child's share"],['realcornelius','Her father was the real Cornelius Vane, who died in 1976. She takes nothing from this estate.'],['notvane','She has no tie to the Vanes at all and takes nothing'],['unproven','Her claim is unproven for now and should be held open']],ans:'realcornelius',
    nudge:"Read the side of Daphne's DNA that Margaret doesn't share. Then find out what Cornelius was called before he was a Vane."},
  {id:'F5',q:'Who receives the estate?',opts:[['julian','Julian Vane, under the 2024 will'],['margaretSA','Margaret Holloway, as next of kin under the Succession Act'],['margaretA4','Margaret Holloway, as issue of the blood, under Accord Art. 4'],['owner','No one. The estate stays with its living owner.'],['registry','The Nocturnal Registry, as forfeit property'],['split','Margaret and Daphne, in equal shares']],ans:'margaretA4',
    nudge:'A staged death does not leave the estate where it was. Read Article 4, then prove the heir\'s line was begotten before the turning.'}
];
/* What bears on each finding (BEARS), and what a finding must contain to be accepted (NEED).
   Each NEED group lists records; the player needs n of them. A finding passes only if every group is met.
   Records in BEARS but in no group are context: they cost nothing. Anything outside BEARS counts against the evidence. */
const ATTACK = ['hospital1888','news1888','diary1888'];
const STAGED = ['death1934','inquest1934','news1934','death1976','inquest1976','news1976'];
const BEARS = {
 F1:['nilJulian','nilCornelius','photo1875','birth1857','census1911','census1921','marr1886','photo1889','photo1912','photo1925','photo1962','licence1979','licence2019','licence2025','trust1934','inquest1934','inquest1976','adopt1996','adopt1948','deedpoll1907','dnaJulian','hospital1888','rolls'],
 F2:['death2025','death2025h','news2025','marine2025','funeral2025','trust1934',...STAGED],
 F3:['inquest1934','death1934','news1934','burial1934','birth1903','deedpoll1907','census1921','census1911','photo1925','trust1934','nilDesmond','marr1905'],
 F4:['nilCornelius','dnaDaphne','birth1966','birth1941','adopt1948','inquest1976','death1976','news1976','letterDaphne'],
 F5:['lawA4','lawA3','birth1888','dnaMargaret',...ATTACK]
};
const NEED = {
 F1:[{cmp:true,n:1},{ids:['trust1934','inquest1934','inquest1976','adopt1996','hospital1888'],n:2,sig:true}],
 F2:[{ids:['marine2025','funeral2025'],n:1},{ids:STAGED,n:1}],
 F3:[{ids:['inquest1934'],n:1},{ids:['birth1903','deedpoll1907','census1921','photo1925'],n:1}],
 F4:[{ids:['dnaDaphne'],n:1},{ids:['birth1941','adopt1948'],n:1},{ids:['inquest1976','death1976','news1976'],n:1}],
 F5:[{ids:['lawA4'],n:1},{ids:ATTACK,n:1},{ids:['birth1888'],n:1}]
};
const MAX_EV = 4;
const goodLab = id => id.startsWith('cmp:') && S.reports[id] && S.reports[id].ok;
const goodHand = id => id.startsWith('sig:') && S.reports[id] && S.reports[id].ok && SIGNED[S.reports[id].a][1]==='v';
const inGroup = (id,g) => g.cmp ? goodLab(id) : g.ids.includes(id) || (g.sig && goodHand(id));
function relevant(id,F){ return id.startsWith('cmp:') || (F==='F1' && id.startsWith('sig:')) || BEARS[F].includes(id); }
/* years covered by the counted documents; a lab report covers the years of both its photos */
function yearsOf(id){
 if(id.startsWith('cmp:')){ const r=S.reports[id]; return [PH[r.a].year, PH[r.b].year]; }
 if(id.startsWith('sig:')){ const r=S.reports[id]; return [REC[r.a].year, REC[r.b].year]; }
 return [REC[id].year];
}
function evidenceOk(F, ev){
 if(!NEED[F] || ev.length>MAX_EV || ev.some(id=>!REC[id])) return false;
 if(ev.filter(id=>!relevant(id,F)).length>1) return false;
 // Try every distinct assignment. Attachment order cannot determine admissibility.
 const slots=NEED[F].flatMap(g=>Array(g.n).fill(g));
 function assign(i,used){
  if(i===slots.length){
   if(F!=='F1') return true;
   const ys=[...used].flatMap(yearsOf);
   return Math.max(...ys)-Math.min(...ys)>100;
  }
  return [...new Set(ev)].some(id=>!used.has(id)&&inGroup(id,slots[i])&&assign(i+1,new Set([...used,id])));
 }
 return assign(0,new Set());
}

/* ================= MAIL ================= */
const MAIL = {
  m1:{from:'R. Ashgrove, Senior Partner',time:'10:52 pm',subj:'Vane estate: your first file',body:()=>`
    <p>Welcome to nights. <b>Verify the claimant before we distribute the estate.</b></p>
    <p>Cornelius Vane, 84, and his wife Helen were lost at sea in March. The will names <b>Julian Ambrose Vane</b> as the beneficiary after Helen. <b>Margaret Holloway</b> objects to his claim. <b>Daphne Marsh-Pike</b> has also lodged a claim.</p>
    <p>Start with the claimant himself, and with the objection to him. The archive is open to you.</p>
    <p>You may send a preliminary concern before settling the whole estate. It does not use a final filing.</p>
    <div class="opening-actions"><button class="mlbtn" data-a="searchname" data-v="Julian Vane">Search Julian Vane</button><button class="mlbtn ghost" data-a="go" data-t="net" data-v="matter/overview">Open your investigation</button></div>
    <details><summary>Full assignment and estate</summary><p>Vane House and the family investments are valued at $6,020,000. The cellar contents and family crypt are unvalued. The final ruling needs five supported findings. The Nocturnal Accord is in the law library; where it applies, it governs the estate.</p><p>${S.mode==='challenge'?'Challenge mode allows three final filings.':'Investigation mode allows revisions. Working theories are not submitted as proof.'}</p></details>
    <p>R.A.</p>`},
  m0:{from:'People & Culture',time:'10:40 pm',subj:'Your first night: how this works',body:()=>`
    <p>Welcome to the night roster. A few things before you start.</p>
    <p>You work in three places, shown as tabs along the top: Bloodlines (records and the family tree), this mailbox, and the firm's intranet for matter 2025-0417. Your tree starts nearly empty. You fill it in from the records.</p>
    <p>On the intranet, the matter overview has a short training list that ticks itself off as you work. The bookmarks bar has a field guide that explains every tool. Nobody here will give you the answers, so the guide won't either.</p>
    <p>Read slowly. Most of what you need is in the small print.</p>
    <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap"><button class="mlbtn" data-a="guide">Open the field guide</button><button class="mlbtn ghost" data-a="go" data-t="net" data-v="matter/overview">Open the training list</button></div>`},
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
    <p>Under Article 4 the whole estate goes to Margaret. Daphne has been told her father was a kind young man who never owned a brick of Vane House. She took it better than Pryor did.</p>
    <p>Your DNA results should be back. Don't read anything into them.</p>
    <p>And don't open file 0001.</p><p>R.A.</p>`},
  m9:{from:'Margaret Holloway',time:'just now',subj:'The cellar',attach:'cellarPhoto',body:()=>`
    <p>Thank you. I mean it. I've never owned anything in my life and now I own a house I'm frightened of.</p>
    <p>I went down to the cellar with a torch at noon, the way the will said not to. There were four coffins. Three had brass plates: AMBROSE, DESMOND, CORNELIUS. All empty, all with latches on the inside.</p>
    <p>The fourth was older than the others. Its plate said Ashgrove, in old copperplate script.</p>
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
  const ids = ['m1','m0','m10','m2','m3','m4'];
  if(S.flags.diary) ids.unshift('m11');
  if(S.won) ids.unshift('m7','m9','m6','m5');
  if(S.failed) ids.unshift('m12');
  return ids;
}

