import React from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router"
import {Loader} from "semantic-ui-react"
import { fetchCurrentUser } from '../redux/actions/authUsersActions'


const withAuth = (WrappedComponent) => {

  class AuthorizedComponent extends React.Component{
      componentDidMount(){
        //if we get a token, see who the user is
        if (localStorage.getItem('jwt') && !this.props.loggedIn){
          this.props.fetchCurrentUser()
        }
      }

      render(){
        //if you're logged in and have a token, generate the wrapped component
        if (localStorage.getItem('jwt') && this.props.loggedIn) {
           return <WrappedComponent />

        }else if (localStorage.getItem('jwt') && this.props.authenticatingUser) {

          return <Loader active inline="centered" />

        }else{
            //not authorized
            //redirect to the login route
             return <Redirect to ="/login" />
        }
      }
  }


  const mapStateToProps = (state) => {
     return {
       loggedIn: state.authUser.loggedIn,
       authenticatingUser: state.authUser.authenticatingUser
     }
   }

   const mapDispatchToProps = (dispatch) => {
     return {
       fetchCurrentUser: () => dispatch(fetchCurrentUser())
     }
   }

   return connect(mapStateToProps, mapDispatchToProps)(AuthorizedComponent)

}

export default withAuth
