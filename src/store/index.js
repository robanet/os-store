import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history';

import createRootReducer from './reducers';

export const history = createHistory();

const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

middleware.push(logger);

const store = configureStore({
  reducer: createRootReducer(history),
  middleware,
});

export default store;
