import React from 'react';
import { ContextApp } from './Context/ContextApp';
import { RouterApp } from './Router/RouterApp';
import Section from './Section/Section';

export function App() {
  return (
    <div>
      <Section title={'hook: useContext'}>
        <ContextApp />
      </Section>

      <Section title={'Маршрутизация 00:38:48'}>
        <RouterApp />
      </Section>
    </div>
  );
}
