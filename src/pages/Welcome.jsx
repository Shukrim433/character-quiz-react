import React, { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Welcome = () => {
  // on click nav to questions page  and invoke global displayQuestions function

  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <div className="welcome-page">
      <div className="char-icons top">
        <img src="/PERCY JACKSON.png" alt="character icon" />
        <img src="/GROVER UNDERWOOD.png" alt="character icon" />
        <img src="/ANNABETH CHASE.png" alt="character icon" />
      </div>
      <div className="bottom">
        <h1>WHAT PERCY JACKSON CHARACTER ARE YOU?</h1>
      </div>
      <button className="start-btn" onClick={() => navigate("/questions")}>
        GO
      </button>
    </div>
  );
};

export default Welcome;
