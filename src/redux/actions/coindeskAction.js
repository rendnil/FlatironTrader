import CoindeskAdapter from "../../apis/CoindeskAdapter"



export function fetchCoindeskData(){



  return (dispatch) =>{

    dispatch({type: "about to fetch Coindesk data"})

    return CoindeskAdapter.getBitcoin()

     .then(data => {
       dispatch({type: "FETCH_COINDESK_DATA", payload: data})
     })
  }
}
