import React from "react"
import {fetchIEXData} from "../redux/actions/iexAction"
import {fetchCoindeskData} from "../redux/actions/coindeskAction"
import {fetchAssetData} from "../redux/actions/assetAction"
import {fetchNews} from "../redux/actions/newsAction"
import { connect } from 'react-redux'


import io from 'socket.io-client';

class MarketData extends React.Component {

  constructor(props){
    super(props)
    this.iex_interval = null
    this.coindesk_interval = null
  }


  componentDidMount(){
    console.log("mounted");
    //var currentPrice = {};
   const socket = io.connect('https://streamer.cryptocompare.com/');
//Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
//Use SubscriptionId 0 for TRADE, 2 for CURRENT, 5 for CURRENTAGG eg use key '5~CCCAGG~BTC~USD' to get aggregated data from the CCCAGG exchange
//Full Volume Format: 11~{FromSymbol} eg use '11~BTC' to get the full volume of BTC against all coin pairs
//For aggregate quote updates use CCCAGG ags market
const subscription = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD','5~CCCAGG~BCH~USD','5~CCCAGG~XRP~USD','5~CCCAGG~LTC~USD'];
socket.emit('SubAdd', { subs: subscription });
socket.on("m", function(message) {
  console.log(message);
})





    // this.props.fetchNews()
    // this.props.fetchAssetData()
    // this.props.fetchIEXData()
    // this.props.fetchIEXData()
    // this.props.fetchCoindeskData()
    // this.props.fetchCoindeskData()
    // this.props.fetchCoindeskData()
    // this.props.fetchCoindeskData()
    // this.props.fetchCoindeskData()
    // this.props.fetchCoindeskData()
    // this.props.fetchCoindeskData()
    // this.props.fetchCoindeskData()
    //
    //
    // this.iex_interval = setInterval(this.props.fetchIEXData, 1000)
    // this.coindesk_interval = setInterval(this.props.fetchCoindeskData, 10000)
  }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.iex_interval)
    clearInterval(this.coindesk_interval)
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
    fetchIEXData: () => dispatch(fetchIEXData()),
    fetchCoindeskData: () => dispatch(fetchCoindeskData()),
    fetchAssetData: () => dispatch(fetchAssetData()),
    fetchNews: () => dispatch(fetchNews())

  }
}


export default connect(null, mapDispatchToProps)(MarketData)
