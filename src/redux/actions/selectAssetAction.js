export function selectAssetAction(asset, tether){
  console.log("IN THE ACTION")

  return {type:"SELECT_ASSET", payload: {asset:asset, tether: tether}}





}
