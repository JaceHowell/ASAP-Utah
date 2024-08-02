import { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const About = () => {
    return (
      <>
        <Header />
        <p>About Test</p>
        <Footer />
        <Outlet/>
      </>
    );
  };
  
  export default About;
  