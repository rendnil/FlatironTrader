import React from "react"
import NewsPageList from "./NewsPageList"
import {Container} from "semantic-ui-react"


export default class NewsPage extends React.Component{
  render(){

    return(
      <React.Fragment>
        <Container>
          <h2>Latest News</h2>
          <NewsPageList />
        </Container>
      </React.Fragment>
    )
  }

}
