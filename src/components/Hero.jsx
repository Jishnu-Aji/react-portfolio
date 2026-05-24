import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>Jishnu Aji</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Building modern, responsive and immersive web
          applications using React.js, Node.js and MongoDB.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
