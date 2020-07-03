import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from './player.jsx';
import {testMocks} from '../../mocks/test-mocks';


Enzyme.configure({adapter: new Adapter()});

it(`Симуляция изменения инпута`, () => {
  const changeHandler = jest.fn();

  const player = shallow(<Player
    src={testMocks[2].song.src}
    isPlaying={true}
    onPlayButtonClick={changeHandler}/>,
  {disableLifecycleMethods: true});

  const button = player.find(`.track__button`);

  button.simulate(`click`);
  expect(changeHandler).toHaveBeenCalledTimes(1);
  expect(player.exists(`.track__button--play`)).toBe(true);
  button.simulate(`click`);
  expect(player.exists(`.track__button--play`)).toBe(false);
  expect(player.exists(`.track__button--pause`)).toBe(true);

});
