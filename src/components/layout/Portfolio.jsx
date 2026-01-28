import React, { useEffect } from "react";
import Navbar from "../navbar";
import Hero from "../hero";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import Experience from "../Experience";

export default function Portfolio() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX + 10;
      mouseY = e.clientY + 10;
      cursor.style.opacity = 1;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(animateCursor);
    };

    const hideCursor = () => {
      cursor.style.opacity = 0;
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", () => (cursor.style.opacity = 1));

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", () => (cursor.style.opacity = 1));
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <>
      <style>{`
      .custom-cursor {
        width: 15px;
        height: 15px;
        // border: 1px solid #ffffff; /* thinner border */
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 9999;
        transition: opacity 0.2s ease, transform 0.15s ease-out;
        background-color: white;
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.2); /* larger soft glow */
      }

      body {
        background-color: black;
      }
      .underline-animation {
        display: inline-block;
        position: relative;
      }
      .underline-animation::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: white;
        animation: underlineSlide 1s ease-out forwards;
        transform: scaleX(0);
        transform-origin: left;
      }
      @keyframes underlineSlide {
        to {
          transform: scaleX(1);
        }
      }
    `}</style>

      <div className="text-white scroll-smooth min-h-screen relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
