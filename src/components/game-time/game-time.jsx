import React, {PureComponent} from "react";
import PropTypes from "prop-types";


export default class GameTime extends PureComponent {
  constructor() {
    super();

    this._tick = this._tick.bind(this);
    this._start();
  }

  render() {
    const {gameTime} = this.props;
    const minutes = parseInt(gameTime / 60, 10);
    const seconds = parseInt(gameTime % 60, 10);

    return <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span className="timer__mins">{minutes}</span>
      <span className="timer__dots">:</span>
      <span className="timer__secs">{seconds}</span>
    </div>;
  }

  _start() {
    this.timerId = setInterval(this._tick, 1000);
  }

  _tick() {
    const {onStartСountdown, gameTime} = this.props;
    onStartСountdown(gameTime);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
}

GameTime.propTypes = {
  gameTime: PropTypes.number.isRequired,
  onStartСountdown: PropTypes.func.isRequired,
};
