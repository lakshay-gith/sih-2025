import React from "react";
import "./FinalMessageModal.css";

const FinalMessageModal = ({ onClose }) => {
  return (
    <div className="final-modal-overlay">
      <div className="final-modal-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Submission Successful ✅</h2>
        <p>
          Your videos are in process of being examined by our experts.
          <br />
          We respect your privacy — all uploaded videos will be <b>deleted from
          our servers</b> after examination.
        </p>
        <p>
          Your <b>safety ratings</b> will be provided soon.
        </p>
        <h3>Thank You 🙏</h3>
      </div>
    </div>
  );
};

export default FinalMessageModal;
