import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./NavBar"
import TradeContainer from "./TradeContainer"
import PortfolioContainer from "./PortfolioContainer"


class Home extends React.Component{

  homeRender(){
    return(
      <h1>
      This is the home page
      </h1>

    )
  }



  render(){
    return(
      <div>
        <Router>
          <React.Fragment>
          <NavBar />
            <Route exact path = "/" render = {this.homeRender}/>
            <Route exact path = "/trade" render = {()=> <TradeContainer/>}/>
            <Route exact path = "/portfolio" render = {()=> <PortfolioContainer/>}/>
          </React.Fragment>
        </Router>


      </div>
    )
  }
}

export default Home
