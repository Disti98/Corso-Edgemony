import { useState } from "react";
import FriendCardList from "./components/FriendCardList";
import AddMessage from "./components/AddMessage";
import MessageCardList from "./components/MessageCardList";
import Button from "./components/Button";
import AddFriend from "./components/AddFriend/";
import Navbar from "./components/Navbar/";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [isPosted, setIsPosted] = useState(false);
  const [filterValue, setFilterValue] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  // const onGetUsername = () => {
  //   const username = prompt("Inserisci il tuo username:");
  //   if (username) {
  //     localStorage.setItem("username", username);
  //   } else {
  //     localStorage.setItem("username", "Anonymous");
  //   }
  // };

  // useEffect(() => setIsModalVisible(true), []);

  return (
    <div className="App">
      {isLoginVisible && (
        <Modal type="login" setIsModalVisible={setIsLoginVisible} />
      )}
      <Navbar textLogo={"Fakegram"} setIsLoginVisible={setIsLoginVisible} />
      <div className="App__main">
        <div className="App_friends">
          <FriendCardList
            BASE_URL="https://edgemony-backend.herokuapp.com/friends"
            setFilterValue={setFilterValue}
            isPosted={isPosted}
            setIsPosted={setIsPosted}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <AddFriend
            BASE_URL="https://edgemony-backend.herokuapp.com/friends"
            isPosted={isPosted}
            setIsPosted={setIsPosted}
          />
        </div>
        <div className="App_messages">
          <AddMessage
            BASE_URL="https://edgemony-backend.herokuapp.com/messages"
            isPosted={isPosted}
            setIsPosted={setIsPosted}
          />
          <div className="App__Filter">
            <input
              type="text"
              className="Filter__input"
              placeholder="Filtra..."
              onChange={(e) => setFilterValue(e.target.value)}
            />
            <Button
              btnClass="Button__clear--filter"
              textContent="X"
              onHandleClick={() => {
                setFilterValue();
                document.querySelector(".Filter__input").value = null;
              }}
            />
          </div>
          <MessageCardList
            BASE_URL="https://edgemony-backend.herokuapp.com/messages"
            isPosted={isPosted}
            setIsPosted={setIsPosted}
            filterValue={filterValue}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
