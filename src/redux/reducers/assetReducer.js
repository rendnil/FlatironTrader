export default function (state = [], action){

  switch(action.type){

    case "FETCH_ASSET_DATA":
      return action.payload


    default:

    return state
  }



}
