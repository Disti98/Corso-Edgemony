// Sulla base dell'esercitazione del giorno, creare una pagina che mostri una navbar. Questa deve visualizzare:

// - Un nome utente, preso da prompt salvi sul localStorage
// - Lo stesso nome sarà visualizzato all'interno di questa navbar come testo
// - Gli elementi HTML utilizzati dovranno essere dichiarati via JavaScript
// - Bisogna fare un controllo (try) sul nome utente stesso, se non presente nel localStorage allora mostri un errore in console, e successivamente aggiunto (catch)

const newEl = (el) => document.createElement(el);
const body = document.body;
const navbar = newEl("nav");
navbar.className = "main_navbar";

const userName = prompt("Ciao! Inserisci il tuo nome utente:");

//Punti 1 e 2
// localStorage.setItem("username", userName);
// navbar.append(`Bentornato ${userName}!`);
// body.append(navbar);

try {
  if (localStorage.getItem("username") === userName) {
    navbar.append(`Ciao ${userName}, bentornato!`);
    body.append(navbar);
  } else throw Error("Utente non registrato!");
} catch (error) {
  console.log(error);
  localStorage.setItem("username", userName);
  navbar.append(`Ciao ${userName}, benvenuto. Sei stato registrato!`);
  body.append(navbar);
}
