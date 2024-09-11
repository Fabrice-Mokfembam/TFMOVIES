import { BsSearch } from "react-icons/bs";
import "./Navbar.scss";

function Navbar() {
  let fixNav = false;

  if (window.height > "100vh") {
    fixNav = true;
  }

  return (
    <div className="nav">
      <div className={`nav_wrapper ${fixNav ? "fixed" : ""}`}>
        <strong>TFMOVIES</strong>
        <div className="searchBar">
          <input type="text" placeholder="search movies" />
          <BsSearch className="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
