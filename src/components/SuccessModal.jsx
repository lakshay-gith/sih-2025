import React from "react";
import "./SuccessModal.css";

export default function SuccessModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose} aria-label="Close">
          ✖
        </button>
        <h2>Request Submitted ✅</h2>
        <p>
          Your inspection request has been submitted successfully.  
          The response will be provided to your registered email soon.
        </p>
        <p className="thanks">Thank You.</p>
        <button className="ok-btn" onClick={onClose}>
          Okay
        </button>
      </div>
    </div>
  );
}
