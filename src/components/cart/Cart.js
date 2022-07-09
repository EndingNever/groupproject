import React from "react";
import wallConnector from "../../assets/images/feature_wall_connector.avif";
import { CartPage } from "./CartStyledComponents";

const dummyData = [
  {
    itemImg: wallConnector,
    itemImgHover: "wallConnectorHov",
    itemName: "Wall Connector",
    itemPrice: 400,
    subCategory: "at-home",
    category: "charging",
    stockStatus: true,
    options: ["best-seller", "interior"],
  },
  {
    itemImg: wallConnector,
    itemImgHover: "wallConnectorHov",
    itemName: "Wall Connector",
    itemPrice: 400,
    subCategory: "at-home",
    category: "charging",
    stockStatus: true,
    options: ["best-seller", "interior"],
  },
];

const cartItems = dummyData.map((cartItem) => (
  <div className='cartItem'>
    <img src={cartItem.itemImg} alt='' />
    <div className='cartItemDescription'>
      <h3>{cartItem.itemName}</h3>
      <p>Options go Here</p>
      <div>
        Quantity:{" "}
        <span>
          <select name='quantityNum'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </span>
        <span>Remove</span>
      </div>
    </div>
    <h3 className='cartItemPrice'>${cartItem.itemPrice}</h3>
  </div>
));

const OrderSummary = () => (
  <div className='orderSummary'>
    <h2>Order Summary</h2>
    <p>
      Shipping <span>Calculated at checkout</span>
    </p>
    <p>
      Sales Tax <button>i</button>
      <span>Calculated at checkout</span>
    </p>
    <h2>
      Subtotal <span>$100.00</span>
    </h2>
    <button className='checkoutButton'>CHECKOUT</button>
  </div>
);

export default function Cart() {
  return (
    <CartPage>
      <div className='cartContainer'>
        <h1>Cart</h1>
        <div className='cartContent'>
          <div className='cartItems'>{cartItems}</div>
          <OrderSummary />
        </div>
      </div>
    </CartPage>
  );
}
