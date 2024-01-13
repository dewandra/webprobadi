// Portofolio.js
import React from "react";
import portfolioData from "./portofolioData";

const Portofolio = () => {
  return (
    <div className="h-screen font-myFont" id="portofolio">
      <p className="text-center text-4xl md:text-6xl font-semibold text-black">
        Portofolio
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 m-1 md:m-8 gap-2">
        {portfolioData.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center m-2 text-center"
            key={item.id}
          >
            <iframe
              className="w-full aspect-video rounded-lg"
              src={item.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            ></iframe>
            <p className="text-sm mt-2 md:text-xl font-semibold text-gray-600">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
