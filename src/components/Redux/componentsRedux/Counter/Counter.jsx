import { useDispatch, useSelector } from 'react-redux';
import Step from '../Step/Step';
import {
  decrement,
  increment,
} from 'components/Redux/store/counter/counterSlice';
import { counterSelector } from 'components/Redux/store/counter/selectors';

export const Counter = () => {
  // useSelector() возвращает значения state из store
  // для того, чтобы мемоизовать обращение к state при каждом рендере - вынесем внутренность useSelector в отдельную функцию.
  const { total, step } = useSelector(counterSelector);

  // hook useDispatch() возвращает метод Dispatch (action), отправляет изменения в state
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(increment(step));
  };

  const handleClickDecrement = () => {
    dispatch(decrement(step));
  };

  return (
    <>
      {<h3>Total: {total}</h3>}
      <Step />
      <button onClick={handleClickDecrement}>decrement</button>
      <button onClick={handleClickIncrement}>increment</button>
    </>
  );
};
