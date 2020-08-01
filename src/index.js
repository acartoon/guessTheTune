import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import {settings} from "./mocks/mocks.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer.js";
import {testMocks} from "./mocks/test-mocks.js";


// store - хранилище
// store.getState() - получает текущее состояние obj -> step & mistakes
// store.dispatch(action) - механизм событий -> отправка событий что-то изменилось
// store.subscribe(() => {
// const state = store.getState();
// }) -подписка на изменения в store

// connect -> создает новую версию компонента 2 версии компонента
// mapStateToProps -> из state в props
// & mapDispatchToProps -> из props в state

const init = () => {
  // при создании store я передаю функцию reducer
  const store = createStore(reducer);

  ReactDOM.render(<Provider store={store}>
    <App
      maxMistakes={settings.errorCount}
      maxTime={settings.gameTime}
      questions={testMocks}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
