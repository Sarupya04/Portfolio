import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-12 montserrat-regular">Contact</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full">
        {/* Email */}
        <div className="bg-[#111] border border-white rounded-lg p-6 text-center hover:shadow-lg transition">
          <FaEnvelope className="text-3xl mx-auto mb-4 text-white" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <a
            href="mailto:jaisarupya.mucharla@gmail.com"
            className="text-gray-300 hover:text-white transition underline"
          >
            jaisarupya@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-[#111] border border-white rounded-lg p-6 text-center hover:shadow-lg transition">
          <FaLinkedin className="text-3xl mx-auto mb-4 text-white" />
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/jai-sarupya-mucharla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition underline"
          >
            linkedin.com/in/mucharla-jai-sarupya
          </a>
        </div>

        {/* GitHub */}
        <div className="bg-[#111] border border-white rounded-lg p-6 text-center hover:shadow-lg transition">
          <FaGithub className="text-3xl mx-auto mb-4 text-white" />
          <h3 className="text-xl font-semibold mb-2">GitHub</h3>
          <a
            href="https://github.com/Sarupya04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition underline"
          >
            github.com/jaisarupya
          </a>
        </div>
      </div>
    </section>
  );
}
