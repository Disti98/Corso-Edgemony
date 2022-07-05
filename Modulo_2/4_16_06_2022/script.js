//const firstNum = prompt("Inserisci il primo numero:");
//const operationChoice = prompt(
//  "Inserisci il simbolo dell'operazione desiderata:"
//);
//const secondNum = prompt("Inserisci il secondo numero:");

//function intParsing(num) {
//  const parsedNum = parseInt(num);

//  return parsedNum;
//}

//const parsedFirstNum = intParsing(firstNum);
//console.log(parsedFirstNum);

//const parsedSecondNum = intParsing(secondNum);
//console.log(parsedSecondNum);

//function sum() {
//  const num1 = parsedFirstNum;
//  const num2 = parsedSecondNum;
//  return num1 + num2;
//}

//function sub() {
//  const num1 = parsedFirstNum;
//  const num2 = parsedSecondNum;
//  return num1 - num2;
//}

//function mult() {
//  const num1 = parsedFirstNum;
//  const num2 = parsedSecondNum;
//  return num1 * num2;
//}

//function div() {
//  const num1 = parsedFirstNum;
//  const num2 = parsedSecondNum;
//  return num1 / num2;
//}

//if (firstNum.length === 0 || secondNum.length === 0) {
//  console.log("Non hai inserito un numero");
//} else {
//}

//switch (operationChoice) {
//  case "+":
//    console.log("Il risultato della tua operazione è:", sum());
//    break;
//  case "-":
//    console.log("Il risultato della tua operazione è:", sub());
//    break;
//  case "*":
//    console.log("Il risultato della tua operazione è:", mult());
//    break;
//  case "/":
//    console.log("Il risultato della tua operazione è:", div());
//    break;
//  default:
//    console.log("Non hai selezionato alcuna operazione.");
//}

//VERSIONE MIGLIORATA

function calculator() {
  const numOne = Number(prompt("Inserisci il primo numero"));
  console.log(numOne);
  const operation = prompt("Inserisci il simbolo di un'operazione");
  console.log(operation);
  const numTwo = Number(prompt("Inserisci il secondo numero"));
  console.log(numTwo);
  let result = 0;

  switch (operation) {
    case "+":
      result = numOne + numTwo;
      break;
    case "-":
      result = numOne - numTwo;
      break;

    case "*":
      result = numOne * numTwo;
      break;

    case "/":
      result = numOne / numTwo;
      break;

    default:
      console.log("default");
  }
  return "Il risultato finale è: " + result;
}

console.log(calculator());
