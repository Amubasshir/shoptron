import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].cartQuantity += 1;
        toast.info('Quantity increased', {
          position: 'bottom-left',
          theme: 'dark',
        });
      } else {
        const productAssemble = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(productAssemble);
        toast.success('Item added', {
          position: 'bottom-left',
          theme: 'dark',
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = updatedCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

      toast.error('Item removed', {
        position: 'bottom-left',
        theme: 'dark',
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
