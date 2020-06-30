import React from 'react';
import renderer from 'react-test-renderer';
import GameArtict from './game-artict.jsx';

it(`GameArtict correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<GameArtict
    screenIndex={5}
    question={test}
    onAnswer={() => null}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

const test = {
  answers: [
    {id: `S7C`, picture: `https://api.adorable.io/avatars/134`, artist: `John Snow`},
    {id: `aR9`, picture: `https://api.adorable.io/avatars/102`, artist: `Jack Daniels`},
    {id: `OJj`, picture: `https://api.adorable.io/avatars/134`, artist: `Jim Beam`},
  ],
  id: `G0f`,
  song: {artist: `Jim Beam`, src: `https://upload.wikimedia.org/wikipedia/commons/4/48/Wickethewok_-_Deepecho.ogg`},
  type: `artist`,
};
