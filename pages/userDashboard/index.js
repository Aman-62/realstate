import React, { useState } from "react";
import Sidebar from "@/components/userDashboard/sidebar";
import Banner from "@/components/banner";

import MyProfile from "../../components/userDashboard/myProfile";
import SavedProperty from "../../components/userDashboard/savedProperty";
import MyProperty from "../../components/userDashboard/myProperty";
import Messages from "../../components/userDashboard/messages";
import SubmitProperty from "../../components/userDashboard/submitProperty";
import ChangePassword from "../../components/userDashboard/changePassword";

const UserDashboard = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showMyProfile, setShowMyProfile] = useState(false);
  const [showSavedProperty, setShowSavedProperty] = useState(false);
  const [showMyProperty, setShowMyProperty] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showSubmitProperty, setShowSubmitProperty] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  // function renderSwitch(param) {
  //   switch (param) {
  //     case "foo":
  //       return "bar";
  //     default:
  //       return "foo";
  //   }
  // }
  let x = 10;
  return (
    <>
      <Banner
        name={"Hi, Harshvardhan"}
        msg={"Manage your profile and view property"}
      />
      {/* ============================ User Dashboard ================================== */}
      <section className="gray pt-5 pb-5">
        <div className=" px-4 mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <Sidebar
              showDashboard={showDashboard}
              showMyProfile={showMyProfile}
              showSavedProperty={showSavedProperty}
              showMyProperty={showMyProperty}
              showMessages={showMessages}
              showSubmitProperty={showSubmitProperty}
              showChangePassword={showChangePassword}
              setShowDashboard={setShowDashboard}
              setShowMyProfile={setShowMyProfile}
              setShowSavedProperty={setShowSavedProperty}
              setShowMyProperty={setShowMyProperty}
              setShowMessages={setShowMessages}
              setShowSubmitProperty={setShowSubmitProperty}
              setShowChangePassword={setShowChangePassword}
            />
            {/* UPKANT WORK */}
            <div className="col-span-12 md:col-span-9">
              {showDashboard && "dashboard"}
              {showMyProfile && <MyProfile />}
              {showSavedProperty && <SavedProperty />}
              {showMyProperty && <MyProperty />}
              {showMessages && <Messages />}
              {showSubmitProperty && <SubmitProperty />}
              {showChangePassword && <ChangePassword />}
            </div>
          </div>
        </div>
      </section>
      {/* ============================ User Dashboard End ================================== */}
    </>
  );
};

export default UserDashboard;
