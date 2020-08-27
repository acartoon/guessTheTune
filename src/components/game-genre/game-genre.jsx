import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Track from "../track/track.jsx";

class GameGenre extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {screenIndex, question, onChange, answers, onAnswer, mistakes, gameTime, onStartСountdown, renderPlayer} = this.props;

    return <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
            // вот это скорее всего хрень, надо смотреть и думать)
            // this.setState({
            //   answers: new Array(4).fill(false),
            // });
            //
          }}
          className="game__tracks">

          {question.answers.map((answer, i) => {
            return <div
                key={`${screenIndex}-${answer.id}`}
                className="track">
                {renderPlayer(answer, i)}
                {/* {renderTrack(answer, i)} */}
                <Track
                  index={i}
                  answer={answer}
                  onChange={onChange}
                  checked={answers[i]}
                />
              </div>
          })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
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
