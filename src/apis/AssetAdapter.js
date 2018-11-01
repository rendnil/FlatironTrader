const ASSET_API_ENDPOINT = "http://localhost:3001/api/v1/assets"

export default class AssetAdapter{
  static getAssets(){

    return fetch(`${ASSET_API_ENDPOINT}`)
    .then(r => r.json())
  }
}
