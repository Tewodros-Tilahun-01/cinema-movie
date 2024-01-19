import React from "react";
import "./button.css";
function Button({ icon, name, color = "#ffffff", bgColor = "#ff3700" }) {
  const style = {
    backgroundColor: bgColor
    , color: color
  }
  return (
    <a href="/" style={style} className="mainBtn">
      {icon}
      {name}
    </a>
  );
}

export default Button;
