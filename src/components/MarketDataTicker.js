import React from "react"
import {List, Grid} from "semantic-ui-react"
import MarketDataTickerDetail from "./MarketDataTickerDetail"


class MarketDataTicker extends React.Component{
  render(){
    return(
      <Grid>
        <Grid.Row columns={5}>
          {this.props.marketData.map((asset)=>{
            return <MarketDataTickerDetail
                    key = {asset.symbol}
                    asset = {asset}
            />
          })}

        </Grid.Row>
      </Grid>

    )
  }


}




export default MarketDataTicker
