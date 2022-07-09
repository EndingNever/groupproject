import { createSlice, createEntityAdapter, nanoid } from "@reduxjs/toolkit";

export const cartAdapter = createEntityAdapter();
export const cartSelectors = cartAdapter.getSelectors(
  (state) => state.cartItems
);

const initialState = {
  cartItems: cartAdapter.getInitialState(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productCopy = JSON.parse(JSON.stringify(action.payload));
      //create random id for cart item
      productCopy.id = nanoid();
      cartAdapter.addOne(state.cartItems, productCopy);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
