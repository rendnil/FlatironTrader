import React from "react"
import {fetchIEXData} from "../redux/actions/iexAction"
import { connect } from 'react-redux'

class MarketData extends React.Component {

  constructor(props){
    super(props)
    this.iex_interval = null
  }


  componentDidMount(){

    this.iex_interval = setInterval(this.props.fetchIEXData, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.iex_interval)
  }

  render(){
    return(
      <div>
        hey
      </div>
    )
  }



}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIEXData: () => dispatch(fetchIEXData())
  }
}

export default connect(null, mapDispatchToProps)(MarketData)
