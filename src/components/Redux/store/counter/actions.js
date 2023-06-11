// ========================= Ниже код Redux ToolKit  ====================== //

import { createAction } from '@reduxjs/toolkit';
// import { DECREMENT, INCREMENT, SETSTEP } from './types';

export const decrementAction = createAction('counter/decrement');
export const incrementAction = createAction('conter/increment');
export const setStepAction = createAction('counter/setstep');

// export function decrementAction(value) {
//   return { type: DECREMENT, payload: value };
// }

// export function incrementAction(value) {
//   return { type: INCREMENT, payload: value };
// }

// export function setStepAction(value) {
//   return { type: SETSTEP, payload: Number(value) };
// }

// ========================= Ниже код чистый Redux ====================== //

// import { DECREMENT, INCREMENT, SETSTEP } from './types';

// export function decrementAction(value) {
//   return { type: DECREMENT, payload: value };
// }

// export function incrementAction(value) {
//   return { type: INCREMENT, payload: value };
// }

// export function setStepAction(value) {
//   return { type: SETSTEP, payload: Number(value) };
// }
