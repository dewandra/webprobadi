import React from 'react';

const Clients = () => {
  // Membuat array berisi 15 item untuk di-loop. Isinya tidak penting.
  const items = new Array(15).fill(null);
  
  // Duplikasi array untuk menciptakan efek loop yang mulus pada animasi
  const extendedItems = [...items, ...items];

  return (
    <div className="bg-background py-20 md:py-24" id="clients">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-accent mb-12">
          Dipercaya Oleh
        </h2>
      </div>
      
      {/* Wrapper untuk Marquee */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-marquee group-hover:pause">
          {extendedItems.map((_, index) => (
            // Setiap item adalah satu blok vertikal "teman" dan "dewa"
            <div key={index} className="flex-shrink-0 mx-8 text-center">
              <p className="text-4xl font-bold font-heading text-primary-accent">
                teman
              </p>
              <p className="text-4xl font-bold font-heading text-secondary-accent mt-1">
                dewa
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;