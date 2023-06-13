import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../../../../assets/images/top-slider/slider1 (2).jpg";
import slider2 from "../../../../assets/images/top-slider/slider2.jpg";
import slider3 from "../../../../assets/images/top-slider/slider3.jpg";
import slider4 from "../../../../assets/images/class/japan.webp";
import slider5 from "../../../../assets/images/class/korean.jpg";
import slider6 from "../../../../assets/images/class/spanish.jpg";
const Category = () => {
  return (
    <div className="mt-28">
      <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative md:w-3/4 h-[300px] shadow-lg">
          <img className="w-full h-full" src={slider1} alt="" />
          <div className="text-center w-full rounded-lg bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">English</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-3/4 h-[300px] shadow-lg">
          <img className="w-full h-full" src={slider2} alt="" />
          <div className="text-center rounded-lg bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Hindi</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-3/4 h-[300px] shadow-lg">
          <img className="w-full h-full" src={slider3} alt="" />
          <div className="text-center rounded-lg bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Arabic</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-3/4 h-[300px] shadow-lg">
          <img className="w-full h-full" src={slider4} alt="" />
          <div className="text-center rounded-lg bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Japan</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-3/4 h-[300px] shadow-lg">
          <img className="w-full h-full" src={slider5} alt="" />
          <div className="text-center rounded-lg bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Korean</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-3/4 h-[300px] shadow-lg">
          <img className="w-full h-full" src={slider6} alt="" />
          <div className="text-center rounded-lg bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Spanish</h1>
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
    </div>
  );
};

export default Category;
