
const defaultState= {
  "BTC":{name:"Bitcoin"},
  "ETH":{name:"Ethereum"},
  "BCH":{name:"Bitcoin Cash"},
  "XRP":{name:"Ripple"},
  "LTC":{name:"Litecoin"}

 }


export default function (state = defaultState, action){

  switch(action.type){

    case "BITCOIN_PRICE_UPDATE":
      return {...state, "BTC":{...state["BTC"], livePrice: action.payload}}
    case "ETHEREUM_PRICE_UPDATE":
      return {...state, "ETH":{...state["ETH"], livePrice: action.payload}}
    case "BITCOINCASH_PRICE_UPDATE":
      return {...state, "BCH":{...state["BCH"], livePrice: action.payload}}
    case "RIPPLE_PRICE_UPDATE":
      return {...state, "XRP":{...state["XRP"], livePrice: action.payload}}
    case "LITECOIN_PRICE_UPDATE":
      return {...state, "LTC":{...state["LTC"], livePrice: action.payload}}

    default:

    return state
  }



}
