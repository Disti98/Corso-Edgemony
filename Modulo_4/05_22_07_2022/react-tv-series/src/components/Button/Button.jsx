import "./index.css";

const Button = ({ action, type, text, id }) => (
  <button onClick={action} type={type} id={id} className="btn">
    {text}
  </button>
);

export default Button;
