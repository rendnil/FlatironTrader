export default function (state = null, action){

  switch(action.type){

    case "SELECT_ASSET":
      return action.payload

    default:
      return state
  }
}
