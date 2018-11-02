
///need to remove this
const defaultState = {
  "id": 6,
       "username": "a",
       "email": "a@hotmail.com",
       "trades": [],
       "net_position": 0,
       "weighted_price": 0
}


export default function (state = defaultState, action){


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
