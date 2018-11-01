export default function (state = {}, action){

  switch(action.type){

    case "FETCH_IEX_DATA":

      return {...state, iexData:action.payload}

    case "FETCH_COINDESK_DATA":

      //here we need to calculate an implied tether price since IEX bitcoin is quoted in tether
      //coindesk only updates live pricing every minute, so we will not fetch as frequently
      //we take the ratio of coindeskBitcoin mid to IEX bitcoin price mid
      //we only want to update the implied tether price if we fetch new coindesk pricing

      let impliedTetherPrice
      let coindeskBitcoinPrice = action.payload.bpi.USD.rate_float


      if (state.iexData){
        //need to calc IEX mid price for accuracy
        let iexBitcoin = state.iexData.find((asset)=>{
          return asset.symbol === "BTCUSDT"
        })

        let iexBitcoinMid = (iexBitcoin.bidPrice + iexBitcoin.askPrice)/2

        impliedTetherPrice = coindeskBitcoinPrice/iexBitcoinMid
      }


      return {...state, coindeskData: coindeskBitcoinPrice, tether: impliedTetherPrice}

    default:

    return state
  }



}
