//Esercizio 1

function sum_mk1(num1, num2) {
  console.log("sum: ", num1, "+", num2, "=", num1 + num2);
}

sum_mk1(1, 3);
console.log("--------------------");

//Esercizio 2

function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2))
    console.log("Non hai inserito almeno un numero!");
  else console.log("sum: ", num1, "+", num2, "=", num1 + num2);
}

sum("r", 2);
sum(2, 5);
console.log("--------------------");

//Esercizio 3

function sub(num1, num2) {
  if (isNaN(num1) || isNaN(num2))
    console.log("Non hai inserito almeno un numero!");
  else console.log("sub: ", num1, "-", num2, "=", num1 - num2);
}

sub(8, "%");
sub(7, 3);
console.log("--------------------");

function mult(num1, num2) {
  if (isNaN(num1) || isNaN(num2))
    console.log("Non hai inserito almeno un numero!");
  else console.log("mult: ", num1, "*", num2, "=", num1 * num2);
}

mult("g", 4);
mult(6, 7);
console.log("--------------------");

function ratio(num1, num2) {
  if (isNaN(num1) || isNaN(num2))
    console.log("Non hai inserito almeno un numero!");
  else if (num2 === 0) console.log("Non puoi dividere un numero per zero!");
  else console.log("ratio: ", num1, "+", num2, "=", num1 / num2);
}

ratio(4, "/");
ratio(2, 0);
ratio(5, 2);
console.log("--------------------");

//Esercizio 4

function operation(op, n1, n2) {
  return op(n1, n2);
}

operation(sum, 3, 6);
console.log("--------------------");
operation(sub, 5, 2);
console.log("--------------------");
operation(mult, 2, 4);
console.log("--------------------");
operation(ratio, 10, 3);
