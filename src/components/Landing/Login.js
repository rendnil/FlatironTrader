import React from "react"
import { Container, Header, Form, Button, Message } from 'semantic-ui-react'

import { connect } from 'react-redux'

import {loginUser} from "../../redux/actions/authUsersActions"



class Login extends React.Component{

  state = {
    username: "",
    password: ""

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.loginUser(this.state.username, this.state.password)
  }


  loginError = () => {
    return(<Message
          negative
          header='Error'
          content='Invalid username and/or password'/>)
  }

  render(){
    return (
      <div>
        <Container style={{textAlign: "center", width: "50%", marginTop:"20%"}}>
          <Form onSubmit={this.handleSubmit}>
          <Header size="large">Log In</Header>
          <Form.Field>
            <input name="username" onChange={this.handleChange} value = {this.state.username} placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <input type="password" name="password" onChange={this.handleChange} value = {this.state.password} placeholder='Password' />
          </Form.Field>

          <Button color="green" type='submit'>Submit</Button>
        </Form>
        {this.props.failedLogin ? this.loginError() : null}

        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticatingUser: state.authUser.authenticatingUser,
    failedLogin: state.authUser.failedLogin,
    error: state.authUser.error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username,password))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
