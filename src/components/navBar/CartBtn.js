import React, { useState } from "react";
import { ReactComponent as CartBtnSvg } from "../../assets/images/cart.svg";
import styled from "styled-components";
import { cartQuantity } from "../../app/features/cartSlice";
import { useSelector } from "react-redux";

const CartBtnStyled = styled.div`
  position: relative;
  button {
    background: none;
    border: none;
  }
  .cartQtyIndicator {
    content: ${({ cartQty }) => JSON.stringify(cartQty)};
    position: absolute;
    background-color: #3d69e1;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function CartBtn() {
  // const [cartQty, setCartQty] = useState(5);
  const cartQty = useSelector(cartQuantity);
  return (
    <CartBtnStyled cartQty={cartQty}>
      {cartQty > 0 && (
        <div className='cartQtyIndicator'>
          <p>{cartQty}</p>
        </div>
      )}
      <button>
        <CartBtnSvg />
      </button>
    </CartBtnStyled>
  );
}
