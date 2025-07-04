import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-10 montserrat-regular">Experience</h2>
      <div className="max-w-4xl text-lg leading-relaxed text-gray-300 bg-[#111] p-6 rounded-lg border border-white shadow-md">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Software Development Intern
        </h3>
        <p className="italic text-gray-400 mb-2">
          Forge Alumnus Services Pvt. Ltd. – Hyderabad, India <br />
          May 2025 – June 2025 (45 Days)
        </p>
        <p>
          During my internship at Forge Alumnus Services Pvt. Ltd., I successfully completed and delivered a project for their client Cuebox Solutions India Pvt. Ltd., utilizing Angular as the primary development framework. I developed and optimized over 30 responsive UI screens for the CueBox application, implementing Angular Material components, Mat Tables, and Bootstrap for accessible and modern design. I also configured Angular routing to enable seamless navigation between views, and worked collaboratively with backend and UI/UX teams to ensure functionality aligned with the design. This experience allowed me to gain hands-on exposure to client-based development in a fast-paced professional environment. I also leveraged Git for version control and effective collaboration with the team.
        </p>
      </div>
    </section>
  );
}
