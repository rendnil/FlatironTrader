import { combineReducers } from 'redux';
import iexReducer from './iexReducer';


export default combineReducers({
  iexData: iexReducer
})
