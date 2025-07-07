import React, { useState } from "react";
import portfolioData from "./portofolioData";

const Portfolio = () => {
  // 1. State untuk melacak jumlah item yang ditampilkan
  const [visibleItems, setVisibleItems] = useState(6);

  // 2. Fungsi untuk menambah jumlah item yang ditampilkan
  const loadMore = () => {
    setVisibleItems((prevValue) => prevValue + 6);
  };

  return (
    <div className="bg-card py-20 md:py-32 font-body" id="portfolio">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-accent mb-4">
          Portofolio Saya
        </h2>
        <p className="text-lg text-muted-text mb-12 max-w-2xl mx-auto">
          Beberapa proyek pilihan yang pernah saya kerjakan.
        </p>
      </div>
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* 3. Tampilkan item sesuai state 'visibleItems' */}
        {portfolioData.slice(0, visibleItems).map((item) => (
          <div
            className="group bg-background rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-secondary-accent transition-all duration-300"
            key={item.id}
          >
            <div className="w-full h-56 bg-background">
              <iframe
                className="w-full h-full"
                src={item.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="text-xl text-text-light font-bold font-heading">{item.title}</h4>
              <p className="text-secondary-accent mt-1 text-sm font-heading">{item.title.split(' - ')[1] || 'Project'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Tampilkan tombol "Load More" jika masih ada item yang tersembunyi */}
      {visibleItems < portfolioData.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="rounded-lg py-3 px-8 bg-primary-accent text-background font-bold font-heading transition-transform duration-300 hover:scale-105"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;