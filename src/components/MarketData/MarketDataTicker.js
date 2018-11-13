import React from "react"
import {List, Grid} from "semantic-ui-react"
import MarketDataTickerDetail from "./MarketDataTickerDetail"
import { connect } from 'react-redux'


class MarketDataTicker extends React.Component{

  getBaseMarketData(asset){
    
    return this.props.baseMarketData.find((data)=>{
      return data.symbol === asset.symbol
    })

  }



  render(){
    return(
      <Grid textAlign="center">
        <Grid.Row columns={5}>
          {this.props.marketData.map((asset)=>{
            return <MarketDataTickerDetail
                    key = {asset.symbol}
                    asset = {asset}
                    baseAssetData = {this.getBaseMarketData(asset)}
            />
          })}

        </Grid.Row>
      </Grid>

    )
  }


}
const mapStateToProps = (state) => {
  return{
    marketData: state.marketData,
    baseMarketData: state.baseMarketData
  }
}



export default connect(mapStateToProps)(MarketDataTicker)
