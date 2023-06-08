import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    incrementAction: (state, action) => {
      state.total += action.payload;
    },
    decrementAction: (state, action) => {
      state.total -= action.payload;
    },
    setStepAction: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { incrementAction, decrementAction, setStepAction } =
  counterSlice.actions;
