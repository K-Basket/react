// ========================= Ниже код Redux ToolKit  ====================== //

// Разбиваем логику reducer на несколько функций
import { combineReducers } from 'redux'; // обязательно нужен для persist

import { counterReducer } from './counter/counterSlice';
import { todoReducer } from './todo/todoReducer';
// import { counterReducer } from './counter/counterReducer';

// для экспорта объединяем reducer с помошью комбайна
// объединяет сколько угодно reducer-ов в один объект
export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

// ========================= Ниже код чистый Redux ====================== //

// // Разбиваем логикуу reducer на несколько функций

// import { combineReducers } from 'redux';
// import { todoReducer } from './todo/todoReducer';
// import { counterReducer } from './counter/counterReducer';

// // для экспорта объединяем reducer с помошью комбайна
// // объединяет сколько угодно reducer-ов в один объект
// export const reducer = combineReducers({
//   counter: counterReducer,
//   todo: todoReducer,
// });
