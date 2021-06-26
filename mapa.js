let reci_sr =
{
    poruka_dobrodoslice : "Dobrodosli u svet ukusa",
    naslov_prvi : "Ovaj sajt je napravljen specijalno za vas",
    text_na_pocetnoj : `Izabrali smo za vas najbolje recepte koji vam mogu pomoci u pripremi najrazlicitijih jela. 
    Odaberite jednu od kategorija i procitajte kako da brzo i lako napravite jelo po vasoj meri`,
    pocetna : "Pocetna",
    recepti: "Recepti",
    dodaj_recept: "Dodaj Recept",
    moj_nalog: "Moj Nalog",
    o_nama: "O Nama",
    predjelo: "Predjelo",
    glavno_jelo: "Glavno jelo",
    desert: "Dezert",
    uzina: "Uzina",
    foot: "Copyright 2021,  Andrej Jakovljević i Andrej Gobeljić, odsek za Softversko Inženjerstvo elektrotehničkog fakulteta u Beogradu",
    naslov_login: "Molimo, prijavite se na sistem",
    korisnicko: "Korisnicko ime:",
    lozinka: "Lozinka:",
    logindugme: "Prijavi se",
    ili_reg: "... ili se registruj",
    mejl: "Mejl:",
    ponlozinka: "Ponovljena lozinka:",
    regbutton: "Registruj se",
    losMejl: "Unesite validan mejl!",
    unesiteSve: "Popunite sva polja!",
    korPostoji: "Korisnik vec postoji!",
    losOblikLozinke: "Lozinka treba da sadrzi malo slovo, veliko slovo i broj!",
    razliciteLozinke: "Lozinke se ne poklapaju",
    naslov_register: "Molimo, registrujte se na sistem",
    greskaULog: "Pogresna lozinka ili korisnicko ime!",
    naslov_moj_nalog: "Moji recepti",
    naslov_dodajRecept : "Dodajte Recept",
    naslov: "Naziv jela:",
    duzina: "Duzina pripreme:",
    grupa: "Vrsta jela:",
    tezina: "Tezina pripremanja (1-5):",
    opis: "Opis pripreme:",
    dodajButton: "Dodaj Recept!",
    video: "Dodajte link videa (opciono):",
    logujte_se: "Morate prvo biti logovani!",
    uspesno_dodat: "Recept uspesno dodat!",
    naslov: "Naslov",
    duzina: "Duzina pripreme",
    tip: "Vrsta",
    izbrisi: "Izbrisi",
    naslov_o_nama: "O nama",
    text_o_nama: "U zelji da priblizimo kuvanje mladjim ljudima, a i da naucimo iskusne sefove novim trikovima, napravili smo ovaj veb sajt i omogucili svima da medjusobno razmenjuju kako tradicionalne, tako i nove kreativne recepte. Mi smo mala kompanija koja se (zanimljivo) uopste ne bavi kulinarstvom, pa smo, u nadi da cemo i sami nauciti nesto korisno, kreirali ovu slatko/slanu mrezu. Uzivajte!",
    adresa: "Adresa:",
    kontakt: "Kontakt:",
    naslov_svi_recepti: "Svi recepti",
    pregled: "Pregled",
    komentari: "Komentari",
    logout: "Odjavi se",
    vas_komentar: "Vas komentar",
    posalji: "Posalji",
    bread_moj_nalog: "Pocetna > Moj nalog",
    bread_pregled_s: "Pocetna > Pregled",
    bread_dodaj: "Pocetna > Dodaj recept",
    bread_o: "Pocetna > O nama"
};
let reci_en = 
{
    poruka_dobrodoslice : "Welcome to the world of taste",  
    naslov_prvi : "The site was made specifically for you",
    text_na_pocetnoj : `We have picked for you the best recepies that can be used to help you make wonderful dishes.
    just choose one of the categories and learn how to make the best dishes quick and easy!`,
    pocetna : "Start page",
    recepti: "Recipes",
    dodaj_recept: "Add Recipe",
    moj_nalog: "My account",
    o_nama: "About us",
    predjelo: "Antrée",
    glavno_jelo: "Main dish",
    desert: "Dessert",
    uzina: "Snack",
    foot: "Copyright 2021,  Andrej Jakovljević i Andrej Gobeljić, Software Engineering Depratment, School of Electrical Engineering of Belgrade",
    naslov_login: "Please, sign in",
    korisnicko: "Username:",
    lozinka: "Password:",
    logindugme : "Login",
    ili_reg: "... or Register",
    mejl: "Mail",
    ponlozinka: "Repeated password",
    regbutton: "Register",
    losMejl: "Enter valid e-mail!",
    unesiteSve: "Please enter text in all fields!",
    korPostoji: "User already exists!",
    losOblikLozinke: "Password has to consist of capital letters, non capital letters and numbers",
    razliciteLozinke: "Passwords don't match",
    naslov_register: "Please, register",
    greskaULog: "Bad username or password!",
    naslov_moj_nalog: "My recipes",
    naslov_dodajRecept: "Add a recipe",
    naslov: "Title of the dish:",
    duzina: "Length of preparation:",
    grupa: "Type of dish:",
    tezina: "Difficulty of preparation (1-5):",
    opis: "Description:",
    dodajButton: "Add the recipe!",
    video: "Add video url (optional):",
    logujte_se: "Please log in first!",
    uspesno_dodat: "Recipe succesfully added!",
    naslov: "Title",
    duzina: "Length of preparation",
    tip: "Type",
    izbrisi: "Delete",
    naslov_o_nama: "About us",
    text_o_nama: "With desire to bring cooking closer to younger people, and to teach old chefs some new tricks as well, we have created this website and allowed everyone to share both traditional and new creative recipes. We are a small company that (interestingly) does not deal with cooking at all, so we created this sweet / salty network in the hope that we will learn something useful ourselves. Enjoy!",
    adresa: "Address:",
    kontakt: "Contact:",
    naslov_svi_recepti: "All recipes",
    pregled: "View",
    komentari: "Comments",
    logout: "Logout",
    vas_komentar: "Your comment",
    posalji: "Send",
    bread_moj_nalog: "Start page > My account",
    bread_pregled_s: "Start page > View recipes",
    bread_dodaj: "Start page > Add a recipe",
    bread_o: "Start page > About"
}

let reci=null;
let default_recepti=[
    {
      "naslov":"Kolac sa malinama",
      "duzina":"50 min",
      "grupa":3,
      "tezina":1,
      "opis":"Mikserom umutiti jaja, šećer i vanilin šećer. Dodati kiselo mleko, ulje i sjediniti mikserom. Zatim, umešati brašno pomešano sa praškom za pecivo i lagano umutiti mikserom kako bi se svi sastojci sjedinili.\nPleh obložiti pek-papirom i usuti pripremljenu smesu.\nPreko smese rasporediti maline. Peći u dobro zagrejanoj rerni na 180 stepeni 30 minuta.\nGotov kolač izvaditi iz rerne, prakriti čistom kuhinjskom krpom i ostavitu da se prohladi.\nKolač seći na parčad željene veličine, servirati i poslužiti.",
      "url":"",
      "autor":"Le Chef",
      "komentari":[
          {
              "korisnik": "mare",
              "text": "Extra!",
              "ocena": 5
          }
      ],
      "slike":["./KolacSaMalinama.jpg"]
    },
    {
      "naslov":"Mafini sa visnjama",
      "duzina":"30 min",
      "grupa":3,
      "tezina":1,
      "opis":"Višnje očistiti od koštica i staviti u cediljku da se ocede. U kalupe za mafine staviti papirne korpice (meni je izašlo 16 mafina). Rernu uključiti na 180 stepeni.\nU vanglicu staviti jaja i dodati mešavinu šećera i vanilinog šećera. Mikserom umutiti da se dobije kremasta, svetla, smesa. Dodati mleko i ulje. Mutiti najmanjom brzinom jedan minut. Na kraju ubaciti mešavinu brašna i praška za pecivo. Umutiti.\nU pripremljene korpice za mafine staviti testo da bude popunjena 1/2 korpica. Preko testa staviti po 3-4 višnje, pa prekriti testom toliko da korpice ostanu oko 3 mm prazne. Na isti način napuniti sve korpice.\nKalup sa korpicama staviti da se peče 20-25 minuta, odnosno dok mafini ne porumene (možete da isprobate i čačkalicom da li su pečeni). Pečene mafine ostaviti da se ohlade pa ih dekorisati po želji.",
      "url":"",
      "autor":"Le Chef",
      "komentari":[
          {
              "korisnik": "stefan",
              "text": "Odlicno!",
              "ocena": 5
          }
      ],
      "slike":["./MafiniSaVisnjama.jpg"]
     },
     {
        "naslov":"Krompir lazanja",
        "duzina":"60 min",
        "grupa":2,
        "tezina":1,
        "opis":' Krompir očistite i isecite na tanke listice. Crni i beli luk iseckajte sitno pa stavite da se dinsta, kada je luk dobio zlatnu boju dodajte meso pa dinstajte zajedno. Dodati bolognese sos (teglica) i dinstajte jos 5’ pa dodajte začine (biber, so, peršun, origano). U pleh ili vatrostalnu složite 1/3 krompira pa premazete besamel sosom, preko 1/2 fila pa narendate malo kačakavalja, ponovite postupak i na kraju zatvorite krompirom koji opet premazete bešamel sosom i pospete kačakvalj. Prekrite folijom i pecite 20ak minuta na 200C, a posle otkrite i još 20k bez folije.',
        "url":"",
        "autor":"Le Chef",
        "komentari":[
          {
              "korisnik": "blabla",
              "text": "Odlicno!",
              "ocena": 5
          },
          {
              "korisnik": "tomislav",
              "text": "Sjajan predlog, zamerka na detalje, inace super!",
              "ocena": 4
          }
        ],
        "slike":["./KrompirLazanja.jpg"]
     },
     {
        "naslov":"Posni đuveč sa začinima pa još i ljut",
        "duzina":"60 min",
        "grupa":2,
        "tezina":1,
        "opis":'Prvo sam skuvala šolju graška i šolju boranije onako al dente, da ne bude prekuvano. U drugoj šerpi sam skuvala 2 krompira veća i šolju pirinča. Sve sam procedila i pomešala. Dodala sam pola tegle sataraša koji inače spremam kao zimnicu. Sataraš sadrži crni luk, beli luk, biber, paradajz i papriku i naravno začine sve uprženo na ulju. Dodala sam još jednu papriku iseckanu koju sam imala u zamrzivaču, oko dva paradajza koja sam takođe izvadila iz zamrzivača. Od začina sam stavila sve po ukusu biber, origano, bosiljak i majčinu dušicu. Naseckala još malo belog luka, dodala kašičicu karija, kašičicu ljute začinske mlevene paprike. Zaboravih, soli sam dodala po ukusu. Sve izručite u vatrostalni pekač, nalijte vodom i na 180 stepeni da se još ukrčka i zapeče malo odozgo. Imala sam i šargarepu ali sam potpuno zaboravila da je stavim. Tako... ja napravila đuveč prste da poližeš.',
        "url":"",
        "autor":"Le Chef",
        "komentari":[
          {
              "korisnik": "blabla",
              "text": "Odlicno!",
              "ocena": 5
          },
          {
              "korisnik": "tomislav",
              "text": "Sjajan predlog, zamerka na detalje, inace super!",
              "ocena": 4
          }
        ],
        "slike":["./Djuvec.jpg"]
     },
     {
        "naslov":"Posna boranija sa graškom",
        "duzina":"40 min",
        "grupa":2,
        "tezina":1,
        "opis":' Kada spremam posna jela volim da imaju što više povrća, tako je i ovo jedno od tih jela. Crni luk, koren peršuna, paškanata i celera sitno iseckati. Šargarepu iseći na polukrugove. Krompir iseći na kockice. Paradajz oljuštiti i iseći na kocke. Peršun i beli luk sitno iseckati. Ulje sipati u dublju posudu i staviti da se ugreje. Na zagrejano ulje ubaciti iseckani crni luk, šargarepu, koren peršuna, paškanata i celera. Promešati i na tihoj temperaturi dinstati 10-ak minuta. Ubaciti boraniju, grašak (boraniju i grašak sam sada koristila zamrznute, a na isti način spremam i kada je povrće sveže), krompir i paradajz. Promešati. Posuti sa alevom paprikom, promešati i naliti sa vrelom vodom. Poklopiti, ali tako da ima vrlo malo prostora da izlazi para i staviti na tihoj vatri da krčka. Kada voda provri posuti suvim biljnim začinom i biberom po ukusu. Nastaviti sa kuvanjem sve dok se čorbica ne zgusne. Nije potrebna zaprška, jer će čorbica da dobije gustinu od krompira. Pri kraju kuvanja ubaciti iseckani beli luk i peršun. Promešati i posle 1-2 minuta skloniti sa vatre. Poslužiti sa salatom po želji.',
        "url":"",
        "autor":"Le Chef",
        "komentari":[
          {
              "korisnik": "blabla",
              "text": "Odlicno!",
              "ocena": 5
          },
          {
              "korisnik": "tomislav",
              "text": "Sjajan predlog, zamerka na detalje, inace super!",
              "ocena": 4
          }
        ],
        "slike":["./PosnaBoranija.jpg"]
     },
     {
        "naslov":"Štrudla sa makom, rogačem i višnjama",
        "duzina":"80 min",
        "grupa":4,
        "tezina":1,
        "opis":' U toplom mleku sa dodatkom kašičice šećera razmrviti kvasac, promešati i ostaviti da se kvasac aktivira. U vanglicu staviti brašno, dodati šećer, so i narendanu koricu limuna pa promešati. Zatim dodati jaje, otopljeni (i prohlađeni) maslac i pripremljeni kvasac. Zamesiti testo. Testo prebaciti na pobrašnjenu podlogu i uz minimalno dodavanje brašna umesiti ga da se dobije mekano, elastično testo. Testo odmah podeliti na dva jednaka dela. Od svakog dela oblikovati krug i staviti ih (posebno) u dublju posudu. Testo prekriti providnom folijom i ostaviti da naraste. Fil: Mleveni mak, rogač šećer i rum šećer ili rum staviti u odgovarajuću posudu. Promešati i preliti sa vrelim mlekom, ali ne sipati svu količinu mleka odjedanput. Mleko sipati sve dok ne dobijete gustu smesu koja može da se razmaže po testu. Ostaviti da se ohladi. Pleh veličine 30cm x 20cm premazati maslacem i dno prekriti pek papirom. Uzeti prvi deo testa, posuti brašnom radnu površinu i testo razviti u pravougaoni oblik debljine 0,5 cm, prema plehu u kome će se peći. Preko testa ravnomerno premazati polovinu fila i preko fila rasporediti polovinu višanja (višnje prvo posuti kašičicom gustina, promešati pa ih rasporediti preko fila). Uviti testo u rolat. Bočne stranice uvući malo unutar rolata da ne bi iscureo fil prilikom pečenja. Štrudlu pprebaciti u pripremljeni pleh. Na isti način napraviti i drugu štrudlu. Na sredini pleha, između štrudli, staviti savijeni list pek papira. Na taj način će te sprečiti da vam se štrudle zalepe jedna za drugu. Štrudle prekriti kuhinjskom krpom i ostaviti pola sata da narastu. Rernu zagrejati na 180 stepeni. Narasle štrudle premazati mešavinom žumanceta i mleka (ja sam ih posula i listićima badema) i staviti da se peču 30-35 minuta. Pri kraju pečenja, ako treba, prekriti štrudle alu folijom da površina ne potamni previše. Pečene štrudle (probati čačkalicom da li su pečene) pokriti kuhinjskom krpom i ostaviti ih u plehu 10 minuta. Zatim ih iz pleha prebaciti na kuhinjske krpe, umotati ih i ostaviti da se ohlade, pa ih iseći.',
        "url":"",
        "autor":"Le Chef",
        "komentari":[
          {
              "korisnik": "blabla",
              "text": "Odlicno!",
              "ocena": 5
          },
          {
              "korisnik": "tomislav",
              "text": "Sjajan predlog, zamerka na detalje, inace super!",
              "ocena": 4
          }
        ],
        "slike":["./StrudlaSaMakom.jpg"]
     },
     {
        "naslov":"Mekana pogača sa jogurtom",
        "duzina":"30 min",
        "grupa":4,
        "tezina":1,
        "opis":' U toploj vodi sa dodatkom jedne kašičice šećera razmrviti kvasac, promešati, i ostaviti da se aktivira. Tepsiju vel. 26cm podmazati maslacem ili dno tepsije prekriti pek papirom, a stranice premazati maslacem. U vanglicu staviti brašno, dodati kašičicu šećera i soli pa promešati. Zatim dodati belance, ulje, jogurt i pripremljeni kvasac. Zamesiti testo. Testo mesiti oko dva minuta, uz minimalno dodavanje brašna. Formirati od testa oblik lopte i prebaciti ga u tepsiju. Rukama ga ispretiskati i formirati pogaču. Prekriti tepsiju kkuhinjskom krpom i ostaviti da testo naraste, oko 30 minuta. Rernu zagrejati na 180 stepeni. Naraslu pogaču (ne treba puno da naraste) premazati mešavinom žumanceta i mleka. Površinu pogače izbockati čačkalicom da se ne bi odvojila korica posle pečenja i staviti da se peče 30-35 minuta. Ako treba pogaču prekriti alu folijom da zadrži lepu boju. Pečenu pogaču umotati u kuhinjsku krpu i ostaviti da se prohladi. Izlomite je, nikako se ne seče, i poslužite.',
        "url":"",
        "autor":"Le Chef",
        "komentari":[
          {
              "korisnik": "blabla",
              "text": "Odlicno!",
              "ocena": 5
          },
          {
              "korisnik": "tomislav",
              "text": "Sjajan predlog, zamerka na detalje, inace super!",
              "ocena": 4
          }
        ],
        "slike":["./MekanaPogaca.jpg"]
     },
     {
        "naslov":"Bakina pita sa pecenkom",
        "duzina":"90 min",
        "grupa":4,
        "tezina":1,
        "opis":'Prvu koru naprskati uljem pa preko nje staviti drugu koru i nju poprskati uljem, zatim pečenku po kori, pošećeriti po ukusu (sa 2-3 kašike šećera) i vanil šećerom zatim preko posuti grizom(po 1 kašiku). Saviti koru sa obe strane malo oko 1 cm, pa uviti rolat i ređati u pleh obložen pek papirom. Peći na 200 C oko 30 minuta, dok ne porumeni. Prijatno!!!',
        "url":"",
        "autor":"Le Chef",
        "komentari":[
          {
              "korisnik": "blabla",
              "text": "Odlicno!",
              "ocena": 5
          },
          {
              "korisnik": "tomislav",
              "text": "Sjajan predlog, zamerka na detalje, inace super!",
              "ocena": 4
          }
        ],
        "slike":["./BakinaPita.jpg"]
     },
     {
      "naslov":"Milankin kolac sa visnjama",
      "duzina":"40 min",
      "grupa":3,
      "tezina":1,
      "opis":'Danas smo bili na ručku kod roditelja moje snaje. I posle obilja raznih đakonija, kako to obično bude u Vojvodini, moja prija je kazala da će nas sada poslužiti sa jednim običnim, starinskim, kolačem sa višnjama. Pošto se meni taj njen "običan" kolač toliko dopao da sam odmah zatražila recept. I da se razumemo, ovaj kolač nisam ja pravila, samo prenosim recept. Morala sam da ga slikam u ovoj prekrasnoj bašti...\nPrvo očistiti višnje od koštica i staviti ih u cediljku da se dobro ocede. Pleh veličine (unutrašnje mere) 40 cm x 24cm dobro podmazati uljem i posuti brašnom. Rernu uključiti da se zagreje na 180 stepeni.\nOdvojiti belanca od žumanaca. Belanca staviti u dublju posudu i mutiti ih dok ne pobele. Zatim, postepeno, dodavati šećer i čvrsto ih umutiti. Dodavati jedno po jedno žumance i umutiti da se dobije penasta smesa. Zatim dodati mleko i ulje i mućenjem sjediniti. Na kraju ubaciti, iz 2-3 puta, mešavinu brašna i praška za pecivo. Odložiti mikser i brašno sjediniti sa smesom kašikom.\nSipati polovinu testa u pleh i staviti da se peče samo koliko da se testo malo stegne po površini. Izvaditi pleh i gusto poređati višnje. Preliti višnje drugom polovinom testa i vratiti da se kolač ispeče do kraja (oko 30 minuta ili probati čačkalicom da li je kolač pečen). Pečeni kolač ostaviti da se ohladi pa ga posuti šećerom u prahu. Iseći kolač na kocke i poslužiti.',
      "url":"",
      "autor":"Le Chef",
      "komentari":[
        {
            "korisnik": "blabla",
            "text": "Bas je sjajan kolac, hvala Milanka!!!",
            "ocena": 5
        },
        {
            "korisnik": "tomislav",
            "text": "Sjajan predlog, zamerka na detalje, inace super!",
            "ocena": 4
        }
      ],
      "slike":["./MilankinKolacSaVisnjama.jpg"]
     }
  ]

function setupLanguage()
{
    if (localStorage.getItem('korisnik')==null)
    {
        reci_sr['logout'] = 'Prijavi se';
        reci_en['logout'] = 'Login';
    }
    if (localStorage.getItem('jezik')==null)
    {
        localStorage.setItem('jezik','srp');
    }
    if (localStorage.getItem('jezik')=='srp') reci=reci_sr;
    if (localStorage.getItem('jezik')=='eng') reci=reci_en;

    $(".flag").click(function()
    {
        localStorage.setItem('jezik',$(this).attr('id'));
        location.reload(true);
    })

    $(".text").each(function()
    {
        var id = $(this).attr('id');
        $(this).text(reci[id]);
    })
}

function setShow(x){
    localStorage.setItem('show', x);
}

function logout(){
    if(localStorage.getItem('korisnik')!=null)
        localStorage.removeItem('korisnik');
    window.open("login.html","_self");
}