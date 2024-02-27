import "./search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" name="search" placeholder="Search" />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default Search;
