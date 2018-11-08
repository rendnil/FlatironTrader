
const HISTORICAL_PRICE_DATA_ENDPOINT = "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&allData=true"

export default class CryptoDataAdapter{
  static getHistoricalPriceData(symbol){
    let endPoint = `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&allData=true`
    return fetch(enPoint)
    .then(r => r.json())
  }
}
