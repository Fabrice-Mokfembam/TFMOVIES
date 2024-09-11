import "./Header.scss";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import { useContext } from "react";
import { mObjectContext } from "../../context/movieObject";

function Header() {
  const { mObject } = useContext(mObjectContext); 

  const styles = {
    backgroundImage: mObject
      ? `url(https://image.tmdb.org/t/p/w500${mObject})`
      : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    overflowX: "hidden",
  };

  return (
    <div className="header" style={styles}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default Header;
