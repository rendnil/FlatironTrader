export default function (state = {}, action){


  switch(action.type){
    case "LOGIN_USER":
      //debugger
      return action.payload.user

    case "NOT_VALID":
        return state


    default:

    return state
  }



}
