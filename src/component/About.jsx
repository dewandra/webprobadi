import React from "react";
import aboutImage from "../assets/fototentanggueh.jpg";

const About = () => {
  return (
    <div id="about" className="bg-card py-20 md:py-32 font-body text-text-light">
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 flex justify-center">
            <img src={aboutImage} alt="Tampilan kode di editor" className="rounded-lg shadow-2xl w-full"/>
          </div>
          <div className="md:col-span-3">
            <p className="font-heading text-muted-text text-lg mb-2">Perkenalan</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary-accent">Tentang Saya</h2>
            <p className="text-lg text-text-light/80 mb-6 leading-relaxed">
              Saya adalah lulusan baru Sistem Informasi dengan hasrat untuk mengembangkan situs web yang menarik dan fungsional. Setiap proyek mencerminkan dedikasi saya untuk memberikan solusi inovatif.
            </p>
            <a
              href="https://drive.google.com/file/d/1kAlY8Pi72Zh9S1bkqeR09PbwuPhc5Apd/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="inline-block rounded-lg py-3 px-6 bg-primary-accent text-background font-bold font-heading transition-transform duration-300 hover:scale-105"
            >
              Unduh CV Saya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;