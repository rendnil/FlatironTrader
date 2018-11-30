import React from "react"
import {Grid, Segment, Statistic} from "semantic-ui-react"

class MarketDataTickerDetail extends React.Component{

  constructor(props){
    super(props)
    this.interval = null
  }

  state = {
    dataColor: "black"
  }

  componentDidUpdate(previousProps){
    ///check for price changes and make the cell active
    if (previousProps.asset.livePrice < this.props.asset.livePrice){
      this.setState({dataColor: "green"})
      this.revertColor()

    }else if (previousProps.asset.livePrice > this.props.asset.livePrice) {
      this.setState({dataColor: "red"})
      this.revertColor()
    }
  }

  componentWillUnmount() {
    //clear intervals upon unmounting
    clearTimeout(this.interval)

  }


  //revert color back to black
  revertColor(){
    this.interval = setTimeout(()=>this.setState({dataColor: "black"}),4000)
  }

  render(){

    return(
      <Grid.Column>
        <Segment>
          <Statistic color={this.state.dataColor} size="mini">
            <Statistic.Label>{this.props.asset.symbol}</Statistic.Label>
            <Statistic.Value>
              {(this.props.asset.livePrice).toLocaleString("en", {maximumFractionDigits: 2})}
            </Statistic.Value>
          </Statistic>
        </Segment>
      </Grid.Column>
    )
  }
}

export default MarketDataTickerDetail
