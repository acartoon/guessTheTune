import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {errorCount, gameTime} = props;

  return <WelcomeScreen
    errorCount={errorCount}
    gameTime={gameTime}
  />;
};

export default App;
