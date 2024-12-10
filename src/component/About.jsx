import React from "react";
import bg from "../assets/bg.png";

const About = () => {
  return (
    <div
      id="about"
      className="relative h-screen flex justify-center items-center bg-gray-200" 
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${bg})` }}></div>

      <div className="font-myFont md:grid grid-cols-1 md:grid-cols-2 gap-12 p-4 md:p-16 z-10 relative">
        <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">About Me</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">Dewandra</h2>
          <p className="text-sm md:text-lg font-medium text-gray-600 px-4 md:px-10 mb-6 md:mb-12">
          I am a recent graduate in Information Systems with experience in developing various engaging and functional websites. Each project I work on reflects my dedication to delivering innovative and practical solutions. I focus on creating intuitive designs and providing optimal user experiences. I invite you to explore my portfolio, which showcases my skills and passion for web development.
          </p>
        </div>

        <div className="flex justify-center items-center mt-6 md:mt-0">
          <img
            src={bg}
            alt="Profile"
            className="rounded-3xl w-52 h-52 md:w-80 md:h-80 shadow-xl transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
