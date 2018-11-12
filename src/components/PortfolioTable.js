import React from "react"
import { connect } from 'react-redux'
import {Container, Table, Segment} from "semantic-ui-react"
import PortfolioVal from "../parsers/PortfolioVal"

import PortfolioTableRow from "./PortfolioTableRow"


class PortfolioTable extends React.Component{

/////////////////////////
///these are suitable for full portfolio valuation
    calcTradePnL(trades, marketData){
      return PortfolioVal.calcTradeLevelPnL(this.props.userTrades, this.props.marketData)
    }

    calcPortfolioPnL(){
      return PortfolioVal.calcPortfolioPnL(this.props.userTrades, this.props.marketData)
  }

//////////////////////////////////////////////////////




  render(){
    //console.log("did I mutate this", this.props);


    const headerStyle = {
      textAlign: "center"
    }

    return(
      <div>
        <Container>
        <Segment>
        <h2>All Trades </h2>
          <Table celled selectable>
          <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={6} textAlign="right" > Total:{this.calcPortfolioPnL().toLocaleString()} USD </Table.HeaderCell>
          </Table.Row>
        <Table.Row>
          <Table.HeaderCell style={headerStyle} >Symbol</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Name</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Buy/Sell</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Price</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Quantity</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>PnL</Table.HeaderCell>
        </Table.Row>
          </Table.Header>

        <Table.Body>
        {this.calcTradePnL().map((trade, idx)=> {
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
}

const mapStateToProps = (state) => {
  return {userTrades:state.authUser.user.trades,
          marketData: state.marketData

  }
}

export default connect(mapStateToProps)(PortfolioTable)
