import { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const Services = () => {
    return (
      <>
        <Header />
        <p>Services Test</p>
        <Footer />
        <Outlet/>
      </>
    );
  };
  
  export default Services;