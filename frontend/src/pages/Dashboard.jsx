import "../styles/Dashboard.css";
import { isLoggedIn, logoutUser, getUser } from "../auth";

export default function Dashboard() {

  if (!isLoggedIn()) {
    window.location.href = "/login";
  }

  const handleLogout = () => {
    logoutUser();
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
          <h2>👋 Welcome {getUser()}</h2>
          <p>Premium Student Dashboard 🚀</p>
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
