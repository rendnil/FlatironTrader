export default function (state = [], action){

  switch(action.type){

    case "FETCH_NEWS":
      return action.payload.Data


    default:

      return state
  }



}
