import React from "react";
import { FaBug } from "react-icons/fa";
import bg from "../assets/bg.png";

const About = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center" id="about">
        <div className="font-myFont md:grid grid-cols-2 gap-14">
          {/* =========== INTRODUCTION =========== */}
          <div className="text-center md:flex flex-col justify-center items-end">
            <p className="text-xl md:text-2xl font-semibold text-gray-600">
              About{" "}
            </p>
            <p className="text-4xl md:text-6xl font-semibold text-black">
              Dewandra
            </p>
            <p className="text-sm font-semibold text-gray-600 px-4 md:text-right md:ml-10 md:pl-32">
            I am comfortable calling myself a recent graduate from the Information Systems study program. Through my experience, I have developed various interesting and useful websites. With genuine passion, I invite you to explore my collection of works that reflect my dedication and expertise in this website.
            </p>
          </div>

          {/* =========== FOTO PROFILE =========== */}
          <div className="flex justify-center items-center mt-6 md:justify-start">
            <img
              src={bg}
              alt="gambar"
              className="rounded-2xl w-52 h-36 md:w-80 md:h-60"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
