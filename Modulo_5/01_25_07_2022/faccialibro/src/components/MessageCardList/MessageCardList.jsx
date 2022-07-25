import { useState, useEffect } from "react";
import { DELETE, GET } from "../../utils/api";
import MessageCard from "../MessageCard";
import "./index.css";

const MessageCardList = ({ BASE_URL }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET(BASE_URL).then((data) => setMessageList(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((message) => (
            <MessageCard
              textContent={message}
              onHandleClick={() =>
                DELETE(BASE_URL, message.id).then(() =>
                  window.location.reload()
                )
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
