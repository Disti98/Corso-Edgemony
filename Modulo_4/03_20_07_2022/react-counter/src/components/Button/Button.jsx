import "./index.css";

const Button = ({ action, text, id }) => (
  <button onClick={action} id={id} className="btn">
    {text}
  </button>
);

export default Button;
