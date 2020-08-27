import React, {PureComponent} from "react";
import {compose} from "recompose";
import {ActionCreator} from "../../reducer/reducer.js";
import Game from "../../components/game/game.jsx";
import GameArtict from "../../components/game-artist/game-artict.jsx";
import GameGenre from "../../components/game-genre/game-genre.jsx";
import withActivePlayer from "../with-active-player/with-active-player";
import withAnswers from "../with-answers/with-answers.js";
import WelcomeScreen from "../../components/welcome-screen/welcome-screen.jsx";
import {connect} from "react-redux";


const GameArtictWrapped = withActivePlayer(GameArtict);
const GameGenreWrapped = withAnswers(withActivePlayer(GameGenre));


const withScreenSwitch = (Component) => {
  class WithScreenSwitch extends PureComponent {
    constructor(props) {
      super(props);
      this._getScreen = this._getScreen.bind(this);
    }

    // _getScreen() {
    //   const {questions, gameTime, maxMistakes, step, mistakes, onUserAnswer, onWelcomeScreenClick, onStartTime} = this.props;
    //   if (step === -1 || !questions) {
    //     console.log(`sdfds`)
    //     return <WelcomeScreen
    //       gameTime={gameTime}
    //       maxMistakes={maxMistakes}
    //       onStartButtonClick={onWelcomeScreenClick}
    //     />;
    //   }
    //   const currentQuestion = questions[step];

    //   const getGameGenre = () => {
    //     return <GameGenreWrapped
    //       screenIndex={step}
    //       question={currentQuestion}
    //       onAnswer={(userAnswer, questi) => (onUserAnswer(userAnswer, questi, mistakes, maxMistakes))}
    //     />;
    //   }

    //   const getGameArtict = () => {
    //     return <GameArtictWrapped
    //       screenIndex={step}
    //       question={currentQuestion}
    //       onAnswer={(userAnswer, questionData) => (onUserAnswer(userAnswer, questionData, mistakes, maxMistakes))}
    //     />;
    //   }

    //   switch (currentQuestion.type) {
    //     case `genre`:
    //       return <Game
    //         onStartСountdown = {onStartTime}
    //         gameTime = {gameTime}
    //         mistakes = {mistakes}
    //         renderScreen = {getGameGenre}
    //       />;

    //     case `artist`:
    //       return <Game
    //         onStartСountdown = {onStartTime}
    //         gameTime = {gameTime}
    //         mistakes = {mistakes}
    //         renderScreen = {getGameArtict}
    //       />;
    //   }

    //   return null;
    // }

    // render() {
    //   return <Component
    //     renderScreen = {this._getScreen}
    //   />
    // }
  }

  return WithScreenSwitch;
}

// store => props
// из хранилища в props
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps,
  {step: state.step,
    mistakes: state.mistakes,
    gameTime: state.gameTime
  });


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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withScreenSwitch
);
