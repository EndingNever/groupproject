import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  cartSelectors,
  cartQuantity,
  //   getTotal,
  cartTotal,
  resetCart,
} from "../../app/features/cartSlice";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = styled.div`
  min-height: calc(100vh - 91.2px);
  padding-top: 100px;
  max-width: 326px;
  margin: auto;
  text-align: left;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .cartSummary-item-name {
    max-width: 50%;
  }
  ul {
    margin-top: 32px;
  }
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .price-total-breakdown {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    gap: 8px;
    flex-wrap: wrap;
    span {
      text-align: center;
    }
  }
  .totalPrice {
    margin-top: 8px;
  }
  button {
    margin-top: 32px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #3d69e1;
    border: none;
    color: white;
    position: relative;
    width: 100%;
    &:active,
    :focus {
      &::after {
        content: "";
        border: 2px solid white;
        position: absolute;
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        top: 3px;
        left: 3px;
        border-radius: 32px;
      }
    }
    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    }
  }
`;

const ConfirmScreen = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  height: calc(100vh - 91.2px);
  width: 100%;
  background-color: white;
  padding-top: 100px;
  display: grid;
  place-items: center;
  max-width: 326px;
  transform: translateX(-50%);
  text-align: center;
`;

export default function Confirmation() {
  const cartEntities = useSelector(cartSelectors.selectEntities);
  const cartIds = useSelector(cartSelectors.selectIds);
  const cartQty = useSelector(cartQuantity);
  const cartTtl = useSelector(cartTotal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [confirm, setConfirm] = useState(false);
  const [toId, setToId] = useState();

  useEffect(() => {
    if (confirm) {
      dispatch(resetCart());
      const timer = setTimeout(() => {
        navigate("/groupproject");
      }, 2000);
      setToId(timer);
    }
    return () => clearTimeout(toId);
  }, [confirm, navigate]);

  return (
    <ConfirmationPage>
      <h1>Confirm Order</h1>
      <ul>
        {cartIds.map((id) => (
          <li key={id}>
            <p className='cartSummary-item-name'>{cartEntities[id].itemName}</p>
            <p>{cartEntities[id].quantity}</p>
            <b>
              $
              {(cartEntities[id].itemPrice * cartEntities[id].quantity)
                .toFixed(2)
                .toLocaleString("en-US")}
            </b>
          </li>
        ))}
      </ul>
      <h3>Total</h3>
      <div className='price-total-breakdown'>
        <span>
          <p># Items</p>
          <b>{cartQty}</b>
        </span>
        <span>
          <p>Tax</p>
          <b>${(cartTtl * 0.035).toFixed(2)}</b>
        </span>
        <span>
          <p>Sub Total</p>
          <b>${cartTtl.toFixed(2).toLocaleString("en-US")}</b>
        </span>
      </div>
      <p className='totalPrice'>
        Total Price{" "}
        <b>${(cartTtl + cartTtl * 0.035).toFixed(2).toLocaleString("en-US")}</b>
      </p>
      <button onClick={() => setConfirm(true)}>Confirm</button>
      {confirm && (
        <ConfirmScreen>
          <h1>YOUR ORDER HAS BEEN ACCEPTED</h1>
          <p>but not really</p>
        </ConfirmScreen>
      )}
    </ConfirmationPage>
  );
}
