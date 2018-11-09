import React from "react"
import {Grid, Segment, Statistic} from "semantic-ui-react"

class MarketDataTickerDetail extends React.Component{
  render(){
    return(
      <Grid.Column>
      <Segment>
      <Statistic size="mini">
        <Statistic.Label>{this.props.asset.symbol}</Statistic.Label>
        <Statistic.Value>{(this.props.asset.livePrice).toLocaleString()}</Statistic.Value>
      </Statistic>

      </Segment>
      </Grid.Column>

    )
  }


}




export default MarketDataTickerDetail
