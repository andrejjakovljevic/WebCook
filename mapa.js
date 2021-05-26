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
    uspesno_dodat: "Recept uspesno dodat!"
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
    uspesno_dodat: "Recipe succesfully added!"
}

let reci=null;

function setupLanguage()
{
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

