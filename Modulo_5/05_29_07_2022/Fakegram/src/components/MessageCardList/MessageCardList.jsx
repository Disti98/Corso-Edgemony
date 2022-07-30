import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import MessageCard from "../MessageCard";
import "./index.css";

const MessageCardList = ({
  BASE_URL,
  isPosted,
  filterValue,
  setIsModalVisible,
  setDeleteId,
  setDeleteUrl,
  setDeleteText,
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
              BASE_URL={BASE_URL}
              textContent={message}
              setIsModalVisible={setIsModalVisible}
              setDeleteId={setDeleteId}
              setDeleteUrl={setDeleteUrl}
              setDeleteText={setDeleteText}
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
