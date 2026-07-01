import "../styles/FeaturedCourses.css";

export default function FeaturedCourses() {
  return (
    <section className="featured-courses">
      <h2>Free Learning Programs</h2>

      <div className="course-grid">

        <div className="course-card">
          <h3>📘 Foundation (Class 6–10)</h3>
          <p>Build strong concepts in Maths, Science and English.</p>
        </div>

        <div className="course-card">
          <h3>📐 JEE Preparation</h3>
          <p>Physics, Chemistry and Mathematics with practice questions.</p>
        </div>

        <div className="course-card">
          <h3>🩺 NEET Preparation</h3>
          <p>Biology, Physics and Chemistry for medical aspirants.</p>
        </div>

        <div className="course-card">
          <h3>🏆 Olympiad</h3>
          <p>Prepare for National and International Olympiad exams.</p>
        </div>

        <div className="course-card">
          <h3>📝 Notes & PYQs</h3>
          <p>Free notes, previous year questions and revision material.</p>
        </div>

        <div className="course-card">
          <h3>🤖 AI Doubt Solver</h3>
          <p>Ask questions anytime and learn with AI-powered guidance.</p>
        </div>

      </div>
    </section>
  );
}
