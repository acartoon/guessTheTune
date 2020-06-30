import React from 'react';
import renderer from 'react-test-renderer';
import Track from './track.jsx';
import {testMocks} from '../../mocks/test-mocks.js';

it(`Track correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Track
    index={1}
    answer={testMocks[0].answers[1]}
    onAnswer={() => null}
    state={false}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
