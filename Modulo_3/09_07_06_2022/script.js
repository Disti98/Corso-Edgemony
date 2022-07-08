const $taskUl = document.querySelector(".task_ul");
const $inputTask = document.querySelector(".form_input");
const $inputText = document.querySelector(".input_text");

// gen string for HTML
const getElementHTML = (el) => {
  return `<li class="element"><div><input type="checkbox">
            <span class="text_articles">${el}</span></div>
            <span id="${taskListMain.loadTask.indexOf(
              el
            )}" class="delete">X</span></li>`;
};

const taskListMain = {
  _taskList: [],

  get loadTask() {
    return this._taskList;
  },

  /**
   * @param {any} el
   */
  set saveTask(el) {
    this._taskList.push(el);

    this.renderHTML();
  },

  /**
   * @param {any} id
   */
  set removeTask(id) {
    this._taskList.splice(id, 1);

    this.renderHTML();
  },

  /**
   * @param {never[]} el
   */
  set retrieveTask(el) {
    this._taskList = el;
  },

  renderHTML() {
    const taskString = this.loadTask.map(getElementHTML).join("");
    $taskUl.innerHTML = `${taskString}`;
  },
};

// submit messages
$inputTask.addEventListener("submit", (event) => {
  event.preventDefault();

  let time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  taskListMain.saveTask = `${$inputText.value} - ${time}`;
  localStorage.setItem("storedList", JSON.stringify(taskListMain.loadTask));
  $inputText.value = "";

  console.log(taskListMain.loadTask);
});

// delete messages
$taskUl.addEventListener("click", (event) => {
  if (event.target.className === "delete") {
    taskListMain.removeTask = Number(event.target.id);
    localStorage.setItem("storedList", JSON.stringify(taskListMain.loadTask));
  }

  console.log(taskListMain.loadTask);
});

// local storage
if (JSON.parse(localStorage.getItem("storedList"))) {
  const retrievedList = JSON.parse(localStorage.getItem("storedList"));
  taskListMain.retrieveTask = retrievedList;
  taskListMain.renderHTML();
}

console.log(taskListMain.loadTask);
