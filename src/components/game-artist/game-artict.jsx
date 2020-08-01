import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Artist from "../artist/artist.jsx";
import Player from "../player/player.jsx";
import Header from "../header/header.jsx";

export default class GameArtict extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: false,
    };

  }

  render() {

    const {screenIndex, onAnswer, question, mistakes, gameTime, onStartСountdown} = this.props;

    const handleAnswer = (answer) => {
      onAnswer(answer, question);
    };

    return <section className="game game--artist">
      <Header
        mistakes = {mistakes}
        gameTime = {gameTime}
        onStartСountdown = {onStartСountdown}
      />
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
  gameTime: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onStartСountdown: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};
