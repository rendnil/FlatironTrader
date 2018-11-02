import React from "react"
import { connect } from 'react-redux'

class LastTrade extends React.Component{
  render(){
    console.log("last trade", this.props);

    if (this.props.newTrades.length >0){
      
      return(
        <div>
        {this.props.newTrades.map((trade)=>{

          return (<p> {trade.asset.name} {trade.price}</p>)
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
