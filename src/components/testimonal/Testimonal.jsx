



import React, { useEffect } from 'react';
import { revealaboutText, Product } from '../data/Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1150, settings: { slidesToShow: 2 } },
      { breakpoint: 800, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  useEffect(() => {
    revealaboutText();
  }, []);

  return (
    <div className="testimonial--card bg-accentt-secondary mt-[5rem] m-[2rem] rounded-[70px]">
      <h1 className="testimonial--title h2 font-primary pt-[3rem] pb-[2rem] text-center">
        What clients say
      </h1>

      <div className="testimonial--slider text-center pb-[3rem] w-full">
        <Slider {...settings}>
          {Product.map((item) => (
            <div key={item.id} className="bg-white p-[2rem] max-w-[350px] mb-[2rem] text-left rounded-[20px]">
              <div className="flex gap-[1.5rem]">
                <img src={item.image} alt={item.name} className="w-[60px] h-[60px] rounded-full" />
                <div>
                  <h5>{item.name}</h5>
                  <p className="text-lg text-gray-500">Greenville, USA</p>
                </div>
              </div>
              <p className="mt-3 text-gray-700">{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
