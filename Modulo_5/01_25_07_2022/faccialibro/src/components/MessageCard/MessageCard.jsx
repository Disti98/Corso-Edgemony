import "./index.css";

const MessageCard = ({ textContent, onHandleClick }) => {
  return (
    <div className="MessageCard">
      <p className="MessageCard__text">{textContent.text}</p>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">{textContent.sender}</p>
        <p className="MessageCard__info--date">{textContent.date}</p>
      </div>
      <button className="MessageCard__delete" onClick={onHandleClick}>
        X
      </button>
    </div>
  );
};

export default MessageCard;
