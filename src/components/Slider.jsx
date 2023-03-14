import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const data = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/245360/pexels-photo-245360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    src: 'https://www.smarttech-tv.com/image/cache/catalog/HomeBanner_ATV_1920x960-1920x960.jpg',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <div
            className="slide"
            style={{ backgroundImage: `url(${image.src})` }}
            key={image.id}
          ></div>
        ))}
      </div>
      <div className="btns absolute z-[1] text-white flex gap-12 bottom-28 w-screen justify-center">
        <button
          onClick={prevSlide}
          className="prev-btn h-12 w-20 bg-gray-900 backdrop-blur-xl text-2xl flex justify-center items-center hover:bg-slate-100 hover:text-black duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-12 w-20 bg-gray-900 backdrop-blur-xl text-2xl flex justify-center items-center hover:bg-slate-100 hover:text-black duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
