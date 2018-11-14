
const HISTORICAL_PRICE_DATA_ENDPOINT = "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&allData=true"
const DATA_LIMIT = 500

const BASE_MARKET_DATA_ENDPOINT = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BCH,LTC,XRP&tsyms=USD"

export default class CryptoDataAdapter{

  static getHistoricalPriceData(symbol){

  //limiting data to last 750 points
    let endPoint = `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=${DATA_LIMIT}`
    return fetch(endPoint)
    .then(r => r.json())
  }

  static getBaseMarketData(){
    return fetch(BASE_MARKET_DATA_ENDPOINT)
    .then(r => r.json())
  }
}
