import React from "react";
import "./DisasterCard.css";

const DisasterCard = ({ disaster, onClick }) => {
  return (
    <div className="disaster-card" onClick={onClick}>
      <h2>{disaster.name}</h2>
      <p className="type">{disaster.type}</p>
      <p className="desc">{disaster.description}</p>
    </div>
  );
};

export default DisasterCard;
