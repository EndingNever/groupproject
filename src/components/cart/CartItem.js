import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../../app/features/cartSlice";
import { StyledCartItem } from "./CartStyledComponents";
import QuantitySelector from "./QuantitySelector";
// import

export const CartItem = ({ cartId, cartEntities }) => {
  const [itemQty, setItemQty] = useState(cartEntities[cartId].quantity);
  //   const qtySelectorRef = useRef();
  const dispatch = useDispatch();
  //   useEffect(() => {

  //   }, [itemQty]);

  function handleSelect(qty) {
    // console.log(e.target.value);

    dispatch(updateQuantity({ cartId, value: qty }));
    setItemQty(qty);
  }
  return (
    <StyledCartItem>
      <img src={cartEntities[cartId].itemImg} alt='' />
      <div className='cartItemDescription'>
        <h3>{cartEntities[cartId].itemName}</h3>
        <p>Options go Here</p>
        <div className='quantity-selector-main-cart'>
          Quantity:
          <span>
            <QuantitySelector
              handleSelect={handleSelect}
              itemQty={itemQty}
            />
          </span>
          <span
            onClick={() => dispatch(removeItem(cartId))}
            className='cart-item-remove'
          >
            Remove
          </span>
        </div>
      </div>
      <h3 className='cartItemPrice'>${cartEntities[cartId].itemPrice}</h3>
    </StyledCartItem>
  );
};
