import React from "react"

import {Segment, List, Image} from "semantic-ui-react"


 const NewsPageListRow = ({article}) =>{

    return(
        <List.Item>
          <Segment>
            <List.Header>{article.headline}</List.Header>
            <List.Content>

              <List.Description>
                {article.summary}
              </List.Description>
              <List.Header>
                Source: {article.source}
              </List.Header>

            </List.Content>
          </Segment>
      </List.Item>
    )
}

export default NewsPageListRow
