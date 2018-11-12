import React from "react"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NavBar from "./NavBar"
import TradePage from "./TradePage"
import PortfolioPage from "./PortfolioPage"
import NewsPage from "./NewsPage"
import ChartPage from "./ChartPage"
import LeaderboardPage from "./LeaderboardPage"
import Login from "./Login"
import Landing from "./Landing"


class Home extends React.Component{


  render(){
    return(
      <div>
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path = "/" render = {()=> <Redirect to="/news" />}/>
            <Route exact path = "/news" render = {()=> <NewsPage/>}/>
            <Route exact path = "/login" render = {()=> <Landing/>}/>
            <Route exact path = "/charts" render = {()=> <ChartPage/>}/>
            <Route exact path = "/trade" render = {()=> <TradePage/>}/>
            <Route exact path = "/portfolio" render = {()=> <PortfolioPage/>}/>
            <Route exact path = "/leaderboard" render = {()=> <LeaderboardPage/>}/>
          </React.Fragment>
        </Router>


      </div>
    )
  }
}

export default Home
