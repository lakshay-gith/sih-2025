import React, { useState } from "react";
import DrillCard from "./DrillCard";
import FinalMessageModal from "./FinalMessageModal";
import "./DrillChecklist.css";

const drillData = [
  {
    id: 1,
    class:'earthquake',
    name: "Earthquake Drill",
    checklist: [
      "Students evacuated in under 3 minutes",
      "Teachers guided students safely",
      "Assembly point used correctly"
    ]
  },
  {
    id: 2,
    name: "Fire Drill",
    checklist: [
      "Fire alarm triggered properly",
      "Evacuation routes followed",
      "Fire extinguishers demonstrated"
    ]
  },
  {
    id: 3,
    name: "Flood Drill",
    checklist: [
      "Safe elevated area identified",
      "Emergency kits distributed",
      "Communication plan executed"
    ]
  },
  {
    id: 4,
    name: "Chemical Leak Drill",
    checklist: [
      "Students provided safety masks",
      "Evacuation to safe zone",
      "Hazmat procedures explained"
    ]
  },
  {
    id: 5,
    name: "Thunderstorm Drill",
    checklist: [
      "Electrical equipment turned off",
      "Students moved indoors",
      "Emergency lights used"
    ]
  }
];

const DrillChecklist = () => {
  const [completed, setCompleted] = useState({});
  const [showFinalModal, setShowFinalModal] = useState(false);

  const handleCompletion = (id, isComplete) => {
    setCompleted((prev) => {
      const updated = { ...prev, [id]: isComplete };
      // If all drills are completed, show final message
      if (Object.keys(updated).length === drillData.length && 
          Object.values(updated).every((val) => val === true)) {
        setShowFinalModal(true);
      }
      return updated;
    });
  };

  return (
    <div className="drill-container">
      <h1>Drill Checklist with Video Uploading</h1>
      <p>Please upload videos and complete checklists for each disaster drill.</p>

      <div className="drill-grid">
        {drillData.map((drill) => (
          <DrillCard
            key={drill.id}
            drill={drill}
            onComplete={(isComplete) => handleCompletion(drill.id, isComplete)}
          />
        ))}
      </div>

      {showFinalModal && (
        <FinalMessageModal onClose={() => setShowFinalModal(false)} />
      )}
    </div>
  );
};

export default DrillChecklist;
