import CryptoDataAdapter from "../../apis/CryptoDataAdapter"



export function fetchHistoricalData(symbol){

  return (dispatch) =>{

    dispatch({type: "about to fetch historical data"})

    return CryptoDataAdapter.getHistoricalPriceData(symbol)

     .then(data => {
       console.log("in the action ", data);
       dispatch({type: `FETCH_${symbol}_DATA`,

                payload: data})
     })
  }
}
