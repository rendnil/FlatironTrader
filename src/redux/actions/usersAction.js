import UserAdapter from "../../apis/UserAdapter"



export function fetchUsers(){

  return (dispatch) =>{

    dispatch({type: "about to fetch users data"})

    return UserAdapter.fetchUsers()

     .then(data => {
       console.log("in users", data)
       dispatch({type: "FETCH_USERS_DATA",

                payload: data})
     })
  }
}
