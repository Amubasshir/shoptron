import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeFromCart,
} from '../features/products/cartSlice';
import { currencyFormatter } from '../utils/currencyFormatter';

const Cart = () => {
  const { cartItems: data } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cart-section container mx-auto py-5">
      <div className="cart-headline">
        <h2 className="section-title uppercase text-4xl font-serif text-center mb-10 text-orange-500">
          {data.length > 0 ? 'Your Cart' : 'Cart is empty'}
        </h2>
        {data.length === 0 && (
          <Link
            to="/products"
            className="text-center text-xl uppercase bg-black hover:bg-orange-500 text-gray-50 font-medium py-3 rounded-md duration-300 cursor-pointer block"
          >
            Start shopping now! 👉🏻
          </Link>
        )}
      </div>
      {data.length > 0 && (
        <>
          <div className="cart-container ">
            <div className="product-headline grid grid-cols-5 gap-10 border-b pb-2 uppercase font-semibold ">
              <div className="col-product col-span-2">product</div>
              <div className="col-unit-price">unit price</div>
              <div className="col-quantity">quantity</div>
              <div className="col-total-price ml-auto">total price</div>
            </div>
            <div className="products flex flex-col">
              {data?.map((product) => (
                <div className="product grid grid-cols-5 gap-6 mt-4 border-b pb-5 ">
                  <div className="left flex col-span-2 gap-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-28 w-28 object-cover"
                    />
                    <div className="details flex flex-col items-start gap-3">
                      <span>{product.name}</span>
                      <button
                        onClick={() => handleRemove(product)}
                        className="remove uppercase text-sm text-red-400 hover:text-red-600 divide-purple-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="unit-price pl-5">
                    {currencyFormatter(product.price)}
                  </div>
                  <div className="counter flex ">
                    <button
                      onClick={() => handleDecrease(product)}
                      className="h-8 w-8 border border-gray-300 bg-gray-100 active:bg-gray-700 active:text-white"
                    >
                      -
                    </button>
                    <span className="h-8 w-8 border border-gray-300 bg-gray-100 flex justify-center items-center">
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(product)}
                      className="h-8 w-8 border border-gray-300 bg-gray-100 active:bg-gray-700 active:text-white"
                    >
                      +
                    </button>
                  </div>
                  <div className="total-price ml-auto">
                    {currencyFormatter(product.price)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-lower flex justify-between items-start py-10">
            <button
              onClick={() => dispatch(clearCart())}
              className="clear-btn border border-orange-400 hover:border-orange-600 bg-gray-100 hover:bg-gray-200 font-medium text-lg duration-300 py-3 px-8 rounded-sm"
            >
              CLEAR CART
            </button>
            <div className="flex flex-col items-start gap-2">
              <div className="top flex justify-between w-full text-2xl font-medium">
                <span className="text-black">Subtotal</span>
                <span className="text-red-500">$199</span>
              </div>
              <p className="text-gray-400">
                Taxes and shipping cost are included
              </p>
              <Link
                to="/"
                className="checkout bg-black py-3 px-8 w-full text-white font-medium text-lg rounded-sm tracking-widest hover:text-red-500 text-center"
              >
                CHECKOUT
              </Link>
              <Link
                to="/products"
                className="continue font-medium text-lg  duration-150 hover:border border-orange-500  px-2 py-1 rounded-sm "
              >
                Continue Shopping➡️
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
