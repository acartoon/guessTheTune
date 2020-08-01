import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

it(`Header correctly renders after relaunch`, () => {

  const tree = renderer
  .create(<Mistakes
    countMistakes={2}
  />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
