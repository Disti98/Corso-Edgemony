import { useState } from "react";
import { DELETE } from "./utils/api";
import FriendCardList from "./components/FriendCardList";
import AddMessage from "./components/AddMessage";
import MessageCardList from "./components/MessageCardList";
import Button from "./components/Button";
import AddFriend from "./components/AddFriend/";
import Navbar from "./components/Navbar/";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const BASE_URL_MESSAGES = "https://edgemony-backend.herokuapp.com/messages";
  const BASE_URL_FRIENDS = "https://edgemony-backend.herokuapp.com/friends";
  const [deleteUrl, setDeleteUrl] = useState("");
  const [deleteText, setDeleteText] = useState("");
  const [isPosted, setIsPosted] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const onDeleteHandle = () => {
    if (deleteUrl === BASE_URL_FRIENDS) {
      DELETE(BASE_URL_FRIENDS, deleteId).then(() => {
        setIsModalVisible(false);
        setIsPosted(!isPosted);
        setFilterValue("");
      });
    }
    if (deleteUrl === BASE_URL_MESSAGES) {
      setDeleteText("Sei sicuro di voler eliminare il messaggio?");
      DELETE(BASE_URL_MESSAGES, deleteId).then(() => {
        setIsModalVisible(false);
        setIsPosted(!isPosted);
      });
    }
  };

  return (
    <div className="App">
      {isLoginVisible && (
        <Modal
          type="login"
          isModalVisible={isLoginVisible}
          setIsModalVisible={setIsLoginVisible}
        />
      )}
      <Navbar textLogo={"Fakegram"} setIsLoginVisible={setIsLoginVisible} />
      <div className="App__main">
        <Modal
          type="delete"
          textContent={deleteText}
          functionHandle={onDeleteHandle}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        <div className="App_friends">
          <FriendCardList
            BASE_URL={BASE_URL_FRIENDS}
            setFilterValue={setFilterValue}
            isPosted={isPosted}
            setIsModalVisible={setIsModalVisible}
            setDeleteId={setDeleteId}
            setDeleteUrl={setDeleteUrl}
            setDeleteText={setDeleteText}
          />
          <AddFriend
            BASE_URL={BASE_URL_FRIENDS}
            isPosted={isPosted}
            setIsPosted={setIsPosted}
            setIsLoginVisible={setIsLoginVisible}
          />
        </div>
        <div className="App_messages">
          <AddMessage
            BASE_URL={BASE_URL_MESSAGES}
            isPosted={isPosted}
            setIsPosted={setIsPosted}
            setIsLoginVisible={setIsLoginVisible}
          />
          <div className="App__Filter">
            <input
              type="text"
              value={filterValue}
              placeholder="Filtra..."
              onChange={(e) => setFilterValue(e.target.value)}
            />
            <Button
              btnClass="Button__clear--filter"
              textContent="X"
              onHandleClick={() => {
                setFilterValue("");
              }}
            />
          </div>
          <MessageCardList
            BASE_URL={BASE_URL_MESSAGES}
            isPosted={isPosted}
            filterValue={filterValue}
            setIsModalVisible={setIsModalVisible}
            setDeleteId={setDeleteId}
            setDeleteUrl={setDeleteUrl}
            setDeleteText={setDeleteText}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
