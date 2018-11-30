//action creator for fetching all users from the db

import UserAdapter from "../../apis/UserAdapter"

export function fetchUsers(){

  return (dispatch) =>{
    dispatch({type: "about to fetch users data"})

    //use adapter for fetch and dispatch the result
    return UserAdapter.fetchUsers()
     .then(data => {
       dispatch({type: "FETCH_USERS_DATA", payload: data})
     })
  }
}
