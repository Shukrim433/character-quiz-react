import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Welcome from "./pages/Welcome";
import Questions from "./pages/Questions";
import Results from "./pages/Results";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
};

export default App;
