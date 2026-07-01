import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🚀 Himanshu Academy
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
      </div>
    </nav>
  );
}
