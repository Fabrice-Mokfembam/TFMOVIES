import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Moviedetail from "./Pages/MovieDetails/Moviedetail";
import Landing from "./Pages/Home/Landing";
import { movieContext } from "./context/movie";
import { mObjectContext } from "./context/movieObject";
import { titleIdContext } from "./context/titleId";
import { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGM0MzJmYzZiYTc4OWUzYWM1ZDIxZjg4M2IzYTVhMyIsIm5iZiI6MTcyNTg2MTQ5MC45NTQyMTgsInN1YiI6IjY1MTc2NmRhOTY3Y2M3MDBmZjIyYmI0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.obvemDyyCaJVNZ86NeM4YuQ9Xgym3qVgSUaSX10NafA",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/details/:id",
    element: <Moviedetail />,
  },
]);

export default function App() {
  const [movies, setMovies] = useState([]);
  const [mObject, setMobject] = useState(""); 
  const [titleId, setTitleId] = useState({});

  async function fetchMovies() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      setMovies(data.results);
      if (data.results.length > 0) {
        setMobject(data.results[0].backdrop_path);
        setTitleId({title:data.results[0].title, id:data.results[0].id})
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <movieContext.Provider value={{ movies }}>
      <mObjectContext.Provider value={{ mObject, setMobject }}>
        <titleIdContext.Provider value={{titleId,setTitleId}}>
          <RouterProvider router={router} />
        </titleIdContext.Provider>
      </mObjectContext.Provider>
    </movieContext.Provider>
  );
}
