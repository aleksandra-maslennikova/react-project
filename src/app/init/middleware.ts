// Core
import { createLogger } from 'redux-logger';
import { AnyAction, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action: AnyAction): string => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: (): string => '#1C5FAF',
    action: (): string => '#149945',
    nextState: (): string => '#A47104',
    error: (): string => '#ff0005',
  },
});

const DEV = process.env.NODE_ENV === 'development';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware: Middleware = createRouterMiddleware(history);

const middleware = [sagaMiddleware, routerMiddleware];

if (DEV) {
  middleware.push(logger);
}

export { history, middleware, sagaMiddleware };
