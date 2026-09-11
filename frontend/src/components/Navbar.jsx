import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-link">
          <img
  src="/images/shivam-tech-logo.png"
  alt="Shivam Tech Institute"
  style={{
    width: "45px",
    height: "45px",
    objectFit: "contain",
    verticalAlign: "middle",
    marginRight: "10px"
  }}
/>

          <span>Shivam Tech Institute</span>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/courses">Courses</Link>

        <Link to="/tests">Tests</Link>

        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/profile">
              👤 {user.name || "Profile"}
            </Link>

            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        )}

        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
