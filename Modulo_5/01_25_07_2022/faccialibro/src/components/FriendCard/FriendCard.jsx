import "./index.css";

const FriendCard = ({ friend }) => {
  return (
    <div className="FriendCard">
      <img className="avatar" src={friend.photo} alt="profile" />
      <h4 className="name">{friend.name}</h4>
    </div>
  );
};

export default FriendCard;
