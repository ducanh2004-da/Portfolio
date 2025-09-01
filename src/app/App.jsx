// src/App.jsx
import React from "react"; // optional nếu bạn dùng React automatic runtime, vẫn ok to keep
import { useEffect } from "react";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Navbar/nav'
import Header from './Header/header'
import About from './AboutMe/about'
import Skill from './Skill/skill'
import Project from './Project/project'
import Experience from './Experience/experience'
import Contact from './Contact/contact'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Footer/footer'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
    // optional: clean up (not strictly necessary for AOS)
    return () => {
      // nothing to cleanup for AOS.init, but if you used listeners do it here
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 font-sans">
      <Nav />
      <main className="max-w-5xl mx-auto px-4">
        <section id="header" className="pt-8 pb-16">
          <Header />
        </section>
        <hr />
        <section id="About" className="pt-8 pb-16">
          <About />
        </section>
        <hr />
        <section id="Skills" className="pt-8 pb-16">
          <Skill />
        </section>
        <hr />
        <section id="Projects" className="pt-8 pb-16">
          <Project />
        </section>
        <hr />
        <section id="Experience" className="pt-8 pb-16">
          <Experience />
        </section>
        <hr />
        <section id="Contact" className="pt-8 pb-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
