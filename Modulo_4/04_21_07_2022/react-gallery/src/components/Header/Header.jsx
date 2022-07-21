import "./index.css";
import Navbar from "../Navbar";
import Hero from "../Hero";

const Header = ({ showBtn, toggle }) => {
  return (
    <div className="header-main">
      <Navbar showBtn={showBtn} toggle={toggle} />
      <Hero />
    </div>
  );
};

export default Header;
