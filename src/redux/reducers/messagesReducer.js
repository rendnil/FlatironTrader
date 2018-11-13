const defaultState= null


export default function (state = defaultState, action){

  switch(action.type){

    case "CREATE_NEW_TRADE":

      return action.payload.trade

    default:
      return state

  }




}
