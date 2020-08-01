import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Artist from './artist';
import {testMocks} from '../../mocks/test-mocks';

Enzyme.configure({adapter: new Adapter()});

it(`Симуляция изменения инпута`, () => {
  const changeHandler = jest.fn();

  const artist = shallow(<Artist
    question={testMocks[2].song}
    onAnswer={changeHandler}
    i={154}
  />);

  const input = artist.find(`input`);
  input.at(0).simulate(`change`, {
    preventDefault() {}
  });

  expect(changeHandler).toHaveBeenCalledTimes(1);

  // тут какая-то лажа
  expect(changeHandler.mock.calls[0][0].artist).toMatch(testMocks[2].song.artist);

});
