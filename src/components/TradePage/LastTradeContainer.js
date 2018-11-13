import React from "react"
import { connect } from 'react-redux'
import {Container, Table, Segment, Header} from "semantic-ui-react"
import LastTradeTableRow from "./LastTradeTableRow"

class LastTradeContainer extends React.Component{

  determineBuyOrSell(trade){
    return trade.buy? "Buy":"Sell"
  }


  render(){
    const headerStyle = {
      textAlign: "center"
    }
    console.log("last trade", this.props);

    if (this.props.newTrades.length >0){
      let lastThreeTrades = this.props.newTrades.slice(this.props.newTrades.length-3, this.props.newTrades.length)
      return(
        /*<div>
        <h3>Executed Trades</h3>
        {this.props.newTrades.reverse().map((trade)=>{

          return (<p> {trade.asset.name} {trade.price} {trade.quantity}</p>)
        })}

        </div>*/
        <Segment>
        <Header as="h2" attached="top">Recently Executed Trades</Header>
        <Table celled attached selectable>
          <Table.Header>

            <Table.Row>
              <Table.HeaderCell style={headerStyle} >Symbol</Table.HeaderCell>
              <Table.HeaderCell style={headerStyle}>Name</Table.HeaderCell>
              <Table.HeaderCell style={headerStyle}>Buy/Sell</Table.HeaderCell>
              <Table.HeaderCell style={headerStyle}>Price</Table.HeaderCell>
              <Table.HeaderCell style={headerStyle}>Quantity</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

      <Table.Body>

      {this.props.newTrades.map((trade,idx)=>{
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
}

const mapStateToProps = (state) => {
  return {newTrades: state.newTrades}
}


export default connect(mapStateToProps)(LastTradeContainer)
