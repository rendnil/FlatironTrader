//component for the portfolio page of application

import React from "react"
import CurrentPosition from "../CurrentPosition/CurrentPosition"
import PortfolioTable from "./PortfolioTable"
import {Container} from "semantic-ui-react"
import MarketDataTicker from "../MarketData/MarketDataTicker"
import withAuth from "../../hocs/withAuth"

const PortfolioPage = () =>{

    return(
      <React.Fragment>
        <Container>
          <MarketDataTicker/>
          <CurrentPosition/>
          <PortfolioTable/>
        </Container>
      </React.Fragment>
    )

}

export default withAuth(PortfolioPage)
