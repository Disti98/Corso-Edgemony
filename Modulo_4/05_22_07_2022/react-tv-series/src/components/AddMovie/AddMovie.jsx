import { useState, useEffect } from "react";
import { POST } from "../../assets/api";
import Button from "../Button";
import Input from "../Input";
import "./index.css";

const AddMovie = ({ BASE_URL }) => {
  const [inputTitleEl, setInputTitleEl] = useState("");
  const [inputUrlEl, setInputUrlEl] = useState("");
  const [inputDescriptionEl, setInputDescriptionEl] = useState("");
  const [body, setBody] = useState({});

  const addMovieEvent = async (e) => {
    e.preventDefault();

    if (inputTitleEl !== "" && inputUrlEl !== "" && inputDescriptionEl !== "") {
      setBody({
        title: inputTitleEl,
        poster: inputUrlEl,
        description: inputDescriptionEl,
      });
    } else {
      alert("Compila tutti i campi!");
    }
  };

  useEffect(() => {
    if (Object.keys(body).length > 0) {
      POST(BASE_URL, body);
    }
  }, [BASE_URL, body]);

  return (
    <div className="addmovie-main">
      <form onSubmit={addMovieEvent} className="addmovie-form">
        <Input
          inputType="text"
          inputClass="input-title"
          inputPlaceholder="Inserisci titolo"
          onHandleChange={(e) => setInputTitleEl(e.target.value)}
        />
        <Input
          inputType="url"
          inputClass="input-url"
          inputPlaceholder="Inserisci url poster"
          onHandleChange={(e) => setInputUrlEl(e.target.value)}
        />
        <Input
          inputType="text"
          inputClass="input-description"
          inputPlaceholder="Inserici descrizione"
          onHandleChange={(e) => setInputDescriptionEl(e.target.value)}
        />
        <Button
          action={() => {
            document.querySelectorAll("input").forEach((e) => (e.value = ""));
          }}
          type="submit"
          text="Submit"
          id="addMovieBtn"
        />
      </form>
    </div>
  );
};

export default AddMovie;
