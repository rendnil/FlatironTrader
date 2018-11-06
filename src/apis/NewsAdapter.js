const MARKET_NEWS = "https://api.iextrading.com/1.0/stock/market/news"


export default class NewsAdapter{
  static getNews(){
    return fetch(`${MARKET_NEWS}`)
    .then(r => r.json())
  }
}
