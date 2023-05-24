import { useGetContext } from './Context';

export function Main() {
  const result = useGetContext();

  return (
    <div>
      <button onClick={result.setToggleFn} type="button">
        Open Alert
      </button>
    </div>
  );
}
