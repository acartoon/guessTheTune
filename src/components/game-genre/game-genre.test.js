import React from 'react';
import renderer from 'react-test-renderer';
import GameGenre from './game-genre.jsx';
import {testMocks} from '../../mocks/test-mocks';

it(`GameGenre correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<GameGenre
    screenIndex={5}
    question={testMocks[0]}
    onAnswer={() => null}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
