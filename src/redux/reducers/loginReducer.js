export default function (state = {}, action){


  switch(action.type){
    case "LOGIN_USER":

      return action.payload.user

    case "NOT_VALID":

        return "Invalid login attempt"
    case "NOT_VALID_SIGNUP":

        return "Invalid sign up attempt"


    default:
      return state
  }



}
