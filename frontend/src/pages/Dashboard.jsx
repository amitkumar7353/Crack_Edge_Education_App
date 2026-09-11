import React from "react";
import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard">
      <div className="overlay"></div>

      <div className="dashboard-content">
        <div className="welcome-section">
          <div className="logo-circle">CE</div>

          <div>
            <h1>Welcome, {user?.name || "Student"} 👋 </h1>
            <p>Learn today. Lead tomorrow. 🚀</p>
          </div>
        </div>

        <div className="hero">
          <h2>Welcome to Shivam Tech Institute</h2>
          <p>
            Practice mock tests, improve your knowledge, and achieve your
            dreams with Crack Edge.
          </p>

          <div className="hero-buttons">
            <a href="/courses">Explore Courses</a>
            <a href="/tests">Start Mock Test</a>
          </div>
        </div>

        <div className="stats">
          <div className="stat-card">
            <span>📚</span>
            <h3>Courses</h3>
            <p>Learn from the best study material</p>
          </div>

          <div className="stat-card">
            <span>📝</span>
            <h3>Mock Tests</h3>
            <p>Practice and improve your score</p>
          </div>

          <div className="stat-card">
            <span>📊</span>
            <h3>Results</h3>
            <p>Track your learning progress</p>
          </div>
        </div>

        <div className="motivation">
          <h2>🌟 Keep Learning, Keep Growing!</h2>
          <p>
            Success is the result of preparation, hard work, and persistence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
