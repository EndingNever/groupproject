import styled from "styled-components";

export const CartPage = styled.div`
  * {
    margin: 0;
    padding: 0;
    line-height: auto;
  }
  min-height: calc(100vh - 91.2px);
  max-width: 100vw;
  padding: 0px 20px;
  padding-top: 88px;
  display: flex;
  justify-content: center;
  text-align: left;
  overflow-x: hidden;
  @media (min-width: 960px) {
    padding-bottom: 80px;
  }
  .cartContainer {
    width: 100%;
    max-width: 1104px;
    @media (max-width: 960px) {
      padding: 16px;
    }
  }
  h1 {
    margin-bottom: 32px;
    @media (max-width: 960px) {
      width: 100%;
      max-width: 580px;
      margin: auto;
      margin-bottom: 32px;
    }
  }
  .cartContent {
    display: flex;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: 960px) {
      flex-direction: column;
      align-items: center;
      max-width: 580px;
      margin: auto;
    }
    h1 {
      align-self: flex-start;
    }

    .cartItems {
      flex-grow: 1;
      max-width: 540px;
      padding-top: 32px;
      @media (max-width: 960px) {
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        width: 100%;
        max-width: 100%;
      }
    }
  }
  .cartExtraFooterController {
    @media (min-width: 960px) {
      display: none;
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
  h2 {
    display: flex;
  }
  @media (max-width: 960px) {
    width: 100%;
    box-shadow: none;
    .checkoutButton {
      display: none;
    }
  }
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
    position: relative;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledCartItem = styled.div`
  display: flex;
  margin-bottom: 64px;
  h3 {
    font-size: 1em;
  }
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
    align-items: center;
    flex-wrap: wrap;
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
      transform: rotate(${({ dropDown }) => (dropDown ? "180deg" : "0deg")});
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

export const MobileCheckoutBtn = styled.div`
  position: fixed;
  bottom: 0;
  padding: 20px;
  background-color: white;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: grid;
  place-items: center;
  @media (min-width: 960px) {
    display: none;
  }
  button {
    position: relative;
    cursor: pointer;
    width: 500px;
    max-width: 90vw;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: #3d69e1;
    color: white;
    font-family: "Gotham-Medium", sans-serif;
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
  }
`;
