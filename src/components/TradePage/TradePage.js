import React from "react"
import TradeTable from "./TradeTable"
import TradeForm from "./TradeForm"
import LastTradeContainer from "./LastTradeContainer"
import CurrentPosition from "../CurrentPosition/CurrentPosition"
import {Container} from "semantic-ui-react"
import { connect } from 'react-redux'
import withAuth from "../../hocs/withAuth"


const TradePage = (props) =>{

    return(
      <div>
      <Container>
        <TradeTable baseMarketData={props.baseMarketData} marketData={props.marketData}/>
        <TradeForm />
        <CurrentPosition />
        <LastTradeContainer />
      </Container>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
          marketData: state.marketData,
          baseMarketData: state.baseMarketData
          }
}

export default withAuth(connect(mapStateToProps)(TradePage))
