import "./index.css";
import imgAPI from "../../assets/imgAPI";

const Gallery = () => (
  <div className="gallery-main">
    {imgAPI.map((img) => (
      <img src={img.url} key={img.id} alt="random" />
    ))}
  </div>
);
export default Gallery;
