import { useSelector } from "react-redux";
import { cartTotal } from "../../app/features/cartSlice";
import { StyledOrderSummary } from "./CartStyledComponents";
export const OrderSummary = () => {
  const cartTtl = useSelector(cartTotal);

  return (
    <StyledOrderSummary>
      <h2>Order Summary</h2>
      <p>
        Shipping <span>Calculated at checkout</span>
      </p>
      <p>
        Sales Tax <button className="cart-sales-tax-info-button">i</button>
        <span>Calculated at checkout</span>
      </p>
      <h2>
        Subtotal <span>${cartTtl}</span>
      </h2>
      <button className='checkoutButton'>CHECKOUT</button>
    </StyledOrderSummary>
  );
};
