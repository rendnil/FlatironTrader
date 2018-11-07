import React from "react"
import TradeTable from "./TradeTable"
import TradeForm from "./TradeForm"
import LastTradeContainer from "./LastTradeContainer"
import CurrentPosition from "./CurrentPosition"
import {Container, Table} from "semantic-ui-react"
import { connect } from 'react-redux'


class TradePage extends React.Component{
  render(){
    console.log("render trade page", this.props);
    return(
      <div>
      <Container>
        <TradeTable />
        <TradeForm />
        <CurrentPosition />
        <LastTradeContainer />
      </Container>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
          marketData: state.marketData
          }
}

export default connect(mapStateToProps)(TradePage)
