import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <h1 className="text-center p-4 m-2 font-bold text-3xl">
        Avian Sanctuary and Protection Utah
      </h1>
      <p className="p-4 m-2 text-center">
        We are an avian rescue sanctuary devoted to domestic and wild non-native
        birds located in Salt Lake City, Utah.
      </p>
      <div className="md:flex">
        <img
          className="p-2 md:max-w-3xl"
          src="./src/assets/images/homepage-bird.jpg"
        ></img>
        <div className="">
          <h2 className="text-center p-2 font-medium text-2xl">
            What is ASAP Utah?
          </h2>
          <p className="p-4">
            We are an avian rescue sanctuary devoted to domestic and wild
            non-native birds. Re-homing, rehabilitating, and education in the
            counties of Salt Lake, Utah, Davis, and other areas of the Western
            United States for the benefit of conditions for birds in urban
            areas. We are here for the communities' well being and to promote a
            safe environment for our feathered friends.
          </p>
          <a
            className="hidden md:flex justify-center max-w-xl mt-10 mx-auto text-blue-500 bg-slate-300  p-2 rounded m-2 hover:bg-blue-green hover:text-white"
            href="https://www.paypal.com/paypalme/asaputah?locale.x=en_US"
          >
            Donate
          </a>
        </div>
      </div>
      <div className="flex justify-center p-2 md:hidden">
        <a
          className="text-blue-500 bg-slate-300 p-2 rounded m-2 hover:bg-blue-green hover:text-white"
          href="https://www.paypal.com/paypalme/asaputah?locale.x=en_US"
        >
          Donate
        </a>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default App;
