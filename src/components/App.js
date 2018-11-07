import React, { Component } from 'react';
import { connect } from 'react-redux'

import Landing from "./Landing"
import Home from "./Home"


export default class App extends Component {


  render() {
    // console.log("render");
    //console.log(this.props);



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
