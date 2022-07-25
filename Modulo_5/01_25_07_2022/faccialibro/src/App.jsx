import AddMessage from "./components/AddMessage";
import MessageCardList from "./components/MessageCardList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__friends"></div>
      <div className="App_messages">
        <AddMessage BASE_URL="https://edgemony-backend.herokuapp.com/messages" />
        <MessageCardList BASE_URL="https://edgemony-backend.herokuapp.com/messages" />
      </div>
    </div>
  );
}

export default App;