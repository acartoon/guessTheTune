import React from 'react';
import renderer from 'react-test-renderer';
// import {testMocks} from '../../mocks/test-mocks';
import Header from './header.jsx';

it(`Header correctly renders after relaunch`, () => {

  const tree = renderer
  .create(<Header
    mistakes={2}
    gameTime={250}
    onStartСountdown={() => null}
  />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
