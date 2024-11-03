import React from "react";

const Welcome = () => {
  // on click nav to questions page  and invoke global displayQuestions function
  return (
    <div className="welcome-page">
      <div className="char-icons top">
        <img src="" alt="character icon" />
        <img src="" alt="character icon" />
        <img src="" alt="character icon" />
      </div>
      <div className="bottom">
        <h1>WHAT PERCY JACKSON CHARACTER ARE YOU?</h1>
      </div>
      <button className="start-btn">GO</button>
    </div>
  );
};

export default Welcome;
