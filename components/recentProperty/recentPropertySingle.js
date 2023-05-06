import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { BiArea } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import styles from "../../styles/RecentProperty.module.css";
import Image from "next/image";
import Link from "next/link";

import { recentPropertyData } from "./recentPropertyData";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RecentPropertySingle = () => {
  return (
    <article className={styles.cardSection}>
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
          <div key={index} className={styles.card}>
            <div className={styles.veshmListWraps}>
              <div className={styles.veshmType}>
                <span>For {type}</span>
              </div>
              <div className={styles.veshmListThumb}>
                {/* <button className={styles.compareBtn} type="button">
                  <FiRepeat />
                  Compare
                </button> */}

                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className={styles.sliderImg}>
                    <div className={styles.sliderImgContainer}>
                      <Image src={img1} width={600} height={300} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.sliderImg}>
                    <div className={styles.sliderImgContainer}>
                      <Image width={600} height={300} src={img2} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.sliderImg}>
                    <div className={styles.sliderImgContainer}>
                      <Image width={600} height={300} src={img3} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={styles.veshmListBlock}>
                <div className={styles.veshmTags}>
                  <span>
                    <i />
                    {tag}
                  </span>
                </div>
                <div className={styles.veshmListHead}>
                  <div>
                    <div>
                      <h4 className={styles.rlhcPriceName}>
                        {price}
                        <span className={styles.monthly}>/Months</span>
                      </h4>
                    </div>
                    <div className={styles.listingShortDetailFlex}>
                      <h5 className={styles.rlhcTitleName}>
                        <Link
                          className={styles.prtLinkDetail}
                          href="properties/singleProperty"
                        >
                          {name}
                        </Link>
                      </h5>
                      <div className={styles.rlhcPrtLocation}>
                        <Image
                          src="/pin.svg"
                          width={16}
                          height={16}
                          className={styles.me1}
                          alt=""
                        />
                        {address}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className={styles.btnLike} type="button">
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
                <div className={styles.veshmListFooter}>
                  <div className={`${styles.veshmListCircls}`}>
                    <ul>
                      <li>
                        <span className={styles.bedInf}>
                          <FaBed />
                        </span>{" "}
                        {bed} Beds
                      </li>
                      <li>
                        <span className={styles.bathInf}>
                          <FaBath />
                        </span>
                        {bathroom} Ba
                      </li>
                      <li>
                        <span className={styles.areaInf}>
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
  );
};

export default RecentPropertySingle;
