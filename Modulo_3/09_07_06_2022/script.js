const getElementHTML = (el) => {
  return `<li class="element"><input type="checkbox">
            <span class="text-articles">${el}</span>
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

  set retrieveTask(el) {
    this._taskList = el;
  },

  renderHTML() {
    const $taskUl = document.querySelector(".task_ul");
    const taskString = this.loadTask.map(getElementHTML).join("");
    $taskUl.innerHTML = `${taskString}`;
  },
};

const $inputTask = document.querySelector(".form_input");

$inputTask.addEventListener("submit", (event) => {
  event.preventDefault();

  const $inputText = document.querySelector("input");

  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let time = h + ":" + m + ":" + s;
  taskListMain.saveTask = `${$inputText.value} - ${time}`;
  localStorage.setItem("storedList", JSON.stringify(taskListMain.loadTask));
  $inputText.value = "";

  console.log(taskListMain.loadTask);
});

const $taskUl = document.querySelector(".task_ul");

$taskUl.addEventListener("click", (event) => {
  if (event.target.className === "delete") {
    taskListMain.removeTask = Number(event.target.id);
    localStorage.setItem("storedList", JSON.stringify(taskListMain.loadTask));
  }

  console.log(taskListMain.loadTask);
});

if (
  JSON.parse(localStorage.getItem("storedList") === null)
  //  || JSON.parse(localStorage.getItem("storedList")) === undefined
  //
) {
  localStorage.setItem("storedList", JSON.stringify(["Inserisci task..."]));
}

const retrievedList = JSON.parse(localStorage.getItem("storedList"));
taskListMain.retrieveTask = retrievedList;
taskListMain.renderHTML();

console.log(taskListMain.loadTask);
