const COINDESK_API_ENDPOINT = "https://api.coindesk.com/v1/bpi/currentprice.json"

export default class CoindeskAdapter{
  static getBitcoin(){

    return fetch(`${COINDESK_API_ENDPOINT}`)
    .then(r => r.json())
  }
}
