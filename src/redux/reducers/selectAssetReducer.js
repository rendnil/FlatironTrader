//reducer for handling user asset selection
export default function (state = null, action){

  switch(action.type){
    //set selected asset in state to this new asset
    case "SELECT_ASSET":
      return action.payload

    default:
      return state
  }
}
