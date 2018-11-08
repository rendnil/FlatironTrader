///class used to value portfolio


export default class PortfolioVal {



  static calcTradeLevelPnL(trades, marketData){
    let pnl
    let tradesWithPnL = []
      trades.forEach((trade)=>{
        marketData.forEach((asset)=>{
        if (asset.symbol===trade.asset.symbol){
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

  static calcPortfolioPnL(trades, marketData){
    if (this.calcTradeLevelPnL(trades, marketData)){
    return this.calcTradeLevelPnL(trades, marketData).reduce((acc,cv)=>{
      return (acc + cv.pnl)
    },0)
  }
  }





}// end class
