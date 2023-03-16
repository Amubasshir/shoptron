import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../features/products/cartSlice';
import { currencyFormatter } from '../utils/currencyFormatter';

const Cart = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };
  return (
    <div className="product flex flex-col gap-2 bg-white shadow-md hover:shadow-xl  border-white rounded-lg overflow-hidden duration-300">
      <div className="img ">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="text flex flex-col gap-2 px-5 pb-5">
        <span className="category-tag uppercase text-xs font-semibold tracking-widest text-orange-500">
          {product.category}
        </span>
        <h3 className="title text-xl font-medium h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-800 h-[6rem]">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medium text-orange-500">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product)}
            className="uppercase bg-black hover:bg-orange-500 text-gray-50 font-medium py-3 px-5 rounded-md duration-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
