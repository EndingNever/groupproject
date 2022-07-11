import React, { useEffect, useRef, useState } from "react";
import { CartPage } from "./CartStyledComponents";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSelectors,
  cartQuantity,
  getTotal,
} from "../../app/features/cartSlice";
import { useNavigate } from "react-router-dom";
import { OrderSummary } from "./OrderSummary";
import { CartItem } from "./CartItem";

export default function Cart() {
  const cartEntities = useSelector(cartSelectors.selectEntities);
  const cartIds = useSelector(cartSelectors.selectIds);
  const cartQty = useSelector(cartQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartQty <= 0) {
      navigate("/");
    }
    dispatch(getTotal());
  }, [cartQty, navigate, dispatch]);

  const cartItems = cartIds.map((cartId) => (
    <CartItem cartId={cartId} cartEntities={cartEntities} />
  ));

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