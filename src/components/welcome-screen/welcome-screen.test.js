import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    errorCount={0}
    gameTime={0}
    onClick={() => null}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
