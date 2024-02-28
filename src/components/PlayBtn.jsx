import "./playBtn.css";

function PlayBtn() {
  return (
    <div className="trailer d-flex align-items-center justify-content-center active">
      <a href="#" className="playBtn btn btn-danger btn-outline-danger">
        <i className="fa-solid fa-play fa-lg text-danger"></i>
      </a>
      <p>Watch Trailer</p>
    </div>
  );
}

export default PlayBtn;
