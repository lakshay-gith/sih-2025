import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Sih-logo.png"; 
import "./Studentdashboard.css";

const StudentDashboard = () => {
  useEffect(() => {
  toast.error("🌩️ Major Thunderstorm alert and 🌍 Earthquake Emergency Issued for your area. Stay Safe!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored"
  });
}, []);

  const navigate = useNavigate();

  return (
    <div className="student-container">
      <header className="student-header">
        <img
          src={logo}
          alt="ResQ360 Logo"
          className="dashboard-logo"
        />
        <h1 className="Student-Dashboard">Student Dashboard</h1>
        <button
          onClick={() => {
            toast.error("Your data has been sent to Authorities. You'll get help ASAP.");
          }}
          className="sos-btn"
        >
          🚨 SOS
        </button>
      </header>

      <div className="student-grid">
        <div className="student-card gamified">
          <h2>🎮 Gamified Education</h2>
          <p>
            Learn about disaster safety through interactive quizzes, games, and
            challenges. Earn badges as you progress!
          </p>
          <button onClick={() => navigate("/gamified-education")}>
            Start Learning
          </button>
        </div>

        <div className="student-card drills">
          <h2>📋 Drill Participation</h2>
          <p>
            Track your participation in safety drills like earthquake, fire, and
            flood. Stay updated with your performance.
          </p>
          <button onClick={() => navigate("/drill-participation")}>
            Participate
          </button>
        </div>

        <div className="student-card announcements">
          <h2>📢 Announcements</h2>
          <p>
            Stay informed with important notices from your institute regarding
            upcoming drills and safety updates.
          </p>
          <button onClick={() => navigate("/announcements")}>
            Check Announcements
          </button>
        </div>

        <div className="student-card Education">
          <h2>📕 Education</h2>
          <p>
            Read about natural and man-made Disasters. And prepare for Quizzes.
          </p>
          <button onClick={() => navigate("/education")}>
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
