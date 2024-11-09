import React, { useEffect, useState } from "react";
import { useQuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  // onclick incrament global currentQuestionIndex count and reinvoke global displayQuestions function (which will contain condition to check if CQI is >=  questions array length thus invoking global stopQuiz() function)
  const navigate = useNavigate();
  const {
    percy,
    annabeth,
    grover,
    setPercy,
    setAnnabeth,
    setGrover,
    currentQuestionIndex,
    questions,
    setCurrentQuestionIndex,
  } = useQuizContext();

  if (currentQuestionIndex >= questions.length) {
    navigate("/results");
    return;
  }

  const nextQuestion = (event) => {
    if (event.target.value === questions[currentQuestionIndex].percy) {
      setPercy(percy + 1);
    }
    if (event.target.value === questions[currentQuestionIndex].annabeth) {
      setAnnabeth(annabeth + 1);
    }
    if (event.target.value === questions[currentQuestionIndex].grover) {
      setGrover(grover + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="questions-page">
      <h1 className="question">{questions[currentQuestionIndex].question}</h1>
      <div className="char-icons">
        <img src="/PERCY JACKSON.png" alt="character icon" />
        <img src="/GROVER UNDERWOOD.png" alt="character icon" />
        <img src="/ANNABETH CHASE.png" alt="character icon" />
      </div>
      <div className="options-container">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            className="option"
            value={option}
            key={index}
            onClick={nextQuestion}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
