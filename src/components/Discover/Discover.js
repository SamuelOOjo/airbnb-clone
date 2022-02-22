import React from "react";
import "./Discover.css";

function Discover({ src, title, button_text }) {
  return (
    <div data-testid='discover_test' className="discover">
      <img src={src} alt="" />
      <div className="discover__info">
        <h2>{title}</h2>
        <button>{button_text}</button>
      </div>
    </div>
  );
}

export default Discover;
