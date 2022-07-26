import { useState } from "react";
import FriendCardList from "./components/FriendCardList";
import AddMessage from "./components/AddMessage";
import MessageCardList from "./components/MessageCardList";
import "./App.css";

function App() {
  const [isPosted, setIsPosted] = useState(false);
  const [filterValue, setFilterValue] = useState();

  return (
    <div className="App">
      <div className="App_friends">
        <FriendCardList
          BASE_URL="https://edgemony-backend.herokuapp.com/friends"
          setFilterValue={setFilterValue}
        />
      </div>
      <div className="App_messages">
        <AddMessage
          BASE_URL="https://edgemony-backend.herokuapp.com/messages"
          isPosted={isPosted}
          setIsPosted={setIsPosted}
        />
        <input
          type="text"
          className="Filter__input"
          placeholder="Filtra..."
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <MessageCardList
          BASE_URL="https://edgemony-backend.herokuapp.com/messages"
          isPosted={isPosted}
          setIsPosted={setIsPosted}
          filterValue={filterValue}
        />
      </div>
    </div>
  );
}

export default App;
