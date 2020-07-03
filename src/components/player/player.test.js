import React from 'react';
import renderer from 'react-test-renderer';
import {testMocks} from '../../mocks/test-mocks.js';
import Player from './player.jsx';

it(`Player correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Player
    src={testMocks[2].song.src}
    isPlaying={false}
    onPlayButtonClick={() => null}/>, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
