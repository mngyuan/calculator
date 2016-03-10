import * as ActionTypes from '../constants/constants';

const initialState = { numbers: '' };

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PRESS_NUMBER:
      return {
        numbers: state.numbers + action.number,
      };
    case ActionTypes.PRESS_CLEAR:
      return {
        numbers: '',
      };
    default:
      return state;
  }
};

export default calculatorReducer;
