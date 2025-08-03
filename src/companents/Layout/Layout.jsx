import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      {/* <div className="container-fluid mx-auto m-5 p-5"> */}
      <Outlet />
      {/* </div> */}

      <Footer />
    </>
  );
};

export default Layout;
