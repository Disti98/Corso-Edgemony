import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import FriendCard from "../FriendCard";
import "./index.css";

const FriendCardList = ({
  BASE_URL,
  setFilterValue,
  isPosted,
  setIsModalVisible,
  setDeleteId,
  setDeleteUrl,
  setDeleteText,
}) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET(BASE_URL).then((data) =>
      setFriendList(data.sort((a, b) => (a.name < b.name ? -1 : 1)))
    );
  }, [isPosted]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="FriendCardList">
      {friendList.length ? (
        friendList.map((friend) => (
          <FriendCard
            BASE_URL={BASE_URL}
            friend={friend}
            setFilterValue={setFilterValue}
            setIsModalVisible={setIsModalVisible}
            setDeleteId={setDeleteId}
            setDeleteUrl={setDeleteUrl}
            setDeleteText={setDeleteText}
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
