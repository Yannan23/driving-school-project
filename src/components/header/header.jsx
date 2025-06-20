import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "/images/logo.svg";
import CallButton from "../buttons/call-button";
import CallGifImg from "../../../public/images/call.gif";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  const showDropdown = () => {
    setIsActive(true);
  };

  const hideDropdown = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
        setIsVisible(false);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`flex flex-col justify-center items-center w-full bg-dark-color text-white-color your-nav-classes ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="relative w-full">
        <nav className="navbar flex justify-between items-center w-full relative">
          <div className="ml-4 md:ml-8 lg:ml-16">
            <NavLink to="/">
              <img src={logo} className="nav-logo" alt="" />
            </NavLink>
          </div>
          <div className="toggle-button absolute" onMouseEnter={showDropdown}>
            <div className="">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div
            className="navbar-links-container flex flex-col"
            ref={dropdownRef}
            onMouseLeave={hideDropdown}
          >
            <ul
              className={`navbar-links font-Fell ${isActive ? "active" : ""}`}
            >
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="why-choose-us">why choose us</NavLink>
              </li>
              <li>
                <NavLink to="package">package</NavLink>
              </li>
              <li>
                <NavLink to="location">location</NavLink>
              </li>
              <li>
                <NavLink to="contact-us">contact us</NavLink>
              </li>
              <div className="nav-btn-container flex justify-center">
                <button className="nav-btn flex justify-center items-center cursor-pointer bg-yellow-color">
                  <NavLink to="contact-us">BOOK NOW</NavLink>
                </button>
              </div>
            </ul>
          </div>
        </nav>
        <div
          className={`${isVisible ? "visible" : "hidden"} flex justify-center w-full bg-white text-gray-600 py-2 px-4 md:!px-8 lg:!px-16 font-font-Roboto-Condensed flex-col md:!flex-row md:!justify-between items-center gap-2 md:gap-4`}
        >
          <div className="justify-start items-center gap-2 hidden md:!flex">
            <i className="fa-solid fa-envelope text-yellow"></i>
            <p className="hover:text-yellow hover:underline cursor-pointer">
              <NavLink to="contact-us">khanrashed2411@gmail.com</NavLink>
            </p>
          </div>
          <div className="flex justify-start items-center gap-2">
            {/* <i className="fa-solid fa-phone text-yellow"></i> */}
            <img
              src={CallGifImg}
              alt="Call animation"
              className="w-6 h-6 lg:w-8 lg:h-8"
            />
            <p className="font-Roboto-Condensed capitalize">call us:</p>
            <CallButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
