// action creator for fetching base market data (ex. start of day prices)
import CryptoDataAdapter from "../../apis/CryptoDataAdapter"

export function fetchBaseMarketData(symbol){

  return (dispatch) =>{

    dispatch({type: "about to fetch base market data"})

    //use adapter class to fetch market data
    return CryptoDataAdapter.getBaseMarketData()

     .then(data => {
       //dispatch the data in the payload
       dispatch({type: `FETCH_BASE_MARKET_DATA`,
                payload: data.RAW})
     })
  }
}
