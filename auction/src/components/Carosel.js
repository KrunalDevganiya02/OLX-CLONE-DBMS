import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/carosel.css";
import c1 from "../img/car.jpg";
import b1 from "../img/bike.jpg";
import m1 from "../img/mobile.jpg";
import l1 from "../img/laptop.jpg";
import cam from "../img/camera.jpg";

// Sample images for carousel
const images = [c1, b1, m1, l1, cam];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carosel">
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                width="600px"
                height="400px"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
