import "../styles/Auth.css";
import { useState } from "react";
import { registerUser } from "../api/auth";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await registerUser({
        name,
        email,
        password,
      });

      alert("✅ Account Created Successfully");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.error || "Signup Failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}
