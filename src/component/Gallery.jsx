import React, { useState } from 'react';
import galleryData from './galleryData';

const Gallery = () => {
  // 1. State untuk melacak jumlah gambar yang ditampilkan
  const [visibleItems, setVisibleItems] = useState(6);

  // 2. Fungsi untuk menambah jumlah gambar yang ditampilkan
  const loadMore = () => {
    setVisibleItems((prevValue) => prevValue + 6);
  };

  return (
    <div className="bg-background py-20 md:py-32" id="gallery">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-accent mb-4">
          Galeri
        </h2>
        <p className="text-lg text-muted-text mb-12 max-w-2xl mx-auto">
          Kumpulan momen, proses kerja, dan hal-hal yang menginspirasi saya.
        </p>
      </div>
      
      {/* 3. Terapkan slice() untuk menampilkan gambar sesuai state */}
      <div className="container mx-auto px-6 columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {galleryData.slice(0, visibleItems).map(item => (
          <div key={item.id} className="overflow-hidden rounded-lg break-inside-avoid">
            <img 
              src={item.imageUrl} 
              alt={item.alt}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        ))}
      </div>

      {/* 4. Tampilkan tombol "Load More" jika masih ada gambar tersembunyi */}
      {visibleItems < galleryData.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="rounded-lg py-3 px-8 bg-primary-accent text-background font-bold font-heading transition-transform duration-300 hover:scale-105"
          >
            Tampilkan Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
