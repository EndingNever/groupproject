import React from "react";
import Card from "./Card";
import items from "../Data";
import "./Card.scss";

const CardsGrid = ({ products }) => {
  return (
    <div className="cardGrid">
      {products.map((product, index) => (
        <Card
          key={index}
          itemImg={product.itemImg}
          itemImgHover={product.itemImgHover}
          itemName={product.itemName}
          itemPrice={product.itemPrice}
          stockStatus={product.stockStatus}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
