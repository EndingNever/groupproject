import React from "react";
import "./ChargingPage.scss";
import CardsGrid from "../CardsGrid";

const ChargingPage = () => {
  return (
    <div className="chargingWrapper">
      <h2>Charging</h2>
      <div className="atHome">
        <h3>At Home</h3>
        <CardsGrid />
      </div>
      <div className="onTheRoad">
        <h3>On the Road</h3>
      </div>
      <div className="parts">
        <h3>Parts</h3>
      </div>
    </div>
  );
};

export default ChargingPage;
