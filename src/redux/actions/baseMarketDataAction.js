import CryptoDataAdapter from "../../apis/CryptoDataAdapter"



export function fetchBaseMarketData(symbol){

  return (dispatch) =>{

    dispatch({type: "about to fetch base market data"})

    return CryptoDataAdapter.getBaseMarketData()

     .then(data => {
       console.log("in the action ", data);
       dispatch({type: `hey`,

                payload: data.Data})
     })
  }
}
