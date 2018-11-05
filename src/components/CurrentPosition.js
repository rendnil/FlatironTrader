import React from "react"
import { connect } from 'react-redux'


class CurrentPosition extends React.Component{

  ////////////////////////
  ///these pnl and asset position methods need to be revamped
  ///////////////////////////

  getAssets(){

    let userAssets = []
    if (this.props.userTrades.length>0){
      this.props.userTrades.forEach((trade)=>{
        if (!userAssets.includes(trade.asset.symbol)){
          userAssets.push(trade.asset.symbol)
        }
      })
    }
    return userAssets
  }

  calcAssetPosition(){
    let userPositionsByAsset = [ ]
    this.getAssets().forEach((asset)=>{
      let assetNetPosition = 0
      let totalUSD = 0

      this.props.userTrades.forEach((trade)=>{
        if (trade.asset.symbol === asset){
          if(trade.buy){
            assetNetPosition += trade.quantity
            totalUSD += trade.quantity*trade.price
          }else{
            assetNetPosition -= trade.quantity
            totalUSD -= trade.quantity*trade.price
          }

        }
      })
      userPositionsByAsset.push({
        symbol:asset,
        netPosition:assetNetPosition,
        vwap: totalUSD/assetNetPosition})
    })
    return userPositionsByAsset
  }

//iterate over the market data and only return assets where we have a position
//right now this is constructing the entire position array that you can use to calc pnl
  relevantMarketData(){
    if (this.props.marketData.iexData){

    let relevantMarketData = [ ]
    this.calcAssetPosition().forEach((asset)=>{
      this.props.marketData.iexData.forEach((marketAsset)=>{
        if (marketAsset.symbol=== asset.symbol){
          let livePrice = this.props.marketData.tether*(marketAsset.bidPrice+marketAsset.askPrice)/2
          let marketAssetObj = {symbol: marketAsset.symbol, price: livePrice, netPosition:asset.netPosition, vwap: asset.vwap}
          relevantMarketData.push(marketAssetObj)
        }
      })

    })
    return relevantMarketData
  }

  }

/////////////////////////////////////////////////////////////

  render(){
    if(this.props.marketData.iexData){

      // console.log("props", this.props);
      // console.log("user assets", this.getAssets());
      // console.log("user assets", this.calcAssetPosition());
      // console.log("relevantMarketData", this.relevantMarketData());

      return(
        <div>
        <h2>Current Position</h2>
        {this.relevantMarketData().map((position)=>{
          return <p> {position.symbol}--{position.netPosition}--{position.vwap}---PnL: {position.netPosition*(position.price - position.vwap)}</p>
        })}

        </div>
      )
    }else{
      return null
    }

  }
}

const mapStateToProps = (state) => {
  return {userTrades:state.userTrades,
          marketData: state.marketData
  }
}

export default connect(mapStateToProps)(CurrentPosition)
//
