import NewsAdapter from "../../apis/NewsAdapter"


export function fetchNews(){

  return (dispatch) =>{

    dispatch({type: "about to fetch news"})

    return NewsAdapter.getNews()
    .then(data => dispatch({type: "FETCH_NEWS", payload: data}))


  }


}
