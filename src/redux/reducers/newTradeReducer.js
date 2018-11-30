//reducer for handling new trade objects

const defaultState = [ ]

export default function (state = defaultState, action){

  switch(action.type){
    case "CREATE_NEW_TRADE":
    //append new trade object to array of existing trade objects
      return [...state, action.payload.trade]

    default:
      return state
  }
}
