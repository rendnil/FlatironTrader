import React from "react"

import {fetchHistoricalData} from "../redux/actions/historicalDataAction"

import { connect } from 'react-redux'
import {fetchMarketData} from "../redux/actions/marketDataAction"
import {fetchBaseMarketData} from "../redux/actions/baseMarketDataAction"
import {fetchUsers} from "../redux/actions/usersAction"

import io from 'socket.io-client';

let socket = null


class MarketData extends React.Component {


  handleMessage = (message)=>{
    this.props.fetchMarketData(message)
  }


  componentDidMount(){

   socket = io.connect('https://streamer.cryptocompare.com/');

  //Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
  //Use SubscriptionId 0 for TRADE, 2 for CURRENT, 5 for CURRENTAGG eg use key '5~CCCAGG~BTC~USD' to get aggregated data from the CCCAGG exchange
  //Full Volume Format: 11~{FromSymbol} eg use '11~BTC' to get the full volume of BTC against all coin pairs
  //For aggregate quote updates use CCCAGG ags market

  const subscription = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD','5~CCCAGG~BCH~USD','5~CCCAGG~XRP~USD','5~CCCAGG~LTC~USD'];
  socket.emit('SubAdd', { subs: subscription });
  socket.on("m", this.handleMessage)

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
    socket.close()

  }

  render(){
    let dataCount = 1
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
