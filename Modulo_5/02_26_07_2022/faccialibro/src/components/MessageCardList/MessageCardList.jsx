import { useState, useEffect } from "react";
import { DELETE, GET } from "../../utils/api";
import MessageCard from "../MessageCard";
import "./index.css";

const MessageCardList = ({
  BASE_URL,
  isPosted,
  setIsPosted,
  filterValue,
  update,
  setUpdate,
}) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const updateFunc = () =>
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
    updateFunc();

    setUpdate(setInterval(() => updateFunc(), 5000));

    // return () => clearTimeout(update);
  }, [isPosted, filterValue]);

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((message) => (
            <MessageCard
              textContent={message}
              deleteHandle={() =>
                DELETE(BASE_URL, message.id).then(() => setIsPosted(!isPosted))
              }
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
