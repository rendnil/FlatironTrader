import React from "react"
import { connect } from 'react-redux'

class NewsPage extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div>


      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {news: state.news}
}

export default connect(mapStateToProps)(NewsPage)
