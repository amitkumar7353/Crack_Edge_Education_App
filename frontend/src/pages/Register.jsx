import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        email,
        phone,
        password,
      });

      alert("Registered successfully!");

      navigate("/login");
    } catch (e) {
      alert(e.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div className="form">
      <img
  src="/images/shivam-tech-logo.png"
  alt="Shivam Tech Institute"
  style={{
    width: "100px",
    height: "100px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto 15px"
  }}
/>

      <h1>Shivam Tech Institute</h1>

      <h2>Student Registration</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}
