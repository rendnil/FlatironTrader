import CryptoDataAdapter from "../../apis/CryptoDataAadapter"



export function fetchHistoricalData(symbol){

  return (dispatch) =>{

    dispatch({type: "about to fetch historical data"})

    return CryptoDataAdapter.getHistoricalPriceData(symbol)

     .then(data => {
       dispatch({type: `FETCH_${symbol}_DATA`,

                payload: data})
     })
  }
}
