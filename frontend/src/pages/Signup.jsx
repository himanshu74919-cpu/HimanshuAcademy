import "../styles/Auth.css";

export default function Signup() {

  const handleSignup = () => {
    alert("Account Created 🚀");
    window.location.href = "/login";
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>

      <input type="text" placeholder="Enter name" />
      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />

      <button onClick={handleSignup}>Create Account</button>
    </div>
  );
}
