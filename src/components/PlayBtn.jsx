import React from "react";
import "./playBtn.css";
import MovieModal from "./MovieModal";
function Button({ movie, toggleModal, sliderStates }) {
    return (
        <>
            <div className={`trailer ${movie.active ? "active" : undefined}`}>
                <a href="#home" className="playBtn" onClick={toggleModal}>
                    <ion-icon name="play-outline"></ion-icon>
                </a>
                <p>Watch Trailer</p>
            </div>
            {movie.active && sliderStates && (
                <MovieModal
                    movie={movie}
                    sliderStates={sliderStates}
                    toggleModal={toggleModal}
                />
            )}
        </>
    );
}

export default Button;
