import "./index.css";

const TodoCard = ({ taskContent, deleteHandle }) => {
  return (
    <li className="TodoCard__main">
      <span className="TodoCard__task">
        {taskContent.id}. {taskContent.task}
      </span>
      <span className="TodoCard__deadline">{taskContent.deadline}</span>
      <button
        className="TodoCard__deleteHandle"
        onClick={() => deleteHandle(taskContent.id)}
      >
        X
      </button>
    </li>
  );
};

export default TodoCard;
