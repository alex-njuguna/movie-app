import { useState, useEffect } from "react";

import "./banner.css";
import transformer from "../images/transformer.jpg";
import titleImage from "../images/transformer-title.png";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5173/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner">
      <div className="movie">
        <img src={transformer} alt="backgound image" className="bgImg active" />
        <div className="container-fluid">
          <div className="row">
            {/* left column */}
            <div className="col-md-6">
              <div className="content active">
                <img
                  src={titleImage}
                  alt="movie title"
                  className="movie-title"
                />
                <h4>
                  <span>Year</span>
                  <span>
                    <i>age</i>
                  </span>
                  <span>length</span>
                  <span>category</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis rem deserunt quaerat a minus saepe velit architecto
                  repellendus, cupiditate nihil similique iure sunt veritatis!
                  Iure fuga est praesentium sapiente incidunt!
                </p>
                <div className="button">Button</div>
              </div>
            </div>

            {/* right column */}
            <div className="col-md-6">
              <div className="date active">
                <h2>On 14th August</h2>
              </div>
              <div className="trailer d-flex align-items-center justify-content-center active">
                <a
                  href="#"
                  className="playBtn btn btn-danger btn-outline-danger"
                >
                  <i className="fa-solid fa-play fa-lg text-danger"></i>
                </a>
                <p>Watch Trailer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
