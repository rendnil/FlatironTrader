import React from "react"
import { connect } from 'react-redux'
import {Container, Table, Segment, Header} from "semantic-ui-react"
import PortfolioVal from "../../parsers/PortfolioVal"

import PortfolioTableRow from "./PortfolioTableRow"


class PortfolioTable extends React.Component{

/////////////////////////
///these are suitable for full portfolio valuation
    calcTradePnL(trades, marketData){
      return PortfolioVal.calcTradeLevelPnL(this.sortByDate(trades), marketData)
    }

    calcPortfolioPnL(){
      return PortfolioVal.calcPortfolioPnL(this.props.userTrades, this.props.marketData)
  }

//////////////////////////////////////////////////////

  sortByDate(trades){
    return trades.sort((t1, t2)=>{
      return Date.parse(t2.created_at)-Date.parse(t1.created_at)
    })
  }


  render(){


    const headerStyle = {
      textAlign: "center"
    }



    return(
      <div>
        <Container>
        <Segment>
        <Header as="h2" >All Trades </Header>
          <Table compact="very" selectable>
          <Table.Header>
          <Table.Row>
            {/*<Table.HeaderCell colSpan={6} textAlign="right" > Total:{this.calcPortfolioPnL().toLocaleString()} USD </Table.HeaderCell>*/}
          </Table.Row>
        <Table.Row>
        <Table.HeaderCell style={headerStyle}>Date</Table.HeaderCell>
        <Table.HeaderCell style={headerStyle}>Time</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle} >Symbol</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Name</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Buy/Sell</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Price</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>Quantity</Table.HeaderCell>
          <Table.HeaderCell style={headerStyle}>PnL</Table.HeaderCell>
        </Table.Row>
          </Table.Header>

        <Table.Body>
        {this.calcTradePnL(this.props.userTrades, this.props.marketData).map((trade, idx)=> {
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
