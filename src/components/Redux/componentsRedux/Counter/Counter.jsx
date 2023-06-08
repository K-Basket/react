import { useDispatch, useSelector } from 'react-redux';
import Step from '../Step/Step';

export const Counter = () => {
  // useSelector() возвращает значения state из store
  const { total, step } = useSelector(state => state);
  // hook useDispatch() возвращает метод Dispatch (action)
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch({ type: 'increment', payload: step });
  };
  const handleClickDecrement = () => {
    dispatch({ type: 'decrement', payload: step });
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
