import { useGetContext } from './Context';

export function Alert() {
  const result = useGetContext();

  return result.toggleValue && <p>message</p>;
}
