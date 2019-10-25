import React from "react";
import ReactRouter from "./component/Router/Router";
import "./sass/index.scss";
import SqueezePage from "./layouts/templates/SqueezePage";

function App() {
  return (
    <div className="App">
      <SqueezePage>
        <ReactRouter />
      </SqueezePage>
    </div>
  );
}

export default App;
