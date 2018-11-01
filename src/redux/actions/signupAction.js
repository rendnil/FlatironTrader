

export function signupAction(username, email, password){

  return (dispatch) =>{

    dispatch({type: "about to sign up"})

    return fetch("http://localhost:3001/api/v1/users",
          {method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user:{
              username: username,
              email: email,
              password: password
            }
          })
          })
    .then(r =>r.json())
    .then(data=> {


      // debugger
      if (data.error ==='failed to create user'){

        dispatch({type: "NOT_VALID_SIGNUP"})
      }else{
        dispatch({type: "LOGIN_USER", payload:data})
      }


    })
    // .then(data => dispatch({type: "FETCH_IEX_DATA", payload: data}))


  }



}
