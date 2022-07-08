import React from "react";
import styled from "styled-components";
import wallConnector from "../../assets/images/feature_wall_connector.avif";
const CartPage = styled.div`
  padding-top: 88px;
  background-color: pink;
  display: flex;
  justify-content: center;
  .cartContainer {
    width: 100%;
    max-width: 1104px;
    text-align: left;
  }
  h1 {
    margin-bottom: 50px;
  }
  .cartContent {
    display: flex;
    justify-content: space-between;
    .orderSummary {
      padding: 32px;
      width: 432px;
      border-radius: 10px;

      background-color: white;
      height: fit-content;
      display: flex;
      flex-direction: column;
      gap: 32px;
      span {
        width: 100%;
        text-align: right;
      }
      .checkoutButton {
        padding: 12px;
        border-radius: 32px;
        border: none;
        background-color: #3d69e1;
        color: white;
        font-weight: 500;
      }
    }
  }
`;

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

export default function Cart() {
  return (
    <CartPage>
      <div className='cartContainer'>
        <h1>Cart</h1>
        <div className='cartContent'>
          <div className='cartItems'>
            {dummyData.map((cartItem) => (
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
                <h3>${cartItem.itemPrice}</h3>
              </div>
            ))}
          </div>
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
        </div>
      </div>
    </CartPage>
  );
}
