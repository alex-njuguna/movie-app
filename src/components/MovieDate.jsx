import "./movieDate.css";

function MovieDate({ movie }) {
  return (
    <div className="date">
      <h2>{movie.date}</h2>
    </div>
  );
}

export default MovieDate;
