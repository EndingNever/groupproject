import { useSelector } from "react-redux";
import { cartTotal } from "../../app/features/cartSlice";
import { StyledOrderSummary } from "./CartStyledComponents";
import { useNavigate } from "react-router-dom";
export const OrderSummary = () => {
  const cartTtl = useSelector(cartTotal);
  const navigate = useNavigate();
  return (
    <StyledOrderSummary>
      <h2>Order Summary</h2>
      <p>
        Shipping <span>Calculated at checkout</span>
      </p>
      <p>
        Sales Tax{" "}
        <button className='cart-sales-tax-info-button'>
          <p>i</p>
        </button>
        <span>Calculated at checkout</span>
      </p>
      <h2>
        Subtotal <span>${cartTtl.toLocaleString("en-US")}</span>
      </h2>
      <button className='checkoutButton' onClick={() => navigate("/groupproject/checkout")}>
        CHECKOUT
      </button>
    </StyledOrderSummary>
  );
};
