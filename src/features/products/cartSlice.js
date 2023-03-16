import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // check the item is already in the cart or not
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // if exist
      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].cartTotalQuantity += 1;
      } else {
        // add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
        // add to local storage
        localStorage.setItem('cartItems', JSON.stringify('state.cartItems'));
      }
    },
    removeFromCart(state, action) {
      const updatedCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItem;
      // update local storage
      localStorage.setItem('cartItems', JSON.stringify('state.cartItems'));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
