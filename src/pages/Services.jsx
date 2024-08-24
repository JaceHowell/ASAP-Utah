import { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Header />
      <h2 className="flex justify-center p-4 pt-6 text-4xl">Services</h2>
      <div className="bird-show-card p-2 md:flex">
        <img
          className="bird-show-img p-2 md:max-w-2xl"
          src="./src/assets/images/bird-show.webp"
        ></img>
        <h3 className="text-3xl p-2">Sharing bird knowledge is our passion!</h3>
        <p className="text-lg p-2">
          We offer bird shows for schools, senior centers, group activities, and
          more. Give us a call for info on pricing and scheduling.
        </p>
      </div>

      <div className="adoption-events-card p-2 md:flex">
        <img
          className="adoption-event-img p-2 md:max-w-2xl"
          src="./src/assets/images/adoption-event.webp"
        ></img>
        <h3 className="text-3xl p-2">Adoption Events</h3>
        <p className="text-lg p-2">
          We believe every bird should have a second chance. We do adoption
          events through Petco and PetSmart to get these wonderful animals the
          forever homes that they deserve.
        </p>
      </div>

      <div className="birdy-pedicures-card p-2 md:flex">
        <img
          className="birdy-pedicure-img p-2 md:max-w-2xl"
          src="./src/assets/images/birdy-pedicure.png"
        ></img>
        <h3 className="text-3xl p-2">Birdy Pedicures</h3>
        <p className="text-lg p-2">
          Birds, just like people, have nails that continually grow. We always
          recommend having a third party do your feathered friend's nail, beak,
          or wing feather trims.
        </p>
        <p className="text-lg p-2">
          The bond between bird and owner is very tender and fragile, so we
          always want the owner to be the bird's safe person.
        </p>
        <p className="text-lg p-2">
          Give us a call to get a quote and schedule.
        </p>
      </div>
      <Footer />
      <Outlet />
    </>
  );
};

export default Services;
