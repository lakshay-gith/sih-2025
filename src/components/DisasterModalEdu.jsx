import React from "react";

const DisasterModalEdu = ({ disaster, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>{disaster.name}</h2>
        <p><strong>How it starts:</strong> {disaster.details.start}</p>
        <p><strong>Why dangerous:</strong> {disaster.details.danger}</p>
        <p><strong>Deadliest Occurrence:</strong> {disaster.details.deadliest}</p>
      </div>
    </div>
  );
};

export default DisasterModalEdu;
