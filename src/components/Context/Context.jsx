import React, { createContext } from 'react';
import { useState } from 'react';
import { Alert } from '../Context/Alert';
import { Main } from '../Context/Main';

// компонент, который обнимает все компоненты, которые хотят видеть Context
export const ToggleContext = createContext();

export function Context() {
  // state для provider
  const [toggle, setToggle] = useState(false);

  return (
    // Provider - дисплей, который будет показывать контекст всем компонетам внутри ToggleContext
    // props value={} - значения, которые должны видеть все
    <div>
      <ToggleContext.Provider
        value={{
          toggleValue: toggle,
          setToggleFn: () => setToggle(prev => !prev),
        }}
      >
        <Main />
        <Alert />
      </ToggleContext.Provider>
    </div>
  );
}
