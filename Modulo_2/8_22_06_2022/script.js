const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

//.forEach

//Esercizio 1.1
const actionFn = (element) => console.log(element);
array1.forEach(actionFn);

console.log("____________________");

//Esercizio 1.2
array1.forEach((element, index) => {
  setTimeout(() => {
    console.log(`Dopo ${element * index}s: ${element}`);
  }, 1000 * element * index);
});

//.filter

//Esercizio 2.1
const showEven = (element) => element % 2 === 0;
console.log(array1.filter(showEven));

console.log("____________________");

//Esercizio 2.2
const array2 = [10, 1, 2, 5, 6];
const sameCheck1 = (element) => array2.includes(element);
console.log(array1.filter(sameCheck1));

console.log("    -----------    ");

const sameCheck2 = (element) => array2.indexOf(element) > -1;
console.log(array1.filter(sameCheck2));

console.log("____________________");
