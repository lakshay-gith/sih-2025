import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import ResultModal from "./ResultModal";
import "./GamifiedEducation.css";

const quizData = [
  {
    id: 1,
    question: "What should you do first during an earthquake?",
    options: ["Run outside immediately", "Take cover under sturdy furniture", "Stand near windows", "Use elevator to exit"],
    answer: "Take cover under sturdy furniture",
  },
  {
    id: 2,
    question: "What is the safest way to escape a fire in a building?",
    options: ["Use elevators", "Use stairs", "Wait for rescue near windows", "Run randomly"],
    answer: "Use stairs",
  },
  {
    id: 3,
    question: "During a flood, what should you avoid?",
    options: ["Walking or driving through flood water", "Moving to higher ground", "Listening to authorities", "Storing clean water"],
    answer: "Walking or driving through flood water",
  },
  {
    id: 4,
    question: "Which of these is a man-made disaster?",
    options: ["Earthquake", "Flood", "Chemical Spill", "Tsunami"],
    answer: "Chemical Spill",
  },
  {
    id: 5,
    question: "Where should you go during a thunderstorm?",
    options: ["Under a tall tree", "Open ground", "Stay indoors away from windows", "Near electric poles"],
    answer: "Stay indoors away from windows",
  },
  {
    id: 6,
    question: "What is a must-have in a disaster emergency kit?",
    options: ["Toys", "Non-perishable food & water", "Paint", "Speakers"],
    answer: "Non-perishable food & water",
  },
  {
    id: 7,
    question: "How to protect yourself during a chemical leak?",
    options: ["Cover nose and mouth with cloth", "Run towards the leak", "Ignore warnings", "Drink water immediately"],
    answer: "Cover nose and mouth with cloth",
  },
  {
    id: 8,
    question: "What is the first step in fire safety at school?",
    options: ["Wait for teacher’s instructions", "Panic", "Ignore alarms", "Run without direction"],
    answer: "Wait for teacher’s instructions",
  },
  {
    id: 9,
    question: "Which natural disaster can be predicted with weather radar?",
    options: ["Floods", "Earthquakes", "Landslides", "Lightning"],
    answer: "Floods",
  },
  {
    id: 10,
    question: "During a pandemic, what is an important safety measure?",
    options: ["Wearing mask & sanitizing hands", "Attending crowded events", "Ignoring hygiene", "Not listening to doctors"],
    answer: "Wearing mask & sanitizing hands",
  },
];

const GamifiedEducation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  const nextQuestion = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) score++;
    });
    return score;
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <QuizQuestion
            data={quizData[currentIndex]}
            currentIndex={currentIndex}
            total={quizData.length}
            selected={selectedAnswers[quizData[currentIndex].id]}
            onSelect={handleAnswerSelect}
          />
          <div className="quiz-nav">
            <button onClick={prevQuestion} disabled={currentIndex === 0}>
              Previous
            </button>
            <button onClick={nextQuestion}>
              {currentIndex === quizData.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <ResultModal score={calculateScore()} total={quizData.length} />
      )}
    </div>
  );
};

export default GamifiedEducation;
