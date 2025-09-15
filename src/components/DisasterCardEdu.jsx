import React from "react";

const DisasterCardEdu = ({ disaster, onClick }) => {
  return (
    <div className="disaster-card" onClick={onClick}>
      <h2>{disaster.name}</h2>
      <p>{disaster.description}</p>
    </div>
  );
};

export default DisasterCardEdu;
