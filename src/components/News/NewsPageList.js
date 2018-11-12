import React from "react"
import { connect } from 'react-redux'
import {Container, List, Image} from "semantic-ui-react"
import NewsPageListRow from "./NewsPageListRow"
import {fetchNews} from "../../redux/actions/newsAction"


class NewsPageList extends React.Component{

  componentDidMount(){
    this.props.fetchNews()
  }



  render(){
    console.log("news",this.props.news)

    if (this.props.news){

      return(
        <List animated verticalAlign='middle'>
        {this.props.news.map((article, idx)=>{
          return <NewsPageListRow
          key= {idx}
          article = {article}/>
        })}
        </List>

      )
    }else{
      return null
    }

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
