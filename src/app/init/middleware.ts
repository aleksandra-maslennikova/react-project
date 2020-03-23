// Core
import { createLogger } from 'redux-logger';
import {AnyAction, Middleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

export const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: (action: AnyAction) => {
            return action.error ? 'firebrick' : 'deepskyblue';
        },
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    }
});

const __DEV__ = process.env.NODE_ENV === 'development';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware: Middleware = createRouterMiddleware(history);

const middleware = [ sagaMiddleware, routerMiddleware ];

if (__DEV__) {
    middleware.push(logger);
}

export { history, middleware, sagaMiddleware };