import { useState } from "react";
import FriendCardList from "./components/FriendCardList";
import AddMessage from "./components/AddMessage";
import MessageCardList from "./components/MessageCardList";
import Button from "./components/Button";
import "./App.css";
import AddFriend from "./components/AddFriend/AddFriend";

function App() {
  const [isPosted, setIsPosted] = useState(false);
  const [filterValue, setFilterValue] = useState();

  return (
    <div className="App">
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
          // update={update}
        />
      </div>
      <div className="App_messages">
        <AddMessage
          BASE_URL="https://edgemony-backend.herokuapp.com/messages"
          isPosted={isPosted}
          setIsPosted={setIsPosted}
          // update={update}
        />
        <div className="App__Filter">
          <input
            type="text"
            className="Filter__input"
            placeholder="Filtra..."
            onChange={(e) => {
              // clearInterval(update);
              setFilterValue(e.target.value);
            }}
          />
          <Button
            btnClass="Button__clear--filter"
            textContent="X"
            onHandleClick={() => {
              // clearInterval(update);
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
          // setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}

export default App;
