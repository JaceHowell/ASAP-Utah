import { useState } from "react";
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

  return (
    <>
      <Header />
      <ul>
        <button onClick={showAbout}>About</button>
        <button onClick={showStats}>Stats & Adoptions</button>
        <button onClick={showTeam}>Meet the Team</button>
      </ul>
      {aboutSection === 1 && (
        <>
          <h2 className="flex justify-center p-4 pt-6 text-4xl">About</h2>

          <div>
            <img src="./src/assets/images/about-award-1.jpg"></img>
            <p className="text-lg p-2 italic">
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

          <div>
            <img src="./src/assets/images/about-award-2.jpg"></img>
            <p className="text-lg p-2 italic">
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
        <p>Stats</p>

        <ol>
        {/* TODO */}
        {/* ADD POPULATION FROM DB */}
        </ol>

        </>
      )}

      {aboutSection === 3 && (
        <>
        <p>Team</p>
        </>
      )}

      <Footer />
      <Outlet />
    </>
  );
};

export default About;
