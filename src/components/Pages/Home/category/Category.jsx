import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../../../../assets/images/top-slider/slider1 (2).jpg";
import slider2 from "../../../../assets/images/top-slider/slider2.jpg";
import slider3 from "../../../../assets/images/top-slider/slider3.jpg";
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
        <div className="w-3/4 h-[300px] shadow-lg">
          <img className="w-full" src={slider1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-3/4 h-[300px] shadow-lg">
          <img className="w-full" src={slider2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-3/4 h-[300px] shadow-lg">
          <img className="w-full" src={slider3} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-3/4 h-[300px] shadow-lg">
          <img className="w-full" src={slider1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-3/4 h-[300px] shadow-lg">
          <img className="w-full" src={slider1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-3/4 h-[300px] shadow-lg">
          <img className="w-full" src={slider1} alt="" />
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
