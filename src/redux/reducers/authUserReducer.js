const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  failedSignUp: false

}


export default function (state = defaultState, action){

  switch(action.type){

    case "SET_CURRENT_USER":

      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }

    case 'AUTHENTICATING_USER': //tells the app we're fetching
      return { ...state, authenticatingUser: true }

    case 'AUTHENTICATED_USER':
      return { ...state, authenticatingUser: false }

    case 'FAILED_LOGIN': //for error handling
      return {
          ...state,
          failedLogin: true,
          error: action.payload,
          authenticatingUser: false
          }

    case 'FAILED_SIGNUP': //for error handling
      return {
        ...state,
        failedSignUp: true,
        error: action.payload,
        authenticatingUser: false
          }

    case "CREATE_NEW_TRADE":
        return {...state, user:action.payload.user}

    case "SIGN_OUT":
        localStorage.removeItem("jwt")
        return defaultState

    default:
      return state

  }




}
