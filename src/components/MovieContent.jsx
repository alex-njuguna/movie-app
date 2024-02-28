import "./movieContent.css";
import titleImage from "../images/transformer-title.png";
import Button from "./Button";

function MovieContent() {
  return (
    <div className="content active">
      <img src={titleImage} alt="movie title" className="movie-title" />
      <h4>
        <span>Year</span>
        <span>
          <i>age</i>
        </span>
        <span>length</span>
        <span>category</span>
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rem
        deserunt quaerat a minus saepe velit architecto repellendus, cupiditate
        nihil similique iure sunt veritatis! Iure fuga est praesentium sapiente
        incidunt!
      </p>
      <Button
        icon={<i className="fa-solid fa-house"></i>}
        name="Home"
        color="#ff3700"
        bgColor="#fff"
      />
      <Button icon={<i className="fa-solid fa-plus"></i>} name="My List" />
    </div>
  );
}

export default MovieContent;
