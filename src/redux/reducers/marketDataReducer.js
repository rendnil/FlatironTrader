
const defaultState = [
  {symbol: "BTC", name:"Bitcoin", livePrice: "Loading"},
  {symbol: "ETH", name:"Ethereum", livePrice: "Loading"},
  {symbol: "BCH", name:"Bitcoin Cash", livePrice: "Loading"},
  {symbol: "XRP", name:"Ripple", livePrice: "Loading"},
  {symbol: "LTC", name:"Litecoin", livePrice: "Loading"},
]


export default function (state = defaultState, action){


  switch(action.type){
    //for each of the cases:
    //iterate through the state and update only the livePrice for
    //the appropriate asset
    //return a new state array with updated price
    case "BITCOIN_PRICE_UPDATE":
      return createUpdatedPriceState(state, action, "BTC")

    case "ETHEREUM_PRICE_UPDATE":
      return createUpdatedPriceState(state, action, "ETH")


    case "BITCOINCASH_PRICE_UPDATE":
      return createUpdatedPriceState(state, action, "BCH")

    case "RIPPLE_PRICE_UPDATE":
      return createUpdatedPriceState(state, action, "XRP")

    case "LITECOIN_PRICE_UPDATE":
      return createUpdatedPriceState(state, action, "LTC")

    default:
      return state
  }
}

//helper function for updating the live pricing state
const createUpdatedPriceState = (state, action, assetSymbol) => {
  //iterate over all assets in the state
  return state.map((asset)=>{
    //if this asset is the updated asset, then change the price to new live price
    if (asset.symbol === assetSymbol){
      return {...asset, livePrice:parseFloat(action.payload)}
    //otherwise just keep the existing price
    }else{
      return asset
    }
  })
}
