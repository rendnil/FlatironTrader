import IEXDataAdapter from "../../apis/IEXDataAdapter"


export function fetchIEXData(){

  return (dispatch) =>{
    
    dispatch({type: "about to fetch IEX data"})

    return IEXDataAdapter.getCrypto()
    .then(data => dispatch({type: "FETCH_IEX_DATA", payload: data}))


  }


}
