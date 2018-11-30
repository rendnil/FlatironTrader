//reducer for historical price data

export default function (state = {}, action){

  switch(action.type){

    //check to see which asset has been fetched
    //only update that asset's data in the state 
    case "FETCH_BTC_DATA":
      return {...state, "BTC":action.payload}

    case "FETCH_ETH_DATA":
        return {...state, "ETH":action.payload}

    case "FETCH_BCH_DATA":
        return {...state, "BCH":action.payload}

    case "FETCH_LTC_DATA":
        return {...state, "LTC":action.payload}

    case "FETCH_XRP_DATA":
        return {...state, "XRP":action.payload}

    default:
      return state
  }
}
