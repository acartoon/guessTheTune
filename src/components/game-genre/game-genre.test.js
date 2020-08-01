import React from 'react';
import renderer from 'react-test-renderer';
import GameGenre from './game-genre.jsx';
import {testMocks} from '../../mocks/test-mocks';

it(`GameGenre correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<GameGenre
    screenIndex={2}
    gameTime={5}
    onStartСountdown={() => null}
    mistakes={2}
    question={testMocks[0]}
    onAnswer={() => null}
  />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
