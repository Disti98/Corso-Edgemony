import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoCardList from "./components/TodoCardList/TodoCardList";

// const init = {
//   task: "",
//   deadline: "",
//   id: "",
// };

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <div className="App__main">
        <AddTodo taskList={taskList} setTaskList={setTaskList} />
        <TodoCardList taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default App;
