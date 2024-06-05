import React from "react";
import "./card.css";
function Card({ movie }) {
    return (
        <div className="col-lg-2 col-md-4 sol-sm-6">
            <div className="movie-card">
                <img
                    src={movie.previewImg}
                    alt="prviewImg"
                    className="img-fluid"
                />
                <p>{movie.length} </p>
                <div className="content">
                    <h4>{movie.title}</h4>
                    <div className="card-icons">
                        <ion-icon name="add-outline"></ion-icon>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
