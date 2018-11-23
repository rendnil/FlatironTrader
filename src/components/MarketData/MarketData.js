import React from "react"

import {fetchHistoricalData} from "../../redux/actions/historicalDataAction"

import { connect } from 'react-redux'
import {fetchMarketData} from "../../redux/actions/marketDataAction"
import {fetchBaseMarketData} from "../../redux/actions/baseMarketDataAction"
import {fetchUsers} from "../../redux/actions/usersAction"

import SocketAdapter from "../../apis/SocketAdapter"


class MarketData extends React.Component {

  constructor(props){
    super(props)
    this.socket = null
  }

  handleMessage = (message)=>{
    this.props.fetchMarketData(message)
  }


  componentDidMount(){

    this.socket = SocketAdapter.createSocketConnection()
    this.socket.on("m", this.handleMessage)

    ///fetch historical data only once instead of on each "Chart Page render"
    this.props.fetchHistoricalData("BTC")
    this.props.fetchHistoricalData("ETH")
    this.props.fetchHistoricalData("LTC")
    this.props.fetchHistoricalData("XRP")
    this.props.fetchHistoricalData("BCH")

    this.props.fetchBaseMarketData()
    this.props.fetchUsers()
  }




  componentWillUnmount() {
    //disconect the socket connection
    this.socket.close()
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
    fetchMarketData: (message)=> dispatch(fetchMarketData(message)),
    fetchHistoricalData: (symbol) => dispatch(fetchHistoricalData(symbol)),
    fetchBaseMarketData: ()=> dispatch(fetchBaseMarketData()),
    fetchUsers: ()=> dispatch(fetchUsers())

  }
}


export default connect(null, mapDispatchToProps)(MarketData)
