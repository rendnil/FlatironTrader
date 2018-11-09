import React from "react"
import Login from "./Login"
import SignUp from "./SignUp"
import {Grid, Container, Segment} from "semantic-ui-react"

const BackgroundImageURL = "https://images.unsplash.com/photo-1534256009774-91785b13a331?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6445acf4ac7731027730ad0bea39fb4&auto=format&fit=crop&w=500&q=60"

const style={
  backgroundImage:`url(${BackgroundImageURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  width: "100%",
  height:"100%"
}
class Landing extends React.Component{


  render(){
    return(
      <div style={style}>
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

export default Landing
