import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddMessage = ({ BASE_URL, isPosted, setIsPosted }) => {
  const [messageText, setMessageText] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (messageText) {
      POST(BASE_URL, {
        text: messageText,
        sender: localStorage.getItem("username"),
        date: new Date().toLocaleDateString(),
      }).then(() => {
        setMessageText("");
        setIsPosted(!isPosted);
      });
    }
  };

  return (
    <form className="AddMessage" onSubmit={onFormSubmit}>
      <input
        className="AddMessage__text"
        type="text"
        placeholder="Scrivi il messaggio..."
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        required
      />
      <Button type="submit" textContent="Invia" btnClass="AddMessage__add" />
    </form>
  );
};

export default AddMessage;
