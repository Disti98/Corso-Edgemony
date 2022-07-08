const $srcForm = document.querySelector(".src_form");
const $srcInput = document.querySelector(".src_input");
const $resultList = document.querySelector(".result_list");

const BASE_API_URL = "https://openlibrary.org/search.json?q=";

$srcForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = $srcInput.value;
  const srcFormatted = inputValue.replaceAll(" ", "+");
  const apiURL = `${BASE_API_URL}/${srcFormatted}`;
  $srcInput.value = "";

  fetch(apiURL)
    .then((response) => {
      console.log({ response });
      const json = response.json();
      console.log({ json });
      return json;
    })
    .then((json) => {
      console.log(json);
      $resultList.innerHTML = json.docs
        .map((doc) => {
          return `<li class="element">
                    <img src="https://picsum.photos/100/150?${doc.title}">
                    <span class="book_title">${doc.title}</span>
                  </li>`;
        })
        .join("");
    })
    .catch((err) => {
      console.error(err);
      $resultList.innerHTML = `<li class="element_err">
                                   C'è stato un piccolo errore, riprovare!
                               </li>`;
      return [];
    })
    .finally(console.log);
});
