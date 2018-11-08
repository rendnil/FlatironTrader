import React from "react"
import { connect } from 'react-redux'
import {Segment} from "semantic-ui-react"
import CurrentPositionTable from "./CurrentPositionTable"


class CurrentPosition extends React.Component{



  render(){
    console.log("current position", this.props);
    // if(this.props.marketData.iexData){

      // console.log("props", this.props);
      // console.log("user assets", this.getAssets());
      // console.log("user assets", this.calcAssetPosition());
      // console.log("relevantMarketData", this.relevantMarketData());

      return(
        <Segment>

        <h2>Current Position</h2>
        <CurrentPositionTable marketData={this.props.marketData} trades={this.props.currentUser.trades} positions={this.props.currentUser.positions}/>

        {/*this.relevantMarketData().map((position)=>{
          return <p> {position.symbol}--{position.netPosition}--{position.vwap}---PnL: {position.netPosition*(position.price - position.vwap)}</p>
        })*/}


        </Segment>
      )
  //   }else{
  //     return null
  //   }
  //
  }
}

const mapStateToProps = (state) => {
  return {userTrades:state.userTrades,
          currentUser: state.currentUser,
          marketData: state.marketData
  }
}

export default connect(mapStateToProps)(CurrentPosition)
//
