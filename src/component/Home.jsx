import React from "react";
import porfile from "../assets/porfile.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="font-myFont mt-24 md:grid grid-cols-2 gap-14 md:mt-16" id="home">
        {/* =========== FOTO PROFILE =========== */}
        <div className="flex justify-center items-center mt-6 md:justify-end md:mt-24">
          <img
            src={porfile}
            alt="gambar"
            className="rounded-full w-48 h-52 md:w-72 md:h-72"
          />
        </div>

        {/* =========== INTRODUCTION =========== */}
        <div className="text-center mt-4 md:flex flex-col justify-center items-start md:mt-32">
          <p className="text-xl md:text-2xl font-semibold text-gray-600">
            Hello, I'm
          </p>
          <p className="text-4xl md:text-6xl font-semibold text-black">
            Dewandra
          </p>
          <p className="text-xl md:text-2xl font-semibold text-gray-600">
            interested in web development
          </p>
        </div>
      </div>

      {/* =========== BUTTON DOWNLOAD CV & CONTACT INFO =========== */}
      <div className="font-myFont mt-6 flex justify-center items-center gap-5 md:mt-14">
        <button
          type="button"
          className="rounded-full py-1 md:py-2 px-3 md:px-5 outline hover:bg-black hover:text-white"
        >
          <a
            href="https://drive.google.com/file/d/1kAlY8Pi72Zh9S1bkqeR09PbwuPhc5Apd/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </button>
        <button
          type="button"
          className="rounded-full py-1 md:py-2 px-3 md:px-5 outline hover:bg-black hover:text-white"
        >
          <a href="#contact">Contact Info</a>
        </button>
      </div>

      {/* =========== BUTTON GITHUB & LINKEDIN =========== */}
      <div className="font-myFont mt-6 mb-5 flex justify-center items-center gap-5 md:mt-4 md:mb-9">
        <button type="button" className="hover:scale-75 duration-200">
          <span>
            <a href="https://github.com/dewandra" target="_blank">
              {" "}
              <FaGithub size={30} className="md:size-11" />{" "}
            </a>
          </span>
        </button>
        <button type="button" className="hover:scale-75 duration-200">
          <span>
            <a href="www.linkedin.com/in/dewandrarb" target="_blank">
              {" "}
              <FaLinkedin size={30} className="md:size-11" />
            </a>
          </span>
        </button>
      </div>
    </>
  );
};

export default Home;
