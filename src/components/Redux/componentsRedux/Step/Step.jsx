// import { setStepAction } from 'components/Redux/store/counter/actions';
import { setStepAction } from 'components/Redux/store/counter/counterSlice';
import { useDispatch } from 'react-redux';

const Step = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    // забираем значение value из input/form
    const { value } = evt.target.elements.step;
    // оправляем dispatch со значением value в store/reducer который обновит redux/state
    dispatch(setStepAction(Number(value)));
  };

  return (
    <form onSubmit={handleSubmit} role="search">
      <input type="number" name="step" placeholder="add step" />
      <button type="submit">Set step</button>
    </form>
  );
};

export default Step;
