export default function (state = [], action){

  switch(action.type){

    case "FETCH_USERS_DATA":
      return action.payload

    case "LOGIN_USER":
      return [...state, action.payload.user]

    case "CREATE_NEW_TRADE":
        let otherUsers = state.filter((user)=> (user.id !== action.payload.user.id))
          return [...otherUsers, action.payload.user]
          
    default:

    return state
  }



}
