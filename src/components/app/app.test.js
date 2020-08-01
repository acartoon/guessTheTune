import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';
import {testMocks} from '../../mocks/test-mocks';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App

    mistakes = {2}
    step = {2}
    questions = {testMocks}
    maxMistakes = {3}
    gameTime = {5}
    onUserAnswer = {jest.fn()}
    onWelcomeScreenClick = {jest.fn()}
    onStartTime = {jest.fn()}
  />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
