import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="navbar-bg bg-gray-700 text-indigo-50 h-16 flex justify-center items-center border-none">
      <div className="navbar container mx-auto flex justify-between items-center  ">
        <div className="left">
          <span className="text-2xl text-gray-50 font-semibold font-serif">
            Shop
          </span>
          <span className="text-orange-500 text-2xl font-semibold font-serif ">
            Tron
          </span>
        </div>
        <div className="right flex items-center gap-5">
          <Link to="/" className=" nav-link ">
            Home
          </Link>
          <Link to="products" className=" nav-link ">
            Products
          </Link>
          <Link to="cart">
            <span className="cart-icon relative">
              <BsCart4 />
              <span className="cart-counter z-[1] absolute -top-3 -right-3 text-xs h-4 w-4 bg-orange-600 text-white flex rounded-full items-center justify-center font-medium">
                {cartItems.length}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
