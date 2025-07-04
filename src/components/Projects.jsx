import React from "react";

const projectData = [
  {
    title: "Music Player App",
    description:
      "A web-based music player built using JavaScript, allowing users to play, pause, and navigate tracks. It dynamically updates song details, progress bars, and controls for an interactive experience.",
    link: "#"
  },
  {
    title: "Food Recipe App",
    description:
      "A dynamic web app that lets users search for recipes, fetching ingredients and instructions from an API. It enhances skills in API handling, DOM manipulation, and search functionality.",
    link: "#"
  },
  {
    title: "Xplore",
    description:
      "Xplore is a travel website model designed to showcase destinations and provide essential travel information. Built with HTML, CSS, and JavaScript, it offers an engaging and interactive user experience.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="border border-white p-6 rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
