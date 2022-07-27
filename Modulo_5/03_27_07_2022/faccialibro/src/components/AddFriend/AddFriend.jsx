import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddFriend = ({ BASE_URL, isPosted, setIsPosted, update }) => {
  const [friendName, setFriendName] = useState("");
  const [photo, setPhoto] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (friendName && photo) {
      POST(BASE_URL, {
        name: friendName,
        photo: photo,
      }).then(() => {
        // clearInterval(update);
        setFriendName("");
        setPhoto("");
        setIsPosted(!isPosted);
      });
    }
  };

  return (
    <form className="AddFriend" onSubmit={onFormSubmit}>
      <input
        className="AddFriend__name"
        type="text"
        placeholder="Nome..."
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        required
      />
      <input
        className="AddFriend__photo"
        type="url"
        placeholder="Propic url..."
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />
      <Button type="submit" textContent="Invia" btnClass="AddFriend__add" />
    </form>
  );
};

export default AddFriend;
