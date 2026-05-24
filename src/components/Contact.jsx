function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 20px",
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#ff004f",
          fontSize: "1.2rem",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Contact
      </p>
      <h2
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Let’s Work Together
      </h2>
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 50px",
          color: "#aaa",
          lineHeight: "1.8",
          fontSize: "1.2rem",
        }}
      >
        I’m available for freelance work, internships and full-stack development projects. Feel free to connect with me.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <a href="mailto:yourmail@gmail.com" style={buttonStyle}>Email</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" style={buttonStyle}>GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" style={buttonStyle}>LinkedIn</a>
      </div>
    </section>
  );
}

const buttonStyle = {
  padding: "14px 30px",
  border: "1px solid #333",
  borderRadius: "40px",
  color: "white",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "0.3s",
  background: "#111",
};

export default Contact;
