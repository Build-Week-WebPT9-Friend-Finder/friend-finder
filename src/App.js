import React from "react";
import ReactRouter from "./component/Router/Router";
import "./sass/index.scss";
import SqueezePage from "./layouts/templates/SqueezePage";

const App = () => {
  return (
    <>
      <SqueezePage>
        <ReactRouter />
      </SqueezePage>
    </>
  );
};

export default App;
