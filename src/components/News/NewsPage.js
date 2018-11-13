import React from "react"
import NewsPageList from "./NewsPageList"
import {Container} from "semantic-ui-react"
import MarketDataTicker from "../MarketData/MarketDataTicker"
import withAuth from "../../hocs/withAuth"

import { connect } from 'react-redux'


class NewsPage extends React.Component{
  render(){

    return(
      <React.Fragment>
        <Container>
          <MarketDataTicker />
          <NewsPageList />
        </Container>
      </React.Fragment>
    )
  }

}
const mapStateToProps = (state) => {
  return {state: state}
}

export default withAuth(connect(mapStateToProps)(NewsPage))
