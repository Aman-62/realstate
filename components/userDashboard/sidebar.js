import React, { useState } from "react";
import Style from "../../styles/userDashboard.module.css";
import { MdLocationOn } from "react-icons/md";
import {
  FaBookmark,
  FaCog,
  FaComment,
  FaEnvelope,
  FaFacebookF,
  FaGift,
  FaGooglePlus,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPaperPlane,
  FaPenNib,
  FaPhone,
  FaPowerOff,
  FaTachometerAlt,
  FaTasks,
  FaTwitter,
  FaUnlockAlt,
  FaUser,
} from "react-icons/fa";
import { ImPhone } from "react-icons/im";

const Dashboard = props => {
  const {
    setShowDashboard,
    setShowMyProfile,
    setShowSavedProperty,
    setShowMyProperty,
    setShowMessages,
    setShowSubmitProperty,
    setShowChangePassword,
    showDashboard,
    showMyProfile,
    showSavedProperty,
    showMyProperty,
    showMessages,
    showSubmitProperty,
    showChangePassword,
  } = props;
  const toggleComponent = cName => {
    const compName = cName;
    switch (compName) {
      case "dashboard":
        setShowDashboard(true);
        setShowMyProfile(false);
        setShowSavedProperty(false);
        setShowMyProperty(false);
        setShowMessages(false);
        setShowSubmitProperty(false);
        setShowChangePassword(false);
        break;
      case "profile":
        setShowDashboard(false);
        setShowMyProfile(true);
        setShowSavedProperty(false);
        setShowMyProperty(false);
        setShowMessages(false);
        setShowSubmitProperty(false);
        setShowChangePassword(false);
        break;
      case "savedProp":
        setShowDashboard(false);
        setShowMyProfile(false);
        setShowSavedProperty(true);
        setShowMyProperty(false);
        setShowMessages(false);
        setShowSubmitProperty(false);
        setShowChangePassword(false);
        break;
      case "myProp":
        setShowDashboard(false);
        setShowMyProfile(false);
        setShowSavedProperty(false);
        setShowMyProperty(true);
        setShowMessages(false);
        setShowSubmitProperty(false);
        setShowChangePassword(false);
        break;
      case "msg":
        setShowDashboard(false);
        setShowMyProfile(false);
        setShowSavedProperty(false);
        setShowMyProperty(false);
        setShowMessages(true);
        setShowSubmitProperty(false);
        setShowChangePassword(false);
        break;
      case "submitProp":
        setShowDashboard(false);
        setShowMyProfile(false);
        setShowSavedProperty(false);
        setShowMyProperty(false);
        setShowMessages(false);
        setShowSubmitProperty(true);
        setShowChangePassword(false);
        break;
      case "changePass":
        setShowDashboard(false);
        setShowMyProfile(false);
        setShowSavedProperty(false);
        setShowMyProperty(false);
        setShowMessages(false);
        setShowSubmitProperty(false);
        setShowChangePassword(true);
        break;
    }
  };
  return (
    <>
      <div className="col-span-12 md:col-span-3">
        <div className={Style.propertyDashboardNavbar}>
          <div className={Style.dashUserAvater}>
            <img src="/team-3.jpg" className="img-fluid avater" alt="" />
            <h4 className="font-semibold">Adam Harshvardhan</h4>
            <span className="font--medium mt-1 small flex justify-center gap-2">
              <MdLocationOn className="self-center" />
              Noida, India
            </span>
          </div>
          <div className={`${Style.adgtWriopSocial} `}>
            <ul>
              <li>
                <a href="" className={Style.bgFacebook}>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="" className={Style.bgTwitter}>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="" className={Style.bgGoogleplus}>
                  <FaGooglePlusG />
                </a>
              </li>
              <li>
                <a href="" className={Style.bgLnkedin}>
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="adgt-wriop-footer py-3 px-3">
            <div className="single-button d-flex align-items-center justify-content-between">
              <button type="button" className={Style.btnLightPrimary}>
                <ImPhone />
                856 742 672
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#message"
                className={Style.btnLightSuccess}
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </div> */}
          <div className={Style.dashUserMenues}>
            <ul>
              <li className={showDashboard ? Style.active : ""}>
                <a
                  onClick={() => {
                    toggleComponent("dashboard");
                  }}
                >
                  <FaTachometerAlt />
                  Dashboard
                  <span className={Style.nottiCounStyle1}>4</span>
                </a>
              </li>
              <li className={showMyProfile ? Style.active : ""}>
                <a
                  onClick={() => {
                    toggleComponent("profile");
                  }}
                >
                  <FaUser />
                  My Profile
                </a>
              </li>
              <li className={showSavedProperty ? Style.active : ""}>
                <a
                  onClick={() => {
                    toggleComponent("savedProp");
                  }}
                >
                  <FaBookmark />
                  Saved Property<span className={Style.style2}>7</span>
                </a>
              </li>
              <li className={showMyProperty ? Style.active : ""}>
                <a
                  onClick={() => {
                    toggleComponent("myProp");
                  }}
                >
                  <FaTasks />
                  My Properties
                </a>
              </li>
              <li className={showMessages ? Style.active : ""}>
                <a
                  onClick={() => {
                    toggleComponent("msg");
                  }}
                >
                  <FaEnvelope />
                  Messages<span className={Style.style3}>3</span>
                </a>
              </li>

              <li className={showSubmitProperty ? Style.active : ""}>
                <a
                  onClick={() => {
                    toggleComponent("submitProp");
                  }}
                >
                  <FaPenNib />
                  Submit New Property
                </a>
              </li>
              <li className={showChangePassword ? Style.active : ""}>
                <a
                  onClick={() => {
                    toggleComponent("changePass");
                  }}
                >
                  <FaUnlockAlt />
                  Change Password
                </a>
              </li>
            </ul>
          </div>
          <div className={Style.dashUserFooter}>
            <ul>
              <li>
                <a href="">
                  <FaPowerOff />
                </a>
              </li>
              <li>
                <a href="">
                  <FaComment />
                </a>
              </li>
              <li>
                <a href="">
                  <FaCog />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
