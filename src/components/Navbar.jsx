import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <div className="text-2xl">Mucharla Jai Sarupya</div>
        <div className="space-x-4 hidden md:flex">
          <a href="#about" className="px-3 py-1 rounded hover:text-white hover:border hover:border-white transition">About</a>
          <a href="#projects" className="px-3 py-1 rounded hover:text-white hover:border hover:border-white transition">Projects</a>
          <a href="#contact" className="px-3 py-1 rounded hover:text-white hover:border hover:border-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
