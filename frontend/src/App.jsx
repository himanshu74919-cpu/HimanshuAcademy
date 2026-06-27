import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>🎓 Himanshu Academy</h1>
        <p>Learn Skills • Build Your Future • Achieve Your Dreams</p>

        <div className="buttons">
          <button>📚 Explore Courses</button>
          <button>📞 Contact Us</button>
        </div>
      </header>

      <section className="features">
        <div className="card">
          <h2>📘 Quality Courses</h2>
          <p>Learn from beginner to advanced level.</p>
        </div>

        <div className="card">
          <h2>💻 Practical Learning</h2>
          <p>Real projects and hands-on practice.</p>
        </div>

        <div className="card">
          <h2>🎯 Career Support</h2>
          <p>Build skills for your future career.</p>
        </div>
      </section>

      <footer>
        <h3>📞 Contact</h3>
        <p>Phone: 9262633158</p>
        <p>© 2026 Himanshu Academy</p>
      </footer>
    </div>
  );
}
