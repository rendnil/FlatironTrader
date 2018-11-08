import React from "react"
import { connect } from 'react-redux'
import {Container, Table, Segment} from "semantic-ui-react"

import PortfolioTableRow from "./PortfolioTableRow"


class PortfolioTable extends React.Component{

    calcTradePnL(){

      let tradesWithPnL = []
      this.props.userTrades.forEach((trade)=>{
        this.props.marketData.forEach((asset)=>{
          if (asset.symbol===trade.asset.symbol){
            trade.pnl = (asset.livePrice - trade.price)*trade.quantity
            tradesWithPnL.push(trade)
          }
        })
      })
      return tradesWithPnL

    }




  render(){
    console.log("trade table", this.props);


    const headerStyle = {
      textAlign: "center"
    }

    return(
      <div>
        <Container>
        <Segment>
        <h2>All Trades</h2>
          <Table celled selectable>
          <Table.Header>
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
  return {userTrades:state.userTrades,
          marketData: state.marketData
  }
}

export default connect(mapStateToProps)(PortfolioTable)
