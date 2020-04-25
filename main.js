//brojevi od 1 do 9 sa preuzetim id-om i unetim eventima 

var broj7 = document.getElementById('broj7');
broj7.addEventListener('click', unesi);
var broj8 = document.getElementById('broj8');
broj8.addEventListener('click', unesi);
var broj9 = document.getElementById('broj9');
broj9.addEventListener('click', unesi);
var broj4 = document.getElementById('broj4');
broj4.addEventListener('click', unesi);
var broj5 = document.getElementById('broj5');
broj5.addEventListener('click', unesi);
var broj6 = document.getElementById('broj6');
broj6.addEventListener('click', unesi);
var broj1 = document.getElementById('broj1');
broj1.addEventListener('click', unesi);
var broj2 = document.getElementById('broj2');
broj2.addEventListener('click', unesi);
var broj3 = document.getElementById('broj3');
broj3.addEventListener('click', unesi);
var broj0 = document.getElementById('broj0');
broj0.addEventListener('click', unesi);


//funkcija koja unosi vrednost svakog elementa
function unesi() {
    calc.display.value += this.value;
}

//funckija za deljenje
var deljeno = document.getElementById('deljeno');
deljeno.addEventListener('click', unesiDeljeno);

function unesiDeljeno() {
    calc.display.value += '/';
}

//funckija za mnozenje
var puta = document.getElementById('puta');
puta.addEventListener('click', unesiPuta);

function unesiPuta() {
    calc.display.value += '*';
}
// Za minus,plus i tacku su iste funkcije kao i sa brojevima jer nista ne rade, samo dodaju vrednosti
var minus = document.getElementById('minus');
minus.addEventListener('click', unesi);
var plus = document.getElementById('plus');
plus.addEventListener('click', unesi);
var tacka = document.getElementById('tacka');
tacka.addEventListener('click', unesi);

//Jednako, treba da se izracuna ono sto je na display-u
var jednako = document.getElementById('jednako');
jednako.addEventListener('click', izracunaj);

function izracunaj() {
    if (calc.display.value != '')
        calc.display.value = eval(calc.display.value);
    else(calc.display.value = "Unesi neki broj");
}

//Brise se ono sto je na display-u, odnosno stavlja se prazan string
var c = document.getElementById('c');
c.addEventListener('click', ponisti);

function ponisti() {
    calc.display.value = '';
}