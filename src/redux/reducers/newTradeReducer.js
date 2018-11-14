const defaultState = [ ]

export default function (state = defaultState, action){

  switch(action.type){
    case "CREATE_NEW_TRADE":
      return [...state, action.payload.trade]

    default:
      return state
  }
}
