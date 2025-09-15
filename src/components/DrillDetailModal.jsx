import React from "react";
import "./DrillDetailModal.css";
import DrillDetailPanel from "./DrillDetailPanel";

export default function DrillDetailModal({ drill, onClose }) {
  return (
    <div className="dp-modal-overlay" role="dialog" aria-modal="true">
      <div className="dp-modal">
        <button className="dp-close" onClick={onClose} aria-label="Close">✖</button>
        <DrillDetailPanel drill={drill} />
      </div>
    </div>
  );
}
