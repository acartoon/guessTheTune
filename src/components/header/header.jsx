import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Mistakes from "../mistakes/mistakes.jsx";
import GameTime from "../game-time/game-time.jsx";

export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: false,
    };

  }

  render() {

    const {mistakes, gameTime, onStartСountdown} = this.props;

    return <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370"
          style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
      </svg>
      <GameTime
        gameTime = {gameTime}
        onStartСountdown = {onStartСountdown}
      />
      <Mistakes
        countMistakes = {mistakes}
      />
    </header>;
  }
}

Header.propTypes = {
  mistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  onStartСountdown: PropTypes.func.isRequired,
};
