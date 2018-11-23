import React from "react"
import {Container, Table} from "semantic-ui-react"


const PortfolioTableRow = (props) =>{


  const determineBuyOrSell = (trade) =>{
    return trade.buy? "Buy" : "Sell"
  }

   const dateFormat = (rawDate) => {
    let fullDate = new Date(rawDate)

    return `${fullDate.getMonth()+1}/${fullDate.getDate()}/${fullDate.getFullYear()}`
  }

    const timeFormat = (rawDate) =>{
      let fullDate = new Date(rawDate)
      let hours
      let minutes
      let seconds

      if (fullDate.getHours() < 10){
        hours = "0"+fullDate.getHours()
      }else{
        hours = fullDate.getHours()
      }
      if (fullDate.getMinutes() < 10){
        minutes= "0"+fullDate.getMinutes()
      }else{
        minutes = fullDate.getMinutes()
      }
      if (fullDate.getSeconds() < 10){
        seconds = "0"+fullDate.getSeconds()
      }else{
        seconds = fullDate.getSeconds()
      }

      return `${hours}:${minutes}:${seconds}`
    }

      return(

        <Table.Row>
        <Table.Cell>{dateFormat(Date.parse(props.trade.created_at))}</Table.Cell>
        <Table.Cell>{timeFormat(Date.parse(props.trade.created_at))}</Table.Cell>
          <Table.Cell>{props.trade.asset.symbol}</Table.Cell>
          <Table.Cell>{props.trade.asset.name}</Table.Cell>
          <Table.Cell>{determineBuyOrSell(props.trade)}</Table.Cell>
          <Table.Cell>{props.trade.price.toLocaleString()}</Table.Cell>
          <Table.Cell>{props.trade.quantity}</Table.Cell>
          <Table.Cell>{props.trade.pnl.toLocaleString()}</Table.Cell>
          </Table.Row>
        )

  }

  export default PortfolioTableRow
