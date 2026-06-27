import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h3>🎓 Himanshu Academy</h3>
          <p>Learn skills, build projects, and grow your career with us.</p>
        </div>

        <div className="footer-box">
          <h3>📞 Contact</h3>
          <p>Phone: 9262633158</p>
          <p>Email: support@himanshuacademy.com</p>
        </div>

        <div className="footer-box">
          <h3>🔗 Quick Links</h3>
          <p>Home</p>
          <p>Courses</p>
          <p>About</p>
          <p>Contact</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Himanshu Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
