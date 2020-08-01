import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {testMocks} from '../../mocks/test-mocks';
import Track from './track';

const INDEX = 1;

Enzyme.configure({adapter: new Adapter()});

it(`Симуляция изменения инпута`, () => {
  const changeHandler = jest.fn();

  const track = shallow(<Track
    index={INDEX}
    answer={testMocks[0].answers[1]}
    onAnswer={changeHandler}
    state={false}>
  </Track>);

  const input = track.find(`input`);
  input.simulate(`change`, {
    preventDefault() {}
  });

  expect(changeHandler).toHaveBeenCalledTimes(1);
  expect(changeHandler.mock.calls[0][0]).toBe(INDEX);

  const checkbox = track.find(`.game__input`);

});
