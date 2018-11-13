import React from "react"

import {Segment, List, Image} from "semantic-ui-react"


 const NewsPageListRow = ({article}) =>{
  

    const parseArticle = (article) => {
      return article.replace(/&#8217;|[&#8230;]|/g, "")

    }


    return(

        <List.Item>
          <Segment >
            <List.Header>
              <Image avatar src={article.imageurl}/>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </List.Header>

            <List.Content>
              <List.Description>
                {(parseArticle(article.body))}
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
