import React from "react"

import {Segment, List} from "semantic-ui-react"
import PortfolioVal from "../parsers/PortfolioVal"



 const LeaderboardListRow = ({user}) =>{


    return(
        <List.Item>
          <Segment >
          <List.Content floated="left">
            <List.Header>
            {user.username}
            </List.Header>
          </List.Content>
            <List.Content floated="right">

              <List.Description>
              PnL: {user.pnl.toLocaleString()}
              </List.Description>
              <List.Header>

              </List.Header>

            </List.Content>
          </Segment>
      </List.Item>
    )
}

export default LeaderboardListRow
