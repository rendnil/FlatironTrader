export default function (state = {}, action){

  switch(action.type){

    case "FETCH_BTC_DATA":
      return {...state, "BTC":action.payload}

    default:

    return state
  }



}
