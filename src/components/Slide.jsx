import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ image }) => {
  return (
    <div className="slide  " style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-text-main container mx-auto h-full flex flex-col items-start justify-center gap-4 pl-5">
        <h1 className="slider-headline text-7xl text-orange-50 font-serif uppercase w-3/5">
          {image.headline}
        </h1>
        <p className="slider-text text-xl w-3/5 font-serif text-orange-50">
          {image.body}
        </p>
        <Link className="slider-link text-xl uppercase font-medium  py-3 px-6 rounded-sm bg-orange-500 text-gray-900">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Slide;
