import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import {settings, questions} from "./mocks/mocks.js";


const init = () => {

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
