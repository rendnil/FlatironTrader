//component for the list of news articles

import React from "react"
import { connect } from 'react-redux'
import {List} from "semantic-ui-react"
import NewsPageListRow from "./NewsPageListRow"
import {fetchNews} from "../../redux/actions/newsAction"


class NewsPageList extends React.Component{

  //fetch the latest news articles
  componentDidMount(){
    this.props.fetchNews()
  }

  //render list of articles
  render(){
    return (!this.props.news? null :
      (
        <React.Fragment>
          <List animated verticalAlign='middle'>
            {this.props.news.map((article, idx)=>{
              return <NewsPageListRow
              key= {idx}
              article = {article}/>
            })}
          </List>
        </React.Fragment>
      ))
  }
}

const mapStateToProps = (state) => {
  return {news: state.news}
}

const mapDispatchToProps = (dispatch) => {
  return {
     fetchNews: () => dispatch(fetchNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageList)
