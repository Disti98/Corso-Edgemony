const namesList = ["Luca", "Gabriele", "Roberto", "Giuseppe", "Francesco"];

//Esercizio 1
const namesOrder = (name, i, list) => `${i + 1} - ${name}`;
const namesOrdered = namesList.map(namesOrder);
console.log(namesOrdered);

//Esercizio 2
const indexReverse = (name, i, list) => list.length - 1 - i;
const indexReverted = namesList.map(indexReverse);
console.log(indexReverted);

//Esercizio 3
const nameReverse = (name, i, list) => {
  const listReverted = list[list.length - 1 - i];
  return listReverted;
};
const namesReverted = namesList.map(nameReverse);
console.log(namesReverted);
