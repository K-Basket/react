import { Alert } from './Alert';
import { Main } from './Main';
import { Context } from './Context';

export function ContextApp() {
  return (
    <Context>
      <Main />
      <Alert />
    </Context>
  );
}
