//component for displaying the market data tickers

import React from "react"
import {Grid} from "semantic-ui-react"
import MarketDataTickerDetail from "./MarketDataTickerDetail"
import { connect } from 'react-redux'


const MarketDataTicker = (props) =>{

  //method to generate the initial market prices for the start of day
  const getBaseMarketData = (asset) =>{
    return props.baseMarketData.find((data)=>{
      return data.symbol === asset.symbol
    })
  }

  //generate the row of tickers
    return(
      <Grid textAlign="center">
        <Grid.Row columns={5}>
          {props.marketData.map((asset)=>{
            return <MarketDataTickerDetail
                    key = {asset.symbol}
                    asset = {asset}
                    baseAssetData = {getBaseMarketData(asset)}
            />
          })}
        </Grid.Row>
      </Grid>
    )
}

const mapStateToProps = (state) => {
  return{
    marketData: state.marketData,
    baseMarketData: state.baseMarketData
  }
}



export default connect(mapStateToProps)(MarketDataTicker)
