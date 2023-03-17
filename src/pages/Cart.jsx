import React, { useState } from 'react';
import { currencyFormatter } from '../utils/currencyFormatter';

const data = [
  {
    id: 1,
    name: 'Blink Mini – Compact indoor plug-in smart security camera',
    description:
      'Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera',
    price: 64.99,
    image:
      'https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg',
    category: 'Camera',
  },
  {
    id: 2,
    name: 'Vlogging Camera, 4K Digital Camera for YouTube with WiFi',
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      'https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg',
    category: 'Camera',
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="cart-section container mx-auto py-5">
      <div className="cart-headline">
        <h2 className="section-title uppercase text-4xl font-serif text-center mb-10">
          Shopping Cart
        </h2>
      </div>
      <div className="cart-container ">
        <div className="product-headline grid grid-cols-5 gap-10 border-b pb-2 uppercase font-semibold ">
          <div className="col-product col-span-2">product</div>
          <div className="col-unit-price">unit price</div>
          <div className="col-quantity">quantity</div>
          <div className="col-total-price ml-auto">total price</div>
        </div>
        <div className="products flex flex-col">
          {data.map((product) => (
            <div className="product grid grid-cols-5 gap-6 mt-4 border-b pb-5 ">
              <div className="left flex col-span-2 gap-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-28 w-28 object-cover"
                />
                <div className="details flex flex-col items-start gap-3">
                  <span>{product.name}</span>
                  <button className="remove uppercase text-sm text-red-400 hover:text-red-600 divide-purple-300">
                    Remove
                  </button>
                </div>
              </div>
              <div className="unit-price pl-5">
                {currencyFormatter(product.price)}
              </div>
              <div className="counter flex ">
                <button
                  onClick={() => handleDecrease()}
                  className="h-8 w-8 border border-gray-300 bg-gray-100 active:bg-gray-700 active:text-white"
                >
                  -
                </button>
                <span className="h-8 w-8 border border-gray-300 bg-gray-100 flex justify-center items-center">
                  {count}
                </span>
                <button
                  onClick={() => handleIncrease()}
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
        <button className="clear-btn border border-orange-400 hover:border-orange-600 bg-gray-100 hover:bg-gray-200 font-medium text-lg duration-300 py-3 px-8 rounded-sm">
          CLEAR CART
        </button>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between w-full text-2xl font-medium">
            <span className="text-black">Subtotal</span>
            <span className="text-red-500">$199</span>
          </div>
          <p className="text-gray-400">Taxes and shipping cost are included</p>
          <button className="checkout bg-black py-3 px-8 w-full text-white font-medium text-lg rounded-sm tracking-widest hover:text-red-500">
            CHECKOUT
          </button>
          <button className="continue font-medium text-lg  ">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
