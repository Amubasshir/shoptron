import React from 'react';

const Slide = ({ image }) => {
  return (
    <div
      className="slide "
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      {/* <div className="slide-text-main container  h-10 w-80 object-center flex flex-col items-start justify-center gap-4 pl-5">
        <Link
          to={`/products/${image.category}`}
          className="slider-link text-xl uppercase font-medium  py-2 px-6 rounded-sm bg-orange-500 text-white hover:text-black hover:bg-orange-700 duration-300"
        >
          Shop Now
        </Link>
      </div> */}
    </div>
  );
};

export default Slide;
