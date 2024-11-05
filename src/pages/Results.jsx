import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";

const Results = () => {
  // oncick reload or nav to clear gloabal values and nav to welcom page
  const [chosenCharacter, setChosenCharacter] = useState("");
  const {
    percy,
    annabeth,
    grover,
    setPercy,
    setAnnabeth,
    setGrover,
    setCurrentQuestionIndex,
  } = useQuizContext();

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // the maximum is exclusive and the minimum is inclusive
  }

  useEffect(() => {
    if (percy > annabeth && percy > grover) {
      setChosenCharacter("PERCY JACKSON");
    }
    if (annabeth > percy && annabeth > grover) {
      setChosenCharacter("ANNABETH CHASE");
    }
    if (grover > percy && grover > annabeth) {
      setChosenCharacter("GROVER UNDERWOOD");
    }
    /* if two characters have a score of 2 */
    if (percy == annabeth && percy > grover && annabeth > grover) {
      const random = ["PERCY JACKSON", "ANNABETH CHASE"];
      const index = getRandomInt(0, 2);
      setChosenCharacter(random[index]);
    }
    if (percy == grover && percy > annabeth && grover > annabeth) {
      const random = ["PERCY JACKSON", "GROVER UNDERWOOD"];
      const index = getRandomInt(0, 2);
      setChosenCharacter(random[index]);
    }
    if (annabeth == grover && annabeth > percy && grover > percy) {
      const random = ["ANNABETH CHASE", "GROVER UNDERWOOD"];
      const index = getRandomInt(0, 2);
      setChosenCharacter(random[index]);
    }
  }, []);

  const startAgain = () => {
    setAnnabeth(0)
    setPercy(0)
    setGrover(0)
    setCurrentQuestionIndex(0)
    navigate("/")
  };

  const navigate = useNavigate();
  return (
    <div className="results-page">
      <div className="character-card">
        <h1>{chosenCharacter}</h1>
        <img src={`/${chosenCharacter}.png`} alt="character icon" />
      </div>
      <button onClick={startAgain} className="start-again-btn">
        START AGAIN
      </button>
    </div>
  );
};

export default Results;
