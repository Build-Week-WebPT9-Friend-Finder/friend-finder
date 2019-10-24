import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: [
      "Open Sans:400,400i,700,700i",
      "Arimo:400,400i,700,700i",
      "Lato:400,400i,700,700",
    ],
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
