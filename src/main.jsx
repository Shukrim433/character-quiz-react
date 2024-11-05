import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QuizContextProvider } from "./context/QuizContext.jsx";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </BrowserRouter>
);
