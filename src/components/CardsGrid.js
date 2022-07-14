import React, { useState, useEffect } from "react";
import Card from "./Card";
import items from "../Data";
import { useParams } from "react-router-dom";
import "./Card.scss";

const CardsGrid = ({ products }) => {
  const [modelSItems, setModelSItems] = useState({});
  const [useSubSubCategories, setUseSubSubCategories] = useState(false);
  const params = useParams();
  useEffect(() => {
    setUseSubSubCategories(false);
    if (
      params.productCategory === "vehicle-accessories" ||
      params.productCategory === "apparel"
    ) {
      let copy = {};
      products.forEach((product) => {
        product.options.forEach((option) => {
          if (
            option !== "view-details" &&
            option !== "quick-add+" &&
            option !== "select-size"
          ) {
            setUseSubSubCategories(true);
            if (copy[option]) {
              copy[option] = [...copy[option], product];
            } else {
              copy[option] = [product];
            }
          }
        });
      });
      setModelSItems(copy);
    } else {
      setModelSItems({});
    }
  }, [params]);

  return !useSubSubCategories ? (
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
  ) : (
    <>
      {Object.keys(modelSItems)
        .filter((key) => key === "best-seller")
        .map((key, i) => (
          <div key={key}>
            <h3>{key.replace(/-/s, " ")}</h3>
            <div className='cardGrid'>
              {modelSItems[key].map((product, index) => (
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
          </div>
        ))}
      {Object.keys(modelSItems)
        .filter((key) => key !== "best-seller")
        .map((key, i) => (
          <div key={key}>
            <h3>{key}</h3>
            <div className="cardGrid">
              {modelSItems[key].map((product, index) => (
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
          </div>
        ))}
    </>
  );
};

export default CardsGrid;
