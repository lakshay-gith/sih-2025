import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StudentDashboard from "./components/Studentdashboard";
import GamifiedEducation from "./components/GamifiedEducation";
import DrillParticipation from "./components/DrillParticipation";
import Announcements from "./components/Announcements";
import Education from "./components/Education";

import InstituteDashboard from "./components/Institutedashboard";
import DrillPlanning from "./components/DrillPlanning";
import DrillChecklist from "./components/DrillChecklist";
import FeaturesAndSafety from "./components/FeaturesAndSafety";
import InspectionRatings from "./components/InspectionRatings";
import "./App.css";

function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/gamified-education" element={<GamifiedEducation />} />
        <Route path="/drill-participation" element={<DrillParticipation />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/education" element={<Education />} />

        <Route path="/institute-dashboard" element={<InstituteDashboard />} />
        <Route path="/drill-planning" element={<DrillPlanning />} />
        <Route path="/drill-checklist" element={<DrillChecklist />} />
        <Route path="/features-safety" element={<FeaturesAndSafety />} />
        <Route path="/inspection-rating" element={<InspectionRatings/>} />

      </Routes>
        <ToastContainer />
    </Router>
  );
}

export default App;
