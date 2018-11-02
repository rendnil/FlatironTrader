import React from "react"
import TradeTable from "./TradeTable"
import TradeForm from "./TradeForm"
import {Container, Table} from "semantic-ui-react"


class TradePage extends React.Component{
  render(){
    return(
      <div>
      <Container>
        <TradeTable />
        <TradeForm />
      </Container>
      </div>
    )
  }


}

export default TradePage
