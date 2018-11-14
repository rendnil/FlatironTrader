const API_ENDPOINT = "http://localhost:3001/api/v1"


export default class UserAdapter{


  static fetchUsers(){

    return fetch(`${API_ENDPOINT}/users`)
    .then(r => r.json())
  }


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

  static fetchCurrentUser(){
    return fetch(`${API_ENDPOINT}/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
  }

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
