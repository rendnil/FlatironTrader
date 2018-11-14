import React from "react"
import {Container, Table} from "semantic-ui-react"


class PortfolioTableRow extends React.Component{


  determineBuyOrSell(trade){
    return trade.buy? "Buy" : "Sell"
  }

   dateFormat(rawDate){
    let fullDate = new Date(rawDate)

    return `${fullDate.getMonth()+1}/${fullDate.getDate()}/${fullDate.getFullYear()}`
  }

    timeFormat(rawDate){
      let fullDate = new Date(rawDate)

      return `${fullDate.getHours()}:${fullDate.getMinutes()}:${fullDate.getSeconds()}`
    }

  render(){

    const textStyle = {
      textAlign: "center",

    }



      return(

        <Table.Row>
        <Table.Cell style={textStyle}>{this.dateFormat(Date.parse(this.props.trade.created_at))}</Table.Cell>
        <Table.Cell style={textStyle}>{this.timeFormat(Date.parse(this.props.trade.created_at))}</Table.Cell>
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
