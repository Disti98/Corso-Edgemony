import "./index.css";
import Button from "../Button";

const Modal = ({ textContent, deleteHandle, setIsModalVisibile }) => {
  return (
    <div className="Modal__overlay">
      <div className="Modal">
        <h3 className="Modal__text">{textContent}</h3>
        <div className="Modal__btns">
          <Button
            btnClass="Modal__confirm"
            textContent="Sì!"
            onHandleClick={deleteHandle}
          />
          <Button
            btnClass="Modal__cancel"
            textContent="No!"
            onHandleClick={() => setIsModalVisibile(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
