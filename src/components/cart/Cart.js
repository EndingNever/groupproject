import React, { useEffect, useRef, useState } from "react";
import { CartPage } from "./CartStyledComponents";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSelectors,
  removeItem,
  cartQuantity,
  updateQuantity,
  getTotal,
  cartTotal
} from "../../app/features/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cartEntities = useSelector(cartSelectors.selectEntities);
  const cartIds = useSelector(cartSelectors.selectIds);
  const cartQty = useSelector(cartQuantity);
  const cartTtl = useSelector(cartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartQty <= 0) {
      navigate("/");
    }
    dispatch(getTotal());
  }, [cartQty, navigate, dispatch]);

  const CartItem = ({ cartId }) => {
    const [itemQty, setItemQty] = useState(cartEntities[cartId].quantity);
    const qtySelectorRef = useRef();
    useEffect(() => {
      console.log(itemQty);
      console.log(
        (Object.values(qtySelectorRef.current.options).find(
          (item) => item.value == itemQty
        ).selected = true)
      );
    });
    function handleSelect(e) {
      console.log(e.target.value);
      dispatch(updateQuantity({ cartId, value: JSON.parse(e.target.value) }));
    }
    return (
      <div className='cartItem'>
        <img src={cartEntities[cartId].itemImg} alt='' />
        <div className='cartItemDescription'>
          <h3>{cartEntities[cartId].itemName}</h3>
          <p>Options go Here</p>
          <div>
            Quantity:
            <span>
              <select
                name='quantityNum'
                ref={qtySelectorRef}
                onChange={handleSelect}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </span>
            <span onClick={() => dispatch(removeItem(cartId))}>Remove</span>
          </div>
        </div>
        <h3 className='cartItemPrice'>${cartEntities[cartId].itemPrice}</h3>
      </div>
    );
  };

  const cartItems = cartIds.map((cartId) => <CartItem cartId={cartId} />);

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
        Subtotal <span>${cartTtl}</span>
      </h2>
      <button className='checkoutButton'>CHECKOUT</button>
    </div>
  );
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
