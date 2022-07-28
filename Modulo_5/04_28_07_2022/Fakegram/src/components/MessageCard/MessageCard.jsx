import Button from "../Button";
import Modal from "../Modal/Modal";
import "./index.css";

const MessageCard = ({
  textContent,
  deleteHandle,
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <div className="MessageCard">
      <div className="MessageCard__main">
        <p className="MessageCard__text">{textContent.text}</p>
        <Button
          btnClass="MessageCard__delete"
          textContent="X"
          onHandleClick={() => setIsModalVisible(true)}
        />
      </div>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">{textContent.sender}</p>
        <p className="MessageCard__info--date">{textContent.date}</p>
      </div>
      {isModalVisible && (
        <Modal
          textContent={"Sei sicuro di voler eliminare il messaggio?"}
          functionHandle={deleteHandle}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </div>
  );
};

export default MessageCard;
