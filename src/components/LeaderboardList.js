import React from "react"
import {List} from "semantic-ui-react"
import LeaderboardListRow from "./LeaderboardListRow"

class LeaderboardList extends React.Component {

  render(){
    console.log("leaderboard props", this.props);
    return(
      <List verticalAlign='middle'>
        {this.props.users.map((user)=>{
          return (
            <LeaderboardListRow key={user.id} user={user} />
          )
        })}
      </List>
    )
  }




}


export default LeaderboardList
