import React from "react";
import "./navListItem.css";
const NavListItem = (props) => {
  return (
    <li>
      <a href={props.link}> {props.name}</a>
    </li>
  );
};

export default NavListItem;
