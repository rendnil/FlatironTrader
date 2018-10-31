import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props.iexData[0]);

    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {iexData: state.iexData}
}



export default connect(mapStateToProps)(App)
