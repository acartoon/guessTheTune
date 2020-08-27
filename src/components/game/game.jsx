import React from "react";
import Header from "../header/header.jsx";

const Game = (props) => {
  const {renderScreen, mistakes, gameTime, onStartСountdown} = props;

  return  <section className="game game--artist">
    <Header
      mistakes = {mistakes}
      gameTime = {gameTime}
      onStartСountdown = {onStartСountdown}
    />
    {renderScreen()}
  </section>
}

export default Game;
