import { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="home-landing">
        <h1 className="landing-text text-center p-2 font-bold">
          Avian Sanctuary and Protection Utah
        </h1>
        <p className="p-1.5">
          We are an avian rescue sanctuary devoted to domestic and wild
          non-native birds located in Salt Lake City, Utah.
        </p>
        <img
          className="hompage-bird-img"
          src="./src/assets/images/homepage-bird.jpg"
        ></img>
        <btn className="donate-btn text-blue-400">Donate</btn>
      </div>
      <div className="home-about">
        <h2 className="text-center p-1.5 font-medium">What is ASAP Utah?</h2>
        <p className="p-1.5">
          We are an avian rescue sanctuary devoted to domestic and wild
          non-native birds. Re-homing, rehabilitating, and education in the
          counties of Salt Lake, Utah, Davis, and other areas of the Western
          United States for the benefit of conditions for birds in urban areas.
          We are here for the communities' well being and to promote a safe
          environment for our feathered friends.
        </p>
      </div>


      <Outlet/>
      <Footer />
    </>
  );
};

export default App;
