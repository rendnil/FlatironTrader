import React from "react"
import CurrentPosition from "./CurrentPosition"
import PortfolioTable from "./PortfolioTable"
import {Container, Table} from "semantic-ui-react"
import { connect } from 'react-redux'
import MarketDataTicker from "./MarketDataTicker"

class PortfolioPage extends React.Component{
  render(){
    return(
      <React.Fragment>
      <Container>
      <MarketDataTicker/>

      < CurrentPosition/>
      < PortfolioTable/>
      </Container>

      </React.Fragment>
    )
  }
}

export default PortfolioPage
