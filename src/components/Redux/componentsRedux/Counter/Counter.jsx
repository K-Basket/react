import { useDispatch, useSelector } from 'react-redux';
import Step from '../Step/Step';
import {
  decrementAction,
  incrementAction,
} from 'components/Redux/store/counter/actions';

export const Counter = () => {
  // useSelector() возвращает значения state из store
  const { total, step } = useSelector(state => state.counter);

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
