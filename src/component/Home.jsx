import React from "react";
import porfile from "../assets/porfile.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="font-myFont bg-gray-200 py-10 min-h-screen flex justify-center items-center pt-16">
      <div className="md:grid grid-cols-2 gap-12 px-6 md:px-16">
        {/* PROFILE PICTURE */}
        <div className="flex justify-center items-center mb-10 md:mb-0">
          <img
            src={porfile}
            alt="Dewandra's profile"
            className="rounded-full w-52 h-52 md:w-72 md:h-72 shadow-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* INTRODUCTION */}
        <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-2">Hello, I'm</p>
          <p className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-2">Dewandra</p>
          <p className="text-lg md:text-xl font-medium text-gray-600 mb-6">
          I am a passionate Web Developer focused on building clean, functional websites that offer great user experiences and meet business goals..
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <a
              href="https://drive.google.com/file/d/1kAlY8Pi72Zh9S1bkqeR09PbwuPhc5Apd/view?usp=sharing"
              target="_blank"
              className="rounded-full py-2 px-6 bg-gray-800 text-white font-semibold text-lg transform transition duration-300 hover:bg-gray-600 hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-full py-2 px-6 border-2 border-gray-800 text-gray-800 font-semibold text-lg transform transition duration-300 hover:bg-gray-800 hover:text-white hover:scale-105"
            >
              Contact Info
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <a
              href="https://github.com/dewandra"
              target="_blank"
              className="hover:scale-110 duration-200 transform"
            >
              <FaGithub size={40} className="text-gray-800 hover:text-black transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/dewandrarb"
              target="_blank"
              className="hover:scale-110 duration-200 transform text-gray-800"
            >
              <FaLinkedin size={40} className="text-gray-600 hover:text-black transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
