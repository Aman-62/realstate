import React from "react";
import Style from "../../styles/singleProperty.module.css";
import { FaBed } from "react-icons/fa";

const singleProperty = () => {
  return (
    <>
      <section className={Style.graySimple}>
        <div className="container mx-auto px-12 ">
          <div className="grid grid-cols-12  gap-8">
            <div className="col-span-12 md:col-span-8">
              <div className={Style.veshDetailBloc}>
                <div className={Style.veshDetailHeadup}>
                  <div className={Style.veshDetailHeadupFirst}>
                    <div className={Style.prtDetailTitleDesc}>
                      <span className={Style.labelSuccess}>For Sale</span>
                      <h4>Jannat Graynight Mood In Siver Colony, London</h4>
                      <span className={Style.textMid}>
                        778 Country St. Panama City, FL
                      </span>
                      <div className={Style.mt2}>
                        <div className="list-fx-fisrt">
                          <span className={Style.labelLightSuccess}>
                            3 Beds
                          </span>
                          <span className={Style.labelLightInfo}>2 Bath</span>
                          <span className={Style.labelLightDanger}>
                            4500 Sqft
                          </span>
                        </div>
                        <div className="list-fx-last"></div>
                      </div>
                    </div>
                  </div>
                  <div className="vesh-detail-headup-last">
                    <h3 className={Style.prtPriceFixThemeCl}>
                      ₹10,76500<span>One Time</span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* About Property Detail */}
              <div className={Style.veshDetailBloc}>
                <div className={Style.veshDetailBlocHeader}>
                  <h4 className="property_block_title no-arrow">
                    About Property
                  </h4>
                </div>
                <div className={Style.veshDetailBlocBody}>
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-12">
                      <p>
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to
                        do what we like best, every pleasure is to be welcomed
                        and every pain avoided. But in certain circumstances and
                        owing to the claims of duty or the obligations of
                        business it will frequently occur that pleasures have to
                        be repudiated and annoyances accepted. The wise man
                        therefore always holds in these matters to this
                        principle of selection: he rejects pleasures to secure
                        other greater pleasures, or else he endures pains to
                        avoid worse pains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End About Property Detail */}

              {/* Basic Detail */}
              <div className={Style.veshDetailBloc}>
                <div className={Style.veshDetailBlocHeader}>
                  <a
                    className={Style.achr}
                    data-bs-toggle="collapse"
                    data-parent="#basicinfo"
                    data-bs-target="#basicinfo"
                    aria-controls="basicinfo"
                    href=""
                    aria-expanded="false"
                  >
                    <h4 className={Style.achr1}>Basic Detail</h4>
                  </a>
                </div>
                <div id="basicinfo" aria-labelledby="basicinfo">
                  <div className={Style.veshDetailBlocBody}>
                    <div className="grid grid-cols-12 gap-8">
                      <div className="col-span-6 md:col-span-3 shadow-sm rounded-md">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            {/* <i className="fa-solid fa-bed" /> */}
                            <FaBed />
                          </div>
                          <div className={Style.ilioText}>3 Bedrooms</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-solid fa-bath" />
                          </div>
                          <div className={Style.ilioText}>2 Bathrooms</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-solid fa-layer-group" />
                          </div>
                          <div className={Style.ilioText}>4,240 sq ft</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-solid fa-warehouse" />
                          </div>
                          <div className={Style.ilioText}>1 Garage</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-regular fa-building" />
                          </div>
                          <div className={Style.ilioText}>Apartment</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-solid fa-building-wheat" />
                          </div>
                          <div className={Style.ilioText}>Built 1982</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-solid fa-building-circle-check" />
                          </div>
                          <div className={Style.ilioText}>Active</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-solid fa-fan" />
                          </div>
                          <div className={Style.ilioText}>Central A/C</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-regular fa-snowflake" />
                          </div>
                          <div className={Style.ilioText}>Forced Air</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-solid fa-bowl-food" />
                          </div>
                          <div className={Style.ilioText}>
                            Kitchen Facilities
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-solid fa-martini-glass-citrus" />
                          </div>
                          <div className={Style.ilioText}>Bar &amp; Drinks</div>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <div className={Style.ilioIconwWrap}>
                          <div className={Style.ilioIcon}>
                            <i className="fa-regular fa-building" />
                          </div>
                          <div className={Style.ilioText}>4 Floor</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Basic Detail */}

              {/* Amenties Detail */}
              <div className={Style.veshDetailBloc}>
                <div className={Style.veshDetailBlocHeader}>
                  <a
                    className={Style.achr}
                    data-bs-toggle="collapse"
                    data-parent="#amenitiesinfo"
                    data-bs-target="#amenitiesinfo"
                    aria-controls="amenitiesinfo"
                    href=""
                    aria-expanded="false"
                  >
                    <h4 className={Style.achr1}>Amenties</h4>
                  </a>
                </div>
                <div id="amenitiesinfo" aria-labelledby="amenitiesinfo">
                  <div className={Style.veshDetailBlocBody}>
                    <ul className={Style.avlFeatures}>
                      <li>Air Conditioning</li>
                      <li>Swimming Pool</li>
                      <li>Central Heating</li>
                      <li>Laundry Room</li>
                      <li>Gym</li>
                      <li>Alarm</li>
                      <li>Window Covering</li>
                      <li>Internet</li>
                      <li>Pets Allow</li>
                      <li>Free WiFi</li>
                      <li>Car Parking</li>
                      <li>Spa &amp; Massage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* All features Detail */}

              <div className={Style.veshDetailBloc}>
                <div className={Style.veshDetailBlocHeader}>
                  <a
                    className={Style.achr}
                    data-bs-toggle="collapse"
                    data-parent="#featuresinfo"
                    data-bs-target="#featuresinfo"
                    aria-controls="featuresinfo"
                    href=""
                    aria-expanded="false"
                  >
                    <h4 className={Style.achr1}>Features</h4>
                  </a>
                </div>
                <div id="featuresinfo" aria-labelledby="featuresinfo">
                  <div className={Style.veshDetailBlocBody}>
                    <div className={Style.mb4}>
                      <div className="grid grid-cols-12  gap-8">
                        <div className="col-span-12 md:col-span-12">
                          <h6 className={Style.featureH1}>Interior Details</h6>
                        </div>
                      </div>
                      <div className="grid grid-cols-12  gap-4 mt-2">
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-utensils" />
                            Equipped Kitchen
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-dumbbell" />
                            Gym
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-jug-detergent" />
                            Laundry
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-brands fa-chromecast" />
                            Media Room
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-tv" />
                            TV Set
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={Style.mb4}>
                      <div className="grid grid-cols-12  gap-8">
                        <div className="col-span-12 md:col-span-12">
                          <h6 className={Style.featureH1}>Outdoor Details</h6>
                        </div>
                      </div>
                      <div className="grid grid-cols-12  gap-4 mt-2">
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-brands fa-canadian-maple-leaf" />
                            Back yard
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-basketball" />
                            Basketball court
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-seedling" />
                            Front yard
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-square-parking" />
                            Garage Attached
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-shower" />
                            Hot Bath
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-water-ladder" />
                            Pool
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={Style.mb4}>
                      <div className="grid grid-cols-12  gap-8">
                        <div className="col-span-12 md:col-span-12">
                          <h6 className={Style.featureH1}>Utilities</h6>
                        </div>
                      </div>
                      <div className="grid grid-cols-12  gap-4 mt-2">
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-fan" />
                            Central Air
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-plug" />
                            Electricity
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-fire" />
                            Heating
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-fire-flame-simple" />
                            Natural Gas
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-snowflake" />
                            Ventilation
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-droplet" />
                            Water
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lvs-detail">
                      <div className="grid grid-cols-12  gap-8">
                        <div className="col-span-12 md:col-span-12">
                          <h6 className={Style.featureH1}>Other Features</h6>
                        </div>
                      </div>
                      <div className="grid grid-cols-12  gap-4 mt-2">
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-wheelchair" />
                            Chair Accessible
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-elevator" />
                            Elevator
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-fire-extinguisher" />
                            Fireplace
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-smoking" />
                            Smoke detectors
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-bacon" />
                            Washer and dryer
                          </div>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                          <div className={Style.lvsCaption}>
                            <i className="fa-solid fa-wifi" />
                            WiFi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End All features Detail */}

              {/* Submit Reviews */}
              <div className={Style.veshDetailBloc}>
                <div className={Style.veshDetailBlocHeader}>
                  <h4 className="property_block_title no-arrow">
                    Submit Review
                  </h4>
                </div>
                <div className="panels">
                  <div className={Style.veshDetailBlocBody}>
                    <form>
                      <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            placeholder="John"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            E-mail
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="john.doe@company.com"
                            required=""
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Phone number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="123-45-678"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="small"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Ratting
                          </label>
                          <select
                            id="small"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                          >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- property main detail --> */}

            {/* <!-- Property Sidebar --> */}
            <div className="col-span-12 md:col-span-4">
              {/* Like And Share */}
              <div className={Style.veshDetailBloc}>
                <ul className={Style.likeShareList}>
                  <li>
                    <a
                      href=""
                      className={Style.btnLightSuccess}
                      data-toggle="tooltip"
                      data-original-title="Share"
                    >
                      <i className="fa-solid fa-share-from-square me-2" />
                      Share
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className={Style.btnLightDanger}
                      data-toggle="tooltip"
                      data-original-title="Save"
                    >
                      <i className="fa-solid fa-heart-circle-check me-2" />
                      Save
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className={Style.btnLightPrimary}
                      data-toggle="tooltip"
                      data-original-title="Save"
                    >
                      <i className="fa-solid fa-print me-2" />
                      Print
                    </a>
                  </li>
                </ul>
              </div>

              <div className={Style.pgSideGroups}>
                <div className={Style.pgSideBlock}>
                  <div className={Style.pgSideBlockHead}>
                    <div className={Style.pgSideLeft}>
                      <div className={Style.pgSideThumb}>
                        <img
                          src="/team-1.jpg"
                          className={Style.circle}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="pgSideRight">
                      <div className="pgSideRightCaption">
                        <h4 className={Style.sch1}>Ht. Mickle Hussy</h4>
                        <span className={Style.sph1}>
                          <i className="fa-solid fa-location-dot me-2" />
                          Liverpool, UK
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pg-side-block-body">
                    <div className={Style.pgSideBlockInfo}>
                      <div className={Style.vlElfoGroup}>
                        <div className={Style.vlElfoIcon}>
                          <i className="fa-solid fa-phone-volume" />
                        </div>
                        <div className={Style.vlElfoCaption}>
                          <h6>Call Us</h6>
                          <p>+91 856 457 5243</p>
                        </div>
                      </div>
                      <div className={Style.vlElfoGroup}>
                        <div className={Style.vlElfoIcon}>
                          <i className="fa-regular fa-envelope" />
                        </div>
                        <div className={Style.vlElfoCaption}>
                          <h6>Drop A Mail</h6>
                          <p>paythemezhub@gmail.com</p>
                        </div>
                      </div>
                      <div className={Style.vlElfoGroup}>
                        <div className={Style.vlElfoIcon}>
                          <i className="fa-solid fa-globe" />
                        </div>
                        <div className={Style.vlElfoCaption}>
                          <h6>Website</h6>
                          <p>Https://themezhub.com</p>
                        </div>
                      </div>
                    </div>
                    <div className={Style.pgSideBlockButtons}>
                      <div className={Style.singleButton}>
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#offer"
                          className={Style.btnSuccess}
                        >
                          <i className="fa-solid fa-paper-plane me-2" />
                          Send An offer
                        </a>
                      </div>
                      <div className={Style.singleButton}>
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#message"
                          className={Style.btnTheme}
                        >
                          <i className="fa-solid fa-comments me-2" />
                          Send A Message
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
              
    </>
  );
};

export default singleProperty;
