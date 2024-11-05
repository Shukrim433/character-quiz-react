import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// context:
export const QuizContext = createContext();

// custom hook that returns global state values:
export const useQuizContext = () => {
  return useContext(QuizContext);
};

// provider:
export const QuizContextProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [percy, setPercy] = useState(0);
  const [annabeth, setAnnabeth] = useState(0);
  const [grover, setGrover] = useState(0);

  const questions = [
    {
      question: "What would you do if you found yourself in a tough situation?",
      options: [
        "Dive right in, trusting your instincts",
        "Analyze all options and go with the most logical choice",
        "Try to avoid conflict if possible",
      ],
      percy: "Dive right in, trusting your instincts",
      annabeth: "Analyze all options and go with the most logical choice",
      grover: "Try to avoid conflict if possible",
    },
    {
      question: "What is your approach to learning new things?",
      options: [
        "You love learning and believe knowledge is power",
        "You will try if it interests you, especially if it is hands-on",
        "You are hesitant but curious, and prefer learning by experience",
      ],
      percy: "You will try if it interests you, especially if it is hands-on",
      annabeth: "You love learning and believe knowledge is power",
      grover: "You are hesitant but curious, and prefer learning by experience",
    },
    {
      question: " When it comes to your personal style, you prefer:",
      options: [
        "Practical and neat, but with a bit of flair.",
        "Natural and laid-back—I do not stress over it too much.",
        "Casual, comfortable, and ready for anything.",
      ],
      percy: "Casual, comfortable, and ready for anything.",
      annabeth: "Practical and neat, but with a bit of flair.",
      grover: "Natural and laid-back—I do not stress over it too much.",
    },
    {
      question: "In a heated argument, you are most likely to:",
      options: [
        "Stand up for myself and say what is on my mind.",
        "Try to keep the peace and understand both sides.",
        "Stay calm and try to outsmart the other person.",
      ],
      percy: "Stand up for myself and say what is on my mind.",
      annabeth: "Stay calm and try to outsmart the other person.",
      grover: "Try to keep the peace and understand both sides.",
    },
    {
      question: "When working in a team, you are most likely to:",
      options: [
        "Strategize and guide others with a plan.",
        "Take the lead and jump into action.",
        "Support the group and offer encouragement.",
      ],
      percy: "Take the lead and jump into action.",
      annabeth: "Strategize and guide others with a plan.",
      grover: "Support the group and offer encouragement.",
    },
  ];

  const stopQuiz = () => {
    // if statements to determine winner
    const navigate = useNavigate();
    navigate("/results");
  };

  const values = {
    questions,
    percy,
    annabeth,
    grover,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    stopQuiz,
    setPercy,
    setAnnabeth,
    setGrover,
  };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
};
