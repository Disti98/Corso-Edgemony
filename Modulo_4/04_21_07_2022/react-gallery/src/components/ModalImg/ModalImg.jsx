import "./index.css";

const ModalImg = ({ visibility, url, onHandleClick }) => {
  return (
    <>
      {visibility && (
        <div onClick={onHandleClick} className="modal-img-main">
          <img src={url} alt="zoom" />
        </div>
      )}
    </>
  );
};

export default ModalImg;
