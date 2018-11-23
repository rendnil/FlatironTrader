import CryptoDataAdapter from "../../apis/CryptoDataAdapter"

const cryptoSymbols = ["BTC", "ETH", "LTC", "XRP", "BCH"]

export function fetchHistoricalData(){

  return (dispatch) =>{

    dispatch({type: "about to fetch historical data"})

    cryptoSymbols.forEach((symbol)=>{

      return (CryptoDataAdapter.getHistoricalPriceData(symbol)

        .then(data => {
          dispatch({type: `FETCH_${symbol}_DATA`, payload: data.Data})
          })
      )
    })
  }
}
