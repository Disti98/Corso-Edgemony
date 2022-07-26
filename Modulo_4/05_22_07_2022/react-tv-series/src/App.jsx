import { useState } from "react";
import CardList from "./components/CardList";
import Modal from "./components/Modal";
import myList from "./utils/mockAPI";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddMovie from "./components/AddMovie/AddMovie";
import "./App.css";

function App() {
  const [isPosted, setIsPosted] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);

  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };

  return (
    <div className="App">
      <Header />
      <CardList
        title="Top series"
        BASE_URL="https://edgemony-backend.herokuapp.com/series"
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Top Movies"
        BASE_URL="https://edgemony-backend.herokuapp.com/movies"
        modalVisibility={onHandleModal}
        isPosted={isPosted}
      />
      <AddMovie
        BASE_URL="https://edgemony-backend.herokuapp.com/movies"
        isPosted={isPosted}
        setIsPosted={setIsPosted}
      />
      <CardList
        title="My List"
        localList={myList}
        modalVisibility={onHandleModal}
      />
      <Modal
        data={modalData}
        isVisibile={isModalVisibile}
        onModalClick={setModalVisibility}
      />
      <Footer />
    </div>
  );
}

export default App;
