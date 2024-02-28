import Button from "../components/Button";
import NavListItem from "../components/NavListItem";
import Search from "../components/Search";
import navListData from "../data/navListData";
import "./header.css";

function Header() {
  return (
    <div>
      <header>
        <a href="/" className="logo">
          Movies
        </a>
        <ul className="nav">
          {navListData.map((nav) => (
            <NavListItem key={nav._id} nav={nav} />
          ))}
        </ul>
        <Search />
        <Button
          icon={<i className="fa-solid fa-right-to-bracket"></i>}
          name="sign in"
        />
      </header>
    </div>
  );
}

export default Header;
