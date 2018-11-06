import React from "react"
import { connect } from 'react-redux'
import {Container, List, Image} from "semantic-ui-react"
import NewsPageListRow from "./NewsPageListRow"


class NewsPageList extends React.Component{
  render(){
    console.log(this.props.news)
    return(
      <List animated verticalAlign='middle'>
        {this.props.news.map((article, idx)=>{
          return <NewsPageListRow
          key= {idx}
          article = {article}/>
        })}

      </List>

    )
  }

}

const mapStateToProps = (state) => {
  return {news: state.news}
}

export default connect(mapStateToProps)(NewsPageList)
