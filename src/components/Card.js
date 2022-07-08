import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="cardWrapper">
      <div className="itemImgWrapper">
        <div className="itemImg">
          <img src={props.itemImg} alt="" />
        </div>
        <div className="itemImgOnHover">
          <img src={props.itemImgHover} alt="" />
          <div className="quickAdd">
            {" "}
            <p>Quick Add +</p>
          </div>
        </div>
      </div>
      <div className="item">
        <p className="itemName">{props.itemName}</p>
        <p className="itemPrice">{props.itemPrice}</p>
      </div>
    </div>
  );
}

export default Card;
