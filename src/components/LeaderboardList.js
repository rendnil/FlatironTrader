import React from "react"
import {List, Grid} from "semantic-ui-react"
import LeaderboardListRow from "./LeaderboardListRow"

class LeaderboardList extends React.Component {




  render(){
    console.log("leaderboard props", this.props);

    const listStyle = {
      width: "50%"
    }

    return(


      <Grid centered>
      <Grid.Row>
      <Grid.Column width={6}>
      <List verticalAlign='middle'>
        {this.props.users.map((user)=>{
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


export default LeaderboardList
