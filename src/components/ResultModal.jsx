import React from "react";

const ResultModal = ({ score, total }) => {
  const appreciation =
    score === total
      ? "🌟 Outstanding! You are a true Safety Hero!"
      : score >= total / 2
      ? "👏 Great job! You are well-prepared for disasters."
      : "💡 Keep learning, safety knowledge saves lives!";

  return (
    <div className="result-container">
      <h2>Your Score: {score} / {total}</h2>
      <p className="appreciation">{appreciation}</p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default ResultModal;
