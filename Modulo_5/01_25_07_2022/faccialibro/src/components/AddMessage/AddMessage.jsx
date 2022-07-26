import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddMessage = ({ BASE_URL, isPosted, setIsPosted }) => {
  const [messageText, setMessageText] = useState("");
  const [sender, setSender] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (messageText && sender) {
      POST(BASE_URL, {
        text: messageText,
        sender: sender,
        date: new Date().toLocaleDateString(),
      }).then(() => {
        setMessageText("");
        setSender("");
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
      <input
        className="AddMessage__sender"
        type="text"
        placeholder="Autore..."
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        required
      />
      <Button type="submit" textContent="Invia" color="lightseagreen" />
    </form>
  );
};

export default AddMessage;
