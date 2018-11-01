import { combineReducers } from 'redux';
import marketDataReducer from './marketDataReducer';



export default combineReducers({
  marketData: marketDataReducer
})
