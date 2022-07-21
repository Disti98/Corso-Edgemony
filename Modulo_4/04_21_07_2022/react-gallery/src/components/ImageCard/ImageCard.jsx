import { useState } from "react";
import Button from "../Button";
import ModalImg from "../ModalImg";
import "./index.css";

const ImageCard = ({ data }) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  return (
    <div className="ImageCard">
      <img className="ImageCard__img" src={data.url} alt={data.name} />
      <p className="ImageCard__par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Button
        btnTextCont="ZOOM"
        onHandleClick={() => setModalVisibility(true)}
      />
      <ModalImg
        visibility={isModalVisible}
        url={data.url}
        onHandleClick={() => setModalVisibility(false)}
      />
    </div>
  );
};

export default ImageCard;
