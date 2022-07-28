import "./index.css";
import { useState } from "react";
import Button from "../Button";

const Modal = ({ textContent, functionHandle, setIsModalVisible, type }) => {
  const [usernameInput, setUsernameInput] = useState("");

  if (type === "login") {
    const onHandleSubmit = (e) => {
      e.preventDefault();
      if (usernameInput) {
        localStorage.setItem("username", usernameInput);
        setIsModalVisible(false);
      } else {
        localStorage.setItem("username", "Anonymous");
        setIsModalVisible(false);
      }
    };

    return (
      <form className="Modal__login--form" onSubmit={onHandleSubmit}>
        <h3 className="Modal__login--title">{textContent}</h3>
        <input
          className="Modal__login--input"
          type="text"
          value={usernameInput}
          placeholder="Enter username"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <Button
          btnClass="Modal__login--btn"
          textContent="Invia"
          type="submit"
        />
      </form>
    );
  } else {
    return (
      <div className="Modal__overlay">
        <div className="Modal">
          <h3 className="Modal__text">{textContent}</h3>
          <div className="Modal__btns">
            <Button
              btnClass="Modal__confirm"
              textContent="Sì!"
              onHandleClick={functionHandle}
            />
            <Button
              btnClass="Modal__cancel"
              textContent="No!"
              onHandleClick={() => setIsModalVisible(false)}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
