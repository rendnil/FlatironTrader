//reducer for base market data

//necessary data that we want to look at
const currency = "USD"
const open24hr = "OPEN24HOUR"
const openDay = "OPENDAY"


export default function (state = [], action){

  switch(action.type){

    case "FETCH_BASE_MARKET_DATA":
      let baseMarketDataArray = [ ]
      //iterate over the payload and push only necessary data into array as an obj
      for (let key in action.payload){
        baseMarketDataArray.push({
          symbol:key,
          open24hours:action.payload[key][currency][open24hr],
          openDay:action.payload[key][currency][openDay]
        })
      }
      return baseMarketDataArray


    default:
      return state
  }
}
