import { useState } from "react";
import "./index.css";

const AddTodo = ({ taskList, setTaskList }) => {
  const [taskValue, setTaskValue] = useState("");
  const [dlValue, setDlValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (taskValue.trim() === "" || dlValue.trim() === "") return;
    setTaskList([
      ...taskList,
      {
        id: taskList.length + 1,
        task: taskValue,
        deadline: dlValue,
      },
    ]);
    setTaskValue("");
    setDlValue("");
  };

  return (
    <div className="AddTodo__main">
      <form className="AddTodo__form" onSubmit={onHandleSubmit}>
        <label>To-do List</label>
        <input
          type="text"
          className="AddTodo__form--input--task"
          placeholder="Task..."
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        ></input>
        <input
          type="text"
          className="AddTodo__form--input--deadline"
          placeholder="Deadline"
          value={dlValue}
          onChange={(e) => setDlValue(e.target.value)}
        ></input>
        <button type="submit" className="AddTodo__form--btn--submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
