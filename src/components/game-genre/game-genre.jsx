import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Track from "../track/track.jsx";
import Player from "../player/player.jsx";
import Header from "../header/header.jsx";

class GameGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: new Array(4).fill(false),
      activePlayer: -1,
    };

    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
  }

  handleAnswerSubmit(index) {
    this.setState({
      answers: [...this.state.answers.slice(0, index), !this.state.answers[index], ...this.state.answers.slice(index + 1)],
    });
  }

  render() {
    const {screenIndex, question, onAnswer, mistakes, gameTime, onStartСountdown} = this.props;

    return <section className="game game--genre">
      <Header
        mistakes={mistakes}
        gameTime = {gameTime}
        onStartСountdown = {onStartСountdown}
      />

      <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(this.state.answers, question);

            // вот это скорее всего хрень, надо смотреть и думать)
            this.setState({
              answers: new Array(4).fill(false),
            });
            //
          }}
          className="game__tracks">

          {question.answers.map((answer, i) => {
            return <Track
              key={`${screenIndex}-${answer.id}`}
              index={i}
              answer={answer}
              onAnswer={this.handleAnswerSubmit}
              state={this.state.answers[i]}>
              <Player
                src={answer.src}
                isPlaying={i === this.state.activePlayer}
                onPlayButtonClick={() => this.setState({
                  activePlayer: this.state.activePlayer === i ? -1 : i
                })}/>
            </Track>;
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}

GameGenre.propTypes = {
  screenIndex: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  onStartСountdown: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
};


export default GameGenre;
