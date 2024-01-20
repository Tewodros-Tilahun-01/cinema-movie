import React from 'react'
import "./movieModal.css"
function MovieModal({ movie, toggleModal, states }) {
    return (
        <div className={`movieModal ${states ? "active" : undefined}`}>
            <a href="#" className="modalClose" onClick={toggleModal}>
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe width={1280}
                height={720}
                title={`${movie.title} | offical Trailer`}
                src={movie.video}
                allow='accelerometer; clipboard; encrypted-media; gyroscope; picture-in-picture; web-share'
                frameborder="0"></iframe>
            allowFullScreen
        </div>
    )
}

export default MovieModal