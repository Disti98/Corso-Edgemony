// Spread:
// 1) scrivere una funzione che unisce le proprietà di due oggetti

(() => {
  const obj1 = { foo: "bar" };
  const obj2 = { name: "Antonino" };

  function objConcat(objFirst, objSecond) {
    return { ...objFirst, ...objSecond };
  }

  console.log(objConcat(obj1, obj2));
})();

// 2) Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line

(() => {
  const obj1 = { foo: "bar" };
  const obj2 = { name: "Antonino" };
  const obj3 = { surname: "Di Stefano" };

  function objConcat(objFirst, objSecond, objThird) {
    return { ...objFirst, ...objSecond, ...objThird };
  }

  console.log(objConcat(obj1, obj2, obj3));
})();

// Destructuring:
// 1) Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array, usando il destructuring per prendere la length

(() => {
  const array = [
    "Lorem ipsum dolor sit amet.",
    "Lorem",
    "Placeholder",
    "Template",
    "Rickroll lmao got 'em",
    "supercalifragilistichespiralidoso",
  ];
  console.log(array);
  const logTenCharOnly = array.filter(({ length }) => length >= 10);

  console.log(logTenCharOnly);
})();

// Get/Set
// Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:

// - leggere _products nel getter
// - sovrascrivere _products nel setter
// - contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body

(() => {
  const shop = {
    _products: [],
    get getProducts() {
      return this._products;
    },

    // set per sovrascrivere prodotto tramite id
    /**
     * @param {{ id: number; name: string; price: number; }} value
     */
    set setProducts(value) {
      this._products = this._products.map((el) =>
        el.id === value.id ? value : el
      );
    },

    //set per inserire nuovo prodotto
    /**
     * @param {{ id: number; name: string; price: number; }} value
     */
    set setNewProducts(value) {
      this._products = [...this._products, value];
    },
  };

  shop.setNewProducts = { id: 1, name: "TV", price: 40 };
  shop.setNewProducts = { id: 2, name: "PC", price: 30 };
  shop.setNewProducts = { id: 3, name: "Microwave", price: 25 };
  console.log(shop.getProducts);

  shop.setProducts = { id: 1, name: "Toaster", price: 20 };
  console.log(shop.getProducts);

  document.body.innerHTML = `
<ul class="product_list">
<li>${shop.getProducts[0].name} - ${shop.getProducts[0].price}€</li>
<li>${shop.getProducts[1].name} - ${shop.getProducts[1].price}€</li>
<li>${shop.getProducts[2].name} - ${shop.getProducts[2].price}€</li>
</ul>
`;
})();
