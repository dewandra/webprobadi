import React from "react";
import profile from "../assets/profile.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="font-myFont md:grid grid-cols-2 gap-14" id="home">
        {/* =========== FOTO PROFILE =========== */}
        <div className="flex justify-center items-center mt-6 md:justify-end md:mt-24">
          <img
            src={profile}
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
            Junior Web Developer
          </p>
        </div>
      </div>

      {/* =========== BUTTON DOWNLOAD CV & CONTACT INFO =========== */}
      <div className="font-myFont mt-6 flex justify-center items-center gap-5 md:mt-14">
        <button
          type="button"
          className="rounded-full py-1 md:py-2 px-3 md:px-5 outline hover:bg-black hover:text-white"
        >
          Download CV
        </button>
        <button
          type="button"
          className="rounded-full py-1 md:py-2 px-3 md:px-5 outline hover:bg-black hover:text-white"
        >
          Contact Info
        </button>
      </div>

      {/* =========== BUTTON GITHUB & LINKEDIN =========== */}
      <div className="font-myFont mt-6 mb-5 flex justify-center items-center gap-5 md:mt-4 md:mb-9">
        <button type="button" className="hover:scale-75 duration-200">
          <span>
            <FaGithub size={30} className="md:size-11" />
          </span>
        </button>
        <button type="button" className="hover:scale-75 duration-200">
          <span>
            <FaLinkedin size={30} className="md:size-11" />
          </span>
        </button>
      </div>
    </>
  );
};

export default Home;
