import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Track from "../track/track.jsx";

class GameGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: new Array(4).fill(false),
    };

    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
  }

  handleAnswerSubmit(index) {
    this.setState({
      answers: [...this.state.answers.slice(0, index), !this.state.answers[index], ...this.state.answers.slice(index + 1)],
    });
  }

  render() {
    const {screenIndex, question, onAnswer} = this.props;

    return <section className="game game--genre">
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
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            // console.log({question: question.id, answers: this.state.answers})
            onAnswer({question: question.id, answers: this.state.answers});

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
              state={this.state.answers[i]}/>;
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}

GameGenre.propTypes = {
  screenIndex: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
};


export default GameGenre;
