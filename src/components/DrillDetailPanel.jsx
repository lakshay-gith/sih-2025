import React from "react";
import "./DrillDetailPanel.css";

export default function DrillDetailPanel({ drill }) {
  if (!drill) return null;

  return (
    <article className="detail-card">
      <header className="detail-header">
        <div className="title-block">
          <div className="big-icon">{drill.icon}</div>
          <div>
            <h2>{drill.name}</h2>
            <div className="category">{drill.category}</div>
          </div>
        </div>

        <div className="expected">
          <strong>Expected outcome</strong>
          <p className="outcome">{drill.expectedOutcome}</p>
        </div>
      </header>

      <section className="section">
        <h4>How to perform</h4>
        <p className="how">{drill.howToPerform}</p>
      </section>

      <section className="section">
        <h4>Step-by-step procedure</h4>
        <ul className="timeline">
          {drill.steps.map((s, i) => (
            <li key={i}>
              <div className="step-index">{i + 1}</div>
              <div className="step-content">{s}</div>
            </li>
          ))}
        </ul>
      </section>

      <div className="bottom-grid">
        <section className="small-box">
          <h5>Prerequisites</h5>
          <ul>
            {drill.prerequisites.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </section>

        <section className="small-box">
          <h5>Safety measures</h5>
          <ul>
            {drill.safetyMeasures.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
