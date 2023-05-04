import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FaBed, FaBath } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { BiArea } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import Style from "../styles/RecentProperty.module.css";
import Image from "next/image";

// import Slider from "react-slick";

// import { Carousel } from "react-bootstrap";

import { recentPropertyData } from "./recentPropertyData";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RecentPropertySingle = () => {
  return (
    <article className={Style.cardSection}>
      {recentPropertyData.map((property, index) => {
        const {
          type,
          img1,
          img2,
          img3,
          tag,
          price,
          name,
          address,
          bed,
          bathroom,
          area,
        } = property;

        return (
          <div key={index} className={Style.card}>
            <div className={Style.veshmListWraps}>
              <div className={Style.veshmType}>
                <span>For {type}</span>
              </div>
              <div className={Style.veshmListThumb}>
                <button className={Style.compareBtn} type="button">
                  {/* <i className="fa-solid fa-repeat" /> */}
                  <FiRepeat />
                  Compare
                </button>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className={Style.sliderImg}>
                    <Image
                      src={img1}
                      width={500}
                      height={500}
                      className="imggg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className={Style.sliderImg}>
                    <Image
                      width={500}
                      height={500}
                      src={img2}
                      className="imggg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className={Style.sliderImg}>
                    <Image
                      width={500}
                      height={500}
                      src={img3}
                      className="imggg"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={Style.veshmListBlock}>
                <div className={Style.veshmTags}>
                  <span>
                    <i />
                    {tag}
                  </span>
                </div>
                <div className={Style.veshmListHead}>
                  <div>
                    <div>
                      <h4 className={Style.rlhcPriceName}>
                        {price}
                        <span className={Style.monthly}>/Months</span>
                      </h4>
                    </div>
                    <div className={Style.listingShortDetailFlex}>
                      <h5 className={Style.rlhcTitleName}>
                        <a className={Style.prtLinkDetail} href="#">
                          {name}
                        </a>
                      </h5>
                      <div className={Style.rlhcPrtLocation}>
                        <Image
                          src="/pin.svg"
                          width={16}
                          height={16}
                          className={Style.me1}
                          alt=""
                        />
                        {address}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className={Style.btnLike} type="button">
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
                <div className={Style.veshmListFooter}>
                  <div className={`${Style.veshmListCircls}`}>
                    <ul>
                      <li>
                        <span className={Style.bedInf}>
                          <FaBed />
                        </span>{" "}
                        {bed} Beds
                      </li>
                      <li>
                        <span className={Style.bathInf}>
                          <FaBath />
                        </span>
                        {bathroom} Ba
                      </li>
                      <li>
                        <span className={Style.areaInf}>
                          <BiArea />
                        </span>
                        {area}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </article>
    // <div className="row justify-content-center gx-3 gy-4">
    //   {recentPropertyData.map((property, index) => {
    //     const {
    //       type,
    //       img1,
    //       img2,
    //       img3,
    //       tag,
    //       price,
    //       name,
    //       address,
    //       bed,
    //       bathroom,
    //       area,
    //     } = property;

    //     return (
    //       <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
    //         <div className="veshm-list-wraps">
    //           <div className="veshm-type">
    //             <span>{type}</span>
    //           </div>
    //           <div className="veshm-list-thumb">
    //             <button type="button" className="compare-btn">
    //               {/* <i className="fa-solid fa-repeat" /> */}
    //               <FiRepeat />
    //               Compare
    //             </button>
    //             <Carousel interval={null} indicators={false}>
    //               <Carousel.Item>
    //                 <a href="#">
    //                   <img
    //                     src={img1}
    //                     className="d-block w-100 img-fluid mx-auto"
    //                     alt="..."
    //                   />
    //                 </a>
    //               </Carousel.Item>
    //               <Carousel.Item>
    //                 <a href="#">
    //                   <img
    //                     src={img2}
    //                     className="d-block w-100 img-fluid mx-auto"
    //                     alt="..."
    //                   />
    //                 </a>
    //               </Carousel.Item>
    //               <Carousel.Item>
    //                 <a href="#">
    //                   <img
    //                     src={img3}
    //                     className="d-block w-100 img-fluid mx-auto"
    //                     alt="..."
    //                   />
    //                 </a>
    //               </Carousel.Item>
    //             </Carousel>
    //           </div>
    //           <div className="veshm-list-block">
    //             <div className="veshm-tags trending">
    //               <span>
    //                 <i className="fa-solid fa-meteor" />
    //                 {tag}
    //               </span>
    //             </div>
    //             <div className="veshm-list-head">
    //               <div className="veshm-list-head-caption">
    //                 <div className="rlhc-price">
    //                   <h4 className="rlhc-price-name theme-cl">
    //                     {price}
    //                     <span className="monthly">/Months</span>
    //                   </h4>
    //                 </div>
    //                 <div className="listing-short-detail-flex">
    //                   <h5 className="rlhc-title-name verified">
    //                     <a href="#" className="prt-link-detail">
    //                       {name}
    //                     </a>
    //                   </h5>
    //                   <div className="rlhc-prt-location">
    //                     <img
    //                       src="/pin.svg"
    //                       width={16}
    //                       className="me-1"
    //                       alt=""
    //                     />
    //                     {address}
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="veshm-list-head-flex">
    //                 <button className="btn btn-like" type="button">
    //                   <AiFillHeart />
    //                 </button>
    //               </div>
    //             </div>
    //             <div className="veshm-list-footer">
    //               <div className="veshm-list-circls">
    //                 <ul>
    //                   <li>
    //                     <span className="bed-inf">
    //                       <FaBed />
    //                     </span>
    //                     {bed}
    //                   </li>
    //                   <li>
    //                     <span className="bath-inf">
    //                       <FaBath />
    //                     </span>
    //                     {bathroom}
    //                   </li>
    //                   <li>
    //                     <span className="area-inf">
    //                       <BiArea />
    //                     </span>
    //                     {area}
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default RecentPropertySingle;
