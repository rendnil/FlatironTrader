import React from "react"
import {Container, Table} from "semantic-ui-react"

class LastTradeTableRow extends React.Component{


  determineBuyOrSell(trade){
    return trade.buy? "Buy" : "Sell"
  }

  render(){


    const textStyle = {
      textAlign: "center",

    }


      //console.log(this.props);
      console.log("last trade row", this.props);
      return(

        <Table.Row>
          <Table.Cell style={textStyle}>{this.props.trade.asset.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.asset.name}</Table.Cell>
          <Table.Cell style={textStyle}>{this.determineBuyOrSell(this.props.trade)}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.price}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.quantity}</Table.Cell>

        </Table.Row>

        )
    }
  }

  export default LastTradeTableRow
