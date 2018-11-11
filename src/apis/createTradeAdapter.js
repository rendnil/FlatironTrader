const CREATE_TRADE_API_ENDPOINT = "http://localhost:3001/api/v1/trades"

export default class createTradeAdapter{
  static postNewTrade(userId, symbol, buy, price, quantity){

    return fetch(`${CREATE_TRADE_API_ENDPOINT}`,{
      method: "POST",
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trade:{
          user_id: userId,
          symbol: symbol,
          buy: buy,
          price: price,
          quantity: quantity
        }
      })
    })//end fetch
    
  }
}


// params.require(:trade).permit(:user_id, :symbol, :buy, :price, :quantity)
