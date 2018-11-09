import React, { Component } from 'react';
import { connect } from 'react-redux'

import Landing from "./Landing"
import Home from "./Home"


class App extends Component {


  render() {

    return (
      <React.Fragment>

        {/*<Home /> */}

          {this.props.currentUser.username? <Home />:<Landing />}


      </React.Fragment>
    );
  }
}



const mapStateToProps = (state) => {
  return {
          currentUser: state.currentUser

    }

}



export default connect(mapStateToProps)(App)
