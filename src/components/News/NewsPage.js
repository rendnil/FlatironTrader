import React from "react"
import NewsPageList from "./NewsPageList"
import {Container} from "semantic-ui-react"
import MarketDataTicker from "../MarketData/MarketDataTicker"
import withAuth from "../../hocs/withAuth"


const NewsPage = () =>{

  return(
      <React.Fragment>
        <Container>
          <MarketDataTicker />
          <NewsPageList />
        </Container>
      </React.Fragment>
    )
}


export default withAuth(NewsPage)
