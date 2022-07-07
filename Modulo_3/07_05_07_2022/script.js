// Object methods ----------------FATTO----------------
// Dato un oggetto prodotto come quello dell'esempio calcoliamo il costo della variante
// con tutti gli addon attivi facendo la somma di tutti i values dentro product.addons.
// Usiamo Object.values per ottenere i costi aggiuntivi da sommare al product.price.

(() => {
  const product = {
    id: 1,
    name: "TV",
    price: 40,
    addons: {
      decoder: 10,
      qled: 40,
      stereo: 20,
    },
  };

  const addonsArr = Object.values(product.addons);
  console.log(addonsArr);

  let sum = 0;
  addonsArr.forEach((val) => (sum += val));

  console.log(sum + product.price);
})();

// Get/Set ----------------FATTO 06/07----------------
// 1) Implementare una grafica semplice prendendo come spunto[questo shop](https://xd.adobe.com/spec/3409f0fd-25f1-4668-428f-d25447f00e7b-4238/screen/d3fb646d-a698-4eea-bb8e-91be0b0ae011/ ).
//     La pagina deve comprendere:
// - Lista di prodotti che vengono mostrati. (Possiamo gestire quelli nascosti sia non
//     stampandoli che aggiungendo una classe per applicare un display: none);
// - Paginazione con 3 bottoni per le pagine: (1,2,3).
// - La parte con i filtri possiamo non implementarla al momento

// 2) Partendo dal codice in calce:
// - Scrivere il codice che permette al click su un bottone della paginazione di cambiare
//     shop.page;
// - Implementare il setter per la prop shop.page;
// - Implementare renderHTML in modo da usarla quando necessario aggiornare il contenuto
//     della pagina;
// - Gestire la paginazione, si consiglia di farlo dentro il getter di shop.products.

const getProductHTML = (product) => {
  const { name, img, brand, id } = product;
  return `<li id="${id}"><img src="${img}" class="product_img">
    <h5 class="brand">${brand}</h5>
    <p class="product_title">${name}</p>`;
  //<p class="product_price">${price}€</p></li>;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 0, // pagina corrente
  _per_page: 2, // numero di risultati per pagina
  _id: 0,

  // get prodLength() {
  //   return this._products.length;
  // },

  get getProducts() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     **/
    const indexOfLastPost = (this._page + 1) * this._per_page;
    const indexOfFirstPost = indexOfLastPost - this._per_page;
    console.log(
      `Stai leggendo i prodotti di ${
        this.name
      } da indice ${indexOfFirstPost} a ${indexOfLastPost - 1}`
    );

    const paginatedProducts = this._products.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return paginatedProducts;
  },

  get getPrice() {
    alert(
      `Super prezzo di oggi: ${
        this._products[this._id].price
      }€, Occhio! ne sono rimasti solamente ${this._products[this._id].stock}`
    );
  },

  /**
   * @param {number} id
   */
  set idValue(id) {
    this._id = id;
  },

  /**
   * @param {any[]} newProducts
   */
  set setProducts(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * */

    this._products = newProducts;
    this.renderHTML();
  },

  /**
   * @param {number} newPage
   */
  set setPage(newPage) {
    /**
     * Aggiorniamo la pagina corrente.
     * Sarà che dobbiamo aggiornare il DOM anche qui?
     **/
    this._page = newPage;
    console.log(`Pagina ${this._page + 1}`);
    this.renderHTML();
  },

  renderHTML() {
    /**
     * Aggiorniamo il DOM stampando i risultati a schermo.
     * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
     * con una struttura del genere
     * <body>
     *  div.shop -> aggiornato ad ogni chiamata della funzione
     *  div.pagination -> questo non si tocca mai
     * </body
     * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
     **/
    const productsEl = document.body.querySelector(".products");
    const productsHTML = this.getProducts.map(getProductHTML).join("");
    productsEl.innerHTML = `
              <h2>Offerte lampo</h2>
              <ul>${productsHTML}</ul>
          `;
  },
};

const $buttonPages = document.querySelector(".page_btns");

$buttonPages.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const $button = event.target;
    const newPage = Number($button.id);
    shop.setPage = newPage;
  }
});

const $productsContainer = document.querySelector(".products");

$productsContainer.addEventListener("click", (event) => {
  if (event.target.closest("li")) {
    shop.idValue = event.target.closest("li").id;
    shop.getPrice;
  }
});

shop.setProducts = [
  {
    id: 0,
    brand: "Apple",
    name: "Iphone 8",
    price: 800,
    stock: 5,
    img: "https://images.eprice.it/nobrand/0/hres/221/204024221/DAM204024221-0-8112ba83-b128-4adb-810a-6525974f9e7b.jpg",
  },
  {
    id: 1,
    brand: "Samsung",
    name: "Galaxy S8",
    price: 700,
    stock: 4,
    img: "https://www.telaccomodo.it/wp-content/uploads/2017/01/galaxy-s8.jpg",
  },
  {
    id: 2,
    brand: "Nintendo",
    name: "Nintendo Switch Lite",
    price: 199,
    stock: 6,
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    brand: "Samsung",
    name: "TV UHD 4K Flat Smart 55'' Serie 6 MU6400",
    price: 899,
    stock: 2,
    img: "https://images.samsung.com/is/image/samsung/it-uhd-mu6400-ue55mu6400uxzt-frontsilver-65042273?$330_330_JPG$",
  },
  {
    id: 4,
    brand: "Sony",
    name: "Xperia Mini",
    price: 129,
    stock: 7,
    img: "https://m.media-amazon.com/images/I/41gUqyDwgWL._AC_.jpg",
  },
  {
    id: 5,
    brand: "Sony",
    name: "Xperia P",
    price: 189,
    stock: 3,
    img: "https://m.media-amazon.com/images/I/61sA+aWVWFL._AC_SL1148_.jpg",
  },
];

// const btns_div = document.body.querySelector(".page_btns");

// for (let x = 0; x < productsArr.length / 2; x++) {
//   btns_div.createElement("button");
//   btns_div.querySelectorAll("button").classList.add("page_btn");
// }

// const pageButtons = document.body.querySelectorAll("page_btn");

// let temp = 0;
// pageButtons.forEach((button) => {
//   btns_div.innerHTML += button;
//   button.addEventListener("click", () => {
//     shop.setPage = button.getAttribute("id");
//     setAttribute(id, temp);
//     temp++;
//   });
// });

// console.log(shop);
// console.log(prodLength);
