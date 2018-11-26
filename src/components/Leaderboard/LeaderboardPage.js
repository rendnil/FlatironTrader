//component for leaderboard of users

import React from "react"
import LeaderboardList from "./LeaderboardList"
import {Container} from "semantic-ui-react"
import withAuth from "../../hocs/withAuth"
import MarketDataTicker from "../MarketData/MarketDataTicker"


const LeaderboardPage = () =>{

    return(
        <Container textAlign="center">
          <MarketDataTicker/>
          <LeaderboardList />
        </Container>
    )
}


export default withAuth(LeaderboardPage)
