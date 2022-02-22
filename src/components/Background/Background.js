import React from "react";
import "./Background.css";

function Background() {
  return (
    <div data-testid="background_test" className="background">
      <img
        className="background_picture"
        src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_w=2560"
        alt=""
      />
      <div className="background__text">
        <h1>Not sure where to go? Perfect.</h1>
        <button type="submit" className="background__textButton">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Background;
