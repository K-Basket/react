// ========================= Ниже код Redux ToolKit  ====================== //

import { configureStore } from '@reduxjs/toolkit';
// import { reducer as rootReducer } from './reducer';
// или то же самое
import { reducer } from './reducer';
// configureStore обязательно принимает щбъект
export const store = configureStore({ reducer });

// ========================= Ниже код чистый Redux ====================== //

// import { createStore } from 'redux';
// import { reducer } from './reducer';
// import { configureStore } from '@reduxjs/toolkit';

// export const store = createStore(reducer);

// ========================= Ниже код без разделения на папки ====================== //

// import { createStore } from 'redux';

// const reducer = (state, action) => {
//   if (action.type === 'increment') {
//     return { ...state, total: state.total + action.payload };
//   }

//   if (action.type === 'decrement') {
//     return { ...state, total: state.total - action.payload };
//   }

//   if (action.type === 'setStep') {
//     return { ...state, step: action.payload };
//   }

//   return state;
// };

// // здесь store имеет сколько угодно свойств в объекте
// export const store = createStore(reducer, {
//   total: 0,
//   items: [],
//   users: null,
//   step: 1,
// });

// // store.dispatch({ type: 'increment', payload: 12 });
