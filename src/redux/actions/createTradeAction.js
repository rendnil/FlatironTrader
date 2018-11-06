import createTradeAdapter from "../../apis/createTradeAdapter"



export function createNewTrade(userId, assetId, buy, price, quantity){

  return (dispatch) =>{

    dispatch({type: "about to create a new trade"})

    return createTradeAdapter.postNewTrade(userId, assetId, buy, price, quantity)

     .then(data => {
      dispatch({type: "CREATE_NEW_TRADE",

      payload: data})
    })

}
}
