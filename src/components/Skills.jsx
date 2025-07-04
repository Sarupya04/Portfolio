import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap", "GSAP"],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Tableau"],
  },
  {
    title: "Academic Coursework",
    skills: ["DSA", "OOP", "DBMS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-12 michroma-regular">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {skillCategories.map((category, index) => (
          <div key={index} className="group [perspective:1000px] w-80 h-52 mx-auto">
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:rotate-y-180 preserve-3d">
              {/* Front */}
              <div className="absolute w-full h-full flex items-center justify-center bg-white text-black rounded-lg backface-hidden shadow-md border border-white">
                <h3 className="text-xl font-semibold text-center px-2">{category.title}</h3>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-black text-white rounded-lg px-4 py-6 rotate-y-180 backface-hidden shadow-md border border-white overflow-hidden">
                <h3 className="text-lg font-bold mb-4 text-center border-b border-white pb-2">Skills</h3>

                <ul
                  className={`${
                    category.title === "Web Technologies"
                      ? "grid grid-cols-2 gap-2"
                      : "space-y-2"
                  } text-sm text-center mt-2`}
                >
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Styles */}
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
