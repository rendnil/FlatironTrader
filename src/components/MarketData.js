import React from "react"
import {fetchIEXData} from "../redux/actions/iexAction"
import {fetchCoindeskData} from "../redux/actions/coindeskAction"
import {fetchAssetData} from "../redux/actions/assetAction"
import { connect } from 'react-redux'

class MarketData extends React.Component {

  constructor(props){
    super(props)
    this.iex_interval = null
    this.coindesk_interval = null
  }


  componentDidMount(){
    console.log("mounted");
    this.props.fetchAssetData()
    this.props.fetchIEXData()
    this.props.fetchIEXData()
    this.props.fetchCoindeskData()
    this.props.fetchCoindeskData()
    this.props.fetchCoindeskData()
    this.props.fetchCoindeskData()
    this.props.fetchCoindeskData()
    this.props.fetchCoindeskData()
    this.props.fetchCoindeskData()
    this.props.fetchCoindeskData()


    this.iex_interval = setInterval(this.props.fetchIEXData, 1000)
    this.coindesk_interval = setInterval(this.props.fetchCoindeskData, 10000)
  }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.iex_interval)
    clearInterval(this.coindesk_interval)
  }

  render(){
    console.log("rendered");

    return(
      <React.Fragment>

      </React.Fragment>
    )
  }



}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIEXData: () => dispatch(fetchIEXData()),
    fetchCoindeskData: () => dispatch(fetchCoindeskData()),
    fetchAssetData: () => dispatch(fetchAssetData())

  }
}


export default connect(null, mapDispatchToProps)(MarketData)
