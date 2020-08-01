import React from 'react';
import renderer from 'react-test-renderer';
import Track from './track.jsx';
import {testMocks} from '../../mocks/test-mocks.js';

it(`Track correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Track
    index={1}
    onAnswer={() => null}
    answer={testMocks[0].answers[1]}
    state={false}>
  </Track>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
