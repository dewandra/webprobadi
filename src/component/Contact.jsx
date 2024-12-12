import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-200 h-screen flex flex-col justify-center items-center font-myFont" id="contact">
        <p className="text-center text-4xl md:text-6xl font-semibold text-black">
          Contact
        </p>
        <p className="text-xl md:text-2xl font-semibold text-gray-600 mt-10 text-center">
          Thank you for visiting my portfolio website, please feel free to
          contact me.{" "}
        </p>
        <div className="flex text-l md:text-xl font-semibold text-black mt-10">
          <a href="#">LinkedIn</a>
          <p className="mx-4">/</p>
          <a href="#">Dewandra</a>
        </div>
      </div>
      <p className="relative abosulute bottom-0 text-center ">
        &copy; 2023 Dewandra
      </p>
    </>
  );
};

export default Contact;
