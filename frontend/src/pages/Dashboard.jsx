import "../styles/Dashboard.css";

export default function Dashboard() {

  const handleLogout = () => {
    alert("Logged out!");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>📚 LMS Panel</h2>

        <button>🏠 Home</button>
        <button>📚 Courses</button>
        <button>📊 Progress</button>
        <button>👤 Profile</button>

        <button onClick={handleLogout}>🚪 Logout</button>
      </div>

      {/* Main */}
      <div className="main">

        <div className="profile">
          <h3>👋 Welcome Himanshu</h3>
          <p>Student Dashboard</p>
        </div>

        <h3>📊 Your Stats</h3>

        <div className="card-grid">
          <div className="card">
            <h2>3</h2>
            <p>Enrolled Courses</p>
          </div>

          <div className="card">
            <h2>65%</h2>
            <p>Average Progress</p>
          </div>

          <div className="card">
            <h2>12h</h2>
            <p>Study Time</p>
          </div>
        </div>

      </div>
    </div>
  );
}
