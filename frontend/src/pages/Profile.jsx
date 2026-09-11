import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, auth } from "../api";

const Profile = () => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(storedUser?.name || "");
  const [email, setEmail] = useState(storedUser?.email || "");
  const [phone, setPhone] = useState(storedUser?.phone || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await api.put(
        `/auth/profile/${storedUser.id}`,
        {
          name,
          email,
          phone,
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      setMessage("Profile updated successfully!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message ||
        "Profile update failed"
      );
    }
  };

  if (!storedUser) {
    return (
      <div style={{ padding: "40px" }}>
        Please login first.
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      }}
    >
      <h2>👤 Student Profile</h2>

      <form onSubmit={handleUpdate}>

        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px",
          }}
        />

        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px",
          }}
        />

        <label>Phone Number</label>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          💾 Update Profile
        </button>

      </form>

      {message && (
        <p style={{ marginTop: "15px" }}>
          {message}
        </p>
      )}

    </div>
  );
};

export default Profile;
