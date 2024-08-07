import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header bg-blue-green text-white flex justify-between top-0 w-full p-2.5">
        <Link to="/" className="header-text p-2.5">
          Avian Sanctuary and Protection
        </Link>

        <button
          onClick={toggleMenu}
          className="nav-menu-btn md:hidden text-blue-300 relative right-2.5"
        >
          Menu
        </button>


        <ul className="nav-menu-bar hidden md:flex">
          <Link to="/" className="text-gray-200 p-2.5">
            Home
          </Link>
          <Link to="/services" className="text-gray-200 p-2.5">
            Services
          </Link>
          <Link to="/about" className="text-gray-200 p-2.5">
            About
          </Link>
        </ul>
      </header>
      {isMenuOpen && (
        <nav className="flex bg-slate-300 justify-center pb-2 md:hidden">
          <ul>
          <Link to="/" className="p-2.5">
            Home
          </Link>
          <Link to="/services" className="p-2.5">
            Services
          </Link>
          <Link to="/about" className="p-2.5">
            About
          </Link>
          </ul>
        </nav>
      )}
    </>
  );
}
