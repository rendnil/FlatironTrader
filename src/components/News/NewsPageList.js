import React from "react"
import { connect } from 'react-redux'
import {Container, List, Image, Header, Icon} from "semantic-ui-react"
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
        <React.Fragment>
        <Header as="h2" textAlign="center" >Latest News </Header>
        <List animated verticalAlign='middle'>
        {this.props.news.map((article, idx)=>{
          return <NewsPageListRow
          key= {idx}
          article = {article}/>
        })}
        </List>
        </React.Fragment>

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
