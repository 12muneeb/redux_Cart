import {ADD_TO_CART} from '../Constant';

const intialState = [];

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    default:
      return state;
  }
};
