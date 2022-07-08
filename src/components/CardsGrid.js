import React from "react";
import Card from "./Card";
import items from "../Data";
import "./Card.scss";

const CardsGrid = () => {
  return (
    <div className="cardGrid">
      {items.subCategories.map((childCategory, index) => (
        <div key={index}>
          <h1>{childCategory.subCategory}</h1>
          {childCategory.products.map((product, index) => (
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
      ))}
    </div>
  );
};

export default CardsGrid;
