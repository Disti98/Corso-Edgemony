import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import Card from "../Card";
import "./index.css";

const CardList = ({
  title,
  BASE_URL,
  modalVisibility,
  localList,
  isPosted,
}) => {
  const [seriesList, setSeriesList] = useState([]);

  const removeBrokenSerie = (list, id) =>
    list.filter((serie) => serie.id !== id);

  useEffect(() => {
    if (BASE_URL) {
      GET(BASE_URL).then((data) => {
        console.log(data);
        setSeriesList(
          removeBrokenSerie(data, "7b3b3475-8061-4490-a411-6e8498138dae")
        );
      });
    } else {
      setSeriesList(localList);
    }
  }, [isPosted]); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   if (isPosted === true) {
  //     fetch(BASE_URL)
  //       .then((res) => res.json())
  //       .then((data) =>
  //         setSeriesList(
  //           removeBrokenSerie(data, "7b3b3475-8061-4490-a411-6e8498138dae")
  //         )
  //       )
  //       .then(toggle(!isPosted));
  //   }
  // }, [isPosted]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="CardList">
      <h1 className="CardList__top">{title}</h1>
      <div className="CardList__list">
        {seriesList.length >= 1 ? (
          seriesList.map((serie) => (
            <Card
              data={serie}
              modalVisibility={modalVisibility}
              key={serie.id}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CardList;
