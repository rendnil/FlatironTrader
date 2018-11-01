import AssetAdapter from "../../apis/AssetAdapter"



export function fetchAssetData(){

  return (dispatch) =>{

    dispatch({type: "about to fetch Asset data"})

    return AssetAdapter.getAssets()

     .then(data => {
       dispatch({type: "FETCH_ASSET_DATA",

                payload: data})
     })
  }
}
