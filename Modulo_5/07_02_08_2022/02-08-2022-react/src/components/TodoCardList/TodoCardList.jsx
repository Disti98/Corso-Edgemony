import TodoCard from "../TodoCard/TodoCard";
import "./index.css";

const TodoCardList = ({ taskList, setTaskList }) => {
  const deleteHandle = (id) =>
    setTaskList(taskList.filter((taskObj) => taskObj.id !== id));

  return (
    <div className="TodoCardList__main">
      <ul className="TodoCardList__ul">
        {taskList.map((taskObj) => (
          <TodoCard
            key={taskObj.id}
            taskContent={taskObj}
            deleteHandle={deleteHandle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoCardList;
