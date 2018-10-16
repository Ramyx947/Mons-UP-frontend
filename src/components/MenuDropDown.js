import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { Route, Switch, Link } from 'react-router-dom'

const MenuDropDown = () => (
  <div>
    <Menu attached='top'>
      <Dropdown item icon='align justify' simple>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to={ '/'}>
            HomePage
            </Link>
            <Link to={'/signOut'}>
              HomePage
            </Link>
            
          <Dropdown.Item>All Trips</Dropdown.Item>
          <Dropdown.Divider />



          <Dropdown.Item>My Account</Dropdown.Item>

        </Dropdown.Menu>

      </Dropdown>

      <Menu.Menu position='right'>

      </Menu.Menu>
    </Menu>

  </div>
)

export default MenuDropDown
