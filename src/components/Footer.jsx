function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        color: "white",
        padding: "60px 20px",
        borderTop: "1px solid #222",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Jishnu Aji
      </h2>
      <p
        style={{
          color: "#aaa",
          marginBottom: "25px",
          fontSize: "1.1rem",
        }}
      >
        Full Stack Developer
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          LinkedIn
        </a>
        <a
          href="mailto:yourmail@gmail.com"
          style={linkStyle}
        >
          Email
        </a>
      </div>
      <p
        style={{
          color: "#666",
          fontSize: "0.95rem",
        }}
      >
        © 2026 Jishnu Aji. All rights reserved.
      </p>
    </footer>
  );
}

const linkStyle = {
  color: "#ff004f",
  textDecoration: "none",
  fontSize: "1rem",
};

export default Footer;
