import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {errorCount, gameTime} = props;

  return <WelcomeScreen
    errorCount={errorCount}
    gameTime={gameTime}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired
};

export default App;
