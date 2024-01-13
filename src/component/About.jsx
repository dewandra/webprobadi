import React from "react";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center" id="about">
        <div className="font-myFont md:grid grid-cols-2 gap-14">
          {/* =========== INTRODUCTION =========== */}
          <div className="text-center md:flex flex-col justify-center items-end">
            <p className="text-xl md:text-2xl font-semibold text-gray-600">
              About{" "}
            </p>
            <p className="text-4xl md:text-6xl font-semibold text-black">
              Dewandra
            </p>
            <p className="text-sm font-semibold text-gray-600 px-4 md:text-right md:ml-10">
              Saya adalah seorang mahasiswa tingkat akhir yang tengah menyelami
              dunia web development. Saat ini, fokus saya terletak pada
              eksplorasi kemampuan sebagai seorang web developer. Saya baru saja
              menyelesaikan sebuah proyek: pengembangan web Bakorwil Malang.
              Dalam proyek ini, saya berhasil mengintegrasikan React JS Frontend
              dan Express JS sebagai Backend. Pengalaman ini tidak hanya
              memperkaya pengetahuan saya, tetapi juga menunjukkan dedikasi saya
              dalam mencapai keunggulan dalam dunia pengembangan web.
            </p>
          </div>

          {/* =========== FOTO PROFILE =========== */}
          <div className="flex justify-center items-center mt-6 md:justify-start">
            <img
              src={profile}
              alt="gambar"
              className="rounded-2xl w-52 h-36 md:w-80 md:h-60"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
