import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { decrementAction, incrementAction, setStepAction } from './actions';
// import { DECREMENT, INCREMENT, SETSTEP } from './types';

export const counterReducer = createReducer(initialState, {
  // [incrementAction] -- запуск функции incrementAction()
  [incrementAction]: (state, action) => ({
    ...state,
    total: state.total + action.payload,
  }),
  [decrementAction]: (state, action) => ({
    ...state,
    total: state.total - action.payload,
  }),
  [setStepAction]: (state, action) => ({ ...state, step: action.payload }),
});

// export const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return { ...state, total: state.total + action.payload };
//   }

//   if (action.type === DECREMENT) {
//     return { ...state, total: state.total - action.payload };
//   }

// if (action.type === SETSTEP) {
//   return { ...state, step: action.payload };
// }

//   return state;
// };
