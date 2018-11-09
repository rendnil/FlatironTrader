import React from "react"
import {Table, Grid, Icon} from "semantic-ui-react"
import LeaderboardListRow from "./LeaderboardListRow"
import { connect } from 'react-redux'
import PortfolioVal from "../parsers/PortfolioVal"

class LeaderboardList extends React.Component {

  render(){

    console.log("leaderboard props", this.props);

    return(


      <Grid centered>
        <Grid.Row>
          <Grid.Column width={10}>
            <Table celled textAlign='center'>

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Rank</Table.HeaderCell>
                  <Table.HeaderCell><Icon fitted color= "green" name="user circle" size="large"/></Table.HeaderCell>
                  <Table.HeaderCell>PnL</Table.HeaderCell>
                </Table.Row>
              </Table.Header>




              <Table.Body>
              {PortfolioVal.sortUsersByPnL(this.props.users, this.props.marketData).map((user, idx)=>{
                return (
                  <LeaderboardListRow idx={idx} key={user.id} user={user}/>
                )
              })}
              </Table.Body>
            </Table>
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
