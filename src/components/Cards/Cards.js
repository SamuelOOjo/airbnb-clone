import React from "react";
import "./Cards.css";
import Card from '../Card/Card'

function Cards() {
  return (
    <div data-testid='cards_test' className="cards">
      
      <div className="cards__section">
        <Card
          src="https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=720"
          title="Mont-Tremblant"
          description="116 kilometres away"
          color="rgb(188, 26, 110)"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=720"
          title="Prince Edward"
          description="200 kilometres away"
          color="rgb(188, 26, 110)"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/68ef0c20-321d-42c0-beb4-13bce3e258a2.jpg?im_w=720"
          title="Bancroft"
          description="174 kilometres away"
          color="rgb(204, 45, 74)"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/cccdc2e6-e6dc-4706-b9d4-ee2a80115703.jpg?im_w=720"
          title="Maniwaki"
          description="108 kilometres away"
          color="rgb(217, 59, 48)"
        />
      </div>
    </div>
  );
}

export default Cards;
