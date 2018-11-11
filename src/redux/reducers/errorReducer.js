export default function (state = {}, action){

  switch(action.type){

    case "CREATE_NEW_TRADE":
      return {errors: false}

    case "FAILED_TRADE":
    
      return {errors: action.payload}


    default:

    return state
  }



}
