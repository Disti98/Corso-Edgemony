import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddMessage = ({ BASE_URL, isPosted, setIsPosted, setIsLoginVisible }) => {
  const [messageText, setMessageText] = useState("");

  const newData = () => {
    const date = new Intl.DateTimeFormat("it", {
      timeStyle: "short", //medium for seconds
      dateStyle: "short",
    }).format(Date.now());
    const [day, time] = date.split(" ");
    return `${day.replace(",", "").split("/").reverse().join("/")} ${time}`;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (messageText) {
      localStorage.getItem("username")
        ? POST(BASE_URL, {
            text: messageText,
            sender: localStorage.getItem("username"),
            date: newData(),
          }).then(() => {
            setMessageText("");
            setIsPosted(!isPosted);
          })
        : setIsLoginVisible(true);
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
