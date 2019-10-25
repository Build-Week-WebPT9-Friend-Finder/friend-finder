import React from "react";
import WelcomeToSurvey from "./components/Surveycard1";
import SurveyQuestionnaire from "./components/Questionnaire";

const Survey = () => (
  <>
    <div className="Container">
      <WelcomeToSurvey />
    </div>
    <div>
      <SurveyQuestionnaire />
    </div>
  </>
);

export default Survey;
