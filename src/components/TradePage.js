import React from "react"
import TradeTable from "./TradeTable"
import TradeForm from "./TradeForm"
import LastTrade from "./LastTrade"
import CurrentPosition from "./CurrentPosition"
import {Container, Table} from "semantic-ui-react"


class TradePage extends React.Component{
  render(){
    return(
      <div>
      <Container>
        <TradeTable />
        <TradeForm />
        <LastTrade />
        <CurrentPosition />
      </Container>
      </div>
    )
  }


}

export default TradePage
