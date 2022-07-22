import "./index.css";
import Button from "../Button";

const popup = (e) => {
  e.preventDefault();
  return alert("Grazie compà! ☕");
};

const Footer = () => (
  <div className="footer-main">
    <h3>Offrimi un caffè</h3>
    <Button action={popup} id="coffee" text="☕" />
  </div>
);

export default Footer;
