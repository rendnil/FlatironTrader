import React from "react"
import {NavLink } from 'react-router-dom';
import {Container, Header, Menu, Icon, Image, Button} from "semantic-ui-react"

const NavBar = (props) => {

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

    <Menu.Menu position='right'>
        <Menu.Item>
          <Button color="red">Sign Out</Button>
        </Menu.Item>
    </Menu.Menu>







      </Menu>
    </div>
  )


}


export default NavBar
