import React from 'react';
import { ContextApp } from './Context/ContextApp';
import { RouterApp } from './Router/RouterApp';
import Section from './Section/Section';
import { ReduxApp } from './Redux/ReduxApp';

export function App() {
  return (
    <div>
      <Section title={'Redux'}>
        <ReduxApp />
      </Section>

      <Section title={'hook: useContext'}>
        <ContextApp />
      </Section>

      <Section title={'Маршрутизация'}>
        <RouterApp />
      </Section>
    </div>
  );
}
