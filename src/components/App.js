import React, { Component } from 'react';
import { connect } from 'react-redux'

import Login from "./Login"

class App extends Component {
  render() {
    console.log(this.props);


    if (!this.props.marketData.coindeskData || !this.props.marketData.iexData){
      return null
    }


    return (
      <div>
        <Login />
        <h1>Coindesk Bitcoin </h1>
        <p> {this.props.marketData.coindeskData} </p>
        <p> </p>

        <h1>IEX Bitcoin </h1>
        <p> {this.props.marketData.iexData[0].bidPrice} </p>
        <p> {this.props.marketData.iexData[0].latestTime} </p>

        <h1> Implied Tether Price </h1>
        <p> {this.props.marketData.tether}</p>

        <h1>Synthetic Live Price </h1>
        <p> {this.props.marketData.iexData[0].bidPrice*this.props.marketData.tether}</p>
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
