const MARKET_NEWS_ENDPOINT = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"


export default class NewsAdapter{
  static getNews(){
    return fetch(MARKET_NEWS_ENDPOINT)
    .then(r => r.json())
  }
}
