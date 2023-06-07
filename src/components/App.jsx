import React from 'react';
import { ContextApp } from './Context/ContextApp';
import { RouterApp } from './Router/RouterApp';
import Section from './Section/Section';
import { Redux } from './Redux/ReduxApp';

export function App() {
  return (
    <div>
      <Section title={'hook: useContext'}>
        <ContextApp />
      </Section>

      <Section title={'Маршрутизация'}>
        <RouterApp />
      </Section>

      <Section title={'Redux'}>
        <Redux />
      </Section>
    </div>
  );
}
