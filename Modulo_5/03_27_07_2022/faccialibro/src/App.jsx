import { useState, useEffect } from "react";
import FriendCardList from "./components/FriendCardList";
import AddMessage from "./components/AddMessage";
import MessageCardList from "./components/MessageCardList";
import Button from "./components/Button";
import AddFriend from "./components/AddFriend/AddFriend";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Splashscreen from "./components/SplashScreen";

function App() {
  const [isPosted, setIsPosted] = useState(false);
  const [filterValue, setFilterValue] = useState();
  const [isSplashscreenVisible, setIsSplashscreenVisible] = useState(true);

  // const onGetUsername = () => {
  //   const username = prompt("Inserisci il tuo username:");
  //   if (username) {
  //     localStorage.setItem("username", username);
  //   } else {
  //     localStorage.setItem("username", "Anonymous");
  //   }
  // };

  // useEffect(() => onGetUsername(), []);

  return (
    <div className="App">
      {isSplashscreenVisible && (
        <Splashscreen setIsSplashscreenVisible={setIsSplashscreenVisible} />
      )}
      <Navbar textLogo={"Faccialibro"} />
      <div className="App__main">
        <div className="App_friends">
          <FriendCardList
            BASE_URL="https://edgemony-backend.herokuapp.com/friends"
            setFilterValue={setFilterValue}
            isPosted={isPosted}
            setIsPosted={setIsPosted}
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
          />
        </div>
      </div>
    </div>
  );
}

export default App;
