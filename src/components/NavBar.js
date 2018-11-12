import React from "react"
import {NavLink } from 'react-router-dom';
import {Container, Header, Menu, Icon, Image, Button} from "semantic-ui-react"
import { connect } from 'react-redux'
import {signOut} from "../redux/actions/signOutAction"

const NavBar = (props) => {

  const handleSignOut = () => {
    props.signOut()
  }


  return(
    <div>
    <Menu>

      <Menu.Item header>
        <Icon name="btc" size="large" color="teal" style={{ marginRight: '1.5em' }} />
        <NavLink to = "/">

        Flatiron Trader
        </NavLink>
       </Menu.Item>

    <Menu.Item>
      <NavLink  to = "/"
      style={{textDecoration: "none"}}>
      News
      </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink  to = "/charts"
      style={{textDecoration: "none"}}>
      Charts
      </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink  to = "/trade"
      style={{textDecoration: "none"}}>
      Trade
      </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink to = "/portfolio">
      Portfolio
      </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink to = "/leaderboard">
      Leaderboard
      </NavLink>
    </Menu.Item>

    <Menu.Menu position='right'>
        <Menu.Item>
          <Button onClick={handleSignOut} color="red">Sign Out</Button>
        </Menu.Item>
    </Menu.Menu>







      </Menu>
    </div>
  )


}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=>dispatch(signOut())
  }
}


export default connect(null, mapDispatchToProps)(NavBar)
