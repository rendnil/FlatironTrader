import React from "react"

import {Segment, List} from "semantic-ui-react"


 const LeaderboardListRow = ({user}) =>{

    return(

        <List.Item>
          <Segment >
            <List.Header>
            {user.username}
            </List.Header>

            <List.Content>

              <List.Description>

              </List.Description>
              <List.Header>
                
              </List.Header>

            </List.Content>
          </Segment>
      </List.Item>
    )
}

export default LeaderboardListRow
