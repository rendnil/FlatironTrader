import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./NavBar"
import TradePage from "./TradePage"
import PortfolioPage from "./PortfolioPage"
import NewsPage from "./NewsPage"
import ChartPage from "./ChartPage"


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
            <Route exact path = "/" render = {()=> <NewsPage/>}/>
            <Route exact path = "/charts" render = {()=> <ChartPage/>}/>
            <Route exact path = "/trade" render = {()=> <TradePage/>}/>
            <Route exact path = "/portfolio" render = {()=> <PortfolioPage/>}/>
          </React.Fragment>
        </Router>


      </div>
    )
  }
}

export default Home
