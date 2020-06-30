import React from 'react';
import renderer from 'react-test-renderer';
import Artist from './artist';
import {testMocks} from '../../mocks/test-mocks';


it(`Artist correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Artist
    onAnswer={() => null}
    question={testMocks[2].song}
    i={154}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
