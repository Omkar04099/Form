
import { createStore } from 'redux';

const initialState = {
  amount: 0,
};

const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        amount: state.amount + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        amount: state.amount - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
