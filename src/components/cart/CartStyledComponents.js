import styled from "styled-components";

export const CartPage = styled.div`
  padding-top: 88px;
  display: flex;
  justify-content: center;
  .cartContainer {
    width: 100%;
    max-width: 1104px;
    text-align: left;
  }
  h1 {
    margin-bottom: 32px;
  }
  .cartContent {
    display: flex;
    justify-content: space-between;

    .cartItems {
      flex-grow: 1;
      max-width: 540px;
      padding-top: 32px;
    }
    .orderSummary {
    }
  }
`;

export const StyledOrderSummary = styled.div`
  padding: 32px;
  width: 432px;
  border-radius: 10px;

  background-color: white;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.1);
  p {
    display: flex;
  }
  span {
    display: block;
    margin-left: auto;
  }
  .checkoutButton {
    padding: 12px;
    border-radius: 32px;
    border: none;
    background-color: #3d69e1;
    color: white;
    font-weight: 500;
  }
  .cart-sales-tax-info-button {
    background: none;
    border: none;
    border: 2px solid black;
    height: 1.5em;
    width: 1.5em;
    border-radius: 50%;
    font-family: "Gotham-Bold", sans-serif;
    margin-left: 8px;
  }
`;

export const StyledCartItem = styled.div`
  display: flex;
  margin-bottom: 64px;
  img {
    height: 90px;
    width: 90px;
    margin-right: 20px;
  }
  .cartItemPrice {
    margin-left: auto;
  }
  .cartItemDescription {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .quantity-selector-main-cart {
    display: flex;
  }
  .cart-item-remove {
    margin-left: 16px;
    border-bottom: 2px solid black;
    cursor: pointer;
  }
`;

export const StyledSelector = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ol {
    list-style-type: none;
  }
  .selector-drop-down {
    width: fit-content;
    overflow: hidden;
    position: absolute;
    bottom: -4px;
    transition: all 0.3s;
    opacity: 0;
    height: 0px;
    z-index: 1;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(100%);
    max-height: 400px;
    overflow-y: scroll;
  }
  .selector-drop-down-reveal {
    height: calc(41px * ${({ maxQty }) => (maxQty ? `${maxQty}` : "1")});
    opacity: 1;
  }
  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    height: 1.3em;
    font-size: 1em;
    font-family: "Gotham-Bold", sans-serif;
    margin-left: 8px;
    img {
      height: 7px;
      width: 13px;
      margin: 0px 6px;
    }
  }
`;

export const StyledOption = styled.li`
  padding: 6px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0px;
  background-color: ${({ selected }) =>
    selected ? "rgb(237, 237, 237)" : "none"};
  img {
    margin: 0;
    width: 11px;
    height: fit-content;
    margin-left: 8px;
    opacity: ${({ selected }) => (selected ? "1" : "0")};
  }
`;