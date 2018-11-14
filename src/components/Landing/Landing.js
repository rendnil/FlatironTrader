import React from "react"
import Login from "./Login"
import SignUp from "./SignUp"
import {Grid, Container, Segment, Header, Icon} from "semantic-ui-react"
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import withAuth from '../../hocs/withAuth'

const BackgroundImageURL = "https://images.unsplash.com/photo-1534256009774-91785b13a331?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6445acf4ac7731027730ad0bea39fb4&auto=format&fit=crop&w=500&q=60"

const style={
  // backgroundImage:`url(${BackgroundImageURL})`,
  backgroundColor: "blue",
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  width: "100%",
  height:"100%"
}
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
    authenticatingUser: state.authUser.authenticatingUser,
    failedLogin: state.authUser.failedLogin,
    error: state.authUser.error,
    loggedIn: state.authUser.loggedIn,
    }
}

export default connect(mapStateToProps)(Landing)
