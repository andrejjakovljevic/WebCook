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
    posalji: "Posalji"
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
    posalji: "Send"
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