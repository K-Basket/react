import { Alert } from './Alert';
import { Main } from './Main';
import { Context } from './Context';

export function ContextApp() {
  return (
    <div>
      <Context>
        <Main />
        <Alert />
      </Context>
    </div>
  );
}
