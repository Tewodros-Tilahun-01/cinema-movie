import React from "react";
import { useState } from "react"
import "./playBtn.css";
import MovieModal from "./MovieModal";
function Button({ movie }) {
  const [states, setStates] = useState(false)
  const toggleModal = () => {
    setStates(!states)
  }
  return (
    <>
      <div className={`trailer ${movie.active ? "active" : undefined}`}>
        <a className="playBtn" onClick={toggleModal}>
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && states && <MovieModal movie={movie} states={states} toggleModal={toggleModal} />}
    </>

  );
}

export default Button;
