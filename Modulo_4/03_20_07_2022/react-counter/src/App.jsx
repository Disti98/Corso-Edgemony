import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
