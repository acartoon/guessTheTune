import React from 'react';
import renderer from 'react-test-renderer';
// import {testMocks} from '../../mocks/test-mocks';
import GameTime from './game-time.jsx';

it(`GameTime correctly renders after relaunch`, () => {

  const tree = renderer
  .create(<GameTime
    gameTime={300}
    onStartСountdown={() => null}
  />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
