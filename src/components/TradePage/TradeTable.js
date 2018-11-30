//component for the table of assets w/ prices

import React from "react"
import {Container, Table} from "semantic-ui-react"
import TradeTableRow from "./TradeTableRow"


const TradeTable = (props) =>{

  //render table w/ headers
  return(
    <Container>
      <Table celled selectable textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Symbol</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price (USD)</Table.HeaderCell>
            <Table.HeaderCell>% Change (24hr)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.marketData.map((asset)=>{
            return (
              <TradeTableRow key={asset.name}
              asset={asset}
              baseMarketData = {props.baseMarketData}
              />
            )
          })}
        </Table.Body>
      </Table>
    </Container>
  )
}


export default TradeTable
