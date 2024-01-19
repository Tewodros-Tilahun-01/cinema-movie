import React from "react";
import "./playBtn.css";
function Button() {
  return (
    <div className="trailer active">
      <a href="/" className="playBtn">
        <ion-icon name="play-outline"></ion-icon>
      </a>
      <p>Watch Trailer</p>
    </div>
  );
}

export default Button;
