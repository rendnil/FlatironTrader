//reducer to check messages

const defaultState= null

export default function (state = defaultState, action){

  switch(action.type){

    //check resulting message of new trade creation
    case "CREATE_NEW_TRADE":
      return action.payload.trade

    default:
      return state
  }
}
