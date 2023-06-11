import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0,
  step: 1,
};

export const counterSlice = createSlice({
  name: 'counter', // общее название, используется для работы с Counter
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.total += action.payload;
    },
    decrement: (state, action) => {
      state.total -= action.payload;
    },
    setStep: (state, { payload }) => {
      state.step = payload; // здесь для примера деструктуризацияя payload
    },
  },
});

export const counterReducer = counterSlice.reducer; // передаем counterReduser в главный reduser

export const { increment, decrement, setStep } = counterSlice.actions; // экспортируем экшены для использования их в компонентах
