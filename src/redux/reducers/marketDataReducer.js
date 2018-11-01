export default function (state = {}, action){

  switch(action.type){
    case "FETCH_IEX_DATA":

      return {...state, iexData:action.payload}

    case "FETCH_COINDESK_DATA":
      return {...state, coindeskData: action.payload}

    default:

    return state
  }



}
