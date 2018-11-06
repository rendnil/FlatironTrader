
const IEX_API_ENDPOINT = "https://api.iextrading.com/1.0"
const CRYPTO_ENDPOINT = "/stock/market/crypto"


export default class IEXDataAdapter{
  static getCrypto(){
    return fetch(`${IEX_API_ENDPOINT}${CRYPTO_ENDPOINT}`)
    .then(r => r.json())
  }
}
