import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Sih-logo.png"; 
import "./Institutedashboard.css";

const InstituteDashboard = () => {
  useEffect(() => {
    alert("Major Thunderstorm alert and Earthquake Emergency Issued for your area. Be prepared, Be safe.");
  }, []);

  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Logo inside header to avoid overlap */}
      <header className="dashboard-header">
        <img
          src={logo}
          alt="ResQ360 Logo"
          className="dashboard-logo"
        />
        <h1>Institute Dashboard</h1>
        <button className="logout-btn" onClick={() => navigate("/login")}>
          Logout
        </button>
      </header>

      <div className="dashboard-grid">
        <div className="dashboard-card planning">
          <h2>Step-by-step Drill Planning</h2>
          <p>Create, schedule and monitor safety drills efficiently.</p>
          <button onClick={() => navigate("/drill-planning")}>Open</button>
        </div>

        <div className="dashboard-card drills">
          <h2>Drill Checklist with Video Uploading</h2>
          <p>Upload drill videos and maintain compliance checklists.</p>
          <button onClick={() => navigate("/drill-checklist")}>
            Open
          </button>
        </div>

        <div className="dashboard-card features">
          <h2>Features & Safety Measures Required</h2>
          <p>Review and update institute’s safety requirements.</p>
          <button onClick={() => navigate("/features-safety")}>
            Open
          </button>
        </div>

        <div className="dashboard-card inspection">
          <h2>Book Your Inspection</h2>
          <p>Be Prepared and be safe. <br />Get inspection rating from authorities.</p>
          <button onClick={() => navigate("/inspection-rating")}>
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
