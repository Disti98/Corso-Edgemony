import "./index.css";

const FriendCard = ({ friend, setFilterValue, update }) => {
  return (
    <div
      className="FriendCard"
      onClick={() => {
        clearInterval(update);
        setFilterValue(friend.name);
      }}
    >
      <img className="avatar" src={friend.photo} alt="profile" />
      <h4 className="name">{friend.name}</h4>
    </div>
  );
};

export default FriendCard;
