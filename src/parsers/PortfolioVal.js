///class used to value portfolio


export default class PortfolioVal {


///calculate the pnl for each trade
  static calcTradeLevelPnL(trades, marketData){
    let pnl
    let tradesWithPnL = []
      console.log("val", trades, marketData);
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
          tradesWithPnL.push({...trade, pnl:pnl})
        }
      })
    })
    return tradesWithPnL

  }
//calculate the pnl for the entire portfolio
  static calcPortfolioPnL(trades, marketData){
    if (this.calcTradeLevelPnL(trades, marketData)){

    //sum the pnls for each trade
    return this.calcTradeLevelPnL(trades, marketData).reduce((acc,cv)=>{
      return (acc + cv.pnl)
    },0)
  }
  }





}// end class
