export default function (state = [], action){

  switch(action.type){

    case "FETCH_BASE_MARKET_DATA":
      let baseMarketDataArray= [ ]
      for (let key in action.payload){
        baseMarketDataArray.push({
          symbol:key,
          open24hours:action.payload[key]["USD"]["OPEN24HOUR"],
          openDay:action.payload[key]["USD"]["OPENDAY"]
        })
      }


      return baseMarketDataArray


    default:

    return state
  }



}
