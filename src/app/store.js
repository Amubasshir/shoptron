import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/products/cartSlice';
import productsReducer, {
  productFetching,
} from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
store.dispatch(productFetching());
