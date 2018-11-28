//component to display the NavBar at top of application

import React from "react"
import {NavLink } from 'react-router-dom';
import {Menu, Icon, Button} from "semantic-ui-react"
import { connect } from 'react-redux'
import {signOut} from "../redux/actions/signOutAction"
import withAuth from "../hocs/withAuth"

const NavBar = (props) => {

  //user wants to sign out
  const handleSignOut = () => {
    props.signOut()
  }

  //generate different navbar options and links
  return(
    <Menu>

      {/* display the site name w/icon */}
      <Menu.Item header>
        <Icon name="btc" size="large" color="teal" style={{ marginRight: '1.5em' }} />
        <NavLink to = "/">
        Flatiron Trader
        </NavLink>
       </Menu.Item>

       {/* link to news page */}
      <Menu.Item>
        <NavLink  to = "/"
        style={{textDecoration: "none"}}>
        News
        </NavLink>
      </Menu.Item>

      {/* link to chart page */}
      <Menu.Item>
        <NavLink  to = "/charts"
        style={{textDecoration: "none"}}>
        Charts
        </NavLink>
      </Menu.Item>

      {/* link to trade page */}
      <Menu.Item>
        <NavLink  to = "/trade"
        style={{textDecoration: "none"}}>
        Trade
        </NavLink>
      </Menu.Item>

      {/* link to portfolio page */}
      <Menu.Item>
        <NavLink to = "/portfolio">
        Portfolio
        </NavLink>
      </Menu.Item>

      {/* link to leaderborad page */}
      <Menu.Item>
        <NavLink to = "/leaderboard">
        Leaderboard
        </NavLink>
      </Menu.Item>

      {/* sign out button */}
      <Menu.Menu position='right'>
          <Menu.Item>
            <Button size="tiny" onClick={handleSignOut} basic color="orange">
              <Icon name="sign out" />
            Sign Out
            </Button>
          </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=>dispatch(signOut())
  }
}


export default withAuth(connect(null, mapDispatchToProps)(NavBar))
