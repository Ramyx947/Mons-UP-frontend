import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { Route, Switch, Link } from 'react-router-dom'

const MenuDropDown = () => (
  <div>
    <Menu attached='top'>
      <Dropdown item icon='align justify' simple>
        <Dropdown.Menu>
            <Link to={ '/'}>
              HomePage
            </Link>
            <Link to={'/signOut'}>
              Sign Out
            </Link>
            <Link to={'/trips'}>
              Trips
            </Link>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position='right'>

      </Menu.Menu>
    </Menu>

  </div>
)

export default MenuDropDown
