import React from "react"
import {Table} from "semantic-ui-react"

const LastTradeTableRow = ({trade}) =>{

  const determineBuyOrSell = (trade) =>{
    return trade.buy? "Buy" : "Sell"
  }

  return(
    <Table.Row>
      <Table.Cell>{trade.asset.symbol}</Table.Cell>
      <Table.Cell>{trade.asset.name}</Table.Cell>
      <Table.Cell>{determineBuyOrSell(trade)}</Table.Cell>
      <Table.Cell>{trade.price}</Table.Cell>
      <Table.Cell>{trade.quantity}</Table.Cell>
    </Table.Row>
  )
}

export default LastTradeTableRow
