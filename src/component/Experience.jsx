import React from "react";
import { FaReact, FaNodeJs, FaLaravel, FaWordpress, FaCss3Alt, FaHtml5, FaBootstrap, FaServer } from "react-icons/fa";
import experienceData from "./experienceData";

const Experience = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen font-myFont bg-gray-200 py-10"
      id="experience"  
    >
      <p className="text-4xl md:text-6xl font-semibold text-gray-800 mb-8 text-center">
        Skills & Expertise
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-20">
        {experienceData.map((i) => (
          <div
            key={i.id}
            className="group relative flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-500"
          >
            <div className="mb-4 p-2 bg-black text-white rounded-full">
              {i.item === "React Js" && <FaReact size={30} />}
              {i.item === "Node Js" && <FaNodeJs size={30} />}
              {i.item === "Laravel" && <FaLaravel size={30} />}
              {i.item === "Wordpress" && <FaWordpress size={30} />}
              {i.item === "Javascript" && <FaHtml5 size={30} />}
              {i.item === "Tailwind" && <FaCss3Alt size={30} />}
              {i.item === "Bootstrap" && <FaBootstrap size={30} />}
              {i.item === "Express Js" && <FaServer size={30} />}
            </div>

            <p className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-4">{i.item}</p>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className={`h-2 rounded-full ${getSkillProgress(i.item)}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getSkillProgress = (skill) => {
  switch (skill) {
    case "Wordpress":
      return "bg-black w-40";
    case "Javascript":
      return "bg-black w-64";
    case "Bootstrap":
      return "bg-black w-64";
    case "Tailwind":
      return "bg-black w-40";
    case "Node Js":
      return "bg-black w-64";
    case "Express Js":
      return "bg-black w-64";
    case "React Js":
      return "bg-black w-40";
    case "Laravel":
      return "bg-black w-72";
    default:
      return "bg-gray-400 w-50";
  }
};

export default Experience;
