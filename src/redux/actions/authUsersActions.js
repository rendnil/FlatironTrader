
  export const loginUser = (username, password) =>{
    return (dispatch) => {
      dispatch(authenticatingUser())


      fetch("http://localhost:3001/api/v1/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept": 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      }) //end fetch
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

      fetch(`http://localhost:3001/api/v1/profile`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
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


        fetch("http://localhost:3001/api/v1/users", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json'
          },
          body: JSON.stringify({
            user: {
              username: username,
              email: email,
              password: password
            }
          })
        }) //end fetch
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
