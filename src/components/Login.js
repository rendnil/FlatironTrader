import React from "react"
import { Container, Header, Form, Button, Checkbox, Message } from 'semantic-ui-react'
import {loginAction} from "../redux/actions/loginAction"
import { connect } from 'react-redux'

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
    this.props.loginAction(this.state.username, this.state.password)
  }


  loginError = () => {
    return(<Message
          negative
          header='Error'
          content='Invalid username and/or password'
            />)
  }

  render(){
    return(
      <div>
        <Container style={{textAlign: "center", width: "50%", marginTop:"20%"}}>
          <Form onSubmit={this.handleSubmit}>
          <Header size="large">Login</Header>
          <Form.Field>
            <input name="username" onChange={this.handleChange} value = {this.state.username} placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <input type="password" name="password" onChange={this.handleChange} value = {this.state.password} placeholder='Password' />
          </Form.Field>



          <Button type='submit'>Submit</Button>
          {this.props.currentUser === "Invalid login attempt"? this.loginError():null }
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
    loginAction: (username, password) => dispatch(loginAction(username,password))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
