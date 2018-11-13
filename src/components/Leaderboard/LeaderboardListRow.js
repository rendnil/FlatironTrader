import React from "react"

import {Table, Icon} from "semantic-ui-react"




 const LeaderboardListRow = ({user, idx}) =>{


    return(
      <Table.Row>
        {idx ===0? <Table.Cell><Icon fitted color="yellow" name="trophy"/></Table.Cell>:<Table.Cell>{idx+1}</Table.Cell>}
        <Table.Cell>{user.username}</Table.Cell>
        <Table.Cell>{Math.round(user.pnl).toLocaleString()}</Table.Cell>
      </Table.Row>
    )
}

export default LeaderboardListRow
