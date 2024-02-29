import { useState } from "react";
import Modal from "./Modal";
import "./playBtn.css";

function PlayBtn({ movie }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center date ${
          movie.active ? "active" : undefined
        }`}
      >
        <a
          href="#"
          className="playBtn btn btn-danger btn-outline-danger"
          onClick={toggleModal}
        >
          <i className="fa-solid fa-play fa-lg text-danger"></i>
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && (
        <Modal movie={movie} status={modal} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default PlayBtn;
