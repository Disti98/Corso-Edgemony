import ImageGallery from "react-image-gallery";
import { useState } from "react";
import Button from "../Button";
import "./index.css";

const Modal = ({
  textContent,
  functionHandle,
  isModalVisible,
  setIsModalVisible,
  type,
}) => {
  const [usernameInput, setUsernameInput] = useState("");

  if (type === "login") {
    const onHandleSubmit = (e) => {
      e.preventDefault();
      if (usernameInput) {
        localStorage.setItem("username", usernameInput);
        setIsModalVisible(false);
      } else {
        localStorage.setItem("username", "Anonymous");
        setIsModalVisible(false);
      }
    };

    const propics = [
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/2-Boy-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/40-School_boy-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/4-Writer-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/15-Actress-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/17-Cashier-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/20-Musician-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/1-Girl-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/25-Researcher-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
      {
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/22-Wife-256.png",
        thumbnailHeight: "65px",
        thumbnailWidth: "65px",
      },
    ];

    return (
      <div className="Modal__login--main">
        <div className="Modal__login--gallery--main">
          <h3 className="Modal__login--galery--title">
            Scegli la tua immagine profilo:
          </h3>
          <ImageGallery
            additionalClass="Modal__propic--gallery"
            items={propics}
            onThumbnailClick={(e) =>
              localStorage.setItem("user.propic", e.target.src)
            }
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
        <form className="Modal__login--form" onSubmit={onHandleSubmit}>
          <h3 className="Modal__login--username--title">
            Inserisci il tuo username:
          </h3>
          <input
            className="Modal__login--input"
            type="text"
            value={usernameInput}
            placeholder="Anonymous..."
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <Button
            btnClass="Modal__login--btn"
            textContent="Invia"
            type="submit"
          />
        </form>
      </div>
    );
  }
  if (type === "delete") {
    return (
      isModalVisible && (
        <div className="Modal__overlay">
          <div className="Modal">
            <h3 className="Modal__text">{textContent}</h3>
            <div className="Modal__btns">
              <Button
                btnClass="Modal__confirm"
                textContent="Sì!"
                onHandleClick={functionHandle}
              />
              <Button
                btnClass="Modal__cancel"
                textContent="No!"
                onHandleClick={() => setIsModalVisible(false)}
              />
            </div>
          </div>
        </div>
      )
    );
  }
};

export default Modal;
