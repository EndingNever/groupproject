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
  const [selectedColor, setSelectedColor] = useState({});

  const dispatch = useDispatch();

  return (
    <div className="cardWrapper">
      <div className="stockStatus">{!stockStatus && <p>Out Of Stock</p>}</div>

      <div className="itemImgWrapper">
        <div className="itemImg">
          {itemName === "Tesla Shop Gift card" ? (
            <video
              className="img-wrapper"
              height="100%"
              width="100%"
              autoPlay="autoplay"
              muted
              loop
            >
              <source src={itemImg} type="video/webm" />{" "}
            </video>
          ) : (
            <img
              src={
                Object.values(selectedColor).length > 0
                  ? selectedColor.itemImg
                  : itemImg
              }
              alt=""
            />
          )}
        </div>
        <div className="itemImgOnHover">
          {itemName === "Tesla Shop Gift card" ? (
            <video
              className="img-wrapper"
              height="100%"
              width="100%"
              autoPlay="autoplay"
              muted
              loop
            >
              <source src={itemImg} type="video/webm" />{" "}
            </video>
          ) : (
            <img
              src={
                Object.values(selectedColor).length > 0
                  ? selectedColor.itemImgHover
                  : itemImgHover
              }
              alt=""
            />
          )}
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
                <h4>Select Your Size</h4>
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
        <div>
          <p className="itemName">{itemName}</p>
          <p className="itemPrice">
            {" "}
            $
            {typeof itemPrice === "object"
              ? `${itemPrice[0].toLocaleString(
                  "en-US"
                )} - $${itemPrice[1].toLocaleString("en-US")}`
              : itemPrice.toLocaleString("en-US")}
          </p>
        </div>
        {product.options.includes("select-color") && product.color2 ? (
          <div className="productTile">
            {product.color2.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color.color }}
                onClick={() => {
                  setSelectedColor(color);
                }}
              >
                {" "}
              </button>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
