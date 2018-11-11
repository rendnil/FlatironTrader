import createTradeAdapter from "../../apis/createTradeAdapter"



export function createNewTrade(userId, symbol, buy, price, quantity){

  return (dispatch) =>{

    dispatch({type: "about to create a new trade"})


    return createTradeAdapter.postNewTrade(userId, symbol, buy, price, quantity)

      .then(response =>{
        if (response.ok){
          return response.json()
        }else{
          throw response
        }
      })

     .then(data => {
       console.log("this what we get back",data)

      dispatch({type: "CREATE_NEW_TRADE",

      payload: data})
    })

    .catch(
      response => response.json()
      .then(error => dispatch({type: "FAILED_TRADE", payload: error.message})
    )

}
}
