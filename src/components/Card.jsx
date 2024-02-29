import "./card.css";

function Card({ movie }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="movie-card">
        <img src={movie.previewImg} alt="preview image" className="img-fluid" />
        <p>
          {movie.length} | {movie.category}
        </p>
        <div className="content">
          <h4>{movie.title}</h4>
          <div className="card-icons">
            <i className="fa-solid fa-plus" style={{marginRight:'15px'}}></i>
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
