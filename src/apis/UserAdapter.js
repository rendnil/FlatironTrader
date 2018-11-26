//adapter for user actions
//fetch all users
//login
//sign up

const API_ENDPOINT = "http://localhost:3001/api/v1"


export default class UserAdapter{

  //get all existing users
  static fetchUsers(){
    return fetch(`${API_ENDPOINT}/users`)
    .then(r => r.json())
  }

  //login user by posting to db
  static loginUser(username, password){
    return fetch(`${API_ENDPOINT}/login`, {
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
    })
  }

  //get information on current user
  static fetchCurrentUser(){
    return fetch(`${API_ENDPOINT}/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
  }

  //sign up by creating a new user 
  static signUpUser(username, email, password){
    return fetch(`${API_ENDPOINT}/users`, {
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
  }


}
