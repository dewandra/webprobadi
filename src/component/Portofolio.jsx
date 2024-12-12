import React from "react";
import portfolioData from "./portofolioData";

const Portfolio = () => {
  return (
    <div className="bg-gray-200 h-auto font-myFont py-10" id="portfolio">
      <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">Portfolio</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 md:p-8">
        {portfolioData.map((item) => (
          <div
            className="flex flex-col justify-center items-center m-4 text-center bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            key={item.id}
          >
            <iframe
              className="w-full aspect-video rounded-lg"
              src={item.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4 className="text-xl text-gray-800 font-semibold mt-4">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
