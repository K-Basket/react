import { useDispatch, useSelector } from 'react-redux';
import Step from '../Step/Step';
// import { decrementAction } from 'components/Redux/store/counter/actions';
import {
  decrementAction,
  incrementAction,
} from 'components/Redux/store/counter/counterSlice';
import { counterSelector } from 'components/Redux/store/counter/selectors';
// import { createAction } from '@reduxjs/toolkit';

// const counterSelector = state => state.counter;

export const Counter = () => {
  // useSelector() возвращает значения state из store
  // для того, чтобы мемоизовать обращение к state при каждом рендере - вынесем внутренность useselector в отдельную функцию.
  const { total, step } = useSelector(counterSelector);

  // hook useDispatch() возвращает метод Dispatch (action)
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(incrementAction(step));
  };

  const handleClickDecrement = () => {
    dispatch(decrementAction(step));
  };

  // console.log('stateCounter :>> ', total);

  return (
    <>
      {<h3>Total: {total}</h3>}
      <Step />
      <button onClick={handleClickDecrement}>decrement</button>
      <button onClick={handleClickIncrement}>increment</button>
    </>
  );
};
