import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slide from './Slide';

const data = [
  {
    id: 1,
    src: 'https://i.ibb.co/9yCB1hL/hero-image.jpg',
    headline: 'Shop the latest Consoles Today!',
    body: 'We offer a wide range of gaming consoles from the latest PlayStation and Xbox models to classic Nintendo consoles. Whether you are a casual or hardcore gamer, we have something for everyone. You can get your hands on the latest games and accessories without breaking the bank. So, start browsing our collection today and take your gaming experience to the next level! ',
    category: 'consoles',
  },
  {
    id: 2,
    src: 'https://i.ibb.co/rkhPqsC/hero-image.jpg',
    headline: 'DSLR for your stunning photos',
    body: 'Are you an aspiring photographer looking to take your skill to the next level? Our DSLR cameras offer advanced feature and quality image sensor that help your desire photos! We pride ourselves on our excellent customer service and are always happy to assist you with any questions you may have. Thank you for choosing our camera e-commerce website for all your photography needs.',
    category: 'cameras',
  },
  {
    id: 3,
    src: 'https://i.ibb.co/tKkNsL4/hero-image.jpg',
    headline: 'Experience the Best TV Adventure',
    body: 'At our TV e-commerce website, we bring the future of shopping right to your living room. With our state-of-the-art platform, you can browse and buy products seamlessly, all from the comfort of your own home. So why waste time and energy going to the store? Experience the future of shopping today with our TV e-commerce platform.',
    category: 'tvs',
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
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className="btns absolute z-[1] text-white flex gap-12 bottom-16 w-screen justify-center">
        <button
          onClick={prevSlide}
          className="prev-btn h-8 w-16 border-2 bg-gray-100  text-orange-900  text-2xl flex justify-center items-center hover:bg-orange-800 hover:border-spacing-3 border-orange-900 hover:text-black duration-200"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-8 w-16 bg-gray-100  text-orange-900 border-2   text-2xl flex justify-center items-center hover:bg-orange-800 hover:border-spacing-3 border-orange-900 hover:text-black duration-200 "
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
