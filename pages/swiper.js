import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swiperr = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/prt-1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/prt-2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/prt-3.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiperr;
