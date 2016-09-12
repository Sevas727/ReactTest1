/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import vimeo from './modules/Vimeo/VimeoReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
  vimeo
});
