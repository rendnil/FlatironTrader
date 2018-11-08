
const HISTORICAL_PRICE_DATA_ENDPOINT = "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&allData=true"

export default class CryptoDataAdapter{
  static getHistoricalPriceData(symbol){
  console.log("in the adapter");
  //limiting data to 750 points 
    let endPoint = `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=750`
    return fetch(endPoint)
    .then(r => r.json())
  }
}
