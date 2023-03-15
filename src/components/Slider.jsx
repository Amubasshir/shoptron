import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slide from './Slide';

const data = [
  {
    id: 1,
    src: 'https://i.ibb.co/JqxDhvZ/console.jpg',
    headline: 'Shop the latest Consoles Today!',
    body: 'We offer a wide range of gaming consoles from the latest PlayStation and Xbox models to classic Nintendo consoles. Whether you are a casual or hardcore gamer, we have something for everyone. You can get your hands on the latest games and accessories without breaking the bank. So, start browsing our collection today and take your gaming experience to the next level! ',
  },
  {
    id: 2,
    src: 'https://i.ibb.co/XszmG02/camera.jpg',
    headline: 'DSLR for your stunning photos',
    body: 'Are you an aspiring photographer looking to take your skill to the next level? Our DSLR cameras offer advanced feature and quality image sensor that help your desire photos! We pride ourselves on our excellent customer service and are always happy to assist you with any questions you may have. Thank you for choosing our camera ecommerce website for all your photography needs.',
  },
  {
    id: 3,
    src: 'https://i.ibb.co/mtc8v16/tv.jpg',
    headline: 'Experience the Best TV Adventure',
    body: 'At our TV ecommerce website, we bring the future of shopping right to your living room. With our state-of-the-art platform, you can browse and buy products seamlessly, all from the comfort of your own home. So why waste time and energy going to the store? Experience the future of shopping today with our TV ecommerce platform.',
  },
  {
    id: 4,
    src: 'https://i.ibb.co/kmr5qQv/headphones.jpg',
    headline: 'Find Your Perfect Sound',
    body: 'Are you in search of the perfect pair of headphones to elevate your music experience? Look no further! Our headphone ecommerce website offers an extensive range of headphones, from noise-cancelling to wireless, to meet all your audio needs. Shop now and take your music experience to the next level with our top-of-the-line headphones.',
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
          className="prev-btn h-8 w-16 border-2  text-white  text-2xl flex justify-center items-center hover:bg-orange-800 hover:border-spacing-3 border-orange-900 hover:text-black duration-200"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-8 w-16  border-2  text-white  text-2xl flex justify-center items-center hover:bg-orange-800 hover:border-spacing-3 border-orange-900 hover:text-black duration-200 "
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
