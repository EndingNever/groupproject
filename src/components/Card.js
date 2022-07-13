import React, { useState } from "react";
import "./Card.scss";
import { addItem } from "../app/features/cartSlice";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const itemImg = props.itemImg;
  const itemImgHover = props.itemImgHover;
  const itemName = props.itemName;
  const itemPrice = props.itemPrice;
  const stockStatus = props.stockStatus;
  const product = props.product;
  const [size, setSize] = useState(false);

  const dispatch = useDispatch();
  return (
    <div className="cardWrapper">
      <div className="stockStatus">{!stockStatus && <p>Out Of Stock</p>}</div>
      <div className="itemImgWrapper">
        <div className="itemImg">
          <img src={itemImg} alt="" />
        </div>
        <div className="itemImgOnHover">
          <img src={itemImgHover} alt="" />
          <div
            className="quickAdd"
            onClick={() => dispatch(addItem(props.product))}
            onMouseEnter={() => setSize(true)}
            onMouseLeave={() => setSize(false)}
          >
            {product.options.includes("quick-add+") ? (
              <p>Quick Add +</p>
            ) : (
              <p>View Details</p>
            )}
            {size && product.options.includes("select-size") && (
              <div className="sizeSelector">
                <h3>Select Your Size</h3>
                <ul>
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>XXL</li>
                  <li>3XL</li>
                </ul>
              </div>
            )}
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
