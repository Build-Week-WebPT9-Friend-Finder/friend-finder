import React from 'react';
import './App.css';
import WelcomeToSurvey from "./components/Surveycard1";
import Logo from "./components/Logo";
import SurveyQuestionnaire from "./components/Questionnaire";


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
    </div>
  );
}

export default App;
