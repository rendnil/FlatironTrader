import React from "react"
import { connect } from 'react-redux'

class LastTrade extends React.Component{
  render(){
    console.log("last trade", this.props);

    if (this.props.newTrades.length >0){
      let lastThreeTrades = this.props.newTrades.slice(this.props.newTrades.length-3, this.props.newTrades.length)
      return(
        <div>
        <h3>Executed Trades</h3>
        {this.props.newTrades.reverse().map((trade)=>{

          return (<p> {trade.asset.name} {trade.price} {trade.quantity}</p>)
        })}

        </div>
      )

    }else{
      return null
    }

  }
}

const mapStateToProps = (state) => {
  return {newTrades: state.newTrades}
}


export default connect(mapStateToProps)(LastTrade)
