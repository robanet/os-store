import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import event from './event';

export default (history) => combineReducers({
  router: connectRouter(history),
  event,
});
