/* *
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */


let somma1 = 0;
let somma2 = 0;

for(let i = 0; i < 5; i++){
    somma1 = somma1 + parseInt(prompt("Inserisci numero"));
}

console.log("Somma 1: "+somma1);

let index = 0;

while(index < 5){
    somma2 = somma2 + parseInt(prompt("Inserisci numero"));
    index++;
}


console.log("Somma 2: "+somma2);


// -----------------------------------------------------------------------------------------------------




/**
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */

 listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
 listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];




 for(let i = 0; i < 8; i++){
    let lista = listaNomi[Math.floor(Math.random() * listaNomi.length)] +" "+ listaCognomi[Math.floor(Math.random() * listaCognomi.length)];
     document.getElementById("lista").innerHTML += "<li>" + lista + "</li>";
     console.log(lista);
 }


// ----------------------------------------------------------------------------------------------------------

 /**
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */



let primaLista = ["Pane","Latte","Provola","Spaghetti","Nutella","Hamburger"];
let secondaLista = ["Baccalà","Acqua","Caffè","Salmone","Peperoni","Cipolla","Petto di pollo","Ravioli"];


while(primaLista.length > secondaLista.length){
    secondaLista.push(Math.floor(Math.random() * 100) + 1);  
}
while(primaLista.length < secondaLista.length){
    primaLista.push(Math.floor(Math.random() * 100) + 1);  
}


for(let i = 0; i < primaLista.length; i++){
    document.getElementById("prima-lista").innerHTML += "<li>" + primaLista[i] + "</li>";
}

for(let i = 0; i < secondaLista.length; i++){
 document.getElementById("seconda-lista").innerHTML += "<li>" + secondaLista[i] + "</li>";
}

console.log(primaLista +" - "+secondaLista)