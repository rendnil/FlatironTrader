import React from "react"

import {Segment, Container, List, Image} from "semantic-ui-react"


export default class NewsPageListRow extends React.Component{
  render(){

    return(

        <List.Item>
        <Segment>
        <List.Header>{this.props.article.headline}</List.Header>
        <List.Content>

          <List.Description>
            {this.props.article.summary}
          </List.Description>
          <List.Header>
            Source: {this.props.article.source}
          </List.Header>

        </List.Content>
        </Segment>
      </List.Item>




    )
  }

}
