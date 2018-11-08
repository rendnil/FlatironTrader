import React from "react"
import {Container, Table} from "semantic-ui-react"


class PortfolioTableRow extends React.Component{


  determineBuyOrSell(trade){
    return trade.buy? "Buy" : "Sell"
  }

  render(){


    const textStyle = {
      textAlign: "center",

    }



      return(

        <Table.Row>
          <Table.Cell style={textStyle}>{this.props.trade.asset.symbol}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.asset.name}</Table.Cell>
          <Table.Cell style={textStyle}>{this.determineBuyOrSell(this.props.trade)}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.price.toLocaleString()}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.quantity}</Table.Cell>
          <Table.Cell style={textStyle}>{this.props.trade.pnl.toLocaleString()}</Table.Cell>
          </Table.Row>

        )
    }
  }

  export default PortfolioTableRow
