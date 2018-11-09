import React from "react"

import {Segment, List} from "semantic-ui-react"
import PortfolioVal from "../parsers/PortfolioVal"



 const LeaderboardListRow = (props) =>{


    return(
        <List.Item>
          <Segment >
            <List.Header>
            {props.user.username}
            </List.Header>

            <List.Content floated="right">

              <List.Description>
              PnL: {PortfolioVal.calcPortfolioPnL(props.user.trades, props.marketData).toLocaleString()}
              </List.Description>
              <List.Header>

              </List.Header>

            </List.Content>
          </Segment>
      </List.Item>
    )
}

export default LeaderboardListRow
