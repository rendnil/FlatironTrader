
const HISTORICAL_PRICE_DATA_ENDPOINT = "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&allData=true"

export default class CryptoDataAdapter{
  static getHistoricalPriceData(symbol){
  console.log("in the adapter");
    let endPoint = `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&allData=true`
    return fetch(endPoint)
    .then(r => r.json())
  }
}
