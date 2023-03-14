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
  return (
    <div className="slider">
      {data.map((image) => (
        <div
          className="slide"
          style={{ backgroundImage: `url(${image.src})` }}
          key={image.id}
        ></div>
      ))}
    </div>
  );
};

export default Slider;
