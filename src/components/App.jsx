import React from 'react';
import { ContextApp } from './Context/ContextApp';
import { RouterApp } from './Router/RouterApp';

export function App() {
  return (
    <div>
      <ContextApp />
      <RouterApp />
    </div>
  );
}
