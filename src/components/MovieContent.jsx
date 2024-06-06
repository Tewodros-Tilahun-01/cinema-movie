import React from "react";
import "./movieContent.css";
import Button from "../components/Button";
function MovieContent({ movie }) {
    return (
        <div className={`content ${movie.active ? "active" : undefined}`}>
            <img
                src={movie.titleImg}
                alt="movie title"
                className="movie-title"
            />
            <h4>
                <span>{movie.title}</span>

                <span>
                    <i>{movie.year}</i>
                </span>
                <span>{movie.length}</span>
                <span>{movie.category}</span>
            </h4>
            <p>{movie.description}</p>
            <Button
                icon={<ion-icon name="bookmark-outline"></ion-icon>}
                name="book"
                color="#ff3700"
                bgColor="#ffffff"
            />
            <Button
                icon={<ion-icon name="add-outline"></ion-icon>}
                name="my list"
            />{" "}
        </div>
    );
}

export default MovieContent;
