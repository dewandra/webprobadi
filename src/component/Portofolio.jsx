import React, { useState } from "react";
import portfolioData from "./portofolioData";

export default function Portofolio() {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prevValue) => prevValue + 6);
  };

  return (
    <section id="karya" className="py-24 md:py-32 space-y-12 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-end">
        <div className="space-y-3">
          <p className="text-sm font-mono uppercase tracking-widest text-brand">02 &middot; Karya</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Project pilihan.</h2>
        </div>
        <span className="text-sm font-mono text-ink/40 hidden md:block">2023 &mdash; 2024</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.slice(0, visibleItems).map((item) => (
          <article key={item.id} className="group space-y-5">
            <div className="w-full aspect-video bg-subtle rounded-2xl overflow-hidden ring-1 ring-ink/5 group-hover:ring-brand/30 transition-all relative">
              <iframe
                className="w-full h-full"
                src={item.url}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-balance">{item.title.split(' - ')[0]}</h3>
                <p className="text-xs font-mono text-ink/40 pt-1">{item.title.split(' - ')[1] || 'Project'}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {visibleItems < portfolioData.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="rounded-xl py-4 px-8 bg-brand text-surface font-semibold transition-transform duration-300 hover:scale-105"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </section>
  );
}