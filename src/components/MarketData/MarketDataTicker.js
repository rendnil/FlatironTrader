//component for displaying the market data tickers 

import React from "react"
import {Grid} from "semantic-ui-react"
import MarketDataTickerDetail from "./MarketDataTickerDetail"
import { connect } from 'react-redux'


const MarketDataTicker = (props) =>{

  const getBaseMarketData = (asset) =>{
    return props.baseMarketData.find((data)=>{
      return data.symbol === asset.symbol
    })
  }

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
