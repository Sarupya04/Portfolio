import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <div className="text-2xl"></div>
        <div className="hidden md:flex text-xl">
          {["about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="mx-4 px-3 py-1 rounded relative group transition-all duration-200"
            >
              <span className="inline-block transition-all duration-200 group-hover:font-bold group-hover:text-2xl">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
