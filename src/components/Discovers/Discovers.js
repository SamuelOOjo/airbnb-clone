import React from "react";
import "./Discovers.css";
import Discover from "../Discover/Discover";

function Discovers() {
  return (
    <div data-testid='discovers_test' className="discovers">
      <h1>Discover Airbnb Experiences</h1>
      <div className="discovers__section">
        <Discover
          src="https://a0.muscache.com/im/pictures/35612883-8e4c-440a-a768-ca7f268bd294.jpg?im_w=720"
          title="Things to do on your trip"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          button_text="Experiences"
        />
        <Discover
          src="https://a0.muscache.com/im/pictures/aec597d9-9c5c-4746-965c-d3e1643299f7.jpg?im_w=720"
          title="Things to do from home"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          button_text="Online Experiences"
        />
      </div>
    </div>
  );
}

export default Discovers;
