import "../styles/FeaturedCourses.css";

export default function FeaturedCourses() {
  return (
    <section className="featured-courses">
      <h2>📚 Featured Courses</h2>

      <div className="course-grid">
        <div className="course-card">
          <h3>💻 Web Development</h3>
          <p>Learn HTML, CSS, JavaScript, React and Node.js.</p>
        </div>

        <div className="course-card">
          <h3>🛡️ Ethical Hacking</h3>
          <p>Learn cybersecurity, Linux, networking and penetration testing.</p>
        </div>

        <div className="course-card">
          <h3>🤖 Artificial Intelligence</h3>
          <p>Master AI, Machine Learning and modern AI tools.</p>
        </div>
      </div>
    </section>
  );
}
