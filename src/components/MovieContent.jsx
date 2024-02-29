import "./movieContent.css";
import Button from "./Button";

function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? "active" : undefined}`}>
      <img src={movie.titleImg} alt="movie title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
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
