
const defaultState= [
  {symbol: "BTC", name:"Bitcoin", livePrice: "Loading"},
  {symbol: "ETH", name:"Ethereum", livePrice: "Loading"},
  {symbol: "BCH", name:"Bitcoin Cash", livePrice: "Loading"},
  {symbol: "XRP", name:"Ripple", livePrice: "Loading"},
  {symbol: "LTC", name:"Litecoin", livePrice: "Loading"},

]


export default function (state = defaultState, action){
  let newState = []
  switch(action.type){

    case "BITCOIN_PRICE_UPDATE":
       return state.map((asset)=>{
         if (asset.symbol === "BTC"){
           return {...asset, livePrice:parseFloat(action.payload).toFixed(2)}
         }else{
           return asset
         }
       })


      break
    case "ETHEREUM_PRICE_UPDATE":
    return state.map((asset)=>{
      if (asset.symbol === "ETH"){
        return {...asset, livePrice:parseFloat(action.payload).toFixed(2)}
      }else{
        return asset
      }
    })


    case "BITCOINCASH_PRICE_UPDATE":
    return state.map((asset)=>{
      if (asset.symbol === "BCH"){
        return {...asset, livePrice:parseFloat(action.payload).toFixed(2)}
      }else{
        return asset
      }
    })

    case "RIPPLE_PRICE_UPDATE":

    return state.map((asset)=>{
      if (asset.symbol === "XRP"){
        return {...asset, livePrice:parseFloat(action.payload).toFixed(3)}
      }else{
        return asset
      }
    })

    case "LITECOIN_PRICE_UPDATE":

    return state.map((asset)=>{
      if (asset.symbol === "LTC"){
        return {...asset, livePrice:parseFloat(action.payload).toFixed(2)}
      }else{
        return asset
      }
    })


    default:

    return state
  }



}
