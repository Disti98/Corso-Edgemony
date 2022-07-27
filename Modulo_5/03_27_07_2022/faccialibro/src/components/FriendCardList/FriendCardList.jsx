import { useState, useEffect } from "react";
import { GET, DELETE } from "../../utils/api";
import FriendCard from "../FriendCard";
import "./index.css";

const FriendCardList = ({
  BASE_URL,
  setFilterValue,
  update,
  isPosted,
  setIsPosted,
}) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET(BASE_URL).then((data) => setFriendList(data));
  }, [isPosted]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="FriendCardList">
      {friendList.length ? (
        friendList.map((friend) => (
          <FriendCard
            friend={friend}
            setFilterValue={setFilterValue}
            update={update}
            deleteHandle={() =>
              DELETE(BASE_URL, friend.id).then(() => {
                // clearInterval(update);
                setFilterValue();
                setIsPosted(!isPosted);
              })
            }
            key={friend.id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FriendCardList;
