import React from "react";
import "./Card.scss";

const Card = (props) => {
  const itemImg = props.itemImg;
  const itemImgHover = props.itemImgHover;
  const itemName = props.itemName;
  const itemPrice = props.itemPrice;
  const stockStatus = props.stockStatus;

  return (
    <div className="cardWrapper">
      <div className="stockStatus">
        {stockStatus ? <p>Out Of Stock</p> : ""}
      </div>
      <div className="itemImgWrapper">
        <div className="itemImg">
          <img src={itemImg} alt="" />
        </div>
        <div className="itemImgOnHover">
          <img src={itemImgHover} alt="" />
          <div className="quickAdd">
            {" "}
            <p>Quick Add +</p>
          </div>
        </div>
      </div>
      <div className="item">
        <p className="itemName">{itemName}</p>
        <p className="itemPrice">${itemPrice}</p>
      </div>
    </div>
  );
};

export default Card;
