import React from "react";

const QuizQuestion = ({ data, currentIndex, total, selected, onSelect }) => {
  return (
    <div className="question-card">
      <h2>
        Question {currentIndex + 1} of {total}
      </h2>
      <p className="question-text">{data.question}</p>
      <div className="options">
        {data.options.map((opt, i) => (
          <label key={i} className={`option ${selected === opt ? "selected" : ""}`}>
            <input
              type="radio"
              name={`question-${data.id}`}
              value={opt}
              checked={selected === opt}
              onChange={() => onSelect(data.id, opt)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
