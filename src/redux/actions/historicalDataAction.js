//action creator for historical data fetching

import CryptoDataAdapter from "../../apis/CryptoDataAdapter"

const cryptoSymbols = ["BTC", "ETH", "LTC", "XRP", "BCH"]

export function fetchHistoricalData(){

  return (dispatch) =>{
    dispatch({type: "about to fetch historical data"})

    //fetch the historical data for each symbol
    cryptoSymbols.forEach((symbol)=>{
      //make use of adapter to fetch from API
      return (CryptoDataAdapter.getHistoricalPriceData(symbol)
        //dispatch the data
        .then(data => {
          dispatch({type: `FETCH_${symbol}_DATA`, payload: data.Data})
          })
      )
    })
  }
}
