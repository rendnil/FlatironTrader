//reducer for handling all users part of state
export default function (state = [], action){

  switch(action.type){
    //returning all of the users data
    case "FETCH_USERS_DATA":
      return action.payload

    //add new trade to the current user's attributes
    //first, filter out all other users and just update the current user's obj
    case "CREATE_NEW_TRADE":
        let otherUsers = state.filter((user) => (user.id !== action.payload.user.id))
        return [...otherUsers, action.payload.user]

    default:
      return state
  }
}
