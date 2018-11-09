import React from "react"
import { Container, Header, Form, Button, Checkbox, Message } from 'semantic-ui-react'
import {signupAction} from "../redux/actions/signupAction"
import { connect } from 'react-redux'

class SignUp extends React.Component{

  state = {
    username: "",
    email: "",
    password: ""

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.signupAction(this.state.username, this.state.email, this.state.password)
  }


  loginError = () => {
    return(<Message
          negative
          header='Error'
          content='Invalid username, email, and/or password'/>)
  }

  render(){
    return(
      <div>
        <Container style={{textAlign: "center", width: "50%", marginTop:"30%"}}>
          <Form onSubmit={this.handleSubmit}>
          <Header size="large">Sign Up</Header>
          <Form.Field>
            <input name="username" onChange={this.handleChange} value = {this.state.username} placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <input type="email" name="email" onChange={this.handleChange} value = {this.state.email} placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <input type="password" name="password" onChange={this.handleChange} value = {this.state.password} placeholder='Password' />
          </Form.Field>



          <Button color="blue" type='submit'>Submit</Button>
          {this.props.currentUser === "Invalid sign up attempt"? this.loginError():null }
        </Form>

        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
          currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupAction: (username, email, password) => dispatch(signupAction(username,email, password))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
