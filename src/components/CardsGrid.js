import React from "react";
import Card from "./Card";
import items from "../Data";
import "./Card.scss";

function CardsGrid() {
  return (
    <div className="cardGrid">
      {items.map((items) => (
        <Card
          itemImg={items.itemImg}
          itemImgHover={items.itemImgHover}
          itemName={items.itemName}
          itemPrice={items.itemPrice}
        />
      ))}
    </div>
  );
}

export default CardsGrid;
