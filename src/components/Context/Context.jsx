import React, { createContext, useContext, useState } from 'react';

//Все кто внутри копмонента ToggleContext будут видеть передаваемый контекст
export const ToggleContext = createContext();

// useContext() получает данные из createContext();
export function useGetContext() {
  return useContext(ToggleContext);
}

export function Context({ children }) {
  // state (контекст) для provider
  const [toggle, setToggle] = useState(false);

  return (
    // Provider - дисплей, который будет показывать контекст всем компонетам внутри ToggleContext
    // props value={} - значения, которые должны видеть все
    <ToggleContext.Provider
      value={{
        toggleValue: toggle,
        setToggleFn: () => setToggle(prev => !prev),
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}
