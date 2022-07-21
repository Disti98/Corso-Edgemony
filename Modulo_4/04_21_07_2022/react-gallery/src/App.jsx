import { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

import "./App.css";

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <Header showBtn={setGalleryVisibility} toggle={isGalleryVisibile} />
      <Gallery visibility={isGalleryVisibile} />
    </div>
  );
}

export default App;
