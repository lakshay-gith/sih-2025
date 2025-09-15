import React from "react";
import "./DrillListItem.css";

export default function DrillListItem({ drill, selected, onClick }) {
  return (
    <button
      className={`drill-list-item ${selected ? "active" : ""}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      <div className="left">
        <div className="icon" aria-hidden>
          {drill.icon}
        </div>
      </div>

      <div className="middle">
        <h3>{drill.name}</h3>
        <p className="summary">{drill.summary}</p>
        <div className="meta">
          <span className="chip">{drill.category}</span>
        </div>
      </div>

      <div className="right">
        <span className="chev">›</span>
      </div>
    </button>
  );
}
