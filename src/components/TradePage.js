import React from "react"
import TradeTable from "./TradeTable"
import TradeForm from "./TradeForm"
import LastTradeContainer from "./LastTradeContainer"
import CurrentPosition from "./CurrentPosition"
import {Container, Table} from "semantic-ui-react"


class TradePage extends React.Component{
  render(){
    console.log("render trade page");
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

export default TradePage
