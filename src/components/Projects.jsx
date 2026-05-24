function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p
          style={{
            color: "#ff004f",
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "600",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          My Work
        </p>
        <h2 className="title">Featured Projects</h2>
        <p className="subtitle">
          Here are some recent projects showcasing frontend, backend and full-stack development skills.
        </p>
        <div className="cards">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>
              Modern responsive portfolio with animations, dark UI and professional layout.
            </p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="card">
            <h3>E-Commerce App</h3>
            <p>
              Full-stack shopping platform using React, Node.js and MongoDB with authentication.
            </p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="card">
            <h3>Chat Application</h3>
            <p>
              Realtime chat app using Firebase and React with modern messaging UI.
            </p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
