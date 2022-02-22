import React from "react";
import "./Questioncard.css";

function Questioncard() {
  return (
    <div data-testid='questioncard_test' className="questioncard">
      <img
        src="https://a0.muscache.com/im/pictures/aa630fb7-eeb3-4fc1-aa69-456c0eb83d8b.jpg?im_w=720"
        alt=""
      />
      <div className="questioncard_info">
        <h1>Questions about hosting?</h1>
        <button>Ask a Superhost</button>
      </div>
    </div>
  );
}

export default Questioncard;
