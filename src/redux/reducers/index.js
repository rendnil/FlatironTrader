import { combineReducers } from 'redux';
import marketDataReducer from './marketDataReducer'
import selectAssetReducer from './selectAssetReducer'
import newTradeReducer from './newTradeReducer'
import newsReducer from './newsReducer'
import historicalDataReducer from './historicalDataReducer'
import baseMarketDataReducer from './baseMarketDataReducer'
import usersReducer from './usersReducer'
import errorReducer from './errorReducer'
import authUserReducer from './authUserReducer'
import messagesReducer from './messagesReducer'



export default combineReducers({
  marketData: marketDataReducer,
  selectedAsset: selectAssetReducer,
  newTrades: newTradeReducer,
  news: newsReducer,
  historicalData: historicalDataReducer,
  baseMarketData: baseMarketDataReducer,
  users: usersReducer,
  errors: errorReducer,
  authUser: authUserReducer,
  messages: messagesReducer
})
