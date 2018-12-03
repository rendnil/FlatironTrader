//adapter for fetching the latest cryptocurrency news articles

const MARKET_NEWS_ENDPOINT = `${process.env.REACT_APP_CRYPTO_DATA_API}/v2/news/?lang=EN`


export default class NewsAdapter{
  static getNews(){
    return fetch(MARKET_NEWS_ENDPOINT)
    .then(r => r.json())
  }
}
