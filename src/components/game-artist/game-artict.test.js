import React from 'react';
import renderer from 'react-test-renderer';
import GameArtict from './game-artict.jsx';
import {testMocks} from '../../mocks/test-mocks.js';

it(`GameArtict correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<GameArtict
    screenIndex={5}
    gameTime = {5}
    mistakes = {1}
    question={testMocks[2]}
    onAnswer={() => null}
    onStartСountdown={() => null}
  />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
