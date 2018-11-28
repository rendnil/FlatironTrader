///class used to value portfolio
//PnL = (change in price) * quantity

export default class PortfolioVal {


///calculate the pnl for each trade
//used as a helper function throughout the class methods
  static calcTradeLevelPnL(trades, marketData){
    let pnl
    let tradesWithPnL = []

      trades.forEach((trade)=>{
        marketData.forEach((asset)=>{
          //check if the market data corresponds to the correct asset
        if (asset.symbol===trade.asset.symbol){
          //check if the trade was a buy or a sell
          if (trade.buy){
            pnl = ((asset.livePrice - trade.price)*trade.quantity)

          }else{
            pnl = (asset.livePrice - trade.price)*(-trade.quantity)
          }
          //add the updated trade object to the array
          //now the pnl attribute for that trade object has been updated
          tradesWithPnL.push({...trade, pnl:pnl})
        }
      })
    })
    return tradesWithPnL

  }
//calculate the pnl for the entire portfolio
  static calcPortfolioPnL(trades, marketData){
    //check that there are trades
    if (this.calcTradeLevelPnL(trades, marketData)){

    //sum the pnls for each trade
      return this.calcTradeLevelPnL(trades, marketData).reduce((acc,cv)=>{
        return (acc + cv.pnl)
      },0)
    }
  }

  //get all user objects with pnl attribute
  //updates the pnl attribute for the user objects 
  static getAllUsersWithPnL(users, marketData){
    return users.map((user)=>{
      return  {...user, pnl:this.calcPortfolioPnL(user.trades, marketData)}
    })
  }

  //sort the users by pnl in descending order
  static sortUsersByPnL(users, marketData){
    return this.getAllUsersWithPnL(users, marketData).sort((user1, user2)=>{
      return user2.pnl - user1.pnl
    })
  }
}// end class
