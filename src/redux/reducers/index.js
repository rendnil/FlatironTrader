import { combineReducers } from 'redux';
import marketDataReducer from './marketDataReducer'
import loginReducer from './loginReducer'
import assetReducer from './assetReducer'



export default combineReducers({
  marketData: marketDataReducer,
  currentUser: loginReducer,
  tradeableAssets: assetReducer
})
