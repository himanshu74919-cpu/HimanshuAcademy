import "../styles/Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>⭐ What Students Say</h2>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <p>"Amazing teaching style! I learned web development easily."</p>
          <h4>- Satish</h4>
        </div>

        <div className="testimonial-card">
          <p>"Ethical hacking course is very practical and useful."</p>
          <h4>- Adarsh</h4>
        </div>

        <div className="testimonial-card">
          <p>"Best platform for beginners in coding. Highly recommended."</p>
          <h4>- Himanshu</h4>
        </div>

      </div>
    </section>
  );
}
