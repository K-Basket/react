import { ToggleContext } from 'components/App';
import { useContext } from 'react';

export function Main() {
  const result = useContext(ToggleContext);

  return (
    // кнопка "Open Alert" запускает функцию пропса ToggleContext
    <div>
      <h1>Hook useContext</h1>

      <button onClick={result.setToggleFn} type="button">
        Open Alert
      </button>
    </div>
  );
}
