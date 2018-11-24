import React from "react"
import Login from "./Login"
import SignUp from "./SignUp"
import {Grid, Container, Header, Icon} from "semantic-ui-react"
import { connect } from 'react-redux'
import { Redirect } from 'react-router'



const Landing = (props) =>{

    return props.loggedIn? ( <Redirect to="/news" />):

    (
      <div >
      <Container >
        <div>
          <Header style={{ marginTop:"10%"}} as='h1' color="teal"textAlign='center'>
            <Icon name='btc' />Flatiron Trader</Header>
        </div>

        <Grid columns={2}>
          <Grid.Row >
            <Grid.Column verticalAlign="top">
              <Login />
            </Grid.Column>

            <Grid.Column verticalAlign="top">
              <SignUp />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authUser.loggedIn
    }
}

export default connect(mapStateToProps)(Landing)
