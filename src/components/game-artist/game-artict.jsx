import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Artist from "../artist/artist.jsx";
import Player from "../player/player.jsx";

export default class GameArtict extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: false,
    };

  }

  render() {

    const {screenIndex, onAnswer, question} = this.props;

    const handleAnswer = (answer) => {
      // console.log({question: question.id, answer});
      onAnswer({question: question.id, answer});
    };

    return <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <Player
            src={question.song.src}
            isPlaying={this.state.activePlayer}
            onPlayButtonClick={() => this.setState({
              activePlayer: !this.state.activePlayer
            })}/>
        </div>

        <form className="game__artist">
          {question.answers.map((item, i) => {
            return <Artist
              key={`${screenIndex}-answer-${i}`}
              onAnswer={handleAnswer}
              question={item}
              i={i}
            />;
          })}

        </form>
      </section>
    </section>;
  }
}

GameArtict.propTypes = {
  screenIndex: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired
};
