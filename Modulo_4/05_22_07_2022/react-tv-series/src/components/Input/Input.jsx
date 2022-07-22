import "./index.css";

const Input = ({ inputType, inputClass, inputPlaceholder, onHandleChange }) => {
  return (
    <input
      type={inputType}
      className={inputClass}
      placeholder={inputPlaceholder}
      onChange={onHandleChange}
    />
  );
};

export default Input;
