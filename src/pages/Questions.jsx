import React from "react";
import { useQuizContext } from "../context/QuizContext";

const Questions = () => {
  // onclick incrament global currentQuestionIndex count and reinvoke global displayQuestions function (which will contain condition to check if CQI is >=  questions array length thus invoking global stopQuiz() function)
  const { stopQuiz, currentQuestionIndex, questions } = useQuizContext();
  let questionText = "";
  const displayQuestions = () => {
    if (currentQuestionIndex >= questions.length) {
      stopQuiz();
      return;
    }
  };
  return (
    <div className="questions-page">
      <h2 className="question">QUESTION TEXT</h2>
      <div className="char-icons">
        <img src="/PERCY JACKSON.png" alt="character icon" />
        <img src="/GROVER UNDERWOOD.png" alt="character icon" />
        <img src="/ANNABETH CHASE.png" alt="character icon" />
      </div>
      <div className="options-container">
        <div className="option">
          <h2>Option 1</h2>
        </div>
        <div className="option">
          <h2>Option 2</h2>
        </div>
        <div className="option">
          <h2>Option 3</h2>
        </div>
      </div>
    </div>
  );
};

export default Questions;
