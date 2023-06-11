// ========================= Ниже код Redux ToolKit  ====================== //

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'todo',
  storage,
  blacklist: ['todo'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// configureStore обязательно принимает объект
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// весь state будет записываться в LocalStorrage
export const persistor = persistStore(store);

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
