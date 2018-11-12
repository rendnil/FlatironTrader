import React from "react"
import TradeTable from "./TradeTable"
import TradeForm from "./TradeForm"
import LastTradeContainer from "./LastTradeContainer"
import CurrentPosition from "../CurrentPosition/CurrentPosition"
import {Container, Table} from "semantic-ui-react"
import { connect } from 'react-redux'
import withAuth from "../../hocs/withAuth"


class TradePage extends React.Component{
  render(){
   //console.log("render trade page", this.props);
    return(
      <div>
      <Container>
        <TradeTable baseMarketData={this.props.baseMarketData} marketData={this.props.marketData}/>
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
          marketData: state.marketData,
          baseMarketData: state.baseMarketData

          }
}

export default withAuth(connect(mapStateToProps)(TradePage))
