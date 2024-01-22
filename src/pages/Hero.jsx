import React, { useState, useEffect } from "react";
import "./hero.css";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";
import MovieSwiper from "../components/MovieSwiper";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/data/movieData.json");
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handlSlideChange = id => {
    const newMovie = movies.map(movie => {
      movie.active = false
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    })
    setMovies(newMovie)
  }

  return (
    <div className="hero">
      {movies && movies.length > 0 && movies.map(movie => {
        return (
          <div className="movie">
            <img src={movie.bgImg} alt="bgimage" className={`bgImg ${movie.active ? "active" : undefined}`} />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12 ">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12 ">
                  <MovieDate movie={movie} />
                  <PlayBtn movie={movie} />
                </div>
              </div>
            </div>
          </div>)


      })}

      {movies.length > 0 && <MovieSwiper slides={movies} slideChange={handlSlideChange} />}
    </div>
  );
};

export default Hero;
