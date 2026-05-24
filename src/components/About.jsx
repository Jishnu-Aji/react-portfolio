function About() {
  return (
    <section id="about">
      <div className="container">
        <p
          style={{
            color: "#ff004f",
            marginBottom: "20px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          About Me
        </p>
        <h2 className="title">
          Passionate Full Stack Developer
        </h2>
        <p className="subtitle">
          I specialize in creating modern, responsive and immersive
          web applications using React.js, Node.js and MongoDB. I enjoy building beautiful UI designs, scalable backend
          systems and smooth user experiences that solve real-world problems.
        </p>
        <div className="skills">
          <div className="skill">React</div>
          <div className="skill">JavaScript</div>
          <div className="skill">CSS3</div>
          <div className="skill">Node.js</div>
          <div className="skill">MongoDB</div>
          <div className="skill">Firebase</div>
          <div className="skill">Git &amp; GitHub</div>
        </div>
      </div>
    </section>
  );
}

export default About;
