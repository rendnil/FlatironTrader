//component to display the full list of user trades

import React from "react"
import { connect } from 'react-redux'
import {Container, Table, Segment, Header} from "semantic-ui-react"
import PortfolioVal from "../../parsers/PortfolioVal"
import PortfolioTableRow from "./PortfolioTableRow"


const PortfolioTable = (props) =>{

  //sort the trades with latest first
  const sortByDate = (trades) =>{
    return trades.sort((t1, t2)=>{
      return Date.parse(t2.created_at)-Date.parse(t1.created_at)
    })
  }

//calculate the profit/loss for each individual trade
  const calcTradePnL = (trades, marketData) =>{
    return PortfolioVal.calcTradeLevelPnL(sortByDate(trades), marketData)
  }

  const headerStyle = {
      textAlign: "center"
    }

    //render the table and headers
    return(
      <div>
        <Container>
          <Segment>
          <Header as="h2" >All Trades </Header>
            <Table compact="very" selectable style={headerStyle}>

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  <Table.HeaderCell>Symbol</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Buy/Sell</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>PnL</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {calcTradePnL(props.userTrades, props.marketData).map((trade, idx)=> {
                  return <PortfolioTableRow
                  key={idx}
                  trade = {trade} />
                  })
                }
              </Table.Body>
            </Table>
          </Segment>
        </Container>
      </div>
    )

}

const mapStateToProps = (state) => {
  return {userTrades:state.authUser.user.trades,
          marketData: state.marketData
  }
}

export default connect(mapStateToProps)(PortfolioTable)
