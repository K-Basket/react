import { useGetContext } from './Context';

export function Main() {
  const result = useGetContext();

  return (
    <div>
      <h1>Hook: useContext</h1>

      <button onClick={result.setToggleFn} type="button">
        Open Alert
      </button>
    </div>
  );
}
