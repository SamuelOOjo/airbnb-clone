import React from "react";
import "./Giftcard.css";

function Giftcard() {
  return (
    <div data-testid='giftcard_test'className="giftcard">
      <div className="giftcard_shop">
        <h1>Shop Airbnb gift cards</h1>
        <button type="submit">Learn more</button>
      </div>
      <img
        className="giftcard_card"
        src="https://a0.muscache.com/im/pictures/204eea7c-fd71-4316-b056-7e2cc664351d.jpg?im_w=720"
        alt=""
      />
    </div>
  );
}

export default Giftcard;
