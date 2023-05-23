import { ToggleContext } from 'components/App';
import { useContext } from 'react';

export function Alert() {
  // useContext получает данные из createContext() (App.jsx)
  const result = useContext(ToggleContext);

  console.log('result :>> ', result); // {toggleValue: false, setToggleFn: ƒ}

  return result.toggleValue && <p>message</p>;
}
