import React from "react";
import "./DisasterModal.css";

const DisasterModal = ({ disaster, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{disaster.name} Safety Measures</h2>
        <ul>
          {disaster.safetyMeasures.map((measure, index) => (
            <li key={index}>{measure}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisasterModal;
