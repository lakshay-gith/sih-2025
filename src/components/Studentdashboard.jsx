import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Studentdashboard.css";

const StudentDashboard = () => {

    useEffect(() => {
    alert("Major Thunderstorm alert and EarthQuack Emergency Issued for your area. Be preapred Be safe.")
  
   }, [])

    const navigate = useNavigate();
  return (
    <div className="student-container">
      <h1
      style={{
    position: "absolute",
    top: "10px",
    left: "11%",
    transform: "translateX(-50%)",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.2rem",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#e63946",
    textShadow: "2px 2px 6px rgba(0,0,0,0.2)",
    cursor: "default",
    userSelect: "none",
  }}
>
  ResQ<span style={{ color: "#0f2b5cff" }}>360</span>
</h1>
      <header className="student-header">
        <h1 className="Student-Dashboard">Student Dashboard</h1>
        <button  onClick={()=>{
            alert("Your data has been sent to Authorities you'll get help ASAP")
        }} className="sos-btn">🚨 SOS</button>
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
          <button onClick={() => navigate("/drill-participation")}>Participate</button>

        </div>

        <div className="student-card announcements">
          <h2>📢 Announcements</h2>
          <p>
            Stay informed with important notices from your institute regarding
            upcoming drills and safety updates.
          </p>
         <button onClick={() => navigate("/announcements")}>Check Announcements</button>
        </div>

        <div className="student-card Education">
          <h2>📕 Education</h2>
          <p>
           Read About natural and man-made Disasters. And prepare for Quizzes.
          </p>
          <button onClick={() => navigate("/education")}>Start Exploring</button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
