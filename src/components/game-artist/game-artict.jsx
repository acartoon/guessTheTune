import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Artist from "../artist/artist.jsx";

export default class GameArtict extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {screenIndex, onAnswer, question, mistakes, gameTime, onStartСountdown, renderPlayer} = this.props;

    const handleAnswer = (answer) => {
      onAnswer(answer, question);
    };

    return <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          {renderPlayer(question.song, 0)}
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
