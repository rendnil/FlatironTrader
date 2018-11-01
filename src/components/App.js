import React, { Component } from 'react';
import { connect } from 'react-redux'

import Landing from "./Landing"
import Home from "./Home"


class App extends Component {

  MarketFeed = () => {
    if (!this.props.marketData.coindeskData || !this.props.marketData.iexData){
      return null
    }else{
    return(
      <div>
      <h1>Coindesk Bitcoin </h1>
      <p> {this.props.marketData.coindeskData} </p>


      <h1>IEX Bitcoin </h1>
      <p> {this.props.marketData.iexData[0].bidPrice} </p>
      <p> {this.props.marketData.iexData[0].latestTime} </p>

      <h1> Implied Tether Price </h1>
      <p> {this.props.marketData.tether}</p>

      <h1>Synthetic Live Price </h1>
      <p> {this.props.marketData.iexData[0].bidPrice*this.props.marketData.tether}</p>
      </div>
    )
  }
  }


  render() {
    console.log("render");
    console.log(this.props);



    return (
      <div>
        <Home />
        {/*NEED TO REENABLE THIS
          {this.props.currentUser.username? <Home />:<Landing />}


          */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {marketData: state.marketData,
          currentUser: state.currentUser
    }

}



export default connect(mapStateToProps)(App)
