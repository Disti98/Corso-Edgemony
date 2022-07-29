import { useState, useEffect } from "react";
import { DELETE, GET } from "../../utils/api";
import MessageCard from "../MessageCard";
import "./index.css";

const MessageCardList = ({
  BASE_URL,
  isPosted,
  setIsPosted,
  filterValue,
  isModalVisible,
  setIsModalVisible,
}) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const updateFunction = () =>
      GET(BASE_URL).then((data) => {
        if (filterValue) {
          setMessageList(
            data
              .filter((message) =>
                message.sender.toLowerCase().includes(filterValue.toLowerCase())
              )
              .sort((a, b) => (a.date < b.date ? 1 : -1))
          );
        } else {
          setMessageList(data.sort((a, b) => (a.date < b.date ? 1 : -1)));
        }
      });
    updateFunction();
    const updateInterval = setInterval(() => updateFunction(), 5000);
    return () => clearInterval(updateInterval);
  }, [isPosted, filterValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((message) => (
            <MessageCard
              textContent={message}
              deleteHandle={() =>
                DELETE(BASE_URL, message.id).then(() => {
                  setIsModalVisible(false);
                  setIsPosted(!isPosted);
                })
              }
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              key={message.id}
            />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
