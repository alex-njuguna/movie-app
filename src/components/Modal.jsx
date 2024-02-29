import "./modal.css";
import { useRef } from "react";

function Modal({ movie, status, toggleModal }) {
  const iframeRef = useRef(null); 

  const stopVideo = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.src = iframe.src; 
    }
  };

  const handleClose = () => {
    stopVideo();
    toggleModal(); 
  };
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href="#" className="modalClose" onClick={handleClose}>
        <i className="fa-solid fa-xmark"></i>
      </a>
      <iframe
        ref={iframeRef}
        width="1280"
        height="720"
        src={movie.video}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
