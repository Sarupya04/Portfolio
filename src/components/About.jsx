import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-8 michroma-regular">About Me</h2>
      <p className="max-w-2xl text-lg leading-relaxed text-center text-gray-300">
        I'm a B.Tech Computer Science student at Malla Reddy Engineering College, passionate about frontend development and modern UI design. I enjoy crafting responsive, user-friendly interfaces using technologies like React, Tailwind CSS, JavaScript, and Bootstrap.
      </p>
      <p className="max-w-2xl text-lg leading-relaxed text-center text-gray-300 mt-6">
        During my internship at Cuebox Solutions India Pvt. Ltd., I contributed to building 30+ Angular-based UI screens, integrated routing for smooth navigation, and strengthened my skills in real-world software development using Git and Agile practices.
      </p>
      <p className="max-w-2xl text-lg leading-relaxed text-center text-gray-300 mt-6">
        I’m also a curious learner with hands-on experience in Data Structures, DBMS, and OOP, and love building meaningful projects that solve real problems.
      </p>
    </section>
  );
}
