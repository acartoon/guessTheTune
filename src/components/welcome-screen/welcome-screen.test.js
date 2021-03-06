import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    maxMistakes={5}
    gameTime={0}
    onStartButtonClick={() => null}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
