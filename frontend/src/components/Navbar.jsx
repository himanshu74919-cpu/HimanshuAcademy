import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎓 Himanshu Academy</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Courses</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="btn">Login</button>
    </nav>
  );
}
