// Разбиваем логику reducer на несколько функций
import { combineReducers } from 'redux'; // обязательно нужен для persist

import { counterReducer } from './counter/counterSlice';
import { todoReducer } from './todo/todoReducer';

// для экспорта объединяем reducer с помошью комбайна
// объединяет сколько угодно reducer-ов в один объект
export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
