import React from "react"
import Login from "./Login"
import SignUp from "./SignUp"
import {Grid, Container, Segment} from "semantic-ui-react"
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import withAuth from '../hocs/withAuth'

const BackgroundImageURL = "https://images.unsplash.com/photo-1534256009774-91785b13a331?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6445acf4ac7731027730ad0bea39fb4&auto=format&fit=crop&w=500&q=60"

const style={
  // backgroundImage:`url(${BackgroundImageURL})`,
  backgroundColor: "blue",
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  width: "100%",
  height:"100%"
}
class Landing extends React.Component{


  render(){
    console.log("landing", this.props)
    return this.props.loggedIn? ( <Redirect to="/news" />):

    (
      <div >
      <Container >
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
