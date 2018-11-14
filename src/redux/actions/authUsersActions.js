import UserAdapter from "../../apis/UserAdapter"


  export const loginUser = (username, password) =>{
    return (dispatch) => {
      dispatch(authenticatingUser())

      UserAdapter.loginUser(username, password)

      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }

      })
      .then(JSONResponse => {

        localStorage.setItem('jwt', JSONResponse.jwt)

        dispatch(setCurrentUser(JSONResponse.user))
      })

       .catch(response => response.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
    }
  }//end login user

  export const fetchCurrentUser = () => {

    return (dispatch) => {
      dispatch(authenticatingUser()) //tells the app we are fetching


      UserAdapter.fetchCurrentUser()
        .then(response => response.json())
        .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
    }
  }

  export const setCurrentUser = (userData) => ({
    type: 'SET_CURRENT_USER',
    payload: userData
  })

  export const failedLogin = (errorMsg) => ({
    type: 'FAILED_LOGIN',
    payload: errorMsg
  })

  // tell our app we're currently fetching
  export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })



  export const signUpUser = (username, email, password) =>{
      return (dispatch) => {
        dispatch(authenticatingUser())

        UserAdapter.signUpUser(username, email, password)

        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw response
          }

        })
        .then(JSONResponse => {

          localStorage.setItem('jwt', JSONResponse.jwt)

          dispatch(setCurrentUser(JSONResponse.user))
        })

         .catch(response => response.json().then(e => dispatch({ type: 'FAILED_SIGNUP', payload: e.message })))
      }
    }//end sign up user
