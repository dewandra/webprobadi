import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const items = [
    { id: 1, item: "Home", link: "#home" },
    { id: 2, item: "About", link: "#about" },
    { id: 3, item: "Clients", link: "#clients" },
    { id: 4, item: "Portfolio", link: "#portfolio" },
    { id: 5, item: "Gallery", link: "#gallery" },
    { id: 6, item: "Contact", link: "#contact" },
  ];

  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between items-center w-full h-20 fixed top-0 left-0 right-0 transition-all ease-in-out duration-300 z-50 px-8 ${
        isSticky ? "bg-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div>
        <h1 className="text-4xl font-heading capitalize text-primary-accent">
          Dewandra
        </h1>
      </div>

      <ul className="hidden md:flex space-x-8 items-center">
        {items.map((i) => (
          <li key={i.id} className="capitalize font-body font-medium text-text-light hover:text-primary-accent cursor-pointer transition-colors duration-300">
            <a href={i.link}>{i.item}</a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-text-light pr-4 hover:text-primary-accent duration-200 md:hidden z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-background text-text-light space-y-8 z-40">
          {items.map((i) => (
            <li key={i.id} onClick={() => setNav(false)} className="text-2xl capitalize font-body font-medium transition duration-300 hover:text-primary-accent cursor-pointer">
              <a href={i.link}>{i.item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;