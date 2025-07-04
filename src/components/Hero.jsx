import React from "react";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-black relative">
      {/* Vertical Name */}
      <div
        className="absolute left-20 top-[85%] transform -translate-y-1/2 rotate-[-90deg] origin-left text-9xl sigmar-outline"
      >
        Sarupya
      </div>






      <div className="text-center text-white pt-32">
        <h1 className="text-5xl font-bold mb-4 montserrat-regular">Hi, I'm Mucharla Jai Sarupya</h1>
        <p className="text-xl mb-6 montserrat-regular">Web Developer | Programmer </p>
        <a
          href="#projects"
          className="px-6 py-3 border border-white text-white rounded transition duration-500 hover:bg-white hover:text-black"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
