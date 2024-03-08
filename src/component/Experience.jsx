import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Experience = () => {
  const items = [
    {
      id: 1,
      item: "HTML",
    },
    {
      id: 2,
      item: "CSS",
    },
    {
      id: 3,
      item: "Javascript",
    },
    {
      id: 4,
      item: "Bootstrap",
    },
    {
      id: 5,
      item: "Tailwind",
    },
    {
      id: 6,
      item: "Node Js",
    },
    {
      id: 7,
      item: "Express Js",
    },
    {
      id: 6,
      item: "React Js",
    },
  ];
  return (
    <div
      className="flex flex-col justify-center items-center h-screen font-myFont"
      id="experience"
    >
      <p className="text-4xl md:text-6xl font-semibold text-black mb-8">
        Skill
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 md:px-28 md:py-10 outline outline-offset-3 outline-1 rounded-lg">
        {items.map((i) => (
          <div className="flex md:justify-center items-center gap-2 p-4">
            <span>
              <FaRegCheckCircle size={25}/>
            </span>
            <p
              className="text-l md:text-2xl font-semibold text-gray-600
            "
              key={i.id}
            >
              {i.item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
