/* ================= EXTRA DATA ================= */
PEOPLE.v1410 = {name:'Hugh atte Vane',life:'1410 – 1471',ini:'HV',facts:[['Born','c. 1410, Ashby'],['Occupation','Boatman'],['Died','c. 1471, Ashby']],recs:['court1436']};
PEOPLE.v1445 = {name:'John atte Vane',life:'1445 – 1509',ini:'JV',facts:[['Born','c. 1445, Ashby'],['Occupation','Boatman'],['Died','c. 1509, Ashby']],recs:['will1509']};
PEOPLE.v1480 = {name:'Richard Vane',life:'1480 – 1544',ini:'RV',facts:[['Born','c. 1480, Ashby'],['Occupation','Boatman'],['Died','c. 1544, Ashby']],recs:['burial1544']};
PEOPLE.v1515 = {name:'Thomas Vane',life:'1515 – 1577',ini:'TV',facts:[['Born','c. 1515, Ashby'],['Occupation','Cooper'],['Died','c. 1577, Ashby']],recs:['will1577']};
PEOPLE.v1550 = {name:'John Vane',life:'1550 – 1612',ini:'JV',facts:[['Born','c. 1550, Ashby'],['Occupation','Cooper'],['Died','c. 1612, Ashby']],recs:['bapt1550']};
PEOPLE.v1585 = {name:'William Vane',life:'1585 – 1650',ini:'WV',facts:[['Born','c. 1585, Ashby'],['Occupation','Cooper'],['Died','c. 1650, Ashby']],recs:['marr1612']};
PEOPLE.v1620 = {name:'Richard Vane',life:'1620 – 1688',ini:'RV',facts:[['Born','c. 1620, Ashby'],['Occupation','Cooper'],['Died','c. 1688, Ashby']],recs:['bapt1620','tax1674']};
PEOPLE.v1655 = {name:'Henry Vane',life:'1655 – 1719',ini:'HV',facts:[['Born','c. 1655, Ashby'],['Occupation','Cooper'],['Died','c. 1719, Ashby']],recs:['marr1682']};
PEOPLE.v1688 = {name:'William Vane',life:'1688 – 1750',ini:'WV',facts:[['Born','c. 1688, Ashby'],['Occupation','Cooper'],['Died','c. 1750, Ashby']],recs:['bapt1688']};
PEOPLE.v1720 = {name:'John Vane',life:'1720 – 1790',ini:'JV',facts:[['Born','c. 1720, Ashby'],['Occupation','Cooper'],['Died','c. 1790, Ashby']],recs:['bapt1720','deed1740']};
PEOPLE.samuel = {name:'Samuel Vane',life:'1751 – 1822',ini:'SV',facts:[['Born','27 Feb 1751, Ashby'],['Father','John Vane (1720 – 1790)'],['Occupation','Cooper'],['Died','1822, Ashby']],recs:['bapt1751']};
PEOPLE.thomasv = {name:'Thomas Vane',life:'1789 – 1858',ini:'TV',facts:[['Born','4 Apr 1789, Ashby'],['Married','Mary Cutler, 1818'],['Occupation','Cooper'],['Died','1858, Vane House']],recs:['bapt1789','marr1818','census1841']};
PEOPLE.josiah = {name:'Josiah Vane',life:'1824 – 1889',ini:'JV',facts:[['Born','2 Jan 1824, Vane House'],['Married','Hannah Crewe, 1850'],['Occupation','Shipwright'],['Died','8 Mar 1889, Vane House']],recs:['census1841','marr1850','census1861','census1881','burial1889','news1889']};
PEOPLE.hannah = {name:'Hannah Vane (née Crewe)',life:'1828 – 1901',ini:'HV',facts:[['Born','15 Jan 1828, Ashby'],['Married','Josiah Vane, 1850'],['Died','1901, Vane House']],recs:['marr1850','birth1857','census1861','census1881']};
PEOPLE.william = {name:'William Marsh',life:'1830 – 1899',ini:'WM',facts:[['Born','1830, Ashby'],['Occupation','Chandler, Fish Street'],['Died','1899, Ashby']],recs:['birth1861','marr1886']};
PEOPLE.ann = {name:'Ann Marsh (née Teale)',life:'1832 – 1910',ini:'AM',facts:[['Born','1832, Ashby'],['Married','William Marsh'],['Died','1910, Ashby']],recs:['birth1861']};
PEOPLE.arthur = {name:'Arthur Holloway',life:'1884 – 1951',ini:'AH',facts:[['Born','1884, Ashby'],['Married','Harriet Vane, 1912'],['Occupation',"Ship's chandler"],['Died','1951, Ashby']],recs:['photo1912']};
const SEX = {v1410:'m',v1445:'m',v1480:'m',v1515:'m',v1550:'m',v1585:'m',v1620:'m',v1655:'m',v1688:'m',v1720:'m',samuel:'m',thomasv:'m',josiah:'m',hannah:'f',william:'m',ann:'f',ambrose:'m',eliza:'f',harriet:'f',arthur:'m',cornelius:'m',thomas:'m',desmond:'m',daphne:'f',margaret:'f',julian:'m'};
const REL = {
  v1410:[['Child','v1445']],
  v1445:[['Father','v1410'],['Child','v1480']],
  v1480:[['Father','v1445'],['Child','v1515']],
  v1515:[['Father','v1480'],['Child','v1550']],
  v1550:[['Father','v1515'],['Child','v1585']],
  v1585:[['Father','v1550'],['Child','v1620']],
  v1620:[['Father','v1585'],['Child','v1655']],
  v1655:[['Father','v1620'],['Child','v1688']],
  v1688:[['Father','v1655'],['Child','v1720']],
  v1720:[['Father','v1688'],['Child','samuel']],
  samuel:[['Father','v1720'],['Child','thomasv']], thomasv:[['Father','samuel'],['Child','josiah']],
  josiah:[['Father','thomasv'],['Spouse','hannah'],['Child','ambrose']], hannah:[['Spouse','josiah'],['Child','ambrose']],
  william:[['Spouse','ann'],['Child','eliza']], ann:[['Spouse','william'],['Child','eliza']],
  ambrose:[['Father','josiah'],['Mother','hannah'],['Spouse','eliza'],['Child','harriet'],['Child','cornelius']],
  eliza:[['Father','william'],['Mother','ann'],['Spouse','ambrose'],['Child','harriet']],
  harriet:[['Father','ambrose'],['Mother','eliza'],['Spouse','arthur'],['Child','thomas']],
  arthur:[['Spouse','harriet'],['Child','thomas']],
  thomas:[['Mother','harriet'],['Father','arthur'],['Child','margaret']],
  margaret:[['Father','thomas']],
  cornelius:[['Father','ambrose'],['Child','desmond']],
  desmond:[['Father','cornelius'],['Child','julian']],
  julian:[['Father','desmond']],
  daphne:[['Claimed father','cornelius']]
};
const AVATARS = new Set(['ambrose','ann','arthur','cornelius','daphne','eliza','hannah','harriet','josiah','julian','margaret','samuel','thomas','thomasv','william']);
const COLTHUMB = {Census:'census',Birth:'birth',Death:'death',Photo:'photos',Newspaper:'newspapers',Roll:'rolls'};
const PHOTO_OF = {ambrose:'photo1889',cornelius:'licence1972',julian:'licence2019',thomas:'photo1950'};
const HINT_OF = {julian:['hintOfficial'],ambrose:['h2','h3'],harriet:['h4']};
const COLL = {Court:'Manor of Ashby Court Rolls, 1350–1840',Will:'Probate Wills & Inventories, 1450–1858',Tax:'Hearth & Land Tax Returns, 1662–1830',Art:'Ashby Guildhall Portraits & Prints, 1500–1900',Parish:'Ashby Parish Registers, 1538–1900',Marriage:'Ashby District Marriage Registrations, 1850–2025',Inquest:"Coroner's Inquest Records, 1890–1960",Census:'Ashby Census Returns, 1841–1921',Birth:'Ashby District Birth Registrations, 1850–2025',Death:'Ashby District Death Registrations, 1850–2025',
  Photo:'Ashby Studio & Parish Photographs, 1860–1990',Newspaper:'The Ashby Courier Archive, 1871–2025',Roll:'Electoral Rolls, 1903–2025',ID:'Motor Registry Licence Records, 1925–2024',
  Legal:'Probate & Trust Instruments (Professional)',Medical:'Ashby Hospital Registers, 1880–1950',Marine:'Harbour Authority Incident Reports, 1900–2025',Invoice:'Professional Uploads: Funeral & Estate Accounts'};
const PAGE_KINDS = new Set(Object.keys(COLL));
const IDX = {
  birth1920:[['Name','Thomas Holloway'],['Birth date','7 Mar 1920'],['Father','Arthur Holloway'],['Mother','Harriet Vane'],['Registration no.','1920/0108']],
  birth1951:[['Name','Margaret Holloway'],['Birth date','22 Jul 1951'],['Birth place','Ashby Hospital'],['Father','Thomas Holloway'],['Registration no.','1951/0562']],
  court1436:[['Name','Hugh atte Vane'],['Court date','29 Sep 1436'],['Place','Hollow Lane, Ashby'],['Pledge','Roland Ashgrove']],
  will1509:[['Name','John atte Vane'],['Proved','14 Mar 1509'],['Occupation','Boatman'],['Scrivener','Roland Ashgrove']],
  burial1544:[['Name','Richard Vane'],['Buried','9 Nov 1544'],['Parish','St Columba, Ashby']],
  will1577:[['Name','Thomas Vane'],['Proved','3 May 1577'],['Occupation','Cooper'],['Notary','Roland Ashgrove']],
  bapt1550:[['Name','John Vane'],['Baptised','12 Sep 1550'],['Father','Thomas Vane']],
  marr1612:[['Names','William Vane; Margaret Dole'],['Married','8 Oct 1612']],
  bapt1620:[['Name','Richard Vane'],['Baptised','21 Jun 1620'],['Father','William Vane']],
  tax1674:[['Name','Richard Vane'],['Street','Hollow Lane'],['Hearths','2']],
  marr1682:[['Names','Henry Vane; Susan Penn'],['Married','19 May 1682']],
  bapt1688:[['Name','William Vane'],['Baptised','4 Mar 1688'],['Father','Henry Vane']],
  bapt1720:[['Name','John Vane'],['Baptised','10 Apr 1720'],['Father','William Vane']],
  portrait1620:[['Sitter','Roland Ashgrove'],['Office','Recorder of Ashby'],['Date','1620'],['Medium','Oil on panel']],
  deed1740:[['Lessor','R. Ashgrove'],['Lessee','William Vane'],['Date','1740'],['Place','Hollow Lane, Ashby']],
  bapt1751:[['Name','Samuel Vane'],['Baptised','3 Mar 1751'],['Father','John Vane'],['Parish','St Columba, Ashby']],
  bapt1789:[['Name','Thomas Vane'],['Baptised','12 Apr 1789'],['Father','Samuel Vane'],['Parish','St Columba, Ashby']],
  marr1818:[['Names','Thomas Vane; Mary Cutler'],['Married','21 Sep 1818'],['Parish','St Columba, Ashby']],
  census1841:[['Name','Thomas Vane'],['Age','50'],['Household','Thomas, Mary and Josiah Vane'],['Place','Hollow Lane, Ashby']],
  marr1850:[['Names','Josiah Vane; Hannah Crewe'],['Married','4 Nov 1850'],['Registration no.','1850/0214']],
  birth1857:[['Name','Ambrose Vane'],['Birth date','9 Feb 1857'],['Birth place','Vane House, Ashby'],['Father','Josiah Vane'],['Mother','Hannah Crewe'],['Registration no.','1857/0066']],
  census1861:[['Name','Ambrose Vane'],['Age','4'],['Household','Josiah, Hannah, Mary and Ambrose Vane'],['Place','Hollow Lane, Ashby']],
  photo1875:[['Name','Ambrose Vane'],['Photo date','1875'],['Place','Ashby'],['Studio','Halloran & Sons']],
  census1881:[['Name','Ambrose Vane'],['Age','24'],['Occupation','Clerk'],['Place','Hollow Lane, Ashby']],
  marr1886:[['Names','Ambrose Vane; Eliza Marsh'],['Married','12 Jun 1886'],['Witness','R. Ashgrove'],['Registration no.','1886/0301']],
  burial1889:[['Name','Josiah Vane'],['Age','65'],['Buried','12 Mar 1889'],['Parish','St Columba, Ashby']],
  news1889:[['Name','Josiah Vane'],['Publication','The Ashby Courier'],['Date','9 Mar 1889'],['Page','3']],
  birth1861:[['Name','Eliza Marsh'],['Birth date','20 Jan 1861'],['Birth place','Fish Street, Ashby'],['Father','William Marsh'],['Mother','Ann Teale'],['Registration no.','1861/0049']],
  census1911:[['Name','Ambrose Vane'],['Age','54'],['Occupation','Private means'],['Place','14 Hollow Lane, Ashby']],
  census1921:[['Name','Ambrose Vane'],['Age','64'],['Occupation','Private means'],['Place','14 Hollow Lane, Ashby']],
  photo1921:[['Name','Frank Tully'],['Photo date','1921'],['Source',"Wharf Workers' Union minute book"]],
  birth1958d:[['Name','Desmond Vane'],['Birth date','3 Sep 1958'],['Birth place','Marrow Bay'],['Father','Harold Vane'],['Mother','Ruth Gale'],['Registration no.','1958/0388']],
  inquest1934:[['Name','Ambrose Vane'],['Held','8 Feb 1934'],['Verdict','Drowning, presumed'],['Witness','W. Lamb']],
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
const MAIL_DATE = {m1:'Sun 22:52',m0:'Sun 22:40',m2:'Sun 21:30',m3:'Sun 21:02',m10:'Sun 20:15',m4:'Fri 23:58',m11:'Now',m5:'Now',m6:'Now',m7:'Now',m9:'Now',m12:'Now'};
const FILES = {cellarPhoto:'Cellar_photos.jpg',letterJulian:'Letter_JVane_claim.pdf',letterMargaret:'Letter_MHolloway_objection.pdf',letterDaphne:'Letter_DMarshPike_claim.pdf',diary1888:'EVane_diary_Feb1888.jpg'};

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
  flags:{},reports:{},lab:{a:'',b:'',ma:[],mb:[],miss:0},hw:{a:'',b:''},tree:{people:['cornelius','julian','margaret','daphne'],links:[],events:[],nid:0},viewed:[],notes:'',log:[],q:{name:'',kw:'',kind:'All'},searched:false});
const S = FRESH();
const KEEP = ['tab','hist','kit','cookie','recent','pins','read','seen','ans','ev','res','attempts','won','failed','flags','reports','lab','hw','tree','viewed','notes','log','q','searched'];
try{const s=JSON.parse(localStorage.getItem('bloodlines-v3')||'null'); if(s) KEEP.forEach(k=>{ if(s[k]!==undefined) S[k]=s[k]; });}catch(e){}
if(!S.tree.events) S.tree.events=[]; if(!S.tree.nid) S.tree.nid=0; S.tree.links.forEach(l=>{ if(!l.id) l.id=++S.tree.nid; });
function save(){try{const o={};KEEP.forEach(k=>o[k]=S[k]);localStorage.setItem('bloodlines-v3',JSON.stringify(o))}catch(e){}}
for(const id in S.reports) REC[id] = id.startsWith('sig:') ? sigRec(id) : cmpRec(id);

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
    if(!S.viewed.includes(id)) S.viewed.push(id);
    if((PH[id]||SIGNED[id]) && !S.seen.includes(id)) S.seen.push(id);
    S.recent = [id, ...S.recent.filter(x=>x!==id)].slice(0,4);
    if((id==='hospital1888'||id==='news1888') && !S.flags.diary){ S.flags.diary = true; setTimeout(()=>toast('New mail from Margaret Holloway'),600); }
  }
  if(t==='mail' && r.startsWith('inbox/')){ const id=r.slice(6); if(!S.read.includes(id)) S.read.push(id); }
}
function togglePin(id){
  const was = pinned(id);
  if(id==='hintOfficial'){ S.tree.links = S.tree.links.filter(l=>!(l.t==='claimed'&&l.recs.includes('hintOfficial'))); if(!was&&S.tree.people.includes('cornelius')&&S.tree.people.includes('julian')) S.tree.links.push({id:++S.tree.nid,t:'claimed',a:'cornelius',b:'julian',recs:['hintOfficial']}); }
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
    .map(([t,r,l])=>`<button class="bm" data-a="go" data-t="${t}" data-v="${r}"><span class="fav" style="background:${FAV[t][0]}">${FAV[t][1]}</span>${l}</button>`).join('') + `<button class="bm guidebtn" data-a="guide"><span class="fav" style="background:#3c5a78">?</span>Field guide</button>`;
  document.title = titleOf(S.tab,cur()).replace(/ [|–] .*/,'') + ' · Bloodlines game';
}
function render(){
  refreshLayout();
  const old = $('#cw'), keep = old ? {t:old.scrollTop,l:old.scrollLeft} : null;
  chrome();
  const r = cur();
  $('#vp').innerHTML = S.tab==='bl' ? blPage(r) : S.tab==='mail' ? mailApp(r) : netApp(r);
  const cw = $('#cw'); if(cw){ if(keep!==null){ cw.scrollTop=keep.t; cw.scrollLeft=keep.l; } else { cw.scrollTop=0; cw.scrollLeft=Math.max(0,(LAY.w-cw.clientWidth)/2); } }
}

/* ================= BLOODLINES ================= */
function avatar(id, crop=true){
  if(AVATARS.has(id)) return `<img src="assets/av_${id}.jpg" alt="">`;
  return PEOPLE[id]?.ini || '?';
}
function blShell(section, inner){
  const hintN = visibleHints().length + (S.won?1:0);
  const nav = [['home','Home'],['tree','Trees'],['search','Search'],['dna','DNA'],['hints',`Hints <span class="cnt">${hintN}</span>`]];
  return `<div class="bl">
  <div class="promo">Ancestors' Week: save 25% on Bloodlines DNA kits. <u data-a="toastonly" data-msg="Offer not available on Professional accounts">Shop now</u></div>
  <header class="blbar">
    <button class="icobtn burger" data-a="burger" aria-label="Menu">${ic('menu')}</button>
    <button class="bl-logo" data-a="go" data-t="bl" data-v="home"><img class="logoimg" src="assets/bloodlines_logo.webp" alt="">bloodlines</button>
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
    <div class="panel tile pb" style="padding:18px"><span class="tiny">Your trees</span><h2>Vane estate</h2><p class="muted" style="margin:0">${S.tree.people.length} people · ${visibleHints().length} hints · last edited by you</p>
      <div style="display:flex;gap:6px">${['ambrose','cornelius','julian','margaret'].map(p=>`<span class="fam" style="width:auto;padding:0"><span class="ava">${avatar(p)}</span></span>`).join('')}</div>
      <div><button class="bbtn sm" data-a="go" data-t="bl" data-v="tree">${ic('tree')}View tree</button></div></div>
    <div class="panel tile" style="padding:18px"><span class="tiny">DNA</span><h2>${S.won?'Your results are in':'Your kit is processing'}</h2><p class="muted" style="margin:0">${S.won?'You have 1 new DNA match.':`Lab stage ${kitStage()} of 4. Claimant kits for Vane estate are ready to review.`}</p><div><button class="bbtn sec sm" data-a="go" data-t="bl" data-v="dna/${S.won?'you':'julian'}">See DNA matches</button></div></div>
    <div class="panel tile" style="padding:18px"><span class="tiny">Hints</span><h2>${visibleHints().length+(S.won?1:0)} new hints</h2><p class="muted" style="margin:0">Hints are possible matches from records and other members' trees. Review each one before you accept it.</p><div><button class="bbtn sec sm" data-a="go" data-t="bl" data-v="hints">Review hints</button></div></div>
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
/* ================= FIELD GUIDE & TRAINING ================= */
const GUIDE = [{"id": "job", "t": "Your job", "h": "<p>You are a night-shift associate at Ashgrove &amp; Pell, a probate firm. Your file is the estate of <b>Cornelius Vane</b>, lost overboard in March. Three people want the estate. Nobody has shown they are who they say they are.</p>\n<p>The partners want <b>five findings</b>, each one an answer plus the evidence that proves it. You have <b>three filings</b>. A finding is accepted only if the answer is right and the evidence is the right kind. A right answer on thin evidence is turned down the same as a wrong one.</p>\n<p>Nobody will tell you the answers. You work them out from records, and you build a family tree to do it.</p>"}, {"id": "sites", "t": "Your three screens", "h": "<p>The tabs along the top are three different websites.</p>\n<ul><li><b>Bloodlines</b> is a commercial genealogy site. It holds the records, the family tree, DNA results and hints.</li>\n<li><b>A&amp;P Mail</b> is the firm's webmail. The brief, the claimants' letters and replies to your work arrive here.</li>\n<li><b>Matter 2025-0417</b> is the firm's intranet. It holds your evidence, the photo lab, the handwriting examiner, the ruling form and the law library.</li></ul>\n<p>Your progress saves in the browser, so you can close the page and come back.</p>"}, {"id": "tree", "t": "Build the tree", "h": "<p>Your tree starts with four names and no links. It fills in as you prove who is related to whom.</p>\n<ol><li>Search a name on Bloodlines and open a record.</li><li>Read it. The <b>Build your tree</b> panel on the record page lists the people it names.</li><li>Pick two of them, say how they are related, and press <b>Add to tree</b>.</li></ol>\n<p>You can put any link on the tree, including one you only suspect. A link the record in front of you shows is drawn solid. Any other is drawn dashed as <b>unproven</b>. You can remove a link at any time.</p>\n<p>The tree checks dates for you. It flags a parent who was too young or already dead, a marriage that overlaps another, a person alive as two people at once, and anyone who ends up their own ancestor. A flag does not stop you. It tells you something does not add up.</p>\n<p>Two entries can be the same man. Say so with <b>is the same person as</b>. It counts as proven only after you have certified a photo or handwriting comparison between them. You can also record an event, such as a date a person was turned, from a record that states it.</p>\n<p>Your findings rely on the tree. The partners check that it shows what each finding claims, with no unproven links among the people involved. They will not tell you what is missing until your second filing. Records you open also tell you which names to search next.</p>\n<p>Several people can share a name. Check the dates before you decide which one a record means.</p>\n<p>Hints from other people's trees can put a link in your tree. They are claims, not proof. See <b>Hints</b> below.</p>"}, {"id": "search", "t": "Searching", "h": "<p>Search covers names, places and keywords, so try the places and objects in the letters and reports, not just surnames. You can narrow results by collection (births, deaths, censuses, newspapers and so on).</p>\n<p>Most records are not attached to any tree. They only turn up if you search for them.</p>\n<p>If a record should exist and does not, you can ask for a <b>certified nil return</b>. Type the name into the search box and press <b>Request nil return</b>. The certificate says a search found nothing, and it can be saved as evidence.</p>"}, {"id": "read", "t": "Reading a record", "h": "<p>Read the whole record, including the small print.</p>\n<ul><li>Who gave the information? Registers name an <b>informant</b>.</li><li>Who signed it, and when?</li><li>Do the ages, dates and places fit the other records?</li><li>Read the notes at the bottom. Registrars, enumerators and clerks often wrote down what they noticed.</li></ul>\n<p>Use the zoom buttons above the record to read fine detail. Every record has a <b>Save to matter</b> button.</p>"}, {"id": "evidence", "t": "Saving evidence", "h": "<p><b>Save to matter</b> puts a record in your evidence register (the Evidence tab of the matter). Save the records you rely on, and nothing you don't.</p>\n<p>On the Ruling tab you attach saved records to each finding. Each finding takes <b>four attachments at most</b>, and attaching records that have nothing to do with it counts against you. Choose what proves the point.</p>"}, {"id": "dna", "t": "DNA results", "h": "<p>The DNA page shows a kit's closest matches and how much DNA each shares, measured in centimorgans (cM). Read <b>who</b> the matches are as well as how much they share. Two people can share the same amount for different reasons.</p>"}, {"id": "lab", "t": "The photo lab", "h": "<p>The photo lab compares two photographs you have opened on Bloodlines. Choose both, then click each permanent mark you can see on the face, such as a scar or a mole. Press <b>Certify comparison</b>.</p>\n<p>A result is positive only when <b>two or more marks</b> match on both photos. One mark is not enough, because a mole can run in a family. A positive result counts as one identifying document.</p>"}, {"id": "hand", "t": "The handwriting examiner", "h": "<p>The handwriting examiner compares the signatures on two documents you have opened. It certifies whether the same hand wrote both. A positive result counts as one identifying document, but only when the hand is the one being identified.</p>"}, {"id": "law", "t": "The law library", "h": "<p>The law library holds the Succession Act and the Nocturnal Accord of 1888. The firm's rule is that if any party turns out not to be strictly human, the Accord decides the matter. Read every article. Save the provisions you rely on, the same way you save a record.</p>"}, {"id": "ruling", "t": "Filing a ruling", "h": "<p>On the Ruling tab, answer each of the five findings and attach your evidence, then file. The partners accept or reject each finding separately.</p>\n<ul><li>Accepted findings lock in.</li><li>After your first filing you only see which findings failed. From the second filing you also get a nudge on each.</li><li>You have <b>three filings</b>. After that the file goes to someone else.</li></ul>\n<p>Your result is graded by filings used: A for one, B for two, C for three. A minus sign means you relied on a hint from someone else's tree.</p>"}, {"id": "hints", "t": "Hints from other trees", "h": "<p>A hint marked with a red drop comes from a public member tree. Anyone can make one, including the people you are investigating. Check who owns the tree and when it was made. Save the record behind a hint, not the hint.</p>"}, {"id": "think", "t": "Rules of thumb", "h": "<ul><li>Dates have to fit. People are not parents before they are born.</li>\n<li>Ask who benefits from a record, and who wrote it.</li>\n<li>A record that should exist and does not is a clue.</li>\n<li>Two matching facts are stronger than one. One matching fact might be chance or family.</li>\n<li>If a person is hard to find in the records, ask why.</li>\n<li>A neat story is not evidence. Records are.</li></ul>"}, {"id": "gloss", "t": "Glossary", "h": "<dl class=\"gloss\"><dt>Matter</dt><dd>A case file at the firm. This one is 2025-0417.</dd>\n<dt>Finding</dt><dd>One question you must answer, with evidence.</dd>\n<dt>Filing</dt><dd>One submission of all your findings to the partners. You get three.</dd>\n<dt>Informant</dt><dd>The person who gave a registrar the details.</dd>\n<dt>Enumerator</dt><dd>The person who collected census forms.</dd>\n<dt>Nil return</dt><dd>A certificate that a search found no record.</dd>\n<dt>Centimorgan (cM)</dt><dd>The unit of shared DNA. More means closer.</dd>\n<dt>Probate</dt><dd>Settling a dead person's estate.</dd>\n<dt>Intestate</dt><dd>Dying without a valid will.</dd>\n<dt>The Accord</dt><dd>The Nocturnal Accord 1888, which governs estates where a party is not strictly human.</dd></dl>"}];

const TRAIN = [
 {t:'Read the brief',d:'Open the first email from R. Ashgrove.',done:()=>S.read.includes('m1'),go:['mail','inbox/m1']},
 {t:'Search for a name',d:'Try one of the four names in the brief.',done:()=>!!S.flags.t_search,go:['bl','search']},
 {t:'Open a record',d:'Read it. Who made it, and who does it name?',done:()=>S.viewed.length>0,go:['bl','search']},
 {t:'Add your first link to the tree',d:'Use the Build your tree panel on a record page. A link the record shows is drawn solid; any other is dashed.',done:()=>S.tree.links.length>0,go:['bl','tree']},
 {t:'Save a record to the matter',d:'Use Save to matter on a record you would rely on.',done:()=>S.pins.length>0,go:['bl','search']},
 {t:'Certify a photo comparison',d:'Open two photographs first, then use the photo lab.',done:()=>Object.keys(S.reports).some(k=>k.startsWith('cmp:')),go:['net','matter/lab']},
 {t:'Cite a provision from the law library',d:'Read the articles, then cite the ones you rely on.',done:()=>S.pins.some(p=>p.startsWith('law')),go:['net','law']},
 {t:'File a ruling',d:'Answer the findings, attach your evidence, and file.',done:()=>S.attempts>0,go:['net','matter/ruling']}
];
function trainingBox(){
  const n = TRAIN.filter(s=>s.done()).length;
  if(S.flags.hideTraining) return `<div class="box"><div class="bh"><h2>Training</h2><span style="color:var(--nt-muted);font-size:13px">${n} of ${TRAIN.length}</span></div><div class="bb"><button class="lnk" data-a="training" data-v="show">Show the training list</button> · <button class="lnk" data-a="guide">Field guide</button></div></div>`;
  return `<div class="box"><div class="bh"><h2>Training</h2><span style="color:var(--nt-muted);font-size:13px">${n} of ${TRAIN.length}</span></div><div class="bb"><ol class="train">${TRAIN.map(s=>{ const dn=s.done(); return `<li class="${dn?'dn':''}"><span class="tk" aria-hidden="true">${dn?'✓':''}</span><span class="tx"><b>${s.t}</b><small>${s.d}</small></span>${dn?'':`<button class="lnk" data-a="go" data-t="${s.go[0]}" data-v="${s.go[1]}">Go</button>`}</li>`; }).join('')}</ol>
    <div style="display:flex;gap:14px;margin-top:10px"><button class="lnk" data-a="guide">Open the field guide</button><button class="lnk" data-a="training" data-v="hide">Hide this list</button></div></div></div>`;
}
function showGuide(sec){
  const g = GUIDE.find(x=>x.id===sec)||GUIDE[0], m = $('#modal'); S.flags.t_guide = true; S.flags.guideSec = g.id;
  m.innerHTML = `<div class="pv gd" role="dialog" aria-modal="true" aria-label="Field guide"><div class="pvh"><span class="fi" style="background:#3c5a78">?</span><div class="t"><b>Field guide</b><small>Ashgrove &amp; Pell · night roster</small></div><button class="nbtn sec sm" data-a="close">Close</button></div>
    <div class="pvb light"><div class="gwrap"><nav class="gnav" aria-label="Guide sections">${GUIDE.map(x=>`<button class="${x.id===g.id?'on':''}" data-a="guidesec" data-v="${x.id}">${x.t}</button>`).join('')}</nav><article class="gbody"><h2>${g.t}</h2>${g.h}</article></div></div></div>`;
  m.hidden = false; m.querySelector('[data-a="close"]').focus(); save();
}

/* ---- tree auto layout ----
   Reads PEOPLE and REL (Father, Mother, Child, Spouse, Claimed father) and works out who goes where.
   To add someone: give them a PEOPLE entry and a REL entry. No coordinates, no hand-drawn lines.
   GHOSTS are placeholder people who are not in PEOPLE (an unnamed mother). */
const GHOSTS = {unknown:{label:'Unknown',sub:'Mother of Cornelius',spouse:'ambrose',child:'cornelius'}};
const TREE = {w:200,h:74,couple:50,sib:50,pitch:146,pad:24};
function layoutTree(people=PEOPLE, rel=REL, ghosts=GHOSTS, style=null){
  const {w:NW,h:NH,couple:CG,sib:SG,pitch:PITCH,pad:PAD} = TREE;
  const ids = Object.keys(people), all = [...ids, ...Object.keys(ghosts)];
  const parents={}, spouses={}, kids={};
  all.forEach(i=>{parents[i]=[];spouses[i]=[];kids[i]=[];});
  const addP=(c,p,kind)=>{ if(c===p||!parents[c]||!parents[p]) return; if(!parents[c].some(x=>x.id===p)) parents[c].push({id:p,kind}); };
  const addS=(x,y)=>{ if(x===y||!spouses[x]||!spouses[y]) return; if(!spouses[x].includes(y)) spouses[x].push(y); if(!spouses[y].includes(x)) spouses[y].push(x); };
  ids.forEach(i=>(rel[i]||[]).forEach(([r,o])=>{
    if(r==='Father'||r==='Mother') addP(i,o,'solid');
    else if(r==='Claimed father') addP(i,o,'claimed');
    else if(r==='Child') addP(o,i,'solid');
    else if(r==='Spouse') addS(i,o);
  }));
  Object.entries(ghosts).forEach(([g,d])=>{ if(d.spouse) addS(g,d.spouse); if(d.child) addP(d.child,g,'solid'); });
  // children, in the order they are listed on the parent, then any others
  ids.forEach(i=>(rel[i]||[]).forEach(([r,o])=>{ if(r==='Child'&&kids[o]!==undefined&&!kids[i].includes(o)) kids[i].push(o); }));
  all.forEach(c=>parents[c].forEach(({id})=>{ if(!kids[id].includes(c)) kids[id].push(c); }));
  // generations: below parents, level with spouses, and ancestors with no parents sit just above their children
  const gen={}; all.forEach(i=>gen[i]=0);
  for(let it=0; it<500; it++){ let ch=false;
    all.forEach(c=>parents[c].forEach(({id})=>{ if(gen[c]<gen[id]+1){gen[c]=gen[id]+1;ch=true;} }));
    all.forEach(x=>spouses[x].forEach(y=>{ if(gen[x]<gen[y]){gen[x]=gen[y];ch=true;} }));
    all.forEach(r=>{ if(!parents[r].length&&kids[r].length){ const m=Math.min(...kids[r].map(k=>gen[k]))-1; if(gen[r]<m){gen[r]=m;ch=true;} } });
    if(!ch) break; }
  const minGen = Math.min(...all.map(i=>gen[i]));
  const pos={}, rows=[], seen=new Set();
  const yOf = g => PAD + (g-minGen)*PITCH;
  const place=(id,x)=>{ pos[id]=[x,yOf(gen[id])]; };
  // the oldest person with no parents who is not just someone's husband or wife starts the tree
  const born = i => { const m=(people[i]&&people[i].life||'').match(/\d{4}/); return m?+m[0]:9999; };
  const isInLaw = i => spouses[i].some(s=>parents[s].length>0);
  const roots = all.filter(i=>!ghosts[i]&&!parents[i].length&&!isInLaw(i)).sort((x,y)=>born(x)-born(y));
  const build=p=>{
    seen.add(p);
    const left=spouses[p].filter(s=>ghosts[s]), right=spouses[p].filter(s=>!ghosts[s]&&!seen.has(s));
    const row=[...left,p,...right]; row.forEach(r=>seen.add(r));
    const partners=[...left,...right];
    const cs=kids[p].filter(c=>!seen.has(c));
    const keyOf=c=>{ const o=parents[c].find(x=>x.kind==='solid'&&x.id!==p&&partners.includes(x.id)); return o?o.id:''; };
    cs.forEach(c=>seen.add(c));
    const order=[...partners,''];
    const kidsSorted=[]; order.forEach(k=>cs.filter(c=>keyOf(c)===k).forEach(c=>kidsSorted.push(c)));
    const children=kidsSorted.map(build);
    const unitW=row.length*NW+(row.length-1)*CG;
    const childW=children.length?children.reduce((s,c)=>s+c.w,0)+(children.length-1)*SG:0;
    return {id:p,row,children,unitW,childW,w:Math.max(unitW,childW)};
  };
  const assign=(n,xLeft)=>{
    const start=xLeft+(n.w-n.unitW)/2; n.row.forEach((r,i)=>place(r,start+i*(NW+CG))); rows.push(n.row);
    let cx=xLeft+(n.w-n.childW)/2; n.children.forEach(c=>{ assign(c,cx); cx+=c.w+SG; });
  };
  let cursor=0;
  roots.forEach(r=>{ if(seen.has(r)||kids[r].some(k=>seen.has(k))) return; const n=build(r); assign(n,cursor); cursor+=n.w+SG*2; });
  // in-laws' parents go above their child, shifted right if the row is already taken
  const rowFree=(g,x0,x1)=>!Object.keys(pos).some(k=>gen[k]===g&&pos[k][0]<x1+SG&&pos[k][0]+NW>x0-SG);
  for(let guard=0; guard<200; guard++){
    const q=Object.keys(pos).find(k=>!ghosts[k]&&parents[k].some(p=>p.kind==='solid'&&!pos[p.id]));
    if(!q) break;
    const ps=parents[q].filter(p=>p.kind==='solid'&&!pos[p.id]).map(p=>p.id);
    const unit=[...ps]; ps.forEach(p=>spouses[p].forEach(s=>{ if(!unit.includes(s)&&!pos[s]&&!ghosts[s]) unit.push(s); }));
    const g=gen[unit[0]], rw=unit.length*NW+(unit.length-1)*CG;
    let x0=pos[q][0]+NW/2-rw/2;
    while(!rowFree(g,x0,x0+rw)){ const hit=Object.keys(pos).filter(k=>gen[k]===g&&pos[k][0]<x0+rw+SG&&pos[k][0]+NW>x0-SG); x0=Math.max(...hit.map(k=>pos[k][0]+NW))+SG; }
    unit.forEach((u,i)=>place(u,x0+i*(NW+CG))); rows.push(unit);
  }
  // anyone left over goes in a row at the right
  all.filter(i=>!pos[i]).forEach(i=>{ const mx=Math.max(0,...Object.values(pos).map(p=>p[0]+NW)); place(i,mx+SG); rows.push([i]); });
  const minX=Math.min(...Object.values(pos).map(p=>p[0])), dx=PAD-minX;
  Object.keys(pos).forEach(k=>pos[k][0]+=dx);
  const W=Math.max(...Object.values(pos).map(p=>p[0]+NW))+PAD, H=Math.max(...Object.values(pos).map(p=>p[1]+NH))+PAD+30;
  // connectors
  const edges=[], cx=id=>pos[id][0]+NW/2, midY=id=>pos[id][1]+NH/2, botY=id=>pos[id][1]+NH;
  rows.forEach(row=>{ for(let i=0;i<row.length-1;i++){ const a=pos[row[i]],b=pos[row[i+1]]; if(a[1]===b[1]) edges.push({d:`M${a[0]+NW} ${a[1]+NH/2} H${b[0]}`,cls:style?style('couple',[row[i],row[i+1]],null):''}); } });
  const adjacent=(a,b)=>rows.some(r=>{ const i=r.indexOf(a),j=r.indexOf(b); return i>=0&&j>=0&&Math.abs(i-j)===1; });
  const labels=[];
  all.forEach(c=>{ if(!pos[c]) return;
    const top=pos[c][1], mid=top-(PITCH-NH)/2;
    const solid=parents[c].filter(p=>p.kind==='solid'&&pos[p.id]).map(p=>p.id);
    if(solid.length){
      let sx,sy;
      const pair=solid.length>1&&adjacent(solid[0],solid[1]);
      if(pair){ const l=pos[solid[0]][0]<pos[solid[1]][0]?solid[0]:solid[1], r=l===solid[0]?solid[1]:solid[0]; sx=(pos[l][0]+NW+pos[r][0])/2; sy=midY(l); }
      else { sx=cx(solid[0]); sy=botY(solid[0]); }
      edges.push({d:`M${sx} ${sy} V${mid} H${cx(c)} V${top}`,cls:style?style('child',solid,c):''});
    }
    parents[c].filter(p=>p.kind==='claimed'&&pos[p.id]).forEach(p=>{
      edges.push({d:`M${cx(p.id)} ${botY(p.id)} V${mid} H${cx(c)} V${top}`,cls:'dash'+(style?(' '+style('claimed',[p.id],c)):'')});
      labels.push({x:(cx(p.id)+cx(c))/2+6,y:mid-9,t:'claimed, no source'});
    });
  });
  return {pos,w:W,h:H,edges,labels,gen};
}

/* ---- what each record shows about who is related to whom ----
   parent: a is the parent of b. spouse: a and b are married. claimed: the record says a is b's parent, unproven. */
const CLAIMS = [];
const P_=(a,b,recs)=>CLAIMS.push({t:'parent',a,b,recs}), S_=(a,b,recs)=>CLAIMS.push({t:'spouse',a,b,recs}), C_=(a,b,recs)=>CLAIMS.push({t:'claimed',a,b,recs});
P_('v1410','v1445',['will1509']); P_('v1445','v1480',['will1509']); P_('v1480','v1515',['will1577']); P_('v1515','v1550',['will1577','bapt1550']);
P_('v1550','v1585',['marr1612']); P_('v1585','v1620',['bapt1620']); P_('v1620','v1655',['marr1682']); P_('v1655','v1688',['bapt1688']);
P_('v1688','v1720',['bapt1720']); P_('v1720','samuel',['bapt1751']); P_('samuel','thomasv',['bapt1789']); P_('thomasv','josiah',['marr1850']);
P_('josiah','ambrose',['birth1857','census1861','census1881','marr1886']); P_('hannah','ambrose',['birth1857','census1861','census1881']);
P_('william','eliza',['birth1861','marr1886']); P_('ann','eliza',['birth1861']);
P_('ambrose','harriet',['birth1888','census1891','census1911','photo1912']); P_('eliza','harriet',['birth1888','census1891']);
P_('ambrose','cornelius',['birth1934']); P_('harriet','thomas',['birth1920']); P_('arthur','thomas',['birth1920']); P_('thomas','margaret',['birth1951']);
P_('cornelius','desmond',['death1994']); P_('desmond','julian',['birth1993']); C_('cornelius','daphne',['letterDaphne']);
S_('josiah','hannah',['marr1850','census1861','census1881']); S_('ambrose','eliza',['marr1886','census1891']);
S_('harriet','arthur',['photo1912','birth1920']); S_('william','ann',['birth1861']);
const STARTERS = ['cornelius','julian','margaret','daphne'];
const NAMEOF = id => (PEOPLE[id]?PEOPLE[id].name:id).replace(/\s*\(.*\)/,'');
/* people named in a record, for the Build your tree panel: those in its relationship claims, plus those it names without one */
const EXTRA_IN = {hospital1888:['ambrose'],news1888:['ambrose','eliza'],diary1888:['eliza','ambrose'],photo1875:['ambrose'],photo1889:['ambrose'],news1889:['josiah','ambrose'],
  trust1934:['ambrose','cornelius'],death1934:['ambrose'],news1934:['ambrose'],licence1972:['cornelius'],photo1962:['cornelius'],licence2019:['julian'],will2024:['cornelius','julian'],
  death2025:['cornelius','julian'],news2025:['cornelius','julian'],letterJulian:['julian'],letterMargaret:['margaret','harriet'],birth1966:['daphne'],news1994:['desmond'],
  nilDesmond:['desmond'],census1911:['ambrose','harriet'],census1921:['ambrose'],photo1950:['thomas'],birth1888:['ambrose','eliza','harriet'],rolls:['cornelius','julian'],
  marine2025:['julian','cornelius'],funeral2025:['julian','cornelius'],hintOfficial:['julian','cornelius']};
const peopleIn = rec => { const s=[]; CLAIMS.forEach(c=>{ if(c.recs.includes(rec)) [c.a,c.b].forEach(x=>{ if(!s.includes(x)) s.push(x); }); }); (EXTRA_IN[rec]||[]).forEach(x=>{ if(!s.includes(x)) s.push(x); }); return s; };
const REL_LABEL = {parent:'is the parent of',spouse:'is married to',same:'is the same person as',claimed:'is claimed to be the parent of'};
const sameLink = (l,t,a,b) => l.t===t && ((l.a===a&&l.b===b) || ((t==='spouse'||t==='same')&&l.a===b&&l.b===a));
/* events a record can establish for a person */
const EVENT_DEFS = {
  hospital1888:[{p:'ambrose',k:'turned',date:'1888-02-14'}], news1888:[{p:'ambrose',k:'turned',date:'1888-02-14'}], diary1888:[{p:'ambrose',k:'turned',date:'1888-02-14'}],
  nilDesmond:[{p:'desmond',k:'nobirth'}],
  death1934:[{p:'ambrose',k:'nobody'}], inquest1934:[{p:'ambrose',k:'nobody'}], news1934:[{p:'ambrose',k:'nobody'}],
  marine2025:[{p:'cornelius',k:'nobody'}], funeral2025:[{p:'cornelius',k:'nobody'}],
  death1994:[{p:'desmond',k:'nobody'}], news1994:[{p:'desmond',k:'nobody'}],
  dnaDaphne:[{p:'daphne',k:'marsh'}]
};
const EVENT_LABEL = {turned:'was attacked and turned',nobirth:'has no birth record',nobody:'died with no body seen',marsh:'shares DNA with Margaret through Marsh relatives'};
/* whose photographs and signatures are whose: lets a certified comparison prove two people are one */
const PHOTO_OWNER = {photo1875:'ambrose',photo1889:'ambrose',photo1912:'ambrose',photo1962:'cornelius',licence1972:'cornelius',licence2019:'julian'};
const SIGN_OWNER = {'A. Vane':'ambrose','C. Vane':'cornelius','J. Vane':'julian'};
const docOwner = id => PHOTO_OWNER[id] || (SIGNED[id]?SIGN_OWNER[SIGNED[id][0]]:null) || null;
function supportedBy(l, rec){
  if(l.t==='same'){ const r=S.reports[rec]; if(!r||!r.ok) return false; const o=[docOwner(r.a),docOwner(r.b)]; return o[0]&&o[1]&&((o[0]===l.a&&o[1]===l.b)||(o[0]===l.b&&o[1]===l.a)); }
  return CLAIMS.some(c=>c.t===l.t && c.recs.includes(rec) && sameLink(c,l.t,l.a,l.b));
}
const linkStatus = l => l.recs.some(r=>supportedBy(l,r)) ? 'proven' : 'unproven';
function tryLink(a,t,b,rec){
  if(!a||!b||a===b) return {ok:false,msg:'Choose two different people.'};
  if(!PEOPLE[a]||!PEOPLE[b]) return {ok:false,msg:'Choose two people.'};
  const have = S.tree.links.find(l=>sameLink(l,t,a,b));
  if(have){
    if(rec && !have.recs.includes(rec)){ have.recs.push(rec); const st=linkStatus(have); log(`Added a source to a link: ${NAMEOF(a)} and ${NAMEOF(b)}`); return {ok:true,link:have,status:st,msg:st==='proven'?'Already in your tree. That record proves it.':'Already in your tree. That record does not prove it.'}; }
    return {ok:false,msg:'Already in your tree.'};
  }
  [a,b].forEach(x=>{ if(!S.tree.people.includes(x)) S.tree.people.push(x); });
  const l = {id:++S.tree.nid,t,a,b,recs:rec?[rec]:[]}; S.tree.links.push(l);
  const st = linkStatus(l);
  log(`Added to tree${st==='proven'?'':' (unproven)'}: ${NAMEOF(a)} ${REL_LABEL[t]} ${NAMEOF(b)}`);
  refreshLayout();
  const fl = FLAGS.filter(f=>f.links.includes(l.id)&&f.sev!=='note'&&f.sev!=='good');
  let msg = st==='proven' ? `Added to your tree: ${NAMEOF(a)} ${REL_LABEL[t]} ${NAMEOF(b)}.` : `Added, but no record you attached shows it. It is drawn as unproven.`;
  if(fl.length) msg += ' Check the dates: '+fl[0].text;
  return {ok:true,link:l,status:st,msg,flags:fl};
}
function removeLink(id){ const l=S.tree.links.find(x=>x.id===id); if(!l) return false; S.tree.links=S.tree.links.filter(x=>x.id!==id);
  if(l.recs.includes('hintOfficial') && pinned('hintOfficial')) S.pins=S.pins.filter(x=>x!=='hintOfficial');
  log(`Removed from tree: ${NAMEOF(l.a)} ${REL_LABEL[l.t]} ${NAMEOF(l.b)}`); return true; }
function tryEvent(p,k,rec){
  const def=(EVENT_DEFS[rec]||[]).find(e=>e.p===p&&e.k===k);
  if(!def) return {ok:false,msg:"This record doesn't give that."};
  if(S.tree.events.some(e=>e.p===p&&e.k===k)) return {ok:false,msg:'Already in your tree.'};
  if(!S.tree.people.includes(p)) S.tree.people.push(p);
  S.tree.events.push({p,k,date:def.date||null,rec}); log(`Recorded: ${NAMEOF(p)} ${EVENT_LABEL[k]}`); refreshLayout();
  return {ok:true,msg:`Recorded in your tree: ${NAMEOF(p)} ${EVENT_LABEL[k]}${def.date?' on '+new Date(def.date+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}):''}.`};
}
/* exact dates where the records give them, years otherwise */
const DATES = {
  v1410:['1410','1471'],v1445:['1445','1509'],v1480:['1480','1544'],v1515:['1515','1577'],v1550:['1550','1612'],v1585:['1585','1650'],v1620:['1620','1688'],v1655:['1655','1719'],v1688:['1688','1750'],v1720:['1720','1790'],
  samuel:['1751-02-27','1822'],thomasv:['1789-04-04','1858'],josiah:['1824-01-02','1889-03-08'],hannah:['1828-01-15','1901'],william:['1830','1899'],ann:['1832','1910'],
  ambrose:['1857-02-09','1934-02-01'],eliza:['1861-01-20','1902'],harriet:['1888-06-04','1960'],arthur:['1884','1951'],cornelius:['1934-03-02','2025-03-02'],
  thomas:['1920-03-07','1999'],margaret:['1951-07-22',null],desmond:['1961','1994-10-30'],daphne:['1966-08-09',null],julian:['1993-01-14',null]
};
const toNum = s => { const m=String(s).match(/^(\d{4})(?:-(\d{2})-(\d{2}))?$/); if(!m) return null; const y=+m[1]; if(!m[2]) return y+0.5; return y+((+m[2]-1)*30.4375+ +m[3])/365.25; };
const bornN = id => DATES[id]&&DATES[id][0]?toNum(DATES[id][0]):null;
const diedN = id => DATES[id]&&DATES[id][1]?toNum(DATES[id][1]):null;
const NOW_N = 2026.75;
const yr = n => Math.floor(n);
const SEVRANK = {impossible:4,law:3,unusual:2,note:1,good:0};
let FLAGS = [], LSTAT = {};
function clusterOf(){ // identity clusters from every "same person" link, proven or not
  const par={}; const f=x=>par[x]===undefined||par[x]===x?(par[x]=x):(par[x]=f(par[x]));
  S.tree.links.filter(l=>l.t==='same').forEach(l=>{ par[f(l.a)]=f(l.b); });
  const cl={}; S.tree.people.forEach(p=>{ const r=f(p); (cl[r]=cl[r]||[]).push(p); });
  const of={}; Object.values(cl).forEach(m=>m.forEach(p=>of[p]=m)); return of;
}
function computeFlags(){
  const flags=[]; const L=S.tree.links, cl=clusterOf();
  const push=(sev,text,links,people)=>flags.push({sev,text,links:links||[],people:people||[]});
  const earliest = m => Math.min(...m.map(bornN).filter(x=>x!==null));
  const turned = S.tree.events.filter(e=>e.k==='turned').map(e=>({m:cl[e.p]||[e.p],n:toNum(e.date)}));
  L.filter(l=>l.t==='parent'||l.t==='claimed').forEach(l=>{
    const P=l.a, C=l.b, cb=bornN(C); if(cb===null) return;
    const sex=SEX[P]==='f'?'mother':'father';
    const members = cl[P]||[P];
    const own=bornN(P), merged = members.length>1 ? earliest(members) : own;
    const check=(pb,viaMerge)=>{
      if(pb===null||!isFinite(pb)) return;
      const age=cb-pb, who = viaMerge?`If ${NAMEOF(P)} is ${members.filter(x=>x!==P).map(NAMEOF).join(' and ')} (born ${yr(pb)}), he`:NAMEOF(P);
      if(viaMerge&&age<=0.05) return;
      if(age<=0.05) push('impossible',`${NAMEOF(P)} (born ${yr(pb)}) can't be the parent of ${NAMEOF(C)} (born ${yr(cb)}): the parent was not born first.`,[l.id],[P,C]);
      else if(age<13) push('impossible',`${who} would have been only ${Math.floor(age)} when ${NAMEOF(C)} was born.`,[l.id],[P,C]);
      else if(sex==='mother'&&age>50) push('impossible',`${who} would have been ${Math.floor(age)} when ${NAMEOF(C)} was born.`,[l.id],[P,C]);
      else if(sex==='father'&&age>80) push('impossible',`${who} would have been ${Math.floor(age)} when ${NAMEOF(C)} was born.`,[l.id],[P,C]);
      else if(sex==='father'&&age>65) push('unusual',`${who} would have been ${Math.floor(age)} when ${NAMEOF(C)} was born.`,[l.id],[P,C]);
    };
    check(own,false); if(members.length>1&&merged<own-1) check(merged,true);
    const pd=diedN(P);
    if(pd!==null){ const gap=cb-pd;
      if(gap>0.05){ if(sex==='mother') push('impossible',`${NAMEOF(P)} died in ${yr(pd)}, before ${NAMEOF(C)} was born in ${yr(cb)}.`,[l.id],[P,C]);
        else if(gap>0.85) push('impossible',`${NAMEOF(P)} died ${Math.round(gap)} year${Math.round(gap)>1?'s':''} before ${NAMEOF(C)} was born.`,[l.id],[P,C]);
        else push('note',`${NAMEOF(C)} was born ${Math.max(1,Math.round(gap*365))} days after ${NAMEOF(P)} died.`,[l.id],[P,C]); } }
    // law: a child born long after a turning cannot be his issue
    turned.forEach(t=>{ if(!t.m.includes(P)) return;
      const weeks=(cb-t.n)*52.18;
      if(weeks>40) push('law',`${NAMEOF(C)} was born ${Math.round(cb-t.n)} years after the turning. Under Accord Art. 3 a child born more than forty weeks after cannot be his issue.`,[l.id],[P,C]);
      else push('good',`${NAMEOF(C)} was born ${weeks<0?'before':'within forty weeks of'} the turning: begotten before it, so the issue of the blood (Accord Art. 3).`,[l.id],[P,C]); });
  });
  L.filter(l=>l.t==='spouse').forEach(l=>{
    const a1=bornN(l.a),b1=bornN(l.b); if(a1===null||b1===null) return;
    const da=diedN(l.a)??NOW_N, db=diedN(l.b)??NOW_N;
    if(Math.min(da,db)<Math.max(a1,b1)) push('impossible',`${NAMEOF(l.a)} and ${NAMEOF(l.b)} were never alive at the same time.`,[l.id],[l.a,l.b]);
    else if(Math.abs(a1-b1)>40) push('unusual',`${NAMEOF(l.a)} and ${NAMEOF(l.b)} were born ${Math.round(Math.abs(a1-b1))} years apart.`,[l.id],[l.a,l.b]);
  });
  L.filter(l=>l.t==='same').forEach(l=>{
    const a1=bornN(l.a),b1=bornN(l.b); if(a1===null||b1===null) return;
    const da=diedN(l.a)??NOW_N, db=diedN(l.b)??NOW_N;
    const overlap=Math.min(da,db)-Math.max(a1,b1);
    if(overlap>1) push('unusual',`If ${NAMEOF(l.a)} is ${NAMEOF(l.b)}, he was alive as two people at once for ${Math.round(overlap)} years.`,[l.id],[l.a,l.b]);
    else { const first=a1<b1?l.a:l.b, second=first===l.a?l.b:l.a; const gap=bornN(second)-(diedN(first)??9999);
      if(gap>=-0.05&&gap<1) push('note',`${NAMEOF(second)}'s life begins ${Math.max(1,Math.round(gap*365))} days after ${NAMEOF(first)}'s ends.`,[l.id],[l.a,l.b]); }
  });
  // two fathers or two mothers
  S.tree.people.forEach(c=>{ const ps=L.filter(l=>l.t==='parent'&&l.b===c).map(l=>l.a);
    ['f','m'].forEach(s=>{ const same=ps.filter(p=>SEX[p]===s); if(same.length>1) push('unusual',`${NAMEOF(c)} has ${same.length} ${s==='m'?'fathers':'mothers'} in your tree.`,L.filter(l=>l.t==='parent'&&l.b===c&&SEX[l.a]===s).map(l=>l.id),[c,...same]); }); });
  // loops: someone their own ancestor, counting identity links
  const rep=p=>(cl[p]||[p])[0], kids={};
  L.filter(l=>l.t==='parent').forEach(l=>{ (kids[rep(l.a)]=kids[rep(l.a)]||[]).push({to:rep(l.b),id:l.id}); });
  const seen=new Set(), stack=new Set(); const loopIds=new Set();
  const dfs=(n,path,nodes)=>{ if(stack.has(n)){ const i=nodes.indexOf(n); path.slice(i).forEach(e=>loopIds.add(e)); return; } if(seen.has(n)) return; seen.add(n); stack.add(n);
    (kids[n]||[]).forEach(e=>{ dfs(e.to,[...path,e.id],[...nodes,n]); }); stack.delete(n); };
  Object.keys(kids).forEach(n=>dfs(n,[],[]));
  if(loopIds.size){ const ids=[...loopIds]; const ppl=[...new Set(ids.flatMap(i=>{const l=L.find(x=>x.id===i);return l?[l.a,l.b]:[];}))];
    push('impossible',`Someone in your tree would be their own ancestor: ${ppl.slice(0,3).map(NAMEOF).join(', ')}${ppl.length>3?' and others':''}.`,ids,ppl); }
  FLAGS = flags.sort((x,y)=>SEVRANK[y.sev]-SEVRANK[x.sev]);
  LSTAT = {}; L.forEach(l=>{ const fs=FLAGS.filter(f=>f.links.includes(l.id)); LSTAT[l.id]={status:linkStatus(l),worst:fs.length?fs[0].sev:null}; });
}
const linkOf = (t,a,b) => S.tree.links.find(l=>sameLink(l,t,a,b));
function edgeStyle(kind,ps,c){
  const ids=[]; if(kind==='couple'){ const l=linkOf('spouse',ps[0],ps[1]); if(l) ids.push(l.id); }
  else ps.forEach(p=>{ const l=linkOf(kind==='claimed'?'claimed':'parent',p,c); if(l) ids.push(l.id); });
  const st=ids.map(i=>LSTAT[i]).filter(Boolean); const cls=[];
  if(st.some(s=>s.status==='unproven')) cls.push('unp');
  if(st.some(s=>s.worst==='impossible'||s.worst==='law')) cls.push('bad'); else if(st.some(s=>s.worst==='unusual')) cls.push('odd');
  return cls.join(' ');
}
function revealAllTree(){
  S.tree.people = Object.keys(PEOPLE); S.tree.nid = 0; S.tree.links = CLAIMS.map(c=>({id:++S.tree.nid,t:c.t,a:c.a,b:c.b,recs:[c.recs[0]]}));
  const mk=(a,b)=>{ const id='cmp:'+[a,b].sort().join('-'); S.reports[id]={a,b,shared:['scar','mole'],ok:true}; REC[id]=cmpRec(id); return id; };
  S.tree.links.push({id:++S.tree.nid,t:'same',a:'ambrose',b:'cornelius',recs:[mk('photo1889','licence1972')]},{id:++S.tree.nid,t:'same',a:'cornelius',b:'julian',recs:[mk('licence1972','licence2019')]});
  S.tree.events = [{p:'ambrose',k:'turned',date:'1888-02-14',rec:'hospital1888'},{p:'desmond',k:'nobirth',date:null,rec:'nilDesmond'},{p:'ambrose',k:'nobody',date:null,rec:'death1934'},{p:'cornelius',k:'nobody',date:null,rec:'funeral2025'},{p:'desmond',k:'nobody',date:null,rec:'death1994'},{p:'daphne',k:'marsh',date:null,rec:'dnaDaphne'}];
}
function treeData(){
  const people={}, rel={}; S.tree.people.forEach(id=>{ people[id]=PEOPLE[id]; rel[id]=[]; });
  const kids={}; const reaches=(from,to)=>{ const st=[from],seen=new Set(); while(st.length){ const n=st.pop(); if(n===to) return true; if(seen.has(n)) continue; seen.add(n); (kids[n]||[]).forEach(k=>st.push(k)); } return false; };
  S.tree.links.forEach(l=>{
    if(!rel[l.a]||!rel[l.b]) return;
    if(l.t==='parent'||l.t==='claimed'){ if(l.a===l.b||reaches(l.b,l.a)) return; (kids[l.a]=kids[l.a]||[]).push(l.b); }
    if(l.t==='parent'){ rel[l.b].push([SEX[l.a]==='m'?'Father':'Mother',l.a]); rel[l.a].push(['Child',l.b]); }
    else if(l.t==='spouse'){ rel[l.a].push(['Spouse',l.b]); rel[l.b].push(['Spouse',l.a]); }
    else if(l.t==='claimed'){ rel[l.b].push(['Claimed father',l.a]); }
  });
  const ghosts = S.tree.links.some(l=>l.t==='parent'&&l.a==='ambrose'&&l.b==='cornelius') ? {unknown:GHOSTS.unknown} : {};
  return {people,rel,ghosts};
}
let LAY = null, GH = {}, POS = {};
function refreshLayout(){ computeFlags(); const t=treeData(); GH=t.ghosts; LAY=layoutTree(t.people,t.rel,t.ghosts,edgeStyle); POS=Object.fromEntries(Object.entries(LAY.pos).filter(([k])=>PEOPLE[k])); }
const knownRecs = id => PEOPLE[id].recs.filter(r=>S.viewed.includes(r)||pinned(r));
const HINT_PERSON = {hintOfficial:'julian',h2:'ambrose',h3:'ambrose',h4:'harriet'};
const visibleHints = () => HINTS.filter(h=>S.tree.people.includes(HINT_PERSON[h.id]));
const HIDDEN_FACTS = /^(Parents?|Father|Mother|Married|Spouse|Relationship|Claimed father)/i;
/* evidence a player can cite for a link: any record opened, anything saved, any certified report */
function evidenceChoices(){ const ids=[...new Set([...S.viewed,...S.pins,...Object.keys(S.reports)])].filter(id=>REC[id]&&!REC[id].hidden||id.startsWith('cmp:')||id.startsWith('sig:')); return ids; }
const evOptions = sel => `<option value="">No record (just my theory)</option>${evidenceChoices().map(id=>`<option value="${id}" ${id===sel?'selected':''}>${esc(REC[id].title)}</option>`).join('')}`;
const peopleOpts = (named,others) => `<option value="">Choose a person</option>${named&&named.length?`<optgroup label="Named in this record">${named.map(x=>`<option value="${x}">${NAMEOF(x)}</option>`).join('')}</optgroup>`:''}${others.length?`<optgroup label="${named&&named.length?'Already in your tree':'In your tree'}">${others.map(x=>`<option value="${x}">${NAMEOF(x)} (${PEOPLE[x].life})</option>`).join('')}</optgroup>`:''}`;
const REL_OPTS = `<option value="parent">is the parent of</option><option value="spouse">is married to</option><option value="same">is the same person as</option><option value="claimed">is claimed to be the parent of</option>`;
function treePanel(rec){
  const named = peopleIn(rec); const evDefs = EVENT_DEFS[rec]||[];
  if(!named.length && !evDefs.length) return '';
  /* the event form shows on every record with people, so its presence gives nothing away */
  const tp = S.tree.people, others = tp.filter(x=>!named.includes(x));
  const done = S.tree.links.filter(l=>l.recs.includes(rec)).length;
  const evForm = (named.length||evDefs.length) ? `<form class="sform" data-form="event" data-rec="${rec}" style="margin-top:14px;padding-top:12px;border-top:1px dashed var(--bl-line)"><label>Record an event for<select data-ev="p"><option value="">Choose a person</option>${[...new Set([...named,...tp])].map(x=>`<option value="${x}">${NAMEOF(x)}</option>`).join('')}</select></label>
    <label>What happened<select data-ev="k">${Object.entries(EVENT_LABEL).map(([k,l])=>`<option value="${k}">${l}</option>`).join('')}</select></label><button class="bbtn sec">Record event</button></form>` : '';
  return `<div class="panel tpanel"><div class="ph"><h2>Build your tree</h2></div><div class="pb"><p class="muted" style="margin:0 0 10px;font-size:13.5px">Say who this record connects and how. You can put any link on the tree. One this record shows is drawn solid; any other is drawn as unproven, and the tree will flag dates that don't work.${done?` ${done} link${done>1?'s':''} from this record already added.`:''}</p>
    ${named.length||tp.length?`<form class="sform" data-form="link" data-rec="${rec}"><label>Person<select data-lk="a">${peopleOpts(named,others)}</select></label>
    <label>How<select data-lk="t">${REL_OPTS}</select></label>
    <label>Other person<select data-lk="b">${peopleOpts(named,others)}</select></label>
    <button class="bbtn">Add to tree</button></form>`:''}${evForm}</div></div>`;
}
/* ---- what the tree must show for each finding ---- */
const INVOLVED = {F1:['julian','cornelius','ambrose'],F2:['cornelius','ambrose'],F3:['desmond','julian','cornelius'],F4:['daphne','cornelius'],F5:['margaret','thomas','harriet','ambrose']};
function provenConnected(x,y){
  const adj={}; S.tree.links.filter(l=>l.t==='same'&&LSTAT[l.id]&&LSTAT[l.id].status==='proven').forEach(l=>{ (adj[l.a]=adj[l.a]||[]).push(l.b); (adj[l.b]=adj[l.b]||[]).push(l.a); });
  const seen=new Set([x]), st=[x]; while(st.length){ const n=st.pop(); if(n===y) return true; (adj[n]||[]).forEach(m=>{ if(!seen.has(m)){ seen.add(m); st.push(m); } }); } return false;
}
const provenLink = (t,x,y) => { const l=linkOf(t,x,y); return !!l && !!LSTAT[l.id] && LSTAT[l.id].status==='proven'; };
const hasEvent = (p,k) => S.tree.events.some(e=>e.p===p&&e.k===k);
function treeChecks(F){
  computeFlags(); const c=[]; const add=(ok,text)=>c.push({ok,text});
  if(F==='F1'){ add(provenConnected('julian','cornelius'),'A certified comparison proves Julian Vane and Cornelius Vane are one man'); add(provenConnected('cornelius','ambrose'),'A certified comparison proves Cornelius Vane and Ambrose Vane are one man'); }
  if(F==='F2'){ add(hasEvent('cornelius','nobody'),'Cornelius Vane is recorded as dying with no body seen'); add(hasEvent('ambrose','nobody'),'Ambrose Vane is recorded as dying with no body seen'); }
  if(F==='F3'){ add(!!linkOf('parent','desmond','julian'),"Desmond Vane is in your tree as Julian's father"); add(hasEvent('desmond','nobirth'),'A certified nil return shows Desmond has no birth record'); add(hasEvent('desmond','nobody'),'Desmond is recorded as dying with no body seen'); }
  if(F==='F4'){ add(hasEvent('ambrose','turned'),'The date Ambrose was turned is recorded in your tree'); add(hasEvent('daphne','marsh'),"Daphne's DNA is recorded as matching Margaret through Marsh relatives"); add(!!(linkOf('claimed','cornelius','daphne')||linkOf('parent','cornelius','daphne')),'Daphne is linked to Cornelius as his claimed daughter'); }
  if(F==='F5'){ add(provenLink('parent','ambrose','harriet')&&provenLink('parent','harriet','thomas')&&provenLink('parent','thomas','margaret'),'Margaret is linked to Ambrose through Thomas and Harriet, every link proven'); add(hasEvent('ambrose','turned'),'The date Ambrose was turned is recorded in your tree'); }
  const inv=INVOLVED[F]; const bad=S.tree.links.filter(l=>(inv.includes(l.a)||inv.includes(l.b))&&LSTAT[l.id]&&LSTAT[l.id].status==='unproven');
  add(bad.length===0, bad.length?`Your tree has ${bad.length} unproven link${bad.length>1?'s':''} among these people. Prove ${bad.length>1?'them':'it'} or remove ${bad.length>1?'them':'it'}`:'No unproven links among these people');
  return c;
}
const treeOk = F => treeChecks(F).every(x=>x.ok);

function blTree(){
  const pf={}; FLAGS.filter(f=>f.sev!=='good'&&f.sev!=='note').forEach(f=>[...new Set(f.people)].forEach(p=>{ (pf[p]=pf[p]||[]).push(f.text); }));
  const nodes = Object.entries(POS).map(([id,[x,y]])=>{
    const p = PEOPLE[id];
    return `<button class="tnode ${SEX[id]} ${p.tag==='Disputed'?'dis':''} ${S.sel===id?'sel':''}" style="left:${x}px;top:${y}px" data-a="sel" data-v="${id}">
      <span class="ava">${avatar(id)}</span><span style="min-width:0"><b>${p.name}</b><small>${p.life}</small></span>${HINT_OF[id]?LEAF:''}${p.tag?`<span class="flag">${p.tag}</span>`:''}${pf[id]?`<span class="tflag" title="${esc(pf[id].join(' '))}">⚠ ${pf[id].length}</span>`:''}</button>`;}).join('');
  const ghosts = Object.entries(GH).map(([id,g])=>`<div class="tnode u" style="left:${LAY.pos[id][0]}px;top:${LAY.pos[id][1]}px;width:200px;opacity:.75;cursor:default"><span class="ava">?</span><span><b>${g.label}</b><small>${g.sub}</small></span></div>`).join('');
  const arcs = S.tree.links.filter(l=>l.t==='same'&&LAY.pos[l.a]&&LAY.pos[l.b]).map(l=>{ const A=LAY.pos[l.a],B=LAY.pos[l.b], ax=A[0],ay=A[1]+TREE.h/2,bx=B[0],by=B[1]+TREE.h/2, off=Math.max(60,Math.abs(ay-by)*0.12+60), mx=Math.min(ax,bx)-off;
    return `<path class="idl ${LSTAT[l.id]&&LSTAT[l.id].status==='unproven'?'unp':''}" d="M${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx} ${by}"/>`; }).join('');
  const lines = `<svg class="lines" viewBox="0 0 ${LAY.w} ${LAY.h}" aria-hidden="true">${LAY.edges.map(e=>`<path ${e.cls?`class="${e.cls}" `:''}d="${e.d}"/>`).join('')}${arcs}</svg>`;
  const labels = LAY.labels.map(l=>`<span class="claimlbl" style="left:${l.x}px;top:${l.y}px">${l.t}</span>`).join('');
  const nflag = FLAGS.filter(f=>f.sev!=='good'&&f.sev!=='note').length, nunp = S.tree.links.filter(l=>LSTAT[l.id]&&LSTAT[l.id].status==='unproven').length;
  const ICON={impossible:'⛔',unusual:'⚠',note:'ℹ',law:'§',good:'✓'};
  const linkRows = [...S.tree.links].reverse().map(l=>{ const st=LSTAT[l.id]||{}; const src=l.recs.length?l.recs.map(r=>esc(REC[r]?REC[r].title:r)).join('; '):'no record';
    return `<li class="${st.status}"><span class="lt"><b>${NAMEOF(l.a)}</b> ${REL_LABEL[l.t]} <b>${NAMEOF(l.b)}</b><small>${st.status==='proven'?'Proven by':'Not shown by'}: ${src}</small></span><button class="lnk" data-a="unlink" data-v="${l.id}">Remove</button></li>`; }).join('');
  const evRows = S.tree.events.map(e=>`<li class="proven"><span class="lt"><b>${NAMEOF(e.p)}</b> ${EVENT_LABEL[e.k]}${e.date?' on '+new Date(e.date+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}):''}<small>Proven by: ${esc(REC[e.rec]?REC[e.rec].title:e.rec)}</small></span></li>`).join('');
  const tp = S.tree.people;
  const check = `<details class="tcheck" ${S.flags.tcClosed?'':'open'}><summary data-a="tcheck">Tree check: ${nflag} flag${nflag===1?'':'s'}, ${nunp} unproven link${nunp===1?'':'s'}</summary>
    <div class="tcgrid"><div><h3>Link two people</h3><p class="muted" style="margin:0 0 8px;font-size:13px">You can put any link on the tree. Pick a record that shows it, or none. A link no record shows is drawn dashed. The tree flags dates that don't work.</p>
      <form class="sform" data-form="link"><label>Person<select data-lk="a">${peopleOpts(null,tp)}</select></label><label>How<select data-lk="t">${REL_OPTS}</select></label><label>Other person<select data-lk="b">${peopleOpts(null,tp)}</select></label>
      <label>Shown by<select data-lk="ev">${evOptions('')}</select></label><button class="bbtn">Add to tree</button></form></div>
      <div><h3>Flags</h3>${FLAGS.length?`<ul class="flags">${FLAGS.map(f=>`<li class="${f.sev}"><span class="fi" aria-hidden="true">${ICON[f.sev]}</span><span>${esc(f.text)}</span></li>`).join('')}</ul>`:'<p class="muted" style="margin:0;font-size:13.5px">Nothing flagged. The dates in your tree work so far.</p>'}</div>
      <div><h3>Your links</h3>${linkRows||evRows?`<ul class="lks">${evRows}${linkRows}</ul>`:'<p class="muted" style="margin:0;font-size:13.5px">No links yet.</p>'}</div></div></details>`;
  const bare = !S.tree.links.length ? `<div class="treehint"><b>Your tree has four names and no links.</b> Open a record, work out who is related to whom, and add the links from the record page, or use the form below. Search a name to find records.</div>` : '';
  return `<div class="treebar"><div class="wrap">
    <span class="treename">Vane estate ${ic('chev')}</span>
    <div class="seg"><button class="on">Tree</button><button data-a="toastonly" data-msg="Family view isn't available for Professional trees">Family</button><button data-a="toastonly" data-msg="List view is coming soon">List</button></div>
    <div class="tree-tools"><select class="tsearch" data-find="1" aria-label="Find a person"><option value="">Find a person…</option>${Object.keys(POS).map(id=>`<option value="${id}">${PEOPLE[id].name}</option>`).join('')}</select>
    <button class="bbtn sec sm" data-a="toastonly" data-msg="Only the tree owner (R. Ashgrove) can invite people">${ic('share')}Share</button></div></div></div>
  ${bare}${check}<div class="canvas-wrap" id="cw"><div class="canvas" style="width:${LAY.w}px;height:${LAY.h}px;transform:scale(${S.tz});transform-origin:0 0">${lines}${ghosts}${nodes}${labels}</div>
    ${S.sel?drawer(S.sel):''}
    <div class="zoomctl"><button data-a="tz" data-v="1.1" aria-label="Zoom in">${ic('plus')}</button><button data-a="tz" data-v="0.9" aria-label="Zoom out">${ic('minus')}</button><button data-a="tz" data-v="0" aria-label="Reset zoom">${ic('fit')}</button></div>
  </div>`;
}
function drawer(id){
  const p = PEOPLE[id];
  return `<aside class="drawer"><div class="dh"><span class="ava">${avatar(id)}</span><div style="flex:1;min-width:0"><h2 style="font-family:var(--f-bl-d);font-weight:400;font-size:20px">${p.name}</h2><span class="muted">${p.life}</span></div><button class="icobtn" data-a="unsel" aria-label="Close">${ic('x')}</button></div>
  <div class="db"><dl class="kv">${p.facts.filter(f=>!HIDDEN_FACTS.test(f[0])).slice(0,4).map(([a,b])=>`<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl>
  ${HINT_OF[id]?`<button class="lnk" style="text-align:left;display:flex;gap:6px;align-items:center;color:var(--bl-leaf)" data-a="go" data-t="bl" data-v="hints"><span style="width:12px;display:inline-flex">${LEAF}</span>${HINT_OF[id].length} hint${HINT_OF[id].length>1?'s':''} for ${p.name.split(' ')[0]}</button>`:''}
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="bbtn sm" data-a="go" data-t="bl" data-v="person/${id}/facts">Profile</button><button class="bbtn sec sm" data-a="searchname" data-v="${p.name.split(' (')[0]}">Search records</button></div>
  <div><h3 style="margin-bottom:6px">Sources (${knownRecs(id).length})</h3>${knownRecs(id).length?`<ul class="srclist">${knownRecs(id).slice(0,5).map(srcRow).join('')}</ul>`:'<p class="muted" style="margin:0">None yet. Records you open that name this person appear here.</p>'}</div></div></aside>`;
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
  if(!p||!S.tree.people.includes(id)) return `<div class="wrap"><div class="crumbs"><button class="lnk" data-a="go" data-t="bl" data-v="tree">Vane estate</button></div><h1>Not in your tree</h1><p class="muted">This person isn't in your tree yet. Add them from a record that names them.</p></div>`;
  const kr = knownRecs(id);
  const tabs = [['facts','Facts'],['sources',`Sources (${kr.length})`],['gallery','Gallery']];
  let body;
  if(tab==='sources') body = `<div class="panel"><div class="pb">${kr.length?`<ul class="srclist">${kr.map(srcRow).join('')}</ul>`:'<p class="muted">No sources yet. Records you open that name this person appear here.</p>'}</div></div>`;
  else if(tab==='gallery'){ const ph = kr.filter(x=>REC[x].photo); body = `<div class="panel"><div class="pb">${ph.length?`<div class="lab">${ph.map(x=>`<button data-a="open" data-v="${x}" style="display:flex;flex-direction:column;gap:6px;text-align:left">${photo(PH[x])}<span class="lnk">${REC[x].title}</span></button>`).join('')}</div>`:'<p class="muted" style="margin:0">No photos for this person yet.</p>'}</div></div>`; }
  else body = `<div class="panel"><div class="ph"><h2>Life events</h2></div><div class="pb"><ul class="timeline">${p.facts.filter(f=>!HIDDEN_FACTS.test(f[0])).map(([k,v])=>{const y=(v.match(/\b(1[89]\d\d|20\d\d)\b/)||['—'])[0];return `<li><span class="yr">${y}</span><span><span class="ev">${k}</span><br><span class="muted">${v}</span></span></li>`}).join('')}</ul></div></div>`;
  const fam = (treeData().rel[id]||[]).map(([rel,pid])=>`<button class="fam" data-a="go" data-t="bl" data-v="person/${pid}/facts"><span class="ava">${avatar(pid)}</span><span><b>${PEOPLE[pid].name}</b><small>${rel} · ${PEOPLE[pid].life}</small></span></button>`).join('');
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
      <div class="vstage"><div class="vinner" style="transform:scale(${S.zoom})">${paperHtml(id,r.render())}</div></div></div>
    <div class="side">
      <div class="panel"><div class="ph"><h2>Record details</h2></div><div class="pb"><table class="idx">${idx.map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</table></div></div>
      ${treePanel(id)}
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
  const left = `<div class="panel"><div class="ph"><h2>Search all records</h2></div><div class="pb"><form class="sform" data-form="search">
    <label>Name<input id="sname" value="${esc(S.q.name)}" placeholder="First and last name"></label>
    <label>Keyword or place<input id="skw" value="${esc(S.q.kw)}" placeholder="e.g. Hollow Lane, Marguerite"></label>
    <label>Record type<select id="skind">${kinds.map(k=>`<option value="${k}" ${S.q.kind===k?'selected':''}>${k==='All'?'All record types':COLL[k].split(',')[0]}</option>`).join('')}</select></label>
    <div style="display:flex;gap:8px"><button class="bbtn">${ic('search')}Search</button><button type="button" class="bbtn sec" data-a="clearsearch">Clear</button></div></form></div></div>
    <div class="panel"><div class="ph"><h2>Certified nil return</h2></div><div class="pb"><p class="muted" style="margin:0 0 10px;font-size:13.5px">Professional accounts can ask for a certificate that no birth registration exists for the name in the box above.</p><button type="button" class="bbtn sec sm" data-a="nilreq">Request nil return</button></div></div>
    ${S.searched&&all.length?`<div class="panel"><div class="ph"><h2>Filter by collection</h2></div><div class="pb facets"><button class="${S.q.kind==='All'?'on':''}" data-a="facet" data-v="All">All results<span>${all.length}</span></button>${Object.entries(counts).map(([k,n])=>`<button class="${S.q.kind===k?'on':''}" data-a="facet" data-v="${k}">${COLL[k].split(',')[0]}<span>${n}</span></button>`).join('')}</div></div>`:''}`;
  let right;
  if(!S.searched){
    const ck = {}; Object.values(REC).forEach(r=>{ if(!r.hidden&&PAGE_KINDS.has(r.kind)) ck[r.kind]=(ck[r.kind]||0)+1; });
    right = `<div class="panel"><div class="ph"><h2>Featured collections for Ashby</h2></div><div class="pb"><div class="rtable-wrap"><table class="rtable"><tr><th>Collection</th><th>Indexed for your tree</th></tr>${Object.keys(COLL).map(k=>`<tr><td><span class="colrow">${COLTHUMB[k]?`<img class="colimg" src="assets/collection_${COLTHUMB[k]}.webp" alt="">`:''}<button class="nm lnk" data-a="facetall" data-v="${k}">${COLL[k]}</button></span></td><td>${ck[k]||0} records</td></tr>`).join('')}</table></div></div></div>
    <p class="muted" style="font-size:13.5px">Tip: most records aren't attached to any tree. Search by place or keyword as well as by name.</p>`;
  } else {
    right = `
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
    <div class="panel"><div class="ph"><h2>Shared matches with Margaret Holloway</h2></div><div class="pb"><p style="margin:0 0 8px">Ivor Marsh, Ada Marsh-Clery and T. Marsh.</p>
    <div class="rtable-wrap"><table class="cmtable"><tr><th>If Cornelius were her father</th><th>Expected relationship</th><th class="n">Typical cM</th><th class="n">Observed</th></tr><tr><td>Margaret Holloway</td><td>Half 1st cousin 1x removed</td><td class="n">57–530</td><td class="n">96</td></tr></table></div>
</div></div></div>
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
  <div class="panel"><div class="pb">${yours}${visibleHints().map(h=>`<div class="hrow"><svg class="leafbig" viewBox="0 0 20 26"><path d="M10 1 C 6 9, 2 13, 2 17.5 A 8 8 0 0 0 18 17.5 C 18 13, 14 9, 10 1 Z" fill="currentColor"/></svg>
    <div class="hb"><span class="muted" style="font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase">${forP[h.id]}</span><h3>${h.title}</h3><span class="muted" style="font-size:13.5px">${h.conf} · ${h.src}</span></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">${h.rec?`<button class="bbtn sm" data-a="open" data-v="${h.rec}">Review hint</button>`:`<button class="bbtn sm" data-a="open" data-v="${h.id}">Review hint</button><button class="bbtn sec sm" data-a="pin" data-v="${h.id}">${pinned(h.id)?'Unsave':'Accept'}</button>`}</div></div>`).join('')}</div></div></div>`;
}

/* ================= DOC PREVIEW ================= */
function showPreview(id){
  const r = REC[id], m = $('#modal');
  if(!S.viewed.includes(id)) S.viewed.push(id);
  const fname = FILES[id] || (r.kind==='DNA' ? r.title.replace(/[^A-Za-z]+/g,'_')+'.html' : r.kind==='Law' ? r.title.replace(/[^A-Za-z0-9]+/g,'_')+'.pdf' : r.kind==='Lab' ? (id.startsWith('sig:')?'Handwriting_':'PhotoLab_')+id.slice(4,12)+'.pdf' : r.title.replace(/[^A-Za-z0-9]+/g,'_').slice(0,40)+'.pdf');
  const ext = fname.split('.').pop().toUpperCase();
  const light = ['DNA','Hint'].includes(r.kind);
  m.innerHTML = `<div class="pv" role="dialog" aria-modal="true" aria-label="${esc(r.title)}"><div class="pvh"><span class="fi" style="background:${ext==='JPG'?'#2d7d46':ext==='HTML'?'#3c5a78':'#c0392b'}">${ext}</span><div class="t"><b>${fname}</b><small>${r.title}</small></div>
    <button class="nbtn ${pinned(id)?'sec':''} sm" data-a="pin" data-v="${id}" data-m="1">${pinned(id)?'Remove from matter':'Save to matter'}</button><button class="nbtn sec sm" data-a="close">Close</button></div>
    <div class="pvb ${light?'light':''}"><div ${light?'style="font-family:var(--f-bl);display:flex;flex-direction:column;gap:10px"':''}>${paperHtml(id,r.render())}</div>${r.kind==='Letter'||r.kind==='Certificate'?treePanel(id):''}</div></div>`;
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
    ${id==='m1'?`<div style="margin-top:22px;display:flex;gap:10px;flex-wrap:wrap"><button class="mlbtn" data-a="go" data-t="bl" data-v="tree">Open the Vane tree on Bloodlines</button><button class="mlbtn ghost" data-a="go" data-t="net" data-v="matter/overview">Open matter 2025-0417</button><button class="mlbtn ghost" data-a="guide">Open the field guide</button></div>`:''}
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
  const top = `<div class="nttop"><span class="crest"><img class="crestimg" src="assets/ap_crest.webp" alt=""><span>Ashgrove &amp; Pell</span></span>
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
  const tabs = [['overview','Overview'],['evidence',`Evidence (${S.pins.length})`],['lab','Photo lab'],['hand','Handwriting'],['ruling','Ruling'],['notes','Notes']];
  const body = {overview:mOverview,evidence:mEvidence,lab:labView,hand:handView,ruling:ruleView,notes:()=>`<div class="box"><div class="bh"><h2>Working notes</h2><span style="color:var(--nt-muted);font-size:13px">Saved automatically</span></div><div class="bb"><textarea id="notes" placeholder="Private to you.">${esc(S.notes)}</textarea></div></div>`}[sub]();
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
    ${trainingBox()}
    <div class="box"><div class="bh"><h2>Activity</h2></div><div class="bb">${S.log.length?`<ul class="log">${S.log.slice(0,10).map(l=>`<li><time>${l.t}</time><span>${esc(l.msg)}</span></li>`).join('')}</ul>`:'<p style="margin:0;color:var(--nt-muted)">No activity yet.</p>'}</div></div>
  </div></div>`;
}
function srcLabel(id){
  const r = REC[id];
  if(PAGE_KINDS.has(r.kind)) return 'Bloodlines · '+COLL[r.kind].split(',')[0];
  return r.kind==='Lab'&&id.startsWith('sig:') ? 'Handwriting examiner' : {Law:'Law library',DNA:'Bloodlines DNA',Lab:'Photo lab',Letter:'Email attachment',Diary:'Email attachment',Hint:'Bloodlines member tree',Certificate:'Bloodlines Professional',Attachment:'Email attachment'}[r.kind]||'—';
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
  return photo(PH[id], `data-lab="1" data-id="${id}"`).replace('</svg>', marks.map(k=>`<circle class="markc" cx="${m[k][0]}" cy="${m[k][1]}" r="${PH[id].hit?PH[id].hit*0.55:6}" style="stroke-width:${PH[id].hit?3.5:1.6}"/>`).join('')+'</svg>');
}
function cmpRec(id){
  const r = S.reports[id];
  return {kind:'Lab',year:2025,title:`Photo lab: ${PH[r.a].who} vs ${PH[r.b].who}`,k:'',hidden:true,
    render:()=>`<div class="doc"><h4>Certified Photo Comparison</h4><div class="c">Ashgrove &amp; Pell photo lab · Ref ${id.slice(4).toUpperCase()}</div>
    <div class="lab" style="gap:12px">${photo(PH[r.a])}${photo(PH[r.b])}</div>
    ${dl([['Photo A',PH[r.a].who],['Photo B',PH[r.b].who],['Marks on both',r.shared.length?r.shared.map(s=>MARK_NAME[s]).join('; '):'None'],['Result',r.ok?'POSITIVE: same person':'INCONCLUSIVE']])}
    <p class="rn">${r.ok?'Two independent permanent marks match. Counts as one identifying document under Accord Art. 2.':'Fewer than two shared permanent marks. A single mark, like a mole, can run in families. Not admissible as identification.'}</p></div>`};
}

function sigRec(id){
  const r = S.reports[id], A = SIGNED[r.a], B = SIGNED[r.b];
  return {kind:'Lab',year:2025,title:`Handwriting: ${A[0]} (${REC[r.a].year}) vs ${B[0]} (${REC[r.b].year})`,k:'',hidden:true,
    render:()=>`<div class="doc"><h4>Certified Handwriting Comparison</h4><div class="c">Ashgrove &amp; Pell document examiner · Ref ${id.slice(4,12).toUpperCase()}</div>
    <div class="lab" style="gap:12px">${sig(A[0],A[1])}${sig(B[0],B[1])}</div>
    ${dl([['Document A',REC[r.a].title+', '+REC[r.a].year],['Document B',REC[r.b].title+', '+REC[r.b].year],['Result',r.ok?'POSITIVE: same hand':'NEGATIVE: different hands']])}
    <p class="rn">${r.ok?'Letter forms, pen lifts and terminal flourish agree. Counts as one identifying document under Accord Art. 2.3.':'Letter forms and flourish differ. Not admissible as identification.'}</p></div>`};
}
function handView(){
  const avail = Object.keys(SIGNED).filter(id=>S.seen.includes(id)||pinned(id));
  const H = S.hw;
  const pane = side => { const id = H[side];
    return `<div class="labpane"><label for="hw-${side}" style="font-size:12px;font-weight:600;color:var(--nt-muted);text-transform:uppercase;letter-spacing:.05em">Document ${side.toUpperCase()}</label>
      <select id="hw-${side}" data-hw-select="${side}"><option value="">Choose a signed document…</option>${avail.map(p=>`<option value="${p}" ${id===p?'selected':''}>${REC[p].title} (${REC[p].year})</option>`).join('')}</select>
      ${id?`<div class="doc" style="padding:14px">${sig(SIGNED[id][0],SIGNED[id][1])}</div>`:'<div class="empty">No document selected.</div>'}</div>`; };
  const both = H.a && H.b && H.a!==H.b;
  return `<div class="box"><div class="bh"><h2>Handwriting</h2></div><div class="bb" style="display:flex;flex-direction:column;gap:14px"><p style="margin:0;color:var(--nt-muted)">Choose two signed documents you've viewed on Bloodlines. The examiner certifies whether the same hand wrote both. A positive result counts as one identifying document.</p>
    ${avail.length<2?'<div class="note">View at least two signed documents on Bloodlines first. Registrations, licences, deeds and the census are signed.</div>':''}
    <div class="lab">${pane('a')}${pane('b')}</div>
    ${both?`<div><button class="nbtn" data-a="sigcert">Certify comparison</button></div>`:''}</div></div>`;
}

/* ---- ruling ---- */
function treeSummary(){
  computeFlags(); const unp=S.tree.links.filter(l=>LSTAT[l.id]&&LSTAT[l.id].status==='unproven').length, bad=FLAGS.filter(f=>f.sev==='impossible').length;
  return `<p class="tsum" style="margin:6px 0 0;font-size:13.5px">Your tree: ${S.tree.people.length} people, ${S.tree.links.length} link${S.tree.links.length===1?'':'s'}, ${S.tree.events.length} event${S.tree.events.length===1?'':'s'} · ${unp} unproven link${unp===1?'':'s'} · ${bad} impossible flag${bad===1?'':'s'} · <button type="button" class="lnk" data-a="go" data-t="bl" data-v="tree">Open the tree</button></p>`;
}
function ruleView(){
  const done = S.won||S.failed;
  return `<div style="display:flex;flex-direction:column;gap:14px">
    <div class="box"><div class="bb" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2>File a ruling</h2><p id="rulemsg" style="margin:4px 0 0;color:var(--nt-muted)">Answer each finding and attach the evidence that proves it. The partners also check that your family tree shows it. Accepted findings stay locked in.</p>${treeSummary()}</div>
    <div class="attempts" aria-label="Filings used">${[0,1,2].map(i=>`<i class="${i<S.attempts?'used':''}"></i>`).join('')}<span>${3-S.attempts} filing${3-S.attempts===1?'':'s'} left</span></div></div></div>
    <form data-form="rule" style="display:flex;flex-direction:column;gap:12px">
    ${FIND.map((f,i)=>{ const r = S.res[f.id], locked = r===true||done;
      return `<fieldset class="finding ${r===true?'ok':r===false?'no':''}"><div class="fhead"><span class="n">FINDING ${i+1}</span><legend>${f.q}</legend>${r===true?'<span class="pill green">Accepted</span>':r===false?'<span class="pill red">Not accepted</span>':''}</div>
      ${r===false&&S.attempts>=2?`<p class="nudge">${f.nudge}${S.flags['hint_'+f.id]?' Also: you attached a hint from a member tree. The claimant built that tree.':''}</p>${treeOk(f.id)?'':`<ul class="tchk" aria-label="What your tree is missing">${treeChecks(f.id).filter(x=>!x.ok).map(x=>`<li class="no"><span aria-hidden="true">○</span>${esc(x.text)}</li>`).join('')}</ul>`}`:''}
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
    const ok = S.ans[f.id]===f.ans && evidenceOk(f.id, ev) && treeOk(f.id) && !hint;
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
    const hit = Object.keys(m).find(k=>Math.hypot(m[k][0]-p.x, m[k][1]-p.y) < (PH[id].hit||8));
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
    case 'searchname': S.q={name:v,kw:'',kind:'All'}; S.searched=true; S.flags.t_search=true; go('search','bl'); return;
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
    case 'guide': showGuide(S.flags.guideSec&&S.flags.t_guide&&v===undefined?S.flags.guideSec:'job'); return;
    case 'guidesec': showGuide(v); return;
    case 'training': S.flags.hideTraining = v==='hide'; save(); render(); return;
    case 'unlink': removeLink(+v); save(); render(); return;
    case 'tcheck': S.flags.tcClosed = !S.flags.tcClosed; save(); render(); return;
    case 'sigcert': {
      const H=S.hw, id='sig:'+[H.a,H.b].sort().join('-'), ok=SIGNED[H.a][1]===SIGNED[H.b][1];
      S.reports[id]={a:H.a,b:H.b,ok}; REC[id]=sigRec(id);
      if(!pinned(id)){ S.pins.push(id); log('Handwriting certified: '+REC[id].title+(ok?' (positive)':' (negative)')); }
      save(); render(); showPreview(id); return; }
    case 'nilreq': {
      const nm = (($('#sname')||{}).value||'').trim(), low = nm.toLowerCase();
      if(!nm){ toast('Enter a name first'); return; }
      if(low.includes('desmond')){ log('Nil return requested: '+nm); showPreview('nilDesmond'); return; }
      const words = low.split(/\s+/), has = Object.keys(REC).some(id=>!REC[id].hidden && REC[id].kind==='Birth' && words.every(w=>REC[id].title.toLowerCase().includes(w)));
      toast(has ? 'A birth record exists for that name. No nil return can be issued.' : 'Not certified. The firm only certifies searches for people in this matter.'); return; }
    case 'reset': try{localStorage.removeItem('bloodlines-v3')}catch(e){} for(const id in S.reports) delete REC[id]; Object.assign(S, FRESH()); render(); return;
  }
});
document.addEventListener('change', e=>{
  const t = e.target;
  if(t.dataset.labSelect){ const s=t.dataset.labSelect; S.lab[s]=t.value; if(s==='a') S.lab.ma=[]; else S.lab.mb=[]; S.lab.miss=0; save(); render(); }
  else if(t.dataset.hwSelect){ S.hw[t.dataset.hwSelect]=t.value; save(); render(); }
  else if(t.dataset.kit){ go('dna/'+t.value,'bl'); }
  else if(t.dataset.find){ if(t.value){ S.sel=t.value; render(); } }
  else if(t.type==='radio' && /^F\d$/.test(t.name)){ S.ans[t.name]=t.value; save(); }
});
document.addEventListener('input', e=>{ if(e.target.id==='notes'){ S.notes=e.target.value; save(); }});
document.addEventListener('submit', e=>{
  e.preventDefault(); const f = e.target;
  if(f.dataset.form==='qsearch'){ S.q={name:'',kw:$('#hq').value,kind:'All'}; S.searched=true; S.flags.t_search=true; go('search','bl'); }
  if(f.dataset.form==='search'){ S.q={name:$('#sname').value,kw:$('#skw').value,kind:$('#skind').value}; S.searched=true; S.flags.t_search=true; log(`Searched Bloodlines: "${(S.q.name+' '+S.q.kw).trim()||S.q.kind}"`); save(); render(); }
  if(f.dataset.form==='link'){
    const A=f.querySelector('[data-lk=a]').value, B=f.querySelector('[data-lk=b]').value, T=f.querySelector('[data-lk=t]').value;
    const evEl=f.querySelector('[data-lk=ev]'), rec=f.dataset.rec || (evEl?evEl.value:'');
    const res=tryLink(A,T,B,rec); toast(res.msg);
    if(res.ok){ save(); if(f.dataset.rec && !$('#modal').hidden) showPreview(f.dataset.rec); else render(); }
    return;
  }
  if(f.dataset.form==='event'){
    const P=f.querySelector('[data-ev=p]').value, K=f.querySelector('[data-ev=k]').value;
    const res=P?tryEvent(P,K,f.dataset.rec):{ok:false,msg:'Choose a person.'}; toast(res.msg);
    if(res.ok){ save(); if(!$('#modal').hidden) showPreview(f.dataset.rec); else render(); }
    return;
  }
  if(f.dataset.form==='rule'){
    const missing = FIND.filter(x=>S.res[x.id]!==true && !S.ans[x.id]);
    if(missing.length){ $('#rulemsg').textContent = `Answer every finding before filing. Missing: ${missing.map(x=>'Finding '+x.id.slice(1)).join(', ')}.`; $('#rulemsg').style.color='var(--bad)'; return; }
    judge(); save(); render(); $('#vp').scrollTop=0;
    toast(S.won?'Ruling accepted. You have new mail.':S.failed?'Matter reassigned. You have new mail.':'Ruling returned by the partners');
  }
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && !$('#modal').hidden) closePreview(); });
render();
