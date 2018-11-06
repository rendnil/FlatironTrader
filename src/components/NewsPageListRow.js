import React from "react"

import {Segment, Container, List, Image} from "semantic-ui-react"


export default class NewsPageListRow extends React.Component{
  render(){

    return(
      <Segment>
      <List.Item>

      <List.Header>{this.props.article.headline}</List.Header>
   <List.Content>
     <List.Description>
        {this.props.article.summary}
     </List.Description>
   </List.Content>
 </List.Item>
 </Segment>



    )
  }

}
