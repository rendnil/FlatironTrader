import React from "react"
import {Table, Icon, Label} from "semantic-ui-react"

 const LeaderboardListRow = ({user, idx, currentUser}) =>{

    return(
      <React.Fragment>
        {/* show row color based on whether pnl is positive or negative */}
        <Table.Row positive={user.pnl >=0} negative={user.pnl<0}>

        {/* trophy icon if user has top pnl */}
          {idx ===0? (<Table.Cell>
            <Icon fitted color="yellow" name="trophy"/></Table.Cell>):(<Table.Cell>{idx+1}</Table.Cell>)}

          <Table.Cell>{user.username}</Table.Cell>

        {/* tag icon to show current user */}
          <Table.Cell>
          {user.username === currentUser.username?
            (<Label color='blue' tag>
            {Math.round(user.pnl).toLocaleString("en", {maximumFractionDigits: 2})}
            </Label>)
            : (Math.round(user.pnl).toLocaleString("en", {maximumFractionDigits: 2}))}
          </Table.Cell>
        </Table.Row>
      </React.Fragment>
    )
}

export default LeaderboardListRow
