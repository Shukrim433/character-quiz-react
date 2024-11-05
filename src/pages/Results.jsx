import React from "react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  // oncick reload or nav to clear gloabal values and nav to welcom page
  const chosenChar = "ANNABETH CHASE";
  const navigate = useNavigate();
  return (
    <div className="results-page">
      <div className="character-card">
        <h1>{chosenChar}</h1>
        <img src={`/${chosenChar}.png`} alt="character icon" />
      </div>
      <button onClick={() => navigate("/")} className="start-again-btn">
        START AGAIN
      </button>
    </div>
  );
};

export default Results;
