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
  isModalVisible,
  setIsModalVisible,
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
            friend={friend}
            setFilterValue={setFilterValue}
            update={update}
            deleteHandle={() =>
              DELETE(BASE_URL, friend.id).then(() => {
                setFilterValue();
                setIsPosted(!isPosted);
              })
            }
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
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
