import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const S2= () => {
  const slides = [
    {
      id: 1,
      leftImage: "https://img.freepik.com/free-photo/smiley-man-posing-grey-wall_23-2148448892.jpg?semt=ais_hybrid&w=740&q=80",
      rightImage: "https://images.othoba.com/images/thumbs/0659629_exclusive-premium-quality-multicolor-half-sleeve-casual-printed-shirt-for-men-collection-by-fine-tex.webp",
      title: "Exclusive Bags",
      subtitle: "Your Next Order",
      tag: "handy craft",
    },
    {
      id: 2,
      leftImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      rightImage: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      title: "Modern Backpacks",
      subtitle: "Your Style Upgrade",
      tag: "new arrivals",
    },
    {
      id: 3,
      leftImage: "https://cdn.shopify.com/s/files/1/0738/7568/5682/files/shorts_480x480.png?v=1714379762",
      rightImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      title: "Exclusive Collection",
      subtitle: "Your Perfect Choice",
      tag: "premium craft",
    },
  ];

  return (
    <div className="w-full font-sans bg-gray-50 overflow-hidden relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        loop
        className="h-[450px] sm:h-[550px] md:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-between">
              {/* Left Image */}
              <div className="w-1/2 h-full flex justify-end">
                <img
                  src={slide.leftImage}
                  alt="left"
                  className="object-cover h-full w-full"
                />
              </div>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 z-10">
                <p
             
                className="text-orange-600 italic tracking-widest text-lg">{slide.tag}</p>
                <h2 
                   data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
                className="text-3xl sm:text-5xl font-bold text-gray-900">{slide.title}</h2>
                <p className="uppercase tracking-wider text-gray-600 text-sm">{slide.subtitle}</p>
                <div className="flex flex-col gap-3 mt-4">
                  <button className="border border-gray-800 text-gray-800 px-6 py-2 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
                    Shop Women
                  </button>
                  <button className="border border-gray-800 text-gray-800 px-6 py-2 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
                    Shop Men
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-1/2 h-full flex justify-start">
                <img
                   data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
                  src={slide.rightImage}
                  alt="right"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default S2;