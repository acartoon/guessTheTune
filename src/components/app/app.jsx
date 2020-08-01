import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import GameArtict from "../game-artist/game-artict.jsx";
import GameGenre from "../game-genre/game-genre.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";

class App extends PureComponent {

  static getScreen(question, props) {
    const {gameTime, maxTime, maxMistakes, step, mistakes, onUserAnswer, onWelcomeScreenClick, onStartTime} = props;
    if (step === -1 || !question) {
      return <WelcomeScreen
        gameTime={maxTime}
        maxMistakes={maxMistakes}
        onStartButtonClick={onWelcomeScreenClick}
      />;
    }

    const currentQuestion = question;

    switch (currentQuestion.type) {
      case `genre`:
        return <GameGenre
          gameTime = {gameTime}
          screenIndex={step}
          question={currentQuestion}
          // onAnswer={(userAnswer, questi) => (onUserAnswer(userAnswer, questi, mistakes, maxMistakes))}
          onAnswer={(userAnswer, questionData) => {
            return onUserAnswer(userAnswer, questionData, mistakes, maxMistakes);
          }}
          mistakes={mistakes}
          onStartСountdown={onStartTime}
        />;

      case `artist`:
        return <GameArtict
          gameTime={gameTime}
          screenIndex={step}
          question={currentQuestion}
          onAnswer={(userAnswer, questionData) => (onUserAnswer(userAnswer, questionData, mistakes, maxMistakes))}
          mistakes={mistakes}
          onStartСountdown={onStartTime}
        />;
    }

    return null;
  }

  constructor(props) {
    super(props);

  }

  render() {
    const {questions, step} = this.props;

    return App.getScreen(questions[step], this.props);
  }

}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onStartTime: PropTypes.func.isRequired,
};

// store => props
// из хранилища в props
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps,
    {step: state.step,
      mistakes: state.mistakes,
      gameTime: state.gameTime
    });

// props => store
// Обработчики событий при изменении state

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onStartTime: (gameTime) => dispatch(ActionCreator.decrementTime(gameTime)),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes, gameTime) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(
        userAnswer,
        question,
        mistakes,
        maxMistakes,
        gameTime
    ));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
