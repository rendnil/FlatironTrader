import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props);

    // if (!this.props.iexData[0]){
    //   return null
    // }
    // <h1>Coindesk Bitcoin </h1>
    // <p> {this.props.coindeskData} </p>
    // <h1>Coindesk Tether </h1>
    // <p> {this.props.tether} </p>
    // <h1>IEX Bitcoin </h1>
    // <p> {this.props.iexData[0].bidPrice} </p>
    // <h1>Synthetic IEX Bitcoin </h1>
    // <p> {this.props.iexData[0].bidPrice * this.props.tether} </p>



    return (
      <div>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {marketData: state.marketData
  }
}



export default connect(mapStateToProps)(App)
