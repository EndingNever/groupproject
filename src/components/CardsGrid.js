import React, { useState, useEffect } from "react";
import Card from "./Card";
import items from "../Data";
import "./Card.scss";

const CardsGrid = ({ products }) => {
  const [modelSItems, setModelSItems] = useState({})

  useEffect(() => {
    let copy = JSON.parse(JSON.stringify(modelSItems));
    products.forEach((product) => {
      product.options.forEach((option) => {
        if (option !== 'view-Details' && option !== 'quick-add+') {
          console.log(modelSItems)
          if (copy[option]) {
            copy[option] = [...copy[option], product];
          } else {
            copy[option] = [product];
          }
          console.log(copy);
        }
      })
    })
    setModelSItems(copy);
  }, []);

  return Object.keys(modelSItems).length ? Object.keys(modelSItems).map((key, i) => <div><h3>{key}</h3><div className="cardGrid" key={key}>{modelSItems[key].map((product, index) =>
    <Card
      key={index}
      itemImg={product.itemImg}
      itemImgHover={product.itemImgHover}
      itemName={product.itemName}
      itemPrice={product.itemPrice}
      stockStatus={product.stockStatus}
      product={product}
    />
  )}</div></div>) : (
    <div className="cardGrid">
      {products.map((product, index) => (
        <Card
          key={index}
          itemImg={product.itemImg}
          itemImgHover={product.itemImgHover}
          itemName={product.itemName}
          itemPrice={product.itemPrice}
          stockStatus={product.stockStatus}
          product={product}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
