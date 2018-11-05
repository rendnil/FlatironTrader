import React from "react"
import { connect } from 'react-redux'


class CurrentPosition extends React.Component{


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
  relevantMarketData(){
    if (this.props.marketData.iexData){

    let relevantMarketData = [ ]
    this.calcAssetPosition().forEach((asset)=>{
      this.props.marketData.iexData.forEach((marketAsset)=>{
        if (marketAsset.symbol=== asset.symbol){
          let marketAssetObj = {symbol: marketAsset.symbol, price: this.props.marketData.tether*(marketAsset.bidPrice+marketAsset.askPrice)/2}
          relevantMarketData.push(marketAssetObj)
        }
      })

    })
    return relevantMarketData
  }

  }

  calcPnL(){

    let userFullAssetInformation = [ ]
    this.calcAssetPosition().forEach((asset)=>{

    })
  }


  render(){
    console.log("props", this.props);
    console.log("user assets", this.getAssets());
    console.log("user assets", this.calcAssetPosition());
    console.log("relevantMarketData", this.relevantMarketData());
    console.log("calc PnL", this.calcPnL());
    return(
      <div>
      <h2>Current Position</h2>
      {this.calcAssetPosition().map((position)=>{
        return <p> {position.symbol}--{position.netPosition}--{position.vwap} </p>
      })}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userTrades:state.userTrades,
          marketData: state.marketData
  }
}

export default connect(mapStateToProps)(CurrentPosition)
//
