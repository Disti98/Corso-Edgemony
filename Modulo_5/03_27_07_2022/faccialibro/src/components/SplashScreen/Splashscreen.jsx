import { useState } from "react";
import Button from "../Button";
import "./index.css";

const Splashscreen = ({ setIsSplashscreenVisible }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const onHandleSubmit = () => {
    if (usernameInput) {
      localStorage.setItem("username", usernameInput);
    } else {
      localStorage.setItem("username", "Anonymous");
    }
  };

  return (
    <form className="Splashscreen__form" onSubmit={onHandleSubmit}>
      <input
        className="Splashscreen__input"
        type="text"
        value={usernameInput}
        placeholder="Enter username"
        onChange={(e) => setUsernameInput(e.target.value)}
        required
      />
      <Button
        btnClass="Splashscreen__btn"
        textContent="Invia"
        type="submit"
        onHandleClick={() => setIsSplashscreenVisible(false)}
      />
    </form>
  );
};

export default Splashscreen;
