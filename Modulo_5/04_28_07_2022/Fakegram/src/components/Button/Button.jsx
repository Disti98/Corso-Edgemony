import "./index.css";

const Button = ({ btnClass, textContent, type, onHandleClick }) => {
  return (
    <button type={type} className={btnClass} onClick={onHandleClick}>
      {textContent}
    </button>
  );
};

export default Button;
