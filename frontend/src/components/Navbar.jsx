function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#1e3a8a",
        color: "white",
      }}
    >
      <h2>🎓 Himanshu Academy</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Courses
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
