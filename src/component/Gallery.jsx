import React, { useState } from 'react';
import galleryData from './galleryData';

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMore = () => {
    setVisibleItems((prevValue) => prevValue + 4);
  };

  return (
    <section id="galeri" className="py-24 md:py-32 space-y-12 max-w-6xl mx-auto px-6">
      <div className="text-center space-y-3">
        <p className="text-sm font-mono uppercase tracking-widest text-brand">03 &middot; Galeri</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Di balik layar.</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryData.slice(0, visibleItems).map((item, index) => (
          <div key={item.id} className={`aspect-[3/4] bg-subtle rounded-xl overflow-hidden ring-1 ring-ink/5 ${index % 2 !== 0 ? 'md:mt-12' : ''}`}>
            <img src={item.imageUrl} alt={item.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
      
      {visibleItems < galleryData.length && (
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
