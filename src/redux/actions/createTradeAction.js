//action creator for creating new trade objects

import createTradeAdapter from "../../apis/createTradeAdapter"

export function createNewTrade(userId, symbol, buy, price, quantity){

  return (dispatch) =>{

    dispatch({type: "about to create a new trade"})

    //use adapter to post new trade to db
    return createTradeAdapter.postNewTrade(userId, symbol, buy, price, quantity)

    //check that the trade object has been created on the back end
      .then(response =>{
        //if created successfully
        if (response.ok){
          return response.json()
        //if rejected
        }else{
          throw response
        }
      })
      //dispatch the new trade object
     .then(data => {
      dispatch({type: "CREATE_NEW_TRADE", payload: data})
    })

    //if there are errors, dispatch the error message
    .catch(
      response => response.json()
      .then(error => {
        dispatch({type: "FAILED_TRADE", payload: error.error})}
    ))
  }
}
