import React from "react";
import "./DrillParticipation.css";

const ThankYouModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>🎉 Thank You for Participating!</h2>
        <p>
          We appreciate your enthusiasm for learning safety drills.  
          Upon successful completion, you will be awarded a{" "}
          <strong>Certificate of Participation</strong>.  
          Stay safe and keep learning!
        </p>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
