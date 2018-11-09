import React from "react"
import {List, Grid} from "semantic-ui-react"
import LeaderboardListRow from "./LeaderboardListRow"
import { connect } from 'react-redux'
import PortfolioVal from "../parsers/PortfolioVal"

class LeaderboardList extends React.Component {

  getUsersWithPnL(){
    return this.props.users.map((user)=>{
      return  {...user, pnl:PortfolioVal.calcPortfolioPnL(user.trades, this.props.marketData)}
    })
  }

  sortUsersByPnL(){
    return this.getUsersWithPnL().sort((user1, user2)=>{
      return user2.pnl - user1.pnl
    })
  }


  render(){
    console.log(this.sortUsersByPnL());
    console.log("leaderboard props", this.props);

    const listStyle = {
      width: "50%"
    }

    return(


      <Grid centered>
      <Grid.Row>
      <Grid.Column width={6}>
      <List verticalAlign='middle'>
        {this.sortUsersByPnL().map((user)=>{
          return (
            <LeaderboardListRow key={user.id} user={user}
            marketData={this.props.marketData}/>
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
