import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import experienceData from "./experienceData";

const Experience = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen font-myFont"
      id="experience"
    >
      <p className="text-4xl md:text-6xl font-semibold text-black mb-8">
        Skill
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 md:px-28 md:py-10 outline outline-offset-3 outline-1 rounded-lg">
        {experienceData.map((i) => (
          <div className="flex md:justify-center items-center gap-2 p-4" key={i.id}>
            <span>
              <FaRegCheckCircle size={25}/>
            </span>
            <p className="text-l md:text-2xl font-semibold text-gray-600">
              {i.item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
