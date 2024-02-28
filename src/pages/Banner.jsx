import { useState, useEffect } from "react";

import "./banner.css";
import transformer from "../images/transformer.jpg";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";

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
              <MovieContent />
            </div>

            {/* right column */}
            <div className="col-md-6">
              <MovieDate />
              <PlayBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
