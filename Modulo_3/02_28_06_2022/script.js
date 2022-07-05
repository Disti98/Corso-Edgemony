// Sulla base della lezione del giorno, riprendendo la pagina (header) di ieri:

// - Aggiunge anche un footer (magari identico all'header se volete)
// - Header e Footer devono contenere Nome Utente e il numero totale dei prodotti renderizzati
// - Aggiungere section alla pagina che renderizza delle cards: https://fakestoreapi.com/products
// - Filtro per quantità di prodotto disponisible superiore a 200
// - Stile CSS a scelta

// Avanzato
// Creare diverse sezioni, almeno 3 totali, che mostrino gli elementi in base a diversi filtri.

import { newEl, createCard, q } from "./utils.js";

const BASE_URL = "https://fakestoreapi.com/products";

const body = document.body;

const loadingEl = q(".loading");

const userName = prompt("Ciao! Inserisci il tuo nome utente:");
localStorage.setItem("username", userName);

const navbar = newEl("nav");

const filterBar = newEl("div");
filterBar.className = "filter_bar";

const countButton = newEl("button");
countButton.innerText = "200+ pz.";
const categoryButton = newEl("button");
categoryButton.innerText = "Elettronica";
const ratingButton = newEl("button");
ratingButton.innerText = "rating: 3+";

filterBar.append(countButton, categoryButton, ratingButton);

const sectionName = newEl("h2");
sectionName.className = "section_name";

const sectionMain = newEl("section");
sectionMain.className = "filtered_cards";

const footer = newEl("footer");

loadingEl.style.display = "none";

body.append(navbar, filterBar, footer);

countButton.addEventListener("click", () => {
  loadingEl.style.display = "initial";
  while (sectionMain.firstElementChild) {
    sectionMain.removeChild(sectionMain.lastElementChild);
  }
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      sectionName.innerText = `Scorte sopra i 200 pezzi`;
      const countList = data
        .sort((a, b) => a.rating.count - b.rating.count) //sort count ascendant
        .filter((product) => product.rating.count >= 200)
        .map((product) => {
          createCard(
            sectionMain,
            product.image,
            product.title,
            product.price,
            product.rating.rate,
            product.rating.count
          );
        });
      navbar.innerText = `Bentornato ${userName}! Pezzi: ${countList.length}`;
      footer.innerText = `Bentornato ${userName}! Pezzi: ${countList.length}`;
    })
    .then(() => {
      loadingEl.style.display = "none";
      body.append(navbar, filterBar, sectionName, sectionMain, footer);
    });
});

categoryButton.addEventListener("click", () => {
  loadingEl.style.display = "initial";
  while (sectionMain.firstElementChild) {
    sectionMain.removeChild(sectionMain.lastElementChild);
  }
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      sectionName.innerText = `Categoria: Elettronica`;
      const categoryList = data
        .sort((a, b) => {
          //sort A-Z
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        })
        .filter((product) => product.category === "electronics")
        .map((product) => {
          createCard(
            sectionMain,
            product.image,
            product.title,
            product.price,
            product.rating.rate,
            product.rating.count
          );
        });
      navbar.innerText = `Bentornato ${userName}! Pezzi: ${categoryList.length}`;
      footer.innerText = `Bentornato ${userName}! Pezzi: ${categoryList.length}`;
    })
    .then(() => {
      loadingEl.style.display = "none";
      body.append(navbar, filterBar, sectionName, sectionMain, footer);
    });
});

ratingButton.addEventListener("click", () => {
  loadingEl.style.display = "initial";
  while (sectionMain.firstElementChild) {
    sectionMain.removeChild(sectionMain.lastElementChild);
  }
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      sectionName.innerText = `Prodotti 3+ rating`;
      const ratingList = data
        .sort((a, b) => a.rating.rate - b.rating.rate) //sort rate ascendant
        .filter((product) => product.rating.rate >= 3)
        .map((product) => {
          createCard(
            sectionMain,
            product.image,
            product.title,
            product.price,
            product.rating.rate,
            product.rating.count
          );
        });
      navbar.innerText = `Bentornato ${userName}! Pezzi: ${ratingList.length}`;
      footer.innerText = `Bentornato ${userName}! Pezzi: ${ratingList.length}`;
    })
    .then(() => {
      loadingEl.style.display = "none";
      body.append(navbar, filterBar, sectionName, sectionMain, footer);
    });
});
