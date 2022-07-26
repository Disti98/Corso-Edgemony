import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import FriendCard from "../FriendCard";
import "./index.css";

const FriendCardList = ({ BASE_URL, setFilterValue }) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET(BASE_URL).then((data) => setFriendList(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="FriendCardList">
      {friendList.length ? (
        friendList.map((friend) => (
          <FriendCard
            friend={friend}
            setFilterValue={setFilterValue}
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
