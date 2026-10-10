// ZENTRALE DATEN – hier ergänzen: neue Seite = 1 Zeile in PAGES, neuer Partner = 1 Eintrag in PARTNERS, Zuordnung = 1 Zeile in ASSIGN.
const B='https://smart-remote-life.com/', N=id=>'https://app.notion.com/p/'+id, TODO='TODO: ergänzen';
const GUIDE=N('3cacef2ea3a881b68c10de081195d7df'); // SRL Master Guidelines (projektweit)
// s: live|planned|parked|ref|missing · a(AdSense): none|planned|active · g: page|project|none · na: bewusst ohne Affiliate (laut Notion)
const P=(id,name,parent,o={})=>({id,name,parent,s:'planned',a:'none',g:'project',...o});
const PAGES=[
P('srl','Smart Remote Life (Startseite)',null,{s:'live',u:B,n:'3cdcef2ea3a881798c59c7ea525b45f6',na:1}),
// AUSWANDERN
P('ausw','Auswandern','srl',{s:'live',n:'3e0cef2ea3a881dfae60ca8a6e14fdac',note:'Notion-Hauptseite ohne eigene URL; auswandern.html hängt an „Auswandern nach Kontinent“.'}),
P('kont','Auswandern nach Kontinent','ausw',{s:'live',u:B+'auswandern.html',n:'3e0cef2ea3a881da89b9db7ffc55533e'}),
P('eu','Europa','kont',{s:'live',u:B+'auswandern-europa.html',f:'auswandern-europa.html',n:'3e0cef2ea3a881cb880ec175a8ce477e'}),
...[['mne','Montenegro','montenegro','Awin: Reise, eSIM, Versicherung','6 Recherche-TODOs'],
['prt','Portugal','portugal','Awin: Reise, Internet/eSIM, Versicherung','4 Recherche-TODOs'],
['alb','Albanien','albanien','Awin: Reise, eSIM, Versicherung','5 Recherche-TODOs'],
['hrv','Kroatien','kroatien','Awin: Reise, eSIM, Unterkunft, Versicherung','5 Recherche-TODOs'],
['bgr','Bulgarien','bulgarien','Awin: Reise, eSIM, Unterkunft, Versicherung','8 Recherche-TODOs'],
['rou','Rumänien','rumaenien','Awin: Reise, eSIM, Unterkunft, Versicherung','11 Recherche-TODOs'],
['grc','Griechenland','griechenland','Awin: Reise, eSIM, Fähre, Unterkunft, Versicherung','10 Recherche-TODOs']
].map(([id,name,slug,aw,rs])=>P(id,name,'eu',{u:B+'auswandern-'+slug+'.html',f:'auswandern-'+slug+'.html',next:'Live-Status prüfen (Upload/Netlify); offen: '+aw+'; '+rs,note:'Lokale Datei vorhanden (Stand 2026-10-03). Keine Notion-Seite – TODO: anlegen.'})),
...[['afr','Afrika','afrika','3e0cef2ea3a881488cfeda37fbfe46bd'],['asi','Asien','asien','3e0cef2ea3a881518017c8806648b645'],
['mak','Mittelamerika & Karibik','mittelamerika-karibik','3e0cef2ea3a8817b9599ebfd82ec6b27'],['sam','Südamerika','suedamerika','3e0cef2ea3a88141b446f2843dd85c96'],
['oze','Südpazifik & Ozeanien','suedpazifik-ozeanien','3e0cef2ea3a88158b751fc0b7ddbf3b2']].map(([id,name,slug,n])=>P(id,name,'kont',{s:'live',u:B+'auswandern-'+slug+'.html',n,note:'Länderseiten: TODO (noch keine angelegt).'})),
// REMOTE JOBS
P('rj','Remote Jobs','srl',{s:'live',u:B+'remote-jobs.html',n:'3e0cef2ea3a881abb4cbebcd2b03eb99'}),
P('rjf','Remote Jobs finden','rj',{s:'live',u:B+'remote-jobs-finden.html',n:'3e0cef2ea3a8811cbdf3e5eac42b8589'}),
P('rj3','3 beste Remote-Job-Seiten','rj',{note:'Geplante SEO-/Pinterest-Landingpage.'}),
P('rj5','5 beste Remote-Job-Seiten','rj',{note:'Geplante SEO-/Pinterest-Landingpage.'}),
P('rj7','7 oder 10 beste Remote-Job-Seiten','rj',{note:'Geplante SEO-/Pinterest-Landingpage.'}),
P('rjm','Anbieter: Mercor','rj',{next:'TODO: Affiliate-/Referral-Programm prüfen'}),
P('rjfx','Anbieter: FlexJobs','rj',{next:'TODO: Affiliate-Programm prüfen'}),
P('rjr','Anbieter: Remote Rocketship','rj',{}),
// TECHNIK
P('tech','Technik','srl',{s:'live',n:'3e0cef2ea3a881f99a86e9b9f9a61fde'}),
P('cre','Creator Setup & Technik','tech',{s:'live',u:B+'creator-technik.html',n:'3e0cef2ea3a8818c9c23c889b55fe1d1'}),
P('tik','TikTok & Instagram Setup für Anfänger','cre',{s:'live',u:B+'tiktok-instagram-setup.html',n:'3e0cef2ea3a8816abdedcce6c0252889'}),
P('hom','12 Homeoffice-Gadgets für Remote Work','cre',{s:'live',u:B+'homeoffice-gadgets-remote-work.html',n:'3e0cef2ea3a8819a8596e7eb70361972'}),
// SECURITY
P('sec','Security','srl',{s:'live',n:'3e0cef2ea3a881d0af2bf4a4ed874105'}),
P('dfw','Digitale Freiheit weltweit','sec',{s:'live',u:B+'digitale-freiheit-weltweit.html',n:'3e0cef2ea3a881cbb907fd103f2d943b'}),
...[['Europa','europa','3e0cef2ea3a881cda51af92d7f5dbc1a'],['Afrika','afrika','3e0cef2ea3a88120becce3ee3be2c659'],['Asien','asien','3e0cef2ea3a881f3a43dc7f171c80c8a'],
['Nordamerika, Mittelamerika & Karibik','nordamerika-karibik','3e0cef2ea3a88109b114f973f53dc833'],['Südamerika','suedamerika','3e0cef2ea3a8816e9997fdbb2a379f0b'],['Südpazifik & Ozeanien','ozeanien-pazifik','3e0cef2ea3a881c8b9dff14cfc434d2f']
].map(([name,slug,n])=>P('sec-'+slug,'Digitale Freiheit: '+name,'dfw',{s:'live',u:B+'sicherheit-'+slug+'.html',n})),
// BUSINESS & WEITERE
P('biz','Business','srl',{s:'live',u:B+'business.html',n:'3e0cef2ea3a881d1b76bcb5e850e3285',note:'Business-Hauptseite / Hub mit den live verfügbaren Business-Artikeln.'}),
P('biz1','Facebook & Instagram Ads','biz',{s:'live',u:B+'business-facebook-instagram-ads.html',n:'3e0cef2ea3a881f18d48d02fe2160c18'}),
P('biz2','30-Tage-Challenge: Digitales Produkt entwickeln','biz',{s:'live',u:B+'30-tage-challenge-digitale-produkte.html',n:'3e0cef2ea3a881e39702e7c7cd51c167',na:1,note:'Eigenes kostenloses Angebot.'}),
P('reis','Reisen','srl',{s:'live',n:'3e0cef2ea3a88172a025f2915da2fd95',na:1}),
P('reis1','Reisen – Hauptseite','reis',{s:'live',u:B+'reisen.html',n:'3e0cef2ea3a881a98849c0b10b4269e7',na:1}),
P('nl','Newsletter & 1:1','srl',{s:'live',n:'3e0cef2ea3a881aeb729f34bf9971c72',na:1,note:'Brevo, Double-Opt-in.'}),
P('nl1','Newsletter','nl',{s:'live',u:B+'newsletter.html',n:'3e0cef2ea3a881f3a703d8b7ea4d9ef5',na:1}),
P('nl2','1:1-Gespräch','nl',{s:'live',u:B+'1-1-gespraech.html',n:'3e0cef2ea3a8810e985efba605329d4e',na:1}),
P('en','English Articles','srl',{s:'live',n:'3e0cef2ea3a8813494f0dd1eba97645d',na:1}),
P('en1','English Articles – Hauptseite','en',{s:'live',u:B+'english-articles.html',n:'3e0cef2ea3a88197a97fc2e67e23221f',na:1}),
P('law','Recht & System','srl',{s:'live',n:'3e0cef2ea3a8819e92d5f324de313555',na:1}),
P('imp','Impressum','law',{s:'live',u:B+'impressum.html',n:'3e0cef2ea3a8811f87a3d7a40d64ecfe',na:1}),
P('dsg','Datenschutz','law',{s:'live',n:'3e0cef2ea3a88164a7a4edda343a3fa6',na:1,note:'URL nicht geprüft: '+TODO}),
P('dis','Disclaimer / Werbehinweis','law',{s:'live',n:'3e0cef2ea3a8814bad01fb47d5f6825c',na:1,note:'URL nicht geprüft: '+TODO})
];
// PARTNER. Kundenlink = was Besucher klicken · Dashboard = mein Login. null => TODO
const PARTNERS=[
{id:'dc',name:'DiscoverCars',network:'Direktprogramm (Post Affiliate Pro)',cl:'https://www.discovercars.com/?a_aid=Smart-Remote-Life',dl:'https://discover-car-hire.postaffiliatepro.com/affiliates/panel.php',s:'live'},
{id:'st',name:'Staatenlos / Auswander-Lexikon',network:'Digistore24',cl:'https://www.digistore24.com/redir/234406/tiramcreations/',dl:'https://www.digistore24-app.com/app/de/affiliate/account/marketplace/all',s:'live',note:'Kundenlink laut Seitentext = Auswander-Lexikon. Staatenlos-Programmseite: https://staatenlos.ch/staatenlos/affiliate/'},
{id:'ft',name:'Freelancer Toolkit (Bohle Digital)',network:'Direktprogramm (Netzwerk: '+TODO+')',cl:'https://bohle-digital.de/freelancer-toolkit/?aff=tiramcreations',dl:'https://bohle-digital.de/affiliates.html',s:'live',note:'Dashboard-Link aus Excel – ggf. nur Programmseite, Login prüfen.'},
{id:'px',name:'Proton VPN',network:'Proton Partners',cl:null,dl:'https://partners.proton.me/',s:'live'},
{id:'rm',name:'Remotive',network:'Rewardful',cl:null,dl:'https://remotive.getrewardful.com/',s:'live'},
{id:'rr',name:'Remote Rocketship',network:'Direktprogramm',cl:null,dl:'https://affiliates.remoterocketship.com/',s:'live'},
{id:'az',name:'Amazon',network:'Amazon Partnerprogramm',cl:null,dl:'https://www.amazon.de/gp/css/homepage.html',s:'live',note:'Excel-Link ist „Mein Konto“ – Partnernet-Dashboard prüfen.'},
{id:'tm',name:'Temu',network:'Temu Partnerprogramm',cl:null,dl:'https://www.temu.com/affiliate_campaign_activity.html',s:'live'},
{id:'fb',name:'FB & Instagram Ads intensiv (Felix Beilharz)',network:'Digistore24',cl:null,dl:'https://www.digistore24-app.com/app/de/affiliate/account/marketplace/all',s:'live'},
{id:'mc',name:'Mercor',network:'Referral-Programm',cl:null,dl:'https://work.mercor.com/refer?tab=connections',s:'planned',note:'Nicht auf SRL-Seiten belegt. TODO: Affiliate-Programm prüfen'},
{id:'fx',name:'FlexJobs',network:TODO,cl:null,dl:null,s:'missing',note:'TODO: Affiliate-Programm prüfen (nur als Anbieter verlinkt).'},
{id:'aw',name:'Awin (Netzwerk)',network:'Awin',cl:null,dl:'https://ui.awin.com/idp/de/awin/login/prelogin?redirect=%2Flogin%3FnetworkGroup%3Dawin&persistLocale=true',s:'planned',note:'Excel: Status „offen“. Länderseiten haben Awin-Platzhalter (Reise/eSIM/Versicherung).'}
];
// ZUORDNUNG: inh=true => gilt für alle Unterseiten (Standard-Partner), inh=false => nur diese Seite
const A=(page,partner,inh,how)=>({page,partner,inh,how});
const ASSIGN=[
A('ausw','dc',1,'direkt + Popup'),A('ausw','st',1,'direkt + Popup'),A('ausw','ft',1,'direkt'),
A('dfw','px',1,'direkt + Popup'),A('dfw','st',1,'direkt + Popup'),A('sec','px',1),A('sec','st',1),
A('rjf','rm',0,'direkt + Popup'),A('rjf','rr',0,'direkt + Popup'),A('rj','rm',0),A('rj','rr',0),
A('tik','az',0,'direkt + Popup'),A('tik','tm',0,'Popup'),A('hom','az',0,'direkt + Popup'),A('hom','tm',0,'direkt + Popup'),
A('biz','fb',0),A('biz1','fb',0),
A('rjr','rr',0),A('rjm','mc',0),A('rjfx','fx',0)
];
const PLACEHOLDERS={
 'Blueprint AI Solution':['Master Blueprint Agent','Single Blueprint Agents','Playbooks','Kurse','Programme & Tools'],
 'Spirit & Creative':['Smart Spirit Guide','Mirror Sessions','Musik','Bücher','weitere kreative Inhalte'],
 'Smart Health Living':['Hauptseite','Rezepte','Gesundheit'],
 'Smart Clean Living':['Temu Storefront','weitere Inhalte geplant']};

// ===== PHASE 2: Smart Health Living & Smart Clean Living (Quelle: Notion „Smart Health Living“ + Masterstandard, Stand 01.10.2026) =====
PAGES.find(p=>p.id=='srl').gu=GUIDE;
delete PLACEHOLDERS['Smart Health Living'];delete PLACEHOLDERS['Smart Clean Living'];
PAGES.push(
P('shl','Smart Health Living (Startseite)',null,{s:'live',u:'https://mettesweb.github.io/smarthealthliving/index.html',n:'3dacef2ea3a88124a943e08c26a806eb',gu:N('3e4cef2ea3a881bc849ac4b6ef5aa4fc'),next:'Domain smarthealthliving.online anbinden; Index laut Masterstandard aktualisieren',note:'Index live auf GitHub Pages. Zieldomain laut Notion: smarthealthliving.online – Canonicals erst nach Anbindung.'}),
P('shl-rez','Rezepte','shl',{note:'Aktueller Fokus: Pinterest → Rezeptseite → Affiliate → Newsletter.'}),
P('shl-gmd','Green Morning Drink (Master-Rezeptseite)','shl-rez',{next:'Master-Rezeptseite endgültig sichern; Live-Status prüfen',note:'Erstes Rezept, Vorlage für alle weiteren.'}),
P('shl-6d','Erste 6 Drinks','shl-rez',{next:'5 weitere Drink-Rezepte + je 2–3 Pinterest-Varianten',note:'Ruhiger Morgen, energiearmer Morgen, Nachmittagstief, Abendroutine, Regeneration, Hydration.'}),
...['Overnight Oats','Warme Drinks (Chai, Golden Milk, Kürbislatte)','Suppen','Schnelle Rezepte für Kinder','Schnelle Rezepte für kühle Tage'].map((n,i)=>P('shl-pb'+i,'Pinnwand: '+n,'shl-rez',{g:'none',note:'Geplante Pinterest-Pinnwand mit je 5 Rezepten.'})),
P('shl-mp','Meal Prep (Reihe)','shl-rez',{note:'Laut Masterstandard nach den Drinks.'}),
P('shl-ges','Gesundheit (Themenwelten)','shl',{note:'Laut Planung erst nach den Rezepten.'}),
...['Darmgesundheit','Detox','Natürliche Hausmittel','Gesundheitswissen (inkl. Zahnpflege)'].map((n,i)=>P('shl-g'+i,n,'shl-ges',{})),
P('shl-prod','Produkte & Empfehlungen','shl',{note:'Premium-Empfehlungen, Amazon-Storefront, kleinere Anbieter.'}),
P('shl-nl','Newsletter (9-Wochen-Detox- & Energie-Plan)','shl',{na:1,next:'SHL-Liste/Segment in Brevo; newsletter.html',note:'Ein einheitliches Popup für alle SHL-Seiten.'}),
P('shl-koop','Kooperation & Kontakt','shl',{na:1,next:'Seite erstellen (Awin-/Direktkooperationen)'}),
P('shl-law','Rechtliches (Impressum, Datenschutz, Disclaimer)','shl',{na:1,note:'Laut Masterstandard in jedem Footer.'}),
P('shl-bw','Bauchweh-Tagebuch (HTML-Prototyp)','shl',{na:1,n:'3e4cef2ea3a8811a8008eb0f92b9a572',note:'Unterprojekt; persönliche Quelldaten bleiben außerhalb von Notion/App.'}),
P('scl','Smart Clean Living (Startseite)',null,{g:'none',next:'TODO: Konzept/Domain festlegen',note:'Noch keine Notion-Seite – TODO: anlegen.'}),
P('scl-t','Temu Storefront','scl',{g:'none',note:'Lokaler Ordner „TEMU STOREFRONT“ (156 Dateien). Laut SHL-Masterstandard niedrige Priorität.'}),
P('scl-b','Boutique-Store (Produkte ohne Eigenkauf)','scl',{g:'none',note:'Idee: Temu-Produkte elegant anbieten, Dropshipping (AutoDS).'}),
P('scl-w','Weitere Inhalte','scl',{g:'none',note:'TODO: ergänzen'}));
PARTNERS.find(x=>x.id=='az').cl='https://www.amazon.de/shop/profile/amzn1.account.AFHO7YVP4O6ZRWOSQBHRGMFKRPLA';
PARTNERS.find(x=>x.id=='az').note='Kundenlink = Storefront (SHL). Excel-Link ist „Mein Konto“ – Partnernet-Dashboard prüfen.';
PARTNERS.push(
{id:'tou',name:'Touchstone Essentials',network:TODO,cl:'https://vision.thegoodinside.com/shop/',dl:null,s:'live',note:'Bereits Affiliate (Notion).'},
{id:'nh',name:'Nature Heart',network:TODO,cl:null,dl:null,s:'planned',note:'Aktivierung nach Gewerbe-/Steueranmeldung.'},
{id:'ag',name:'artgerecht',network:'Awin (geplant)',cl:null,dl:null,s:'planned',note:'Bei Awin beantragen.'},
{id:'lv',name:'LavaVitae',network:TODO,cl:null,dl:null,s:'planned',note:'TODO: Affiliate-Programm prüfen'},
{id:'in',name:'InnoNature',network:TODO,cl:null,dl:null,s:'planned',note:'TODO: Affiliate-Programm prüfen'},
{id:'ad',name:'AutoDS',network:'Tool (kein Affiliate belegt)',cl:null,dl:null,s:'planned',note:'Dropshipping-Tool; TODO: Rolle klären.'});
ASSIGN.push(A('eu','aw',1,'geplant (Platzhalter)'),A('shl','tou',1,'Header-CTA, Sidebanner'),A('shl','nh',0,'Premium-Empfehlung'),A('shl','az',0,'Zubehör'),
A('shl-rez','nh',1,'Sidebanner'),A('shl-rez','ag',1,'Querbanner'),A('shl-rez','az',1,'Amazon-Bereich'),A('shl-prod','lv',0),A('shl-prod','in',0),A('shl-koop','aw',0),
A('scl-t','tm',0),A('scl-b','ad',0));

// ===== Lokale Dateien (relativ zu C:\\Users\\miqr\\Downloads\\Produkte Business HTML\\) + AdSense, Stand 04.10.2026 =====
const F={"srl": "Smart Remote Life\\SRL Allgemein  Hauptseite\\index.html", "kont": "Smart Remote Life\\SRL Auswandern Blog\\ABlog Auswandern A Hauptseite\\auswandern.html", "eu": "Smart Remote Life\\SRL Auswandern Blog\\ABlog Auswandern Europa\\auswandern-europa.html", "afr": "Smart Remote Life\\SRL Auswandern Blog\\ABlog Auswandern Afrika\\auswandern-afrika.html", "asi": "Smart Remote Life\\SRL Auswandern Blog\\ABlog Auswandern Asien\\auswandern-asien.html", "mak": "Smart Remote Life\\SRL Auswandern Blog\\ABlog Auswandern Karibik\\auswandern-mittelamerika-karibik.html", "sam": "Smart Remote Life\\SRL Auswandern Blog\\ABlog Auswandern Südamerika\\auswandern-suedamerika.html", "oze": "Smart Remote Life\\SRL Auswandern Blog\\ABlog Auswandern Südpazifik\\auswandern-suedpazifik-ozeanien.html", "rj": "Smart Remote Life\\SRL Remote Jobs Blog\\Blog Remote - Hauptseite\\remote-jobs.html", "rjf": "Smart Remote Life\\SRL Remote Jobs Blog\\Blog Remote - remote-jobs-finden\\remote-jobs-finden.html", "cre": "Smart Remote Life\\SRL Technik Tools Blog\\Blog Technik Hauptseite\\creator-technik.html", "tik": "Smart Remote Life\\SRL Technik Tools Blog\\Blog Technik tiktok-instagram-setup\\tiktok-instagram-setup.html", "hom": "Smart Remote Life\\SRL Technik Tools Blog\\Blog Technik homeoffice-gadgets-remote-work\\homeoffice-gadgets-remote-work.html", "dfw": "Smart Remote Life\\SRL Security Blog\\AA Sicherheit A Hauptseite\\digitale-freiheit-weltweit.html", "sec-europa": "Smart Remote Life\\SRL Security Blog\\AA Sicherheit Blog  Europa\\sicherheit-europa.html", "sec-afrika": "Smart Remote Life\\SRL Security Blog\\AA Sicherheit Blog Afrika\\sicherheit-afrika.html", "sec-asien": "Smart Remote Life\\SRL Security Blog\\AA Sicherheit Blog Asien\\sicherheit-asien.html", "sec-nordamerika-karibik": "Smart Remote Life\\SRL Security Blog\\AA Sicherheit Blog Karibik\\sicherheit-nordamerika-karibik.html", "sec-suedamerika": "Smart Remote Life\\SRL Security Blog\\AA Sicherheit Blog Südamerika\\sicherheit-suedamerika.html", "sec-ozeanien-pazifik": "Smart Remote Life\\SRL Security Blog\\AA Sicherheit Blog Südpazifik\\sicherheit-ozeanien-pazifik.html", "biz": "Smart Remote Life\\SRL Business Blog\\SRL Businessblog Hauptseite\\business.html", "biz1": "Smart Remote Life\\SRL Business Blog\\SRL Businessblog Hauptseite\\business-facebook-instagram-ads.html", "biz2": "Smart Remote Life\\SRL Business Blog\\SRL Businessblog Hauptseite\\30-tage-challenge-digitale-produkte.html", "reis1": "Smart Remote Life\\SRL Reisen Blog\\Blog Reisen - Hauptseite\\reisen.html", "nl1": "Smart Remote Life\\SRL Allgemein  Hauptseite\\newsletter.html", "nl2": "Smart Remote Life\\SRL Allgemein  Hauptseite\\1-1-gespraech.html", "en1": "Smart Remote Life\\SRL Allgemein  Hauptseite\\english-articles.html", "imp": "Smart Remote Life\\SRL Allgemein  Hauptseite\\impressum.html", "dsg": "Smart Remote Life\\SRL Allgemein  Hauptseite\\datenschutz.html", "dis": "Smart Remote Life\\SRL Allgemein  Hauptseite\\disclaimer.html", "mne": "Smart Remote Life\\Länder seiten html´s\\auswandern-montenegro.html", "prt": "Smart Remote Life\\Länder seiten html´s\\auswandern-portugal.html", "alb": "Smart Remote Life\\Länder seiten html´s\\auswandern-albanien.html", "hrv": "Smart Remote Life\\Länder seiten html´s\\auswandern-kroatien.html", "bgr": "Smart Remote Life\\Länder seiten html´s\\auswandern-bulgarien.html", "rou": "Smart Remote Life\\Länder seiten html´s\\auswandern-rumaenien.html", "grc": "Smart Remote Life\\Länder seiten html´s\\auswandern-griechenland.html", "shl": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\index.html", "shl-gmd": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\green-morning-drink.html", "shl-nl": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\newsletter.html", "shl-law": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\impressum.html (+ datenschutz.html, disclaimer.html)"};
PAGES.forEach(p=>{if(F[p.id])p.f=F[p.id]});
[ ["r-ananas-kokos-regenerationsdrink", "Ananas kokos regenerationsdrink", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\ananas-kokos-regenerationsdrink.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-apfel-zimt-punsch-alkoholfrei", "Apfel zimt punsch alkoholfrei", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\apfel-zimt-punsch-alkoholfrei.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-apfelkuchen-overnight-oats-zimt", "Apfelkuchen overnight oats zimt", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\apfelkuchen-overnight-oats-zimt.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-bananen-haferplaetzchen-ohne-zucker", "Bananen Haferplätzchen ohne zucker", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\bananen-haferplaetzchen-ohne-zucker.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-chai-latte-ohne-fertigpulver", "Chai latte ohne fertigpulver", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\chai-latte-ohne-fertigpulver.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-feta-art-selber-machen", "Feta art selber machen", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\feta-art-selber-machen.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-frischkaese-selber-machen", "Frischkäse selber machen", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\frischkaese-selber-machen.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-gemuese-muffins-brotdose", "Gemüse muffins brotdose", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\gemuese-muffins-brotdose.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-gemuesepfanne-reis-meal-prep", "Gemüsepfanne reis meal prep", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\gemuesepfanne-reis-meal-prep.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-golden-milk", "Golden milk", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\golden-milk.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-grapefruit-kokos-reset", "Grapefruit kokos reset", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\grapefruit-kokos-reset.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-heisse-schokolade-mit-datteln", "Heiße schokolade mit datteln", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\heisse-schokolade-mit-datteln.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-high-protein-overnight-oats-quark", "High protein overnight oats quark", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\high-protein-overnight-oats-quark.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-huehnersuppe-mit-gemuese", "Hühnersuppe mit Gemüse", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\huehnersuppe-mit-gemuese.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-kamille-honig-abenddrink", "Kamille honig abenddrink", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\kamille-honig-abenddrink.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-karotten-ingwer-suppe", "Karotten ingwer suppe", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\karotten-ingwer-suppe.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-kartoffel-lauch-pfanne", "Kartoffel lauch pfanne", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\kartoffel-lauch-pfanne.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-kirsch-zimt-abenddrink", "Kirsch zimt abenddrink", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\kirsch-zimt-abenddrink.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-kuerbis-latte-selber-machen", "Kürbis latte selber machen", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\kuerbis-latte-selber-machen.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-kuerbis-overnight-oats-pumpkin-spice", "Kürbis overnight oats pumpkin spice", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\kuerbis-overnight-oats-pumpkin-spice.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-kuerbissuppe-kokosmilch-30-minuten", "Kürbissuppe kokosmilch 30 minuten", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\kuerbissuppe-kokosmilch-30-minuten.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-lebkuchen-overnight-oats", "Lebkuchen overnight oats", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\lebkuchen-overnight-oats.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-mascarpone-selber-machen", "Mascarpone selber machen", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\mascarpone-selber-machen.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-mini-pfannkuchen-mit-obst", "Mini pfannkuchen mit obst", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\mini-pfannkuchen-mit-obst.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-mozzarella-selber-machen", "Mozzarella selber machen", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\mozzarella-selber-machen.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-nudeln-versteckte-gemuesesosse", "Nudeln versteckte Gemüsesoße", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\nudeln-versteckte-gemuesesosse.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-ofengemuese-mit-feta", "Ofengemüse mit Feta", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\ofengemuese-mit-feta.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-one-pot-nudeln-20-minuten", "One pot nudeln 20 minuten", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\one-pot-nudeln-20-minuten.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-orangen-kokos-morgenmocktail", "Orangen kokos morgenmocktail", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\orangen-kokos-morgenmocktail.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-paneer-selber-machen", "Paneer selber machen", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\paneer-selber-machen.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-pizza-schnecken-blaetterteig", "Pizza schnecken Blätterteig", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\pizza-schnecken-blaetterteig.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-ricotta-selber-machen", "Ricotta selber machen", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\ricotta-selber-machen.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-rote-bete-energy-juice", "Rote bete energy juice", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\rote-bete-energy-juice.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-rote-linsen-suppe", "Rote linsen suppe", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\rote-linsen-suppe.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-schoko-bananen-overnight-oats", "Schoko bananen overnight oats", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\schoko-bananen-overnight-oats.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-suesskartoffel-bowl", "Süßkartoffel bowl", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\suesskartoffel-bowl.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-tomatensuppe-aus-dem-ofen", "Tomatensuppe aus dem ofen", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\tomatensuppe-aus-dem-ofen.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["r-wohltuendes-salz-fussbad", "Wohltuendes salz Fußbad", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\wohltuendes-salz-fussbad.html", "a": "planned", "note": "Lokale Datei (Prüfung 23.09.2026). Live-Status: TODO prüfen."}],
 ["shl-gal", "Rezepte-Bildergalerie", "shl-rez", {"f": "Smart Health Living\\SHL Html\\SHL-Pruefung-2026-09-23\\rezepte-bildergalerie.html", "na": 1}],
 ["biz3", "Digitale Produkte mit hohen Margen", "biz", {"f": "Smart Remote Life\\SRL Business Blog\\SRL Businessblog Hauptseite\\digitale-produkte-hohe-margen.html", "note": "Lokale Datei gefunden, aber keine Notion-Seite/URL – TODO: prüfen."}],
 ["ggl", "Google-Verifizierungsdatei", "law", {"s": "live", "f": "Smart Remote Life\\SRL Allgemein  Hauptseite\\googlec31cca45bf4c43e2.html", "na": 1}]
].forEach(a=>PAGES.push(P(...a)));
PAGES.forEach(p=>{if(["mne", "prt", "alb", "hrv", "bgr", "rou", "grc", "shl-gmd"].includes(p.id))p.a='planned'});
PARTNERS.find(x=>x.id=='nh').note='Noch nicht offizieller Partner; Aktivierung nach Gewerbe-/Steueranmeldung.';

// ===== Links & Partner aus Excel „Mappe1“ + Nachricht vom 04.10.2026 (Login-E-Mails bewusst NICHT übernommen) =====
const GET=id=>PARTNERS.find(x=>x.id==id),DS='https://www.digistore24-app.com/app/de/affiliate/account/marketplace/all',
AZ_T='https://amzn.eu/d/020JqxKQ',AZ_R='https://amzn.eu/d/09VvJtL7',AZ_B='https://amzn.eu/d/03uQCVTD';
ASSIGN.forEach(a=>{if(a.partner=='az'){if(a.page=='tik'||a.page=='hom')a.cl=AZ_T;if(a.page.startsWith('shl'))a.cl=AZ_R}});
ASSIGN.push(Object.assign(A('biz','az',1,'Storefront Business'),{cl:AZ_B}));
Object.assign(GET('az'),{cl:null,dl:'https://partnernet.amazon.de/p/reporting/earnings',more:[['Storefront Rezepte',AZ_R],['Storefront Technik',AZ_T],['Storefront Business',AZ_B]],note:'Dashboard = Provisionsübersicht (Partnernet).'});
GET('tm').cl='https://temu.to/k/epncbvrw2zz';
GET('lv').dl='https://www.lavavitae.com/login';
GET('tou').dl='https://mytouchstoneoffice.com/member/affiliate.aspx';
GET('mc').dl='https://work.mercor.com/explore';
GET('rm').dl='https://remotive.getrewardful.com/login';
Object.assign(GET('ft'),{network:'Digistore24',dl:DS,note:'Programmseite: https://bohle-digital.de/affiliates.html'});
Object.assign(GET('nh'),{network:'Digistore24',dl:DS,cl:'https://www.fabiankowallikacademy.de/start/entgiftung-und-darmsanierung-masterclass/#aff=tiramcreations',more:[['Gesundheitscoach Masterclass','https://www.fabiankowallikacademy.de/start/gesundheitscoach-masterclass/#aff=tiramcreations'],['Eat Clean Or Die','https://www.fabiankowallikacademy.de/start/eat-clean-or-die-der-video-kochkurs/#aff=tiramcreations']],note:'Noch nicht offizieller Partner; Aktivierung nach Gewerbe-/Steueranmeldung. Kundenlink = Entgiftung & Darmsanierung Masterclass.'});
PARTNERS.push(
{id:'nm',name:'Nomadenmaster (Exit Masterplan)',network:'Digistore24',cl:null,dl:DS,s:'planned',proj:'srl',note:'In Excel gelistet (nomadmaster.de/exit-masterplan), keiner Seite zugeordnet – TODO: prüfen.'},
{id:'fm',name:'Fairment',network:TODO,cl:null,dl:'https://shop.fairment.de/pages/b2b-registrierung',s:'planned',proj:'shl',note:'Aus Excel (B2B-Registrierung) – keiner Seite zugeordnet, TODO: prüfen.'},
{id:'sk',name:'Skool',network:'Skool-Affiliateprogramm',cl:null,dl:'https://www.skool.com/affiliate-program',s:'planned',proj:'srl',note:'Aus Excel – Zuordnung TODO.'});
const SRL=PAGES.find(p=>p.id=='srl'),SCL=PAGES.find(p=>p.id=='scl');
SRL.ext=[['Pinterest-Profil','https://de.pinterest.com/SmartRemoteLife/'],['Tailwind (Pin-Scheduler)','https://www.tailwindapp.com/dashboard/v2/advanced-scheduler/pinterest']];
SCL.ext=[['Pinterest-Profil','https://de.pinterest.com/SmartCleanLiving/']];

// ===== POPUPS: je Seite erfassen, was vorhanden/geplant ist. type: affiliate|newsletter · s: live|planned|missing(=prüfen) · inh=1 => gilt auch für Unterseiten · src = woher die Angabe stammt =====
const POPUPS=[
{page:'eu',type:'affiliate',title:'Mobile Affiliate-Popups',partners:['dc','st'],s:'missing',src:'Notion',note:'Notion: eingebunden. Lokale Datei v7 (13.08.2026): Banner und sticky Werbespalte, aber kein Popup-Code gefunden – prüfen.'},
...['mne','prt','alb','hrv','bgr','rou','grc'].map(id=>({page:id,type:'affiliate',title:'Mobile Affiliate-Popups',partners:[],s:'missing',src:'HTML-Prüfung 04.10.2026',note:'Lokale Datei enthält keinen Popup-Code. TODO: festlegen, ob/welches Popup.'})),
{page:'dfw',type:'affiliate',title:'Mobile Affiliate-Popups',partners:['px','st'],s:'live',inh:1,src:'Notion (lokale Datei nicht geprüft)'},
{page:'hom',type:'affiliate',title:'Mobile Affiliate-Popups',partners:['az','tm'],s:'live',src:'Notion (lokale Datei nicht geprüft)'},
{page:'tik',type:'affiliate',title:'Mobile Affiliate-Popups',partners:['az','tm'],s:'live',src:'Notion (lokale Datei nicht geprüft)'},
{page:'rjf',type:'affiliate',title:'Mobile Affiliate-Popups',partners:['rm','rr'],s:'live',src:'Notion (lokale Datei nicht geprüft)'},
{page:'shl',type:'newsletter',title:'Newsletter-Popup (9-Wochen-Detox- & Energie-Plan)',partners:[],s:'planned',inh:1,src:'Notion (SHL-Masterstandard)',note:'Ein einheitliches Popup für alle SHL-Seiten.'}
];

// ===== SHL-Newsletter: Bestätigung leitet aktuell auf Smart Remote Life (Brevo-Einstellung) – Stand 05.10.2026 =====
Object.assign(PAGES.find(p=>p.id=='shl-nl'),{next:'Brevo: eigenes Anmeldeformular + eigenes Double-Opt-in-Template + Weiterleitung auf SHL-Bestätigungsseite einrichten; SHL-Popup darauf umstellen',note:'Problem: Nach der Bestätigungs-E-Mail landet man auf Smart Remote Life statt auf Smart Health Living (Brevo-Setup des Popups gehört zu SRL).'});
[['shl-nl-b','Newsletter – Bitte bestätigen (SHL)','shl-nl',{s:'missing',na:1,note:'Lokal keine Datei vorhanden – TODO: erstellen.'}],
 ['shl-nl-ok','Newsletter – Bestätigt (SHL)','shl-nl',{s:'missing',na:1,note:'Lokal keine Datei vorhanden – TODO: erstellen; Ziel der Bestätigungs-Weiterleitung.'}]].forEach(a=>PAGES.push(P(...a)));

// ===== ENGLISCHE VERSION – vorerst NUR Remote Jobs (Entscheidung 05.10.2026). need=1: braucht Übersetzung · twin = Gegenstück in der anderen Sprache =====
const TW=[['rj','rj-en','Remote Jobs (EN hub)','en1'],['rjf','rjf-en','Find Remote Jobs','rj-en'],['rj3','rj3-en','3 Best Remote Job Sites','rj-en'],['rj5','rj5-en','5 Best Remote Job Sites','rj-en'],
['rj7','rj7-en','7 or 10 Best Remote Job Sites','rj-en'],['rjm','rjm-en','Provider: Mercor','rj-en'],['rjfx','rjfx-en','Provider: FlexJobs','rj-en'],['rjr','rjr-en','Provider: Remote Rocketship','rj-en']];
TW.forEach(([de,en,name,par])=>{const d=PAGES.find(p=>p.id==de);d.need=1;d.twin=en;
 PAGES.push(P(en,name,par,{lang:'en',twin:de,note:'Englische Version – TODO: URL und Datei festlegen.'}));
 ASSIGN.filter(a=>a.page==de).forEach(a=>ASSIGN.push({...a,page:en}))});
POPUPS.push({page:'rjf-en',type:'affiliate',title:'Mobile Affiliate-Popups',partners:['rm','rr'],s:'planned',src:'Spiegel der deutschen Seite'});

// ===== Englische Seite „Find Remote Jobs“ fertig übersetzt (10.10.2026) + Popup-Prüfung der deutschen Seite =====
Object.assign(PAGES.find(p=>p.id=='rjf-en'),{u:B+'find-remote-jobs.html',f:'Smart Remote Life\\SRL Remote Jobs Blog\\Blog Remote - remote-jobs-finden\\find-remote-jobs.html',next:'Dateien gemeinsam hochladen und Live-Links prüfen',note:'Englische Version fertig; Banner/Slide-in aus deutscher Remote-Seite übernommen; hreflang de/en gesetzt.'});
POPUPS.splice(POPUPS.findIndex(x=>x.page=='rjf-en'),1);
Object.assign(POPUPS.find(x=>x.page=='rjf'),{title:'Remotive-Popup',partners:['rm'],s:'missing',src:'Notion / HTML-Prüfung 10.10.2026',note:'Notion nennt Popups für Remotive und Rocketship. In der HTML-Datei gibt es nur den Rocketship-Slide-in, für Remotive nur Banner – prüfen.'});
POPUPS.push({page:'rjf',type:'affiliate',title:'Rocketship Slide-in (erscheint beim Scrollen zu „Wo finde ich seriöse Remote Jobs?“, einmal pro Sitzung)',partners:['rr'],s:'live',src:'HTML-Prüfung 10.10.2026'},
{page:'rjf-en',type:'affiliate',title:'Rocketship Slide-in (EN)',partners:['rr'],s:'planned',src:'in find-remote-jobs.html enthalten, noch nicht hochgeladen'});
