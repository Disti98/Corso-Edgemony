import Button from "../Button";
import "./index.css";

const FriendCard = ({
  BASE_URL,
  friend,
  setFilterValue,
  setIsModalVisible,
  setDeleteId,
  setDeleteUrl,
  setDeleteText,
}) => {
  return (
    <div className="FriendCard" onClick={() => setFilterValue(friend.name)}>
      <img className="avatar" src={friend.photo} alt="profile" />
      <h4 className="name">{friend.name}</h4>
      <Button
        btnClass="FriendCard__delete"
        textContent="X"
        onHandleClick={(e) => {
          e.stopPropagation();
          setDeleteUrl(BASE_URL);
          setDeleteText("Sei sicuro di voler eliminare l'amico?");
          setDeleteId(friend.id);
          setIsModalVisible(true);
        }}
      />
    </div>
  );
};

export default FriendCard;
