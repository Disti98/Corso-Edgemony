// --- Esercizi

// Creare un piccolo divCounter
// Partiamo dal solo body in HTML
// - fatto - Generiamo da JS due bottoni ed un DIV
// - fatto - Inseriamo gli elementi a schermo
// - fatto - Ne div avremo sempre a schermo lo stato del nostro divCounter ("1" oppure "2" oppure "3", ...)
// - fatto - Aggiungere al primo bottone la funzionalità di incremento
// - fatto - Aggiungere al secondo bottone la funzionalità di decremento

// Bonus:
// - fatto - mettiamo un limite di decremento a 0
// - fatto - mettiamo un limite di incremento a 10

// Super bonus:
// -  fatto - Rimuovere il codice duplicato

(function () {
  const $body = document.body;
  const $buttonDecrease = document.createElement("button");
  const $divCounter = document.createElement("div");
  const $buttonIncrease = document.createElement("button");

  $divCounter.innerText = 0;
  $buttonDecrease.innerText = "Decrease";
  $buttonIncrease.innerText = "Increase";
  $body.append($buttonDecrease, $divCounter, $buttonIncrease);

  $body.style = "display: flex; gap: 20px";
  $divCounter.style = "border: 1px solid black; padding:0px 20px";

  $buttonDecrease.addEventListener("click", () => {
    if ($divCounter.innerText > 0) {
      $divCounter.innerText--;
    }
  });
  $buttonIncrease.addEventListener("click", () => {
    if ($divCounter.innerText < 10) {
      $divCounter.innerText++;
    }
  });
})();
