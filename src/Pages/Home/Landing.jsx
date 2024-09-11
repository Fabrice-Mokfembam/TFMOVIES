import Header from "../../components/Header/Header";
import Body from "./body/Body";
import "./Landing.scss";
import { useEffect, useState } from "react";


const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGM0MzJmYzZiYTc4OWUzYWM1ZDIxZjg4M2IzYTVhMyIsIm5iZiI6MTcyNjAwNzYwMC45NjE0MzUsInN1YiI6IjY1MTc2NmRhOTY3Y2M3MDBmZjIyYmI0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGuUct6pb9Vj_SxKUP4gZcPR5b2pkOv6pd4BZSbxAXk",
  },
};

function Landing() {
  const [popular, setPopular] = useState([]);

  async function fetchPopularMovies() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        options
      );
      setPopular(data.results);
      console.log("popular", data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPopularMovies();
  }, [])
  
  return (
    <div>
      <Header />
      <div className="main">
        <Body />
      </div>
    </div>
  );
}

export default Landing;
