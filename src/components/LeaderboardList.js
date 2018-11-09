import React from "react"
import {List, Grid} from "semantic-ui-react"
import LeaderboardListRow from "./LeaderboardListRow"
import { connect } from 'react-redux'
import PortfolioVal from "../parsers/PortfolioVal"

class LeaderboardList extends React.Component {

  render(){

    console.log("leaderboard props", this.props);

    return(


      <Grid centered>
        <Grid.Row>
          <Grid.Column width={6}>
            <List verticalAlign='middle'>
              {PortfolioVal.sortUsersByPnL(this.props.users, this.props.marketData).map((user)=>{
                return (
                  <LeaderboardListRow key={user.id} user={user}/>
                )
              })}
            </List>
          </Grid.Column>

        </Grid.Row>
      </Grid>

    )
  }




}

const mapStateToProps = (state) => {
  return{
    users: state.users,
    marketData: state.marketData

  }
}

export default connect(mapStateToProps)(LeaderboardList)
