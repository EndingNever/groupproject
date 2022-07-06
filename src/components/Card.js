import React from "react";

const products = [
  {
    itemImg: "",
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
      <div className="itemImg">
        <div className="itemImgNonHover">
          <img src="" alt="" />
        </div>
        <div className="itemImgOnHover">
          <img src="" alt="" />
          <p>Quick Add +</p>
        </div>
      </div>
      <div className="item">
        <p className="itemName"></p>
        <p className="itemPrice"></p>
      </div>
    </div>
  );
}

export default Card;
