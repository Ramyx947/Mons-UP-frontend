import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'

const MenuDropDown = () => (
  <div>
    <Menu attached='top'>
      <Dropdown item icon='align justify' simple>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name='home' />
            <span className='text'>Home</span>

            <Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown.Item>
          
          <Dropdown.Item>All Trips</Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Header>My Account</Dropdown.Header>

          <Dropdown.Item>My Account</Dropdown.Item>

        </Dropdown.Menu>

      </Dropdown>

      <Menu.Menu position='right'>

      </Menu.Menu>
    </Menu>

  </div>
)

export default MenuDropDown
