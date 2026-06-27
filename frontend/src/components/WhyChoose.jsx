import "../styles/WhyChoose.css";

export default function WhyChoose() {
  return (
    <section className="why">
      <h2>⭐ Why Choose Himanshu Academy?</h2>

      <div className="why-grid">
        <div className="why-card">
          <h3>👨‍🏫 Expert Teaching</h3>
          <p>Step-by-step learning from basics to advanced level.</p>
        </div>

        <div className="why-card">
          <h3>💻 Practical Projects</h3>
          <p>Learn by building real-world projects.</p>
        </div>

        <div className="why-card">
          <h3>🚀 Career Growth</h3>
          <p>Skills focused on job and freelancing opportunities.</p>
        </div>

        <div className="why-card">
          <h3>📞 Support</h3>
          <p>Get help whenever you are stuck in learning.</p>
        </div>
      </div>
    </section>
  );
}
