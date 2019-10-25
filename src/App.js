import React from "react";
import WelcomeToSurvey from "./components/Surveycard1";
import SurveyQuestionnaire from "./components/Questionnaire";
import ReactRouter from "./component/Router/Router";
import "./sass/index.scss";
import SqueezePage from "./layouts/templates/SqueezePage";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <WelcomeToSurvey />
      </div>
      <div>
        <SurveyQuestionnaire />
      </div>

      <SqueezePage>
        <ReactRouter />
      </SqueezePage>
    </div>
  );
}

export default App;
