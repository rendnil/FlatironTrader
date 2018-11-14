import React from "react"

import {Table, Icon, Label} from "semantic-ui-react"




 const LeaderboardListRow = ({user, idx, currentUser}) =>{

   const determineSign = () =>{
     return user.pnl>0? true: false
   }

    return(
      <React.Fragment>

      <Table.Row positive={determineSign()} negative={!determineSign()}>
        {idx ===0? <Table.Cell>
          <Icon fitted color="yellow" name="trophy"/></Table.Cell>:<Table.Cell>{idx+1}</Table.Cell>}
        <Table.Cell>{user.username}</Table.Cell>
        <Table.Cell>
        {user.username === currentUser.username?
        <Label color='blue' tag>
        {Math.round(user.pnl).toLocaleString("en", {maximumFractionDigits: 2})}
        </Label>
        : Math.round(user.pnl).toLocaleString("en", {maximumFractionDigits: 2})}
        </Table.Cell>
      </Table.Row>

      </React.Fragment>
    )
}

export default LeaderboardListRow
