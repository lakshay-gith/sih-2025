import React, { useState } from "react";
import "./DrillCard.css";

const DrillCard = ({ drill, onComplete }) => {
  const [videoUploaded, setVideoUploaded] = useState(false);
  const [checklist, setChecklist] = useState(
    drill.checklist.map(() => false)
  );

  const handleVideoUpload = (e) => {
    if (e.target.files.length > 0) {
      setVideoUploaded(true);
    }
  };

  const handleCheck = (index) => {
    const updatedChecklist = [...checklist];
    updatedChecklist[index] = !updatedChecklist[index];
    setChecklist(updatedChecklist);

    // If all items checked → notify parent
    const allChecked = updatedChecklist.every((item) => item);
    if (allChecked) onComplete(true);
  };

  return (
    <div className="drill-card">
      <h2>{drill.name}</h2>

      <div className="upload-section">
        <label htmlFor={`video-${drill.id}`} className="upload-label">
          Upload Drill Video
        </label>
        <input
          id={`video-${drill.id}`}
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
        />
      </div>

      <ul className={`checklist ${videoUploaded ? "" : "disabled"}`}>
        {drill.checklist.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              disabled={!videoUploaded}
              checked={checklist[index]}
              onChange={() => handleCheck(index)}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrillCard;
