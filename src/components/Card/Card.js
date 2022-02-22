import React from "react";
import "./Card.css";

function Card({ src, title, description, price, color }) {
  return (
    <div data-testid='card_test' className="card">
      <img src={src} alt="" />
      <div className="card__info" style={{ backgroundColor: color }}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
