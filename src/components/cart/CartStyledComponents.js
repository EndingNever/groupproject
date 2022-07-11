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
    .cartItem {
      display: flex;
      margin-bottom: 32px;
      img {
        height: 90px;
        width: 90px;
        margin-right: 20px;
      }
      .cartItemPrice {
        margin-left: auto;
      }
    }
    .cartItemDescription {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .orderSummary {
      padding: 32px;
      width: 432px;
      border-radius: 10px;

      background-color: white;
      height: fit-content;
      display: flex;
      flex-direction: column;
      gap: 32px;
      box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.1);
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