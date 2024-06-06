import React from "react";
import "./movieModal.css";
function MovieModal({ movie, toggleModal, sliderStates }) {
    return (
        <div className={`movieModal ${sliderStates ? "active" : undefined}`}>
            <a href="#home" className="modalClose" onClick={toggleModal}>
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe
                width={1280}
                height={720}
                title={`${movie.title} | offical Trailer`}
                src={movie.video}
                allow="accelerometer; clipboard; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameborder="0"
            ></iframe>
            allowFullScreen
        </div>
    );
}

export default MovieModal;
