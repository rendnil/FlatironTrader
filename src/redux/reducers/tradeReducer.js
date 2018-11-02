export default function (state = [], action){


  switch(action.type){
    case "LOGIN_USER":

      return action.payload.user.trades

    

    default:
      return state
  }



}
