//reducer for error messages

export default function (state = {}, action){

  switch(action.type){

    //if a new trade is created successfully
    case "CREATE_NEW_TRADE":
      return {errors: false}

    //if a trade fails 
    case "FAILED_TRADE":
      return {errors: action.payload}

    default:
      return state
  }
}
