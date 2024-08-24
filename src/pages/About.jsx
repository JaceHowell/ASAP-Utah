import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const About = () => {
  const [aboutSection, setAboutSection] = useState(1);
  const showAbout = () => {
    setAboutSection(1);
  };
  const showStats = () => {
    setAboutSection(2);
  };
  const showTeam = () => {
    setAboutSection(3);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("/stats");
    console.log("API Data: ", res.data);
    setData(res.data);
  };

  return (
    <>
      <Header />
      <ul className="flex justify-center">
        <button
          className="p-2 m-2 underline hover:text-blue-400"
          onClick={showAbout}
        >
          About
        </button>
        <button
          className="p-2 m-3 underline hover:text-blue-400"
          onClick={showStats}
        >
          Stats & Adoptions
        </button>
        <button
          className="p-2 m-3 underline hover:text-blue-400"
          onClick={showTeam}
        >
          Meet the Team
        </button>
      </ul>
      {aboutSection === 1 && (
        <>
          <h2 className="flex justify-center p-4 pt-2 text-4xl">About</h2>

          <div className="md:flex">
            <img
              className="p-4 md:max-w-xl"
              src="./src/assets/images/about-award-1.jpg"
            ></img>
            <p className="text-lg p-4 italic md:text-center">
              We believe in raising avian awareness and helping people
              understand how to coexist with their natural environment. We wish
              our birds could speak to you themselves about their plight in the
              wild; of struggling to exist alongside cities with glass office
              buildings in their migratory paths, of running into cars
              unexpectedly, of losing their hunting lands to subdivisions, of
              being misunderstood and shot at, and of extreme weather
              conditions. However, since they can't, we have made it our
              ambition to do just that.
            </p>
          </div>

          <div className="md:flex">
            <img
              className="p-4 md:max-w-xl"
              src="./src/assets/images/about-award-2.jpg"
            ></img>
            <p className="text-lg p-4 italic md:text-center">
              The Avian Sanctuary and Protection Agency is a Utah State and
              Federal non-profit 501(c) 3 organization that will focus on the
              two pronged mission of rehabilitation of local birds as well as
              educational programs within the community.
            </p>
          </div>
        </>
      )}

      {aboutSection === 2 && (
        <>
          <h2 className="flex justify-center p-4 pt-2 text-4xl">
            Stats and Adoptions
          </h2>

          <div className="p-4">
            <h3 className="flex justify-center p-4 pt-2 text-3xl">Intakes</h3>
            <img
              className="pb-1 md:max-w-3xl block mx-auto"
              src="./src/assets/images/stats-intake-graph.webp"
            ></img>
            <img
              className="pb-1 md:max-w-xl block mx-auto"
              src="./src/assets/images/stats-pigeon.webp"
            ></img>
            <ul>
              {data?.map((intake) => (
                <li className="text-center text-2xl">
                  {intake.year}: {intake.intakes}
                </li>
              )) || null}
            </ul>
          </div>

          <div className="p-4">
            <h3 className="flex justify-center p-4 pt-2 text-3xl">Adoptions</h3>
            <img
              className="pb-1 md:max-w-xl block mx-auto"
              src="./src/assets/images/stats-parrot.webp"
            ></img>
            <ul>
              {data?.map((adoption) => (
                <li className="text-center text-2xl">
                  {adoption.year}: {adoption.adoptions}
                </li>
              )) || null}
            </ul>
          </div>

          <div className="p-4">
            <h3 className="flex justify-center p-4 pt-2 text-3xl">
              Relocations
            </h3>
            <img
              className="pb-1 md:max-w-xl block mx-auto"
              src="./src/assets/images/stats-swans.webp"
            ></img>
            <ul>
              {data?.map((relocation) => (
                <li className="text-center text-2xl">
                  {relocation.year}: {relocation.relocations}
                </li>
              )) || null}
            </ul>
          </div>
        </>
      )}

      {aboutSection === 3 && (
        <>
          <h2 className="flex justify-center p-4 pt-2 text-4xl">
            Meet the Team
          </h2>

          <p className="p-4 text-center">
            We are a small team of diverse, caring people that all have similar
            goals. We love what we do, and we do it with passion. We look
            forward to helping with your next bird adventure.
          </p>

          <div className="p-4">
            <img
              className="md:max-w-3xl block mx-auto"
              src="./src/assets/images/team-richard.jpg"
            ></img>
            <h3 className="py-2 text-3xl text-center">Richard Nowak</h3>
            <p className="text-xl text-center">Sanctuary Director</p>
            <p className="text-center">His favorite birds are albatrosses. Currently attending classes to be certified in parks and recreation.</p>
            <br/>
            <p className="text-center">Email: mail@asaputah.org</p>
          </div>

          <div className="p-4">
            <div className="flex justify-center">
            <img
              className="md:max-w-xl block mx-auto"
              src="./src/assets/images/team-tianna.jpg"
            ></img></div>
            <h3 className="py-2 text-3xl text-center">Tianna Snow</h3>
            <p className="text-xl text-center">Secretary</p>
            <p className="text-center">Has an amazing talent in architecture. Her favorite bird is a barred rock hen.</p>
            <br/>
            <p className="text-center">Email: tiana@lossarchitects.com</p>
          </div>

          <div className="p-4">
            <img
              className="md:max-w-xl block mx-auto"
              src="./src/assets/images/team-danielle.jpg"
            ></img>
            <h3 className="py-2 text-3xl text-center">Danielle Vanfleet</h3>
            <p className="text-center">Is a certified Veterinary Technician and loves any bird that talks with her.</p>
            <br/>
            <p className="text-center">Email: wintervanfleet@gmail.com</p>
          </div>
        </>
      )}

      <Footer />
      <Outlet />
    </>
  );
};

export default About;
