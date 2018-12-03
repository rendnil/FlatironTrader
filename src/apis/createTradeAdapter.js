//adapter to post new trades to db

const API_ENDPOINT = process.env.REACT_APP_BACKEND

export default class createTradeAdapter{
  static postNewTrade(userId, symbol, buy, price, quantity){

    return fetch(`${API_ENDPOINT}/trades`,{
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

/// api params
// params.require(:trade).permit(:user_id, :symbol, :buy, :price, :quantity)
