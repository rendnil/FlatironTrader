export default function (state = [], action){

  switch(action.type){

    case "FETCH_USERS_DATA":
      return action.payload

    case "LOGIN_USER":
      return [...state, action.payload.user]


    default:

    return state
  }



}
