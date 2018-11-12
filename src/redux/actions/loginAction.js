

export function loginAction(username, password){

  return (dispatch) =>{

    dispatch({type: "about to log in"})

    return fetch("http://localhost:3001/api/v1/login",
          {method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user:{
              username: username,
              password: password
            }
          })
          })
    .then(r =>r.json())
    .then(data=> {
      console.log("this is what we get back from server", data)

      //debugger
      if (data.message ==="Invalid username or password"){

        dispatch({type: "NOT_VALID"})
      }else{
        // debugger
        dispatch({type: "LOGIN_USER", payload:data})
      }


    })
    // .then(data => dispatch({type: "FETCH_IEX_DATA", payload: data}))


  }



}
