import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-background flex flex-col justify-center items-center font-body text-text-light text-center py-20 md:py-32" id="contact">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-accent mb-4">
          Hubungi Saya
        </h2>
        <p className="text-lg text-text-light/80 mt-4 max-w-2xl mx-auto mb-8">
          Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa. Jangan ragu untuk menghubungi saya.
        </p>
        <a href="mailto:email.anda@contoh.com" className="rounded-lg py-3 px-8 bg-primary-accent text-background font-bold font-heading transition-transform duration-300 hover:scale-105">
          Kirim Email
        </a>
      </div>
      <footer className="bg-card text-center py-5">
        <p className="text-muted-text font-body">&copy; 2025 Dewandra</p>
      </footer>
    </>
  );
};

export default Contact;