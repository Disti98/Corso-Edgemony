import Button from "../Button";
import Modal from "../Modal/Modal";
import "./index.css";

const FriendCard = ({
  friend,
  setFilterValue,
  deleteHandle,
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <div className="FriendCard" onClick={() => setFilterValue(friend.name)}>
      <img className="avatar" src={friend.photo} alt="profile" />
      <h4 className="name">{friend.name}</h4>
      <Button
        btnClass="FriendCard__delete"
        textContent="X"
        onHandleClick={() => setIsModalVisible(true)}
      />
      {isModalVisible && (
        <Modal
          textContent={"Sei sicuro di voler eliminare il messaggio?"}
          functionHandle={deleteHandle}
          setIsModalVisibile={setIsModalVisible}
        />
      )}
    </div>
  );
};

export default FriendCard;
