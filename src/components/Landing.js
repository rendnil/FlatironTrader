import React from "react"
import Login from "./Login"
import SignUp from "./SignUp"


class Landing extends React.Component{

  render(){
    return(
      <div>
        <div>
        <Login />
        </div>

        <div>
        <SignUp />
        </div>

      </div>
    )
  }

}

export default Landing
