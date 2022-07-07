import React from "react";
import wallConnector from "../assets/images/wallConnector.avif";
import wallConnectorHov from "../assets/images/wallConnectorHover.avif";

const products = [
  {
    itemImg: wallConnector,
    itemImgHover: wallConnectorHov,
    itemName: "Wall Connector",
    itemPrice: "$400",
  },
  {
    itemImg: "",
    itemName: "Wall Connector Pedestal",
    itemPrice: "$425",
  },
  {
    itemImg: "",
    itemName: "Wall Connector Color Match Pedestal Faceplate",
    itemPrice: "$75",
  },
  {
    itemImg: "",
    itemName: "Cable Organizer",
    itemPrice: "$35",
  },
];

function Card() {
  return (
    <div className="cardWrapper">
      <div className="itemImgWrapper">
        <div className="itemImg">
          <img src={products.itemImg} alt="" />
        </div>
        <div className="itemImgOnHover">
          <img src="" alt="" />
          <p>Quick Add +</p>
        </div>
      </div>
      <div className="item">
        <p className="itemName">{products.itemName}</p>
        <p className="itemPrice">{products.itemPrice}</p>
      </div>
    </div>
  );
}

export default Card;
