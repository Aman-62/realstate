import Banner from "@/components/banner";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxTable } from "react-icons/rx";
import { BsListUl } from "react-icons/bs";
import "swiper/css";

const Properties = () => {
  return (
    <section>
      <Banner name="Properties" msg="results" />

      <div className="container mx-auto">
        {/* Start sorting */}
        <div>
          <div className="col-lg-12 col-md-12">
            <div className="item-sorting-box mt-4 bg-white border rounded px-3 py-3 mb-5">
              <div className="item-sorting">
                <div className="left-column">
                  <h4 className="m-0 text-dark font--medium">
                    <span>207</span> Results Found of 612
                  </h4>
                </div>
              </div>
              <div className="item-sorting-box-right">
                <div className="sorting-by">
                  <select>
                    <option value={0}>sorting By:</option>
                    <option value={1}>Low Price</option>
                    <option value={2}>High Price</option>
                    <option value={3}>Most Popular</option>
                  </select>
                </div>
                <ul className="sorting-list">
                  <li>
                    <a href="grid-full-style-1.html" className="border">
                      <RxTable />
                    </a>
                  </li>
                  <li>
                    <a href="list-full-style-1.html" className="active border">
                      <BsListUl />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Start All Listing */}
        <div className="row gx-3 gy-4">
          {/* Single Property 1 */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="property-list-section">
              <div className="property-list-figure">
                <div className="property-list-img-slide">
                  <div className="property-list-click">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={true}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="singleSwiper"
                    >
                      <SwiperSlide>
                        <div>
                          <a>
                            <img
                              src="/prt-12.png"
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <a>
                            <img
                              src="/prt-6.png"
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <a>
                            <img
                              src="/prt-7.png"
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <a>
                            <img
                              src="/prt-8.png"
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="property-list-caption">
                <div className="property-list-info">
                  <div className="property-list-info-flex">
                    <div className="property-list-type rent">
                      <span>For Rent</span>
                    </div>
                    <h5 className="property-name verified">
                      <a className="property-name-text">
                        Hearthstone Real Property
                      </a>
                    </h5>
                    <div className="property-rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <span className="property-reviews-count">
                        210 Reviews
                      </span>
                    </div>
                  </div>
                  <div className="veshm-list-head-flex">
                    <button className="btn btn-like active" type="button">
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
                <div className="veshm-list-middle">
                  <div className="veshm-list-icons">
                    <ul>
                      <li>
                        <FaBed />
                        <span>4 Bed</span>
                      </li>
                      <li>
                        <FaBath />
                        <span>2 Ba</span>
                      </li>
                      <li>
                        <BiArea />
                        <span>3200 Sqft</span>
                      </li>
                      <li>
                        <BsFillCalendarCheckFill />
                        <span>Built 2020</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="veshm-list-footers">
                  <div className="veshm-list-ftr786">
                    <div className="rlhc-price">
                      <h4 className="rlhc-price-name theme-cl">
                        $10,590<span className="monthly">/Months</span>
                      </h4>
                    </div>
                  </div>
                  <div className="veshm-list-ftr1707">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#offer"
                      className="btn btn-md btn-primary font--medium cursor-pointer "
                    >
                      Send Offer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Single Property 2 */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="property-list-section">
              <div className="property-list-figure">
                <div className="property-list-img-slide">
                  <div className="property-list-click">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={true}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="singleSwiper"
                    >
                      <SwiperSlide>
                        <div>
                          <a>
                            <img
                              src="/prt-12.png"
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <a>
                            <img
                              src="/prt-6.png"
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <a>
                            <img
                              src="/prt-7.png"
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <a>
                            <img
                              src="/prt-8.png"
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="property-list-caption">
                <div className="property-list-info">
                  <div className="property-list-info-flex">
                    <div className="property-list-type rent">
                      <span>For Rent</span>
                    </div>
                    <h5 className="property-name verified">
                      <a className="property-name-text">
                        Hearthstone Real Property
                      </a>
                    </h5>
                    <div className="property-rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <span className="property-reviews-count">
                        210 Reviews
                      </span>
                    </div>
                  </div>
                  <div className="veshm-list-head-flex">
                    <button className="btn btn-like active" type="button">
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
                <div className="veshm-list-middle">
                  <div className="veshm-list-icons">
                    <ul>
                      <li>
                        <FaBed />
                        <span>4 Bed</span>
                      </li>
                      <li>
                        <FaBath />
                        <span>2 Ba</span>
                      </li>
                      <li>
                        <BiArea />
                        <span>3200 Sqft</span>
                      </li>
                      <li>
                        <BsFillCalendarCheckFill />
                        <span>Built 2020</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="veshm-list-footers">
                  <div className="veshm-list-ftr786">
                    <div className="rlhc-price">
                      <h4 className="rlhc-price-name theme-cl">
                        $10,590<span className="monthly">/Months</span>
                      </h4>
                    </div>
                  </div>
                  <div className="veshm-list-ftr1707">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#offer"
                      className="btn btn-md btn-primary font--medium cursor-pointer "
                    >
                      Send Offer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Pagination */}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link">6</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
