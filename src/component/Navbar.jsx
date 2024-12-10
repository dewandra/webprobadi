import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const items = [
    { id: 1, item: "Home", link: "#home" },
    { id: 2, item: "About", link: "#about" },
    { id: 3, item: "Experience", link: "#experience" },
    { id: 4, item: "Portfolio", link: "#portfolio" },
    { id: 5, item: "Contact", link: "#contact" },
  ];

  const [nav, setNav] = useState(false); // Controls mobile menu visibility
  const [isSticky, setIsSticky] = useState(false); // Sticky navbar effect

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center w-full h-16 fixed top-0 left-0 right-0 transition-all ease-in-out duration-300 z-30 px-4 ${
        isSticky ? "bg-gray-800 text-white shadow-lg" : "bg-transparent text-gray-800"
      }`}
    >
      {/* Logo */}
      <div className="ml-6">
        <h1
          className={`text-3xl font-semibold capitalize transition-all duration-300 ${
            isSticky ? "text-white" : "text-black"
          }`}
        >
          Dewandra
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className={`md:flex hidden space-x-8 mr-5 ${isSticky ? "text-white" : "text-black"}`}>
        {items.map((i) => (
          <li
            key={i.id}
            className={`capitalize font-medium hover:text-gray-400 cursor-pointer transition duration-300 ${
              i.item === "Contact" ? "mr-8" : ""
            }`}
          >
            <a href={i.link}>{i.item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)} // Toggle the nav state on click
        className="cursor-pointer text-white pr-4 hover:text-gray-400 duration-200 md:hidden z-40"
      >
        {nav ? (
          <FaTimes size={30} /> // Show the close icon when the menu is open
        ) : (
          <FaBars size={30} className={isSticky ? "text-white" : "text-black"} /> // Corrected className
        )}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-800 text-white space-y-8 pt-16 z-30">
          {items.map((i) => (
            <li
              key={i.id}
              className="text-2xl capitalize font-medium transition duration-300 hover:text-gray-400 cursor-pointer"
            >
              <a href={i.link}>{i.item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
