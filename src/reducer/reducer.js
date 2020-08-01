
// начальное состояние данных
const initialState = {
  mistakes: 0,
  step: -1,
  gameTime: 300,
};

const isArtictAnswerCorrect = (userAnswer, question) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (userAnswer, question) => {

  return userAnswer.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));
};

// типы изменений
const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  DECREMENT_TIME: `DECREMENT_TIME`,
  RESET: `RESET`,
};

// хранение бизнес логики
// какие действия выполняются пользователем
// Каждый раз, когда происходит действие(action), оно называется отправкой(dispatch)
// принимает решение
const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  decrementTime: (gameTime) => {
    if (gameTime === 0) {
      return {
        type: ActionType.RESET
      };
    }

    return {
      type: ActionType.DECREMENT_TIME,
      payload: 1,
    };
  },

  incrementMistakes: (userAnswer, question, mistakes, maxMistakes) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtictAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    if (!answerIsCorrect && mistakes + 1 >= maxMistakes) {
      return {
        type: ActionType.RESET,
      };
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  }
};

// определяет что необходимо сделать с состоянием
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP :
      return Object.assign({}, state, {
        step: state.step + action.payload,
      });
    case ActionType.INCREMENT_MISTAKES :
      return Object.assign({}, state, {
        mistakes: state.mistakes + action.payload
      });

    case ActionType.RESET :
      return Object.assign({}, initialState);

    case ActionType.DECREMENT_TIME:
      return Object.assign({}, state, {
        gameTime: state.gameTime - action.payload
      });
  }
  return state;
};

export {ActionCreator, reducer, ActionType};
