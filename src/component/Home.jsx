import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../assets/fotogueh.jpg";

const Home = () => {
  return (
    // TAMBAHKAN `pt-20` di sini
    <div id="home" className="bg-background min-h-screen flex items-center font-body text-text-light pt-20">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
        <div className="text-center md:text-left">
          <p className="text-xl md:text-2xl text-primary-accent font-heading mb-3">Halo, saya Dewandra.</p>
          <h1 className="text-5xl md:text-7xl text-text-light font-bold font-heading mb-6 leading-tight">
            Web Developer & <br />UI Enthusiast
          </h1>
          <p className="text-lg text-muted-text mb-10 max-w-xl mx-auto md:mx-0">
            Saya membangun situs web yang bersih dan fungsional dengan pengalaman pengguna yang luar biasa untuk mencapai tujuan bisnis Anda.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#portfolio"
              className="rounded-lg py-3 px-8 bg-primary-accent text-background font-bold font-heading transition-transform duration-300 hover:bg-secondary-accent hover:scale-105"
            >
              Lihat Portofolio
            </a>
            <a
              href="https://github.com/dewandra" target="_blank" rel="noopener noreferrer"
              className="p-3 border-2 border-primary-accent rounded-lg text-primary-accent transition-colors duration-300 hover:bg-primary-accent hover:text-background"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/dewandrarb" target="_blank" rel="noopener noreferrer"
              className="p-3 border-2 border-primary-accent rounded-lg text-primary-accent transition-colors duration-300 hover:bg-primary-accent hover:text-background"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-card rounded-lg">
            <img src={profileImage} alt="Potret Dewandra dengan cahaya api" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;