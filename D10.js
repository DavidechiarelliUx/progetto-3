/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let num1 = 10;
let num2 = 20;

let sum = num1+num2;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random()*21);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name : "Davide",
  surname: "Chiarelli",
  age: 24,
};

console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills= ["html", "javascript", "css", "react"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("next.js");

console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice (){

  let casualNum = Math.floor(Math.random()* 7);

  return casualNum;
}
dice();
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1,num2){

  if (num1 > num2){
    console.log(num1);
  }else if(num1 < num2){
    console.log(num2);
  }else{
    console.log("controlla i parametri o non li hai inseriti o sono uguali 😄 :" + num1 +" " +num2);
  }
}

whoIsBigger(3);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(string){

  let arrString = string.split(" ");

  return console.log(arrString);
}

splitMe("ciao sono una stringa");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(string , bool){

  if (bool === true){

    console.log(string.slice(1));
  }else if(bool === false){

    console.log(string.slice(0,-1));
  }else{
    console.log("inserisci i parametri nel modo corretto : " + string +  " " + bool);
  }
}

deleteOne("buongiorno a tutti", false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(string){

  let createArr = string.split(" ");
  
  let newArray = [];
  
  for (let i = 0 ; i < createArr.length; i++){
    const element = createArr[i];

    let charArray = element.split("");


    let removeNum =charArray.filter(char => isNaN(char));

    let newString=removeNum.join("");

    newArray.push(newString);

  }
  let newString = newArray.join(" ");
  
  console.log(newString);
  
}
onlyLetters("ciao a tutti e 43 ho 5 animali e 3 gatti");
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail (stringa){

  if (stringa.includes("@") && stringa.includes(".")) {
    console.log("L'email è valida!");
  } else {
    console.log("L'email NON è valida!");
  }

}

isThisAnEmail("ciao@gmail.com")
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt(){

  let data = new Date();

  const giorno = data.getDay() 
  
  switch (giorno) {
    case 1:
      console.log("oggi è lunedi");
      break;
    case 2:
      console.log("oggi è martedì");
      break;
    case 3:
      console.log("oggi è mercoledì");
      break;
    case 4:
      console.log("oggi è giovedì");
      break;
    case 5:
      console.log("oggi è venerdì");
      break;
    case 6:
      console.log("oggi è sabato");
      break;
    case 7:
      console.log("oggi è domenica");
      break;
    default:
      console.log( "oggi non è giornata");
      break;
  }
}

whatDayIsIt()

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
// function dice (){

//   let casualNum = Math.floor(Math.random()* 7);

//   return casualNum;
// }
// dice();
// console.log(dice());

function rollTheDices(num){

  dice();

  let values = [];
  let sum = 0;

  for(let i = 0 ; i < num; i++){

    let num = dice();

    values.push(num);
  
    sum = sum + num;
  }

  console.log(values);
  console.log(sum);
}

rollTheDices(8);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(giornoPassato, mesePassato, annoPassato){

  let data = new Date();
  let giorno = data.getDay();
  let mese = data.getMonth();
  let anno = data.getFullYear();

  let dataPassata = new Date(annoPassato, mesePassato -1, giornoPassato);
  let giorniTrascorsi = 0;

  let tempoCorrente = data.getTime();
  let tempoPassato = dataPassata.getTime();

  let differenzaMillisecondi = tempoCorrente - tempoPassato;
  giorniTrascorsi = Math.floor(differenzaMillisecondi / (1000 * 60 * 60 * 24));

  console.log(dataPassata);
  console.log(giorno , mese , anno);

  console.log("dal giorno : " + giornoPassato + "/" + mesePassato + "/" + annoPassato + " a oggi : "+ giorno + "/" + mese +"/" + anno+ "sono passati : " + giorniTrascorsi + " giorni")
}

howManyDays(12, 12 , 2024);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(giorno, mese){

  let data = new Date();
  let giornoCorrente = data.getDate();
  let meseCorrente = data.getMonth() + 1; 
  
  if(giorno === giornoCorrente && mese === meseCorrente){
    console.log ("oggi è il mio compleanno ? " + true);
  }else{
    console.log ("oggi è il mio compleanno ? " + false + "il mio compleanno è il :" + giorno + "/" + mese);
  }

}

isTodayMyBirthday(31,12);
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let oggetto = {
  str1 : "html",
  str2 : "css",
  str3 : "javascript"
}
function deleteProp(oggetto , stringa){

  if(oggetto[stringa] !== undefined){
    delete oggetto[stringa];
  }

  console.log(oggetto)
}
deleteProp(oggetto , "str3");
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(){

  let recentMovie;
  let maxYear = 0;

  for (let index = 0; index < movies.length; index++) {
    
    const element = movies[index];
    let year = parseInt(element.Year); 
    if(year > maxYear){
      maxYear=year;
      recentMovie = element;
    }
  }
  console.log("Il film più recente è:", recentMovie);

}
newestMovie();
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies (){
  
  let numberFilm = 0;

  for (let index = 0; index < movies.length; index++) {
    const element = movies[index];

    numberFilm= numberFilm +1
    
  }
  console.log(numberFilm);
}

countMovies();

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(){

  let newArr = [];

  for (let index = 0; index < movies.length; index++) {
    const element = movies[index].Year;
    
    newArr.push(element)
  }
  console.log(newArr);
}

onlyTheYears()
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(){

  let newArr=[];

  for (let index = 0; index < movies.length; index++) {
    const element = movies[index].Year;
    const oggetto = movies[index];

    
    if(element < 2000){
      newArr.push(oggetto);
    }

  }
  console.log(newArr);
}

onlyInLastMillennium()

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(){

  let sommaYear = 0;

for (let index = 0; index < movies.length; index++) {
    const element = movies[index].Year;

    let intElement =parseInt(element);
    sommaYear= sommaYear + intElement;
  }

  console.log(sommaYear);
}
sumAllTheYears()

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(str){

  let newArr = [];

  for (let index = 0; index < movies.length; index++) {
    const element = movies[index].Title;

    if(element.includes(str)){
      newArr.push(element);
    }
    
  }
  console.log(newArr)
}

searchByTitle("Avenger");
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(str){

  let newArr= {
    macth : [],
    unmatch : [],
  };

  for(let i=0 ; i < movies.length; i++){
    const element= movies[i].Title;

    if(element.includes(str)){
      newArr.macth.push(element);
    }else{
      newArr.unmatch.push(element)
    }
  }
  console.log(newArr);
}

searchAndDivide("Avenger")
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(num){

  let newArr =[];

  for (let index = 0; index < movies.length; index++) {
    
    if(index !== num){
      newArr.push(movies[index])
    }
  }
  console.log(newArr);
}

removeIndex(3)
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

let container = document.querySelector("#container");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
let td = document.querySelectorAll("td")
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function consoleTd(){

  let td=document.querySelectorAll("td");

  td.forEach(element => {
    console.log(element.textContent);
  });
}
consoleTd()
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function allRedLink(){

  let link = document.querySelectorAll("a");

  link.forEach(element => {
    element.style.backgroundColor="red";
  })
}
allRedLink();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function newLi(stringa){

  let list = document.querySelector("#myList");
  let addLi = document.createElement("li");

  addLi.textContent=stringa;

  list.appendChild(addLi);
}
newLi("nuova lista");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function removeLi(){

  let lista= document.querySelectorAll("li");

  lista.forEach(element => {
    
    element.remove();
  });

}

removeLi();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function classTest(){

  let tr = document.querySelectorAll("tr");

  tr.forEach(element => {
    element.classList.add("test")
  })
}
classTest()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(num){

  let half = "*";
  console.log(half);
  for(let index = 0; index <= num; index++){
    half = half + "*";
    console.log(half);
  }
}
halfTree(20);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(num){

  let spazio = " ";
  let half="*"
  console.log(half);
  for(let index = 0; index <= num; index++){
    half =half + "*";
    for (let index = 0; index < num; index++) {
      spazio = spazio + " ";
      console.log(spazio + half);
    }
  }
}
tree(2);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num){

  for (let i = 2; i < num; i++) { 
    if (num % i === 0) { 
      console.log(false); 
    }
  }
  console.log(true);

}

isItPrime(21);