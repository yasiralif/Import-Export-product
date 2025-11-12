import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const FashionSlider = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    },
  ];

  return (
    <div className="w-full font-sans bg-[#d6a77a] overflow-hidden relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        loop
        className="h-[400px] sm:h-[500px] md:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center text-white">
              <img
                src={slide.image}
                alt="slide"
                className="w-full h-full object-cover scale-105 transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

              <div className="absolute z-10 text-center md:text-left md:ml-20 space-y-4 max-w-lg">
                <p 
                 data-aos="fade-right"
                className="uppercase tracking-wider text-sm text-gray-200">Just For You, Just Because</p>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-md">
                  Enjoy <span className="text-amber-400">50%</span> Off
                </h2>
                <p className="text-md sm:text-lg text-gray-100 tracking-wide">Your Next Order</p>
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold mt-4 px-6 sm:px-8 py-2 sm:py-3 rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FashionSlider;