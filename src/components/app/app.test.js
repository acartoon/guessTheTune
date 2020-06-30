import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {testMocks} from '../../mocks/test-mocks';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App
    errorCount={0}
    gameTime={0}
    questions={testMocks}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
