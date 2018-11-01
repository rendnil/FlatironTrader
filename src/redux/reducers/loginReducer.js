export default function (state = {}, action){


  switch(action.type){
    case "LOGIN_USER":
      
      return action.payload.user

    case "NOT_VALID":

        return "Invalid login attempt"


    default:
      return state
  }



}
