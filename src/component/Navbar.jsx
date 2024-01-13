import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = [
    {
      id: 1,
      item: "home",
      link: "#home",
    },
    {
      id: 2,
      item: "about",
      link: "#about",
    },
    {
      id: 3,
      item: "experience",
      link: "#experience",
    },
    {
      id: 4,
      item: "portofolio",
      link: "#portofolio",
    },
    {
      id: 5,
      item: "contact",
      link: "#contact",
    },
  ];

  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full bg-black h-16 text-white font-myFont">
      {/* ========= LOGO ========= */}
      <div>
        <h1 className="text-2xl md:text-4xl ml-6 capitalize">dewandra</h1>
      </div>

      {/* ========= MENU ========= */}
      <ul className="md:flex hidden">
        {items.map((i) => (
          <li
            key={i.id}
            className="px-4 capitalize font-medium text-gray-400 hover:scale-75 duration-300 cursor-pointer"
          >
            <a href={i.link}>{i.item}</a>
          </li>
        ))}
      </ul>

      {/* ========= BUTTON MENU ========= */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 pr-4 hover:scale-75 duration-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* ========= MOBILE MENU ========= */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 ">
          {items.map((i) => (
            <li
              key={i.id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl text-gray-400 hover:scale-75 duration-200"
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
