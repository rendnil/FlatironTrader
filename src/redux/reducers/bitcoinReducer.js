export default function (state = {}, action){

  switch(action.type){

    case "BITCOIN_UPDATE":
      return {...state, livePrice:action.payload}

    default:

    return state
  }



}
