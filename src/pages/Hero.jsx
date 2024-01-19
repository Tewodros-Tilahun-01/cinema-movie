import React, { useState, useEffect } from "react";
import "./hero.css";
import bgimage from "../image/bg-transformer.jpg";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";

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

  return (
    <div className="hero">
      <div className="movie">
        <img src={bgimage} alt="bgimage" className="bgImg active" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <MovieContent />
            </div>
            <div className="col-lg-6 col-md-12">
              <MovieDate />
              <PlayBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
