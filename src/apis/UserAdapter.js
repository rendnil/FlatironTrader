const API_ENDPOINT = "http://localhost:3001/api/v1"

export default class UserAdapter{
  static fetchUsers(){

    return fetch(`${API_ENDPOINT}/users`)
    .then(r => r.json())
  }
}
