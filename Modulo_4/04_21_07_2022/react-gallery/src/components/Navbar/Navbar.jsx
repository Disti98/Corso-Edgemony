import "./index.css";
import Button from "../Button";

const Navbar = ({ showBtn, toggle }) => {
  return (
    <div className="navbar-main">
      <h2 className="navbar-title">Gallery</h2>
      <Button
        btnTextCont={toggle ? "Hide" : "Show"}
        onHandleClick={() => showBtn(!toggle)}
      />
    </div>
  );
};

export default Navbar;
