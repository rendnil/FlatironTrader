import React from "react"
import NewsPageList from "./NewsPageList"
import {Container} from "semantic-ui-react"
import MarketDataTicker from "./MarketDataTicker"


export default class NewsPage extends React.Component{
  render(){
    console.log("render news");

    return(
      <React.Fragment>
        <Container>
          <MarketDataTicker />
          <h2>Latest News</h2>
          <NewsPageList />
        </Container>
      </React.Fragment>
    )
  }

}
