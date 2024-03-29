import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],

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
      } else {
        const productAssemble = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(productAssemble);
        toast.success('Item added to cart!', {
          position: 'bottom-left',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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

      toast.error('Item removed from cart!', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      // update the local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      toast.error('Cart clear!', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      // update the local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // if exist
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = updatedCartItems;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },

    getSubTotal(state, action) {
      const subTotal = state.cartItems.reduce((acc, item) => {
        const { price, cartQuantity } = item;
        const itemTotal = price * cartQuantity;

        acc += itemTotal;

        return acc;
      }, 0);
      state.cartTotalAmount = subTotal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseCart,
  getSubTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
