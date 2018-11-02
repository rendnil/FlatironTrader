export default function (state = null, action){

  switch(action.type){

    case "SELECT_ASSET":
      console.log("made it");
      return action.payload


    default:

    return state
  }



}
