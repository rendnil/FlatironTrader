import { combineReducers } from 'redux';
import marketDataReducer from './marketDataReducer'
import loginReducer from './loginReducer'
import assetReducer from './assetReducer'
import selectAssetReducer from './selectAssetReducer'
import tradeReducer from './tradeReducer'
import newTradeReducer from './newTradeReducer'
import newsReducer from './newsReducer'
import bitcoinReducer from './bitcoinReducer'



export default combineReducers({
  marketData: marketDataReducer,
  currentUser: loginReducer,
  tradeableAssets: assetReducer,
  selectedAsset: selectAssetReducer,
  userTrades: tradeReducer,
  newTrades: newTradeReducer,
  news: newsReducer,
  bitcoin: bitcoinReducer
})
