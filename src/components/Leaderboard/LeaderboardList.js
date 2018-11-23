import React from "react"
import {Table, Grid, Icon} from "semantic-ui-react"
import LeaderboardListRow from "./LeaderboardListRow"
import { connect } from 'react-redux'
import PortfolioVal from "../../parsers/PortfolioVal"

const LeaderboardList = (props) => {

    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={10}>
            <Table compact="very" celled textAlign='center'>

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Rank</Table.HeaderCell>
                  <Table.HeaderCell><Icon fitted color= "violet" name="user circle" size="large"/></Table.HeaderCell>
                  <Table.HeaderCell>Portfolio Value</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

                <Table.Body>
                  {PortfolioVal.sortUsersByPnL(props.users, props.marketData).map((user, idx)=>{
                    return (
                      <LeaderboardListRow idx={idx} key={user.id} user={user} currentUser={props.currentUser}/>
                    )
                  })}
                </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )

}

const mapStateToProps = (state) => {
  return{
    users: state.users,
    marketData: state.marketData,
    currentUser:state.authUser.user
  }
}

export default connect(mapStateToProps)(LeaderboardList)
