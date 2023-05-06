import React from "react";
import Sidebar from "../header/sidebar";

const DashBoardLayout = ({ Component, pageProps }) => {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
};

export default DashBoardLayout;
