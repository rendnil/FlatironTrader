import { combineReducers } from 'redux';
import marketDataReducer from './marketDataReducer'
import loginReducer from './loginReducer'



export default combineReducers({
  marketData: marketDataReducer,
  currentUser: loginReducer
})
