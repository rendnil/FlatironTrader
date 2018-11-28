//generate list of latest trades for the session

import React from "react"
import { connect } from 'react-redux'
import {Table, Segment, Header} from "semantic-ui-react"
import LastTradeTableRow from "./LastTradeTableRow"

const LastTradeContainer = ({newTrades}) =>{

    if (newTrades.length >0){
      //generate the table for latest trades w/headers
      return(
        <Segment>
          <Header as="h2">Recent Trades</Header>
          <Table textAlign="center" compact="very" selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Symbol</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Buy/Sell</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {newTrades.reverse().map((trade,idx)=>{
                return <LastTradeTableRow key={idx} trade={trade}/>
              })}
            </Table.Body>
          </Table>
        </Segment>
      )

    }else{
      return null
    }


}

const mapStateToProps = (state) => {
  return {newTrades: state.newTrades}
}


export default connect(mapStateToProps)(LastTradeContainer)
