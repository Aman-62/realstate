import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Style from "../styles/singleProperty.module.css";
// import SinglePropertydetal from "./singlePropertydetail";

const singlePropertyData = [
  {
    img: "/gallery-1.jpg",
  },
  {
    img: "/gallery-2.jpg",
  },
  {
    img: "/gallery-3.jpg",
  },
  {
    img: "/gallery-4.jpg",
  },
  {
    img: "/gallery-5.jpg",
  },
  {
    img: "/gallery-6.jpg",
  },
];
import { useGlobalContext } from "@/pages/context";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SinglePropertyCarousel = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <article className={Style.gray} onMouseOver={closeSubmenu}>
      <Swiper
        spaceBetween={0}
        slidesPerView={2.2}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="singleSwiper"
      >
        {singlePropertyData.map((singleProperty, index) => {
          const { img } = singleProperty;

          return (
            // <div key={index} className="featured_slick_gallery-slide">

            <SwiperSlide key={index}>
              <div>
                <span className="mfp-gallery">
                  <img
                    src={img}
                    className={Style.singlePropertySlideImage}
                    alt=""
                  />
                </span>
              </div>
            </SwiperSlide>

            // </div>
          );
        })}
      </Swiper>
    </article>
  );
};

export default SinglePropertyCarousel;

/*
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Style from "../../styles/singleProperty.module.css"
import { singlePropertyData } from './singlePropertyData';
import SinglePropertydetal from './singlePropertydetail';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SingleCarousel = () => {
    return (
        <>
            <article className={Style.gray}>
                <Swiper

                    spaceBetween={0}
                    slidesPerView={3}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="singleSwiper"
                >
                    {singlePropertyData.map((singleProperty, index) => {
                        const {
                            img
                        } = singleProperty;

                        return (
                            // <div key={index} className="featured_slick_gallery-slide">

                            <SwiperSlide key={index}>
                                <div >
                                    <a href="" className="mfp-gallery"><img src={img} className={Style.singlePropertySlideImage} alt="" />
                                    </a>
                                </div>
                            </SwiperSlide>


                            // </div>
                        )
                    })}
                </Swiper>

            </article>

            <SinglePropertydetal />


        </>

    )

}

export default SingleCarousel
*/
