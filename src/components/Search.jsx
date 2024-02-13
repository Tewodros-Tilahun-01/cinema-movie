import React from "react";
import "./search.css";
function Search(props) {
  return (
    <div className="search">
      <input type="text" placeholder="search" className="text" />
      <div onClick={props.filter}><ion-icon name="search-outline" ></ion-icon>
      </div>
    </div>
  );
}

export default Search;
