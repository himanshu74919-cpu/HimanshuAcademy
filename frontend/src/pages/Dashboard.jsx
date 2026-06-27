import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>📊 Student Dashboard</h2>

      <div className="profile-card">
        <h3>👤 Welcome, Student</h3>
        <p>Email: student@example.com</p>
      </div>

      <div className="course-section">
        <h3>📚 My Courses</h3>

        <div className="course-box">
          <p>💻 Web Development</p>
          <span>Progress: 60%</span>
        </div>

        <div className="course-box">
          <p>🛡️ Ethical Hacking</p>
          <span>Progress: 30%</span>
        </div>

        <div className="course-box">
          <p>🤖 AI Basics</p>
          <span>Progress: 10%</span>
        </div>
      </div>
    </div>
  );
}
