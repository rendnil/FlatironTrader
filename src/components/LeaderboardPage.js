import React from "react"
import LeaderboardList from "./LeaderboardList"
import {Container} from "semantic-ui-react"
import { connect } from 'react-redux'


class LeaderboardPage extends React.Component{

  render(){
    return(

        <Container>
          <LeaderboardList users={this.props.users} />
        </Container>

    )
  }


}

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

export default connect(mapStateToProps)(LeaderboardPage)
