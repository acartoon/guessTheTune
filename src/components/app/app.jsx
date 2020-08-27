import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/reducer.js";
import Game from "../../components/game/game.jsx";
import GameArtict from "../../components/game-artist/game-artict.jsx";
import GameGenre from "../../components/game-genre/game-genre.jsx";
import withActivePlayer from "../with-active-player/with-active-player";
import withAnswers from "../with-answers/with-answers.js";
import WelcomeScreen from "../../components/welcome-screen/welcome-screen.jsx";

import {connect} from "react-redux";
import {compose} from "recompose";

const GameArtictWrapped = withActivePlayer(GameArtict);
const GameGenreWrapped = withAnswers(withActivePlayer(GameGenre));


class App extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return this._getScreen();
  }

  _getScreen() {
    const {questions, gameTime, maxMistakes, step, mistakes, onUserAnswer, onWelcomeScreenClick, onStartTime} = this.props;
    if (step === -1 || !questions) {
      console.log(`sdfds`)
      return <WelcomeScreen
        gameTime={gameTime}
        maxMistakes={maxMistakes}
        onStartButtonClick={onWelcomeScreenClick}
      />;
    }
    const currentQuestion = questions[step];

    const getGameGenre = () => {
      return <GameGenreWrapped
        screenIndex={step}
        question={currentQuestion}
        onAnswer={(userAnswer, questi) => (onUserAnswer(userAnswer, questi, mistakes, maxMistakes))}
      />;
    }

    const getGameArtict = () => {
      return <GameArtictWrapped
        screenIndex={step}
        question={currentQuestion}
        onAnswer={(userAnswer, questionData) => (onUserAnswer(userAnswer, questionData, mistakes, maxMistakes))}
      />;
    }

    switch (currentQuestion.type) {
      case `genre`:
        return <Game
          onStartСountdown = {onStartTime}
          gameTime = {gameTime}
          mistakes = {mistakes}
          renderScreen = {getGameGenre}
        />;

      case `artist`:
        return <Game
          onStartСountdown = {onStartTime}
          gameTime = {gameTime}
          mistakes = {mistakes}
          renderScreen = {getGameArtict}
        />;
    }

    return null;
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
    gameTime: state.gameTime,
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
