import React from "react";
import "./backbutton.css";
function BackButton(props) {
    return (
        <button
            className="back-button"
            onClick={() => props.setSearchOn(false)}
        >
            x
        </button>
    );
}

export default BackButton;
