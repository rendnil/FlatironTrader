import React from "react"
import LeaderboardList from "./LeaderboardList"
import {Container} from "semantic-ui-react"
import { connect } from 'react-redux'


class LeaderboardPage extends React.Component{

  render(){
    return(

        <Container textAlign="center">
          <LeaderboardList users={this.props.users}
          marketData={this.props.marketData} />
        </Container>

    )
  }


}

const mapStateToProps = (state) => {
  return{
    users: state.users,
    marketData: state.marketData

  }
}

export default connect(mapStateToProps)(LeaderboardPage)
