import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="container-fluid px-5 py-4 bg-dark text-light fs-6 mb-5">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div>
            {/* <Link to="#">Movies & Series</Link> */}
            Movies & Series
          </div>
          <div>
          <i className="fa-brands fa-imdb fa-5x"></i>
            {/* <Link to="#"><i className="fa-brands fa-imdb fa-5x"></i></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}