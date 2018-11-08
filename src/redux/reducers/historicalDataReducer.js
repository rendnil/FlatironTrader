export default function (state = {}, action){

  switch(action.type){

    case "FETCH_BTC_DATA":
      return {...state, "BTC":action.payload}

    case "FETCH_ETH_DATA":
        return {...state, "ETH":action.payload}

    default:

    return state
  }



}
