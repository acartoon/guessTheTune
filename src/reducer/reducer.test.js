import {reducer, ActionType} from "./reducer.js";

describe(`Reducer test group`, () => {
  it(`Reducer correctly increments step`, () => {
    expect(reducer(
        {
          mistakes: 0,
          step: -1,
          gameTime: 300,
        },
        {
          type: ActionType.INCREMENT_STEP,
          payload: 1
        }
    )).toEqual({
      mistakes: 0,
      step: 0,
      gameTime: 300,
    });
  });

  it(`Reducer correctly increments mistakes`, () => {
    expect(reducer(
        {
          mistakes: 1,
          step: 1,
          gameTime: 300,
        },
        {
          type: ActionType.INCREMENT_MISTAKES,
          payload: 1
        }
    )).toEqual({
      mistakes: 2,
      step: 1,
      gameTime: 300,
    });
  });

  it(`Reducer should correctly reset game`, () => {
    expect(reducer(
        {
          mistakes: 5,
          step: 6,
          gameTime: 15,
        },
        {
          type: ActionType.RESET,
        }
    )).toEqual({
      mistakes: 0,
      step: -1,
      gameTime: 300,
    });
  });

  it(`Reducer correctly decrement time`, () => {
    expect(reducer(
        {
          mistakes: 1,
          step: 1,
          gameTime: 300,
        },
        {
          type: ActionType.DECREMENT_TIME,
          payload: 1
        }
    )).toEqual({
      mistakes: 1,
      step: 1,
      gameTime: 299,
    });
  });

  it(`Reducer correctly works with incorrect data`, () => {
    expect(reducer(
        undefined,
        {
          type: `something`
        }
    )).toEqual({
      mistakes: 0,
      step: -1,
      gameTime: 300,
    });
  });

});
