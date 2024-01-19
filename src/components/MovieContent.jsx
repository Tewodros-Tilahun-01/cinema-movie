import React from "react";
import "./movieContent.css";
import title from "../image/transformer-title.png";
import Button from "../components/Button";
function MovieContent() {
  return (
    <div className="content active">
      <img src={title} alt="movie title" className="movie-title" />
      <h4>
        <span>year</span>

        <span>
          <i>age</i>
        </span>
        <span>length</span>
        <span>category</span>
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
        perferendis inventore repudiandae nam expedita reiciendis labore. Id
        iure voluptatibus illum quis beatae, eius dicta modi optio perferendis
        alias ea dolorem.
      </p>
      <Button icon={<ion-icon name="bookmark-outline"></ion-icon>
      } name="book" color="#ff3700" bgColor="#ffffff" />
      <Button icon={<ion-icon name="add-outline"></ion-icon>} name="my list" /> </div>

  );
}

export default MovieContent;
