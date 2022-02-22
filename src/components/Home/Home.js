import React from "react";
import "./Home.css";
import Cards from "../Cards/Cards.js"
import Discovers from "../Discovers/Discovers";
import Giftcard from "../Giftcard/Giftcard";
import Destinations from "../Destinations/Destinations";
import Questioncard from "../Questioncard/Questioncard";
import "react-simple-flex-grid/lib/main.css";

function Home() {
  return (
    <div data-testid='home_test' className="home">
      <Cards />
      <Discovers />
      <Giftcard />
      <Questioncard />
      <Destinations />
    </div>
  );
}

export default Home;
