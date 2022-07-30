import Button from "../Button";
import "./index.css";

const MessageCard = ({
  BASE_URL,
  textContent,
  setIsModalVisible,
  setDeleteId,
  setDeleteUrl,
  setDeleteText,
}) => {
  const formatData = (date) => {
    const [day, time] = date.split(" ");

    return `${time} ${day.split("/").reverse().join("/")}`;
  };

  return (
    <div className="MessageCard">
      <div className="MessageCard__main">
        <p className="MessageCard__text">{textContent.text}</p>
        <Button
          btnClass="MessageCard__delete"
          textContent="X"
          onHandleClick={() => {
            setDeleteUrl(BASE_URL);
            setDeleteText("Sei sicuro di voler eliminare il messaggio?");
            setDeleteId(textContent.id);
            setIsModalVisible(true);
          }}
        />
      </div>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">{textContent.sender}</p>
        <p className="MessageCard__info--date">
          {formatData(textContent.date)}
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
