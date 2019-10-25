
import React from 'react';
import './App.css';
import WelcomeToSurvey from "./components/Surveycard1";
import Logo from "./components/Logo";
import SurveyQuestionnaire from "./components/Questionnaire";

import React from "react";
import "./App.css";
import ReactRouter from "./component/Router/Router";
import "./sass/index.scss";


function App() {
  return (
    <div className="App">

      <Logo />
      <div className="Container">
      <WelcomeToSurvey />
      </div>
      <div>
      <SurveyQuestionnaire />
      </div>

      <ReactRouter />

    </div>
  );
}

export default App;
